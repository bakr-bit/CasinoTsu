/**
 * Batch Convert Roulette Script
 * Converts roulette guides from source markdown to MDX + TypeScript data files
 *
 * Usage:
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-roulette.ts
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-roulette.ts --skip-existing
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-roulette.ts --only=european,american
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-roulette.ts --dry-run
 */

import fs from 'fs/promises';
import path from 'path';

const SOURCE_DIR = path.join(
  process.cwd(),
  '..',
  'japanese',
  'NewContent',
  'roulette'
);
const MDX_OUTPUT_DIR = path.join(process.cwd(), 'content', 'mdx', 'roulette');
const DATA_OUTPUT_DIR = path.join(process.cwd(), 'content', 'data', 'roulette');
const LOG_FILE = path.join(DATA_OUTPUT_DIR, 'conversion-log.json');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

// Concurrency and rate limiting
const CONCURRENCY = 3;
const DELAY_BETWEEN_BATCHES = 2000; // ms

// MDX conversion prompt (roulette-specific)
const MDX_SYSTEM_PROMPT = `You are converting Japanese roulette guide content to MDX format for CasinoTsu, a Japanese online casino review site.

CRITICAL INSTRUCTIONS:
1. Output ONLY the MDX content - no code blocks, no \`\`\`mdx wrapper
2. Start directly with the YAML frontmatter (---) on line 1
3. The content MUST be in Japanese

FRONTMATTER FORMAT (REQUIRED):
---
slug: "{slug}"
title: "記事のタイトル"
description: "160文字以内のメタディスクリプション"
author: "rina-okabe"
date: "{date}"
lastUpdated: "{date}"
status: "active"
---

CONTENT CLEANING RULES:
1. Remove ALL images and image references (![...], <img>, etc.)
2. Remove ALL emojis - this is critical: 😎✨🎰🎲💰 etc. must be removed
3. Remove ALL kaomoji with special Unicode: (^^), (*´∀｀*), (´・ω・｀), etc.
4. Remove navigation elements, breadcrumbs, "related articles" sections
5. Remove author bios, "about the writer" sections
6. Remove any mascot character dialogues or personas
7. Remove any "JapaCasino" branding - replace with "CasinoTsu" where appropriate
8. Remove horizontal rules (---) that are used as section dividers
9. Keep the content factual and informative

ROULETTE-SPECIFIC INSTRUCTIONS:
- For bet type explanations, use bullet lists with clear formatting:
  - **ストレートアップ（シングルナンバー）**: 1つの数字に直接ベット、配当35:1
  - **スプリットベット**: 隣り合う2つの数字、配当17:1
- For variant comparisons (European vs American vs French), convert tables to prose or bullet lists
- For house edge/RTP information, use <InfoBox type="tip"> to highlight key stats
- For strategy explanations (マーチンゲール, etc.), use ### subsections
- Replace casino recommendation tables with <CasinoList toplistId="roulette-casinos" />

TABLE HANDLING:
- OMIT tables entirely - convert table content to bullet lists or prose
- For bet type tables: convert to structured bullet lists
- For comparison tables: convert to prose paragraphs

MDX COMPONENT USAGE:
1. <AffiliateButton casino="casino-slug" /> - for casino CTAs (use actual casino slugs)
2. <InfoBox type="tip|warning|info">content</InfoBox> - for important callouts
3. <CasinoList toplistId="roulette-casinos" /> - for casino recommendations

STRUCTURE:
- Keep all original headings (##, ###)
- Maintain the educational flow of the content
- Ensure proper Japanese formatting
- Use <InfoBox type="tip"> for house edge and RTP statistics
- Use <InfoBox type="warning"> for betting strategy limitations/warnings

FINAL CHECK - ARTICLE MUST BE COMPLETE:
- Article MUST have a proper ending (まとめ section or concluding paragraph)
- Do NOT truncate the article
- Include ALL main sections from the source
- The last section should provide a clear conclusion`;

// Data extraction prompt (roulette-specific)
const DATA_SYSTEM_PROMPT = `You are extracting structured data from a Japanese roulette guide article for CasinoTsu.

Extract the following information and return it as JSON matching this exact schema.

CATEGORY DETERMINATION:
- "variant" = specific roulette types (european, american, french, etc.)
- "strategy" = betting strategy guides (マーチンゲール, etc.)
- "rules" = general rules explanations
- "guide" = general guides, comparisons, overviews

WHEEL TYPE DETERMINATION:
- "european" = single zero (0), 37 pockets
- "american" = double zero (0, 00), 38 pockets
- "french" = single zero with special rules (La Partage, En Prison)
- "other" = special variants like FX roulette, EZ Dealer, etc.

For house edge and RTP:
- European: 2.7% house edge, 97.3% RTP
- American: 5.26% house edge, 94.74% RTP
- French (with La Partage): 1.35% house edge, 98.65% RTP

HIGHLIGHTS: Extract 3-5 key benefits/features in Japanese. Focus on:
- House edge/RTP advantages
- Special rules or features
- Player benefits
- Ease of play

DIFFICULTY:
- "beginner" = basic variants, simple rules
- "intermediate" = variants with special rules
- "advanced" = complex strategies, professional techniques

IMPORTANT:
- All text values (name, nameJa, highlights, meta) must be in Japanese where applicable
- recommendedCasinos should be an array of casino slugs (e.g., ["stake", "ramenbet"])
- If information is not available, use reasonable defaults or empty arrays`;

// JSON schema for Gemini structured output
const DATA_SCHEMA = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    name: { type: 'string' },
    nameJa: { type: 'string' },
    category: { type: 'string', enum: ['variant', 'strategy', 'rules', 'guide'] },
    wheelType: {
      type: 'string',
      enum: ['european', 'american', 'french', 'other'],
    },
    zeroPockets: { type: 'number' },
    houseEdge: { type: 'string' },
    rtp: { type: 'string' },
    specialRules: { type: 'array', items: { type: 'string' } },
    highlights: { type: 'array', items: { type: 'string' } },
    difficulty: {
      type: 'string',
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    relatedVariants: { type: 'array', items: { type: 'string' } },
    recommendedCasinos: { type: 'array', items: { type: 'string' } },
    meta: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
      },
      required: ['title', 'description'],
    },
  },
  required: [
    'slug',
    'name',
    'nameJa',
    'category',
    'highlights',
    'recommendedCasinos',
    'meta',
  ],
};

interface ConversionResult {
  slug: string;
  success: boolean;
  error?: string;
  mdxPath?: string;
  dataPath?: string;
}

interface ConversionLog {
  timestamp: string;
  total: number;
  successful: number;
  failed: number;
  results: ConversionResult[];
}

/**
 * Convert slug to valid TypeScript variable name
 */
function slugToVarName(slug: string): string {
  // Handle slugs that start with numbers
  let name = slug;
  if (/^\d/.test(name)) {
    name = '_' + name;
  }
  // Convert kebab-case to snake_case
  return name.replace(/-/g, '_');
}

/**
 * Read source markdown content
 */
async function readSourceContent(slug: string): Promise<string | null> {
  const sourcePath = path.join(SOURCE_DIR, slug, 'rewritten.md');
  try {
    return await fs.readFile(sourcePath, 'utf-8');
  } catch {
    console.error(`  Source file not found: ${sourcePath}`);
    return null;
  }
}

/**
 * Call Gemini API for MDX conversion
 */
async function convertToMDX(
  slug: string,
  sourceContent: string
): Promise<string | null> {
  const today = new Date().toISOString().split('T')[0];
  const prompt = `${MDX_SYSTEM_PROMPT}

SLUG: ${slug}
DATE: ${today}

SOURCE CONTENT:
${sourceContent}`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 65000,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`  Gemini API error: ${response.status} - ${errorText}`);
      return null;
    }

    const data = await response.json();
    let mdxContent =
      data.candidates?.[0]?.content?.parts?.[0]?.text || null;

    // Strip code block wrappers if present
    if (mdxContent) {
      mdxContent = mdxContent
        .replace(/^```mdx\n?/i, '')
        .replace(/^```\n?/, '')
        .replace(/\n?```$/i, '')
        .trim();
    }

    return mdxContent;
  } catch (error) {
    console.error(`  MDX conversion error:`, error);
    return null;
  }
}

/**
 * Call Gemini API for data extraction
 */
async function extractData(
  slug: string,
  sourceContent: string
): Promise<Record<string, unknown> | null> {
  const prompt = `${DATA_SYSTEM_PROMPT}

SLUG: ${slug}

SOURCE CONTENT:
${sourceContent}`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: 'application/json',
          responseSchema: DATA_SCHEMA,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`  Gemini API error: ${response.status} - ${errorText}`);
      return null;
    }

    const data = await response.json();
    const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!jsonText) {
      console.error(`  No data extracted`);
      return null;
    }

    return JSON.parse(jsonText);
  } catch (error) {
    console.error(`  Data extraction error:`, error);
    return null;
  }
}

/**
 * Generate TypeScript data file content
 */
function generateDataFileContent(
  data: Record<string, unknown>,
  slug: string
): string {
  const varName = slugToVarName(slug);

  return `import type { RouletteData } from './types';

export const ${varName}: RouletteData = ${JSON.stringify(data, null, 2)};
`;
}

/**
 * Process a single roulette guide
 */
async function processRoulette(slug: string): Promise<ConversionResult> {
  console.log(`\nProcessing: ${slug}`);

  // Read source content
  const sourceContent = await readSourceContent(slug);
  if (!sourceContent) {
    return { slug, success: false, error: 'Source file not found' };
  }

  // Convert to MDX
  console.log(`  Converting to MDX...`);
  const mdxContent = await convertToMDX(slug, sourceContent);
  if (!mdxContent) {
    return { slug, success: false, error: 'MDX conversion failed' };
  }

  // Extract data
  console.log(`  Extracting data...`);
  const extractedData = await extractData(slug, sourceContent);
  if (!extractedData) {
    return { slug, success: false, error: 'Data extraction failed' };
  }

  // Ensure slug is set
  extractedData.slug = slug;

  // Write MDX file
  const mdxPath = path.join(MDX_OUTPUT_DIR, `${slug}.mdx`);
  await fs.mkdir(MDX_OUTPUT_DIR, { recursive: true });
  await fs.writeFile(mdxPath, mdxContent);
  console.log(`  Written: ${mdxPath}`);

  // Write data file
  const dataPath = path.join(DATA_OUTPUT_DIR, `${slug}.ts`);
  await fs.mkdir(DATA_OUTPUT_DIR, { recursive: true });
  const dataFileContent = generateDataFileContent(extractedData, slug);
  await fs.writeFile(dataPath, dataFileContent);
  console.log(`  Written: ${dataPath}`);

  return { slug, success: true, mdxPath, dataPath };
}

/**
 * Get list of available roulette slugs from source
 */
async function getAvailableSlugs(): Promise<string[]> {
  const entries = await fs.readdir(SOURCE_DIR, { withFileTypes: true });
  const slugs: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      // Check if rewritten.md exists
      const rewrittenPath = path.join(
        SOURCE_DIR,
        entry.name,
        'rewritten.md'
      );
      try {
        await fs.access(rewrittenPath);
        slugs.push(entry.name);
      } catch {
        // Skip folders without rewritten.md
      }
    }
  }

  return slugs.sort();
}

/**
 * Check if MDX file already exists
 */
async function mdxExists(slug: string): Promise<boolean> {
  try {
    await fs.access(path.join(MDX_OUTPUT_DIR, `${slug}.mdx`));
    return true;
  } catch {
    return false;
  }
}

/**
 * Process slugs in batches with concurrency
 */
async function processBatch(
  slugs: string[],
  concurrency: number
): Promise<ConversionResult[]> {
  const results: ConversionResult[] = [];

  for (let i = 0; i < slugs.length; i += concurrency) {
    const batch = slugs.slice(i, i + concurrency);
    console.log(
      `\n--- Batch ${Math.floor(i / concurrency) + 1}/${Math.ceil(slugs.length / concurrency)} ---`
    );

    const batchResults = await Promise.all(batch.map(processRoulette));
    results.push(...batchResults);

    // Delay between batches to avoid rate limiting
    if (i + concurrency < slugs.length) {
      console.log(`\nWaiting ${DELAY_BETWEEN_BATCHES}ms before next batch...`);
      await new Promise((resolve) => setTimeout(resolve, DELAY_BETWEEN_BATCHES));
    }
  }

  return results;
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log('=== Batch Roulette Conversion ===\n');

  if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY environment variable is required');
    process.exit(1);
  }

  // Parse command line arguments
  const args = process.argv.slice(2);
  const skipExisting = args.includes('--skip-existing');
  const dryRun = args.includes('--dry-run');
  const onlyArg = args.find((a) => a.startsWith('--only='));
  const onlySlugs = onlyArg
    ? onlyArg.replace('--only=', '').split(',')
    : null;

  // Get available slugs
  let slugs = await getAvailableSlugs();
  console.log(`Found ${slugs.length} roulette guides in source\n`);

  // Filter by --only if specified
  if (onlySlugs) {
    slugs = slugs.filter((s) => onlySlugs.includes(s));
    console.log(`Filtered to ${slugs.length} specified slugs\n`);
  }

  // Filter out existing if --skip-existing
  if (skipExisting) {
    const existingChecks = await Promise.all(
      slugs.map(async (s) => ({ slug: s, exists: await mdxExists(s) }))
    );
    const existingCount = existingChecks.filter((c) => c.exists).length;
    slugs = existingChecks.filter((c) => !c.exists).map((c) => c.slug);
    console.log(
      `Skipping ${existingCount} existing, ${slugs.length} remaining\n`
    );
  }

  if (slugs.length === 0) {
    console.log('No roulette guides to process');
    return;
  }

  console.log(`Roulette guides to process: ${slugs.join(', ')}\n`);

  if (dryRun) {
    console.log('Dry run - no files will be written');
    return;
  }

  // Process all slugs
  const results = await processBatch(slugs, CONCURRENCY);

  // Generate summary
  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);

  console.log('\n=== Conversion Summary ===');
  console.log(`Total: ${results.length}`);
  console.log(`Successful: ${successful.length}`);
  console.log(`Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log('\nFailed conversions:');
    failed.forEach((r) => console.log(`  - ${r.slug}: ${r.error}`));
  }

  // Write conversion log
  const log: ConversionLog = {
    timestamp: new Date().toISOString(),
    total: results.length,
    successful: successful.length,
    failed: failed.length,
    results,
  };

  await fs.writeFile(LOG_FILE, JSON.stringify(log, null, 2));
  console.log(`\nConversion log written to: ${LOG_FILE}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
