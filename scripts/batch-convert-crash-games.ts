/**
 * Batch Convert Crash Games Script
 * Converts crash game guides from source markdown to MDX + TypeScript data files
 *
 * Usage:
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-crash-games.ts
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-crash-games.ts --skip-existing
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-crash-games.ts --only=aviator,spaceman
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-crash-games.ts --dry-run
 */

import fs from 'fs/promises';
import path from 'path';

const SOURCE_DIR = path.join(
  process.cwd(),
  '..',
  'japanese',
  'NewContent',
  'crash-games'
);
const MDX_OUTPUT_DIR = path.join(process.cwd(), 'content', 'mdx', 'crash-games');
const DATA_OUTPUT_DIR = path.join(process.cwd(), 'content', 'data', 'crash-games');
const LOG_FILE = path.join(DATA_OUTPUT_DIR, 'conversion-log.json');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

// Concurrency and rate limiting
const CONCURRENCY = 3;
const DELAY_BETWEEN_BATCHES = 2000; // ms

// MDX conversion prompt (crash-game-specific)
const MDX_SYSTEM_PROMPT = `You are converting Japanese crash game guide content to MDX format for CasinoTsu, a Japanese online casino review site.

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
2. Remove ALL emojis - this is critical: 😎✨🎰🎲💰🚀✈️ etc. must be removed
3. Remove ALL kaomoji with special Unicode: (^^), (*´∀｀*), (´・ω・｀), etc.
4. Remove navigation elements, breadcrumbs, "related articles" sections
5. Remove author bios, "about the writer" sections
6. Remove any mascot character dialogues or personas
7. Remove any "JapaCasino" branding - replace with "CasinoTsu" where appropriate
8. Remove horizontal rules (---) that are used as section dividers
9. Keep the content factual and informative

CRASH GAME-SPECIFIC INSTRUCTIONS:
- Crash games are multiplier-based gambling games where a line/plane/rocket rises with increasing multiplier until it "crashes"
- Players must cash out before the crash to win their bet × multiplier
- Key mechanics to explain clearly:
  - **マルチプライヤー（倍率）**: The multiplier that increases until crash
  - **キャッシュアウト**: Cashing out before the crash
  - **オートキャッシュアウト**: Auto cash-out feature at preset multiplier
  - **プロバブリーフェア**: Provably fair verification system
- For strategy explanations, use bullet lists:
  - **低リスク戦略**: 1.5x-2xで早めにキャッシュアウト
  - **中リスク戦略**: 3x-5xを目標にする
  - **ハイリスク戦略**: 10x以上を狙う（高リスク）
- For game features, convert tables to structured bullet lists
- Use <InfoBox type="warning"> for gambling risk warnings (ギャンブル依存症など)
- Use <InfoBox type="tip"> for RTP/house edge information
- Replace casino recommendation tables with <CasinoList toplistId="crash-games" />
- Mention providers when relevant (Spribe for Aviator, etc.)

TABLE HANDLING:
- OMIT tables entirely - convert table content to bullet lists or prose
- For multiplier examples: convert to bullet lists
- For comparison tables: convert to prose paragraphs

MDX COMPONENT USAGE:
1. <AffiliateButton casino="casino-slug" /> - for casino CTAs (use actual casino slugs like "stake", "bc-game")
2. <InfoBox type="tip|warning|info">content</InfoBox> - for important callouts
3. <CasinoList toplistId="crash-games" /> - for casino recommendations

STRUCTURE:
- Keep all original headings (##, ###)
- Maintain the educational flow of the content
- Ensure proper Japanese formatting
- Use <InfoBox type="tip"> for RTP and strategy tips
- Use <InfoBox type="warning"> for risk warnings and responsible gambling reminders
- Use <InfoBox type="info"> for game mechanics explanations

FINAL CHECK - ARTICLE MUST BE COMPLETE:
- Article MUST have a proper ending (まとめ section or concluding paragraph)
- Do NOT truncate the article
- Include ALL main sections from the source
- The last section should provide a clear conclusion`;

// Data extraction prompt (crash-game-specific)
const DATA_SYSTEM_PROMPT = `You are extracting structured data from a Japanese crash game guide article for CasinoTsu.

Extract the following information and return it as JSON matching this exact schema.

CATEGORY DETERMINATION:
- "guide" = comprehensive overview of crash games or a specific game
- "variant" = specific crash game variant (Aviator, Spaceman, etc.)
- "strategy" = strategy and tips guides
- "review" = game review

PROVIDER DETECTION:
Common crash game providers:
- Spribe (スプライブ) - Aviator
- Smartsoft Gaming (スマートソフトゲーミング) - JetX
- BGaming (ビーゲーミング) - Space XY
- Turbo Games - various crash games
- Upgaming - Aviator-style games
- 1x2 Gaming - other crash variants

VOLATILITY:
- "low" = conservative games, frequent small wins
- "medium" = balanced risk/reward
- "high" = high variance, less frequent but larger wins
- "very-high" = extreme variance, very high multipliers possible

HIGHLIGHTS: Extract 3-5 key benefits/features in Japanese. Focus on:
- Maximum multiplier potential (最大倍率)
- RTP/house edge advantages
- Provably fair verification (プロバブリーフェア)
- Auto cash-out features (オートキャッシュアウト)
- Mobile compatibility
- Social/multiplayer features

DIFFICULTY:
- "beginner" = simple to understand, good for new players
- "intermediate" = requires some strategy knowledge
- "advanced" = complex strategies, high risk

SPECIAL FEATURES examples:
- "プロバブリーフェア" (provably fair)
- "オートキャッシュアウト" (auto cash-out)
- "マルチベット" (multiple bets)
- "ライブ統計" (live statistics)
- "チャット機能" (chat feature)
- "履歴確認" (history verification)

IMPORTANT:
- All text values (name, nameJa, highlights, meta) must be in Japanese where applicable
- recommendedCasinos should be an array of casino slugs (e.g., ["stake", "bc-game", "roobet"])
- If information is not available, use reasonable defaults or empty arrays
- For RTP, typical crash games are around 97% (e.g., Aviator is 97%)
- maxMultiplier should be a string like "100x", "1000x", etc.`;

// JSON schema for Gemini structured output
const DATA_SCHEMA = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    name: { type: 'string' },
    nameJa: { type: 'string' },
    category: {
      type: 'string',
      enum: ['guide', 'variant', 'strategy', 'review'],
    },
    provider: { type: 'string' },
    providerJa: { type: 'string' },
    maxMultiplier: { type: 'string' },
    minBet: { type: 'string' },
    maxBet: { type: 'string' },
    autoCashout: { type: 'boolean' },
    provablyFair: { type: 'boolean' },
    rtp: { type: 'string' },
    houseEdge: { type: 'string' },
    volatility: {
      type: 'string',
      enum: ['low', 'medium', 'high', 'very-high'],
    },
    specialFeatures: { type: 'array', items: { type: 'string' } },
    highlights: { type: 'array', items: { type: 'string' } },
    difficulty: {
      type: 'string',
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    relatedGames: { type: 'array', items: { type: 'string' } },
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
  // Convert kebab-case to camelCase
  return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
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

  return `import type { CrashGameData } from './types';

export const ${varName}: CrashGameData = ${JSON.stringify(data, null, 2)};
`;
}

/**
 * Process a single crash game guide
 */
async function processCrashGame(slug: string): Promise<ConversionResult> {
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
 * Get list of available crash game slugs from source
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

    const batchResults = await Promise.all(batch.map(processCrashGame));
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
  console.log('=== Batch Crash Games Conversion ===\n');

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
  console.log(`Found ${slugs.length} crash game guides in source\n`);

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
    console.log('No crash game guides to process');
    return;
  }

  console.log(`Crash game guides to process: ${slugs.join(', ')}\n`);

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
