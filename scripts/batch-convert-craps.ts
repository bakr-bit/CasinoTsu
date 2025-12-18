/**
 * Batch Convert Craps Script
 * Converts craps guides from old TSX format to MDX format using Gemini API
 *
 * Source: /Users/simon/Sites/japanese/japanese/content/data/craps/*.tsx
 * Output: MDX + TypeScript data files
 *
 * Usage:
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-craps.ts
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-craps.ts --skip-existing
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-craps.ts --only=rules,strategy
 *   npx tsx scripts/batch-convert-craps.ts --dry-run
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Paths - source is old TSX content
const SOURCE_DIR = '/Users/simon/Sites/japanese/japanese/content/data/craps';
const MDX_OUTPUT_DIR = '/Users/simon/Sites/japanese/japanese-new/content/mdx/craps';
const DATA_OUTPUT_DIR = '/Users/simon/Sites/japanese/japanese-new/content/data/craps';

// Gemini API config
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// Processing config
const CONCURRENCY = 2;
const DELAY_BETWEEN_BATCHES = 3000;

// Schema for structured data extraction
const CRAPS_SCHEMA = {
  type: 'OBJECT',
  properties: {
    name: { type: 'STRING', description: 'English name of the craps topic' },
    nameJa: { type: 'STRING', description: 'Japanese name' },
    category: {
      type: 'STRING',
      description: 'Content category',
      enum: ['overview', 'rules', 'strategy', 'variants'],
    },
    highlights: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: '3-5 key features/topics covered in Japanese',
    },
    difficulty: {
      type: 'STRING',
      description: 'Difficulty level',
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    relatedTopics: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'Slugs of related craps topics',
    },
    recommendedCasinos: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'Casino slugs mentioned or recommended',
    },
    metaTitle: { type: 'STRING', description: 'SEO title in Japanese (50-60 chars)' },
    metaDescription: { type: 'STRING', description: 'SEO description in Japanese (150-160 chars)' },
  },
  required: [
    'name',
    'nameJa',
    'category',
    'highlights',
    'recommendedCasinos',
    'metaTitle',
    'metaDescription',
  ],
};

// MDX conversion prompt
const MDX_SYSTEM_PROMPT = `You are converting Japanese craps guide content from TSX format to MDX format for a casino information site called CasinoTsu.

The source content is embedded in TypeScript objects with properties like:
- hero: { title, description, lastUpdated }
- introduction: markdown string with embedded <Link> components
- sections: array of { id, heading, content }
- faq: array of { question, answer }
- etc.

IMPORTANT RULES:
1. Output ONLY valid MDX - no code block wrappers
2. Keep all Japanese text, this is a Japanese language site
3. Convert <Link href="/path"> to markdown links [text](/path)
4. Remove all images (![...] or <img ...>)
5. Remove emoji characters
6. OMIT any markdown tables completely - convert them to bullet lists or descriptive prose
7. Remove malformed HTML tags like <a href="..." target=...> that aren't properly closed
8. Use first person plural for the site voice

FRONTMATTER FORMAT:
---
slug: "{slug}"
title: "Article title from hero.title in Japanese"
description: "Brief description from hero.description"
author: "casinotsu"
lastUpdated: "${new Date().toISOString().split('T')[0]}"
status: "active"
---

MDX COMPONENTS TO USE:
- <InfoBox type="tip|warning|info" title="Title">Content</InfoBox> - For important tips
- <AffiliateButton casino="casino-slug" /> - For casino CTAs
- <CasinoList toplistId="best-casinos" limit={5} /> - To show recommended casinos

CONTENT STRUCTURE:
1. Start with an engaging intro paragraph from the introduction field (no heading before it)
2. Use ## for main sections (from sections array), ### for subsections
3. Convert sections content to clean markdown
4. Add FAQ section at the end using ## よくある質問
5. End with a まとめ section and <CasinoList toplistId="best-casinos" /> component

CRITICAL: Extract and merge ALL content from hero, introduction, sections, houseEdgeTable, summary, and faq fields. The article MUST be complete with proper ending.`;

// Data extraction prompt
const DATA_SYSTEM_PROMPT = `Extract structured data from this Japanese craps guide article.

CATEGORY DETERMINATION:
- "overview": Main craps introduction, what is craps content
- "rules": Rule explanations, betting rules, game flow
- "strategy": Playing strategies, betting strategies
- "variants": Different types of craps games

CONTENT EXTRACTION:
1. Extract topic name in English (e.g., "Craps Rules", "Craps Strategy") and Japanese
2. Extract 3-5 key highlights/features as Japanese bullet points
3. Determine difficulty level based on content complexity
4. List related craps topic slugs (e.g., "rules", "strategy", "variants")
5. List recommended casino slugs from the content

DIFFICULTY GUIDELINES:
- beginner: Basic introduction, what is craps
- intermediate: Rules, betting types, basic strategy
- advanced: Complex strategies, odds optimization

SEO METADATA:
- metaTitle: 50-60 character Japanese SEO title
- metaDescription: 150-160 character Japanese meta description

Return valid JSON matching the schema.`;

interface ConversionResult {
  slug: string;
  success: boolean;
  error?: string;
  mdxPath?: string;
  dataPath?: string;
}

async function getSourceFiles(): Promise<string[]> {
  const entries = await fs.readdir(SOURCE_DIR);
  return entries
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => f.replace('.tsx', ''))
    .sort();
}

async function readSourceContent(slug: string): Promise<string> {
  const filePath = path.join(SOURCE_DIR, `${slug}.tsx`);
  return fs.readFile(filePath, 'utf-8');
}

async function convertToMDX(slug: string, content: string): Promise<string> {
  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `${MDX_SYSTEM_PROMPT}\n\n---\n\nConvert the following TSX content to MDX format. The slug is "${slug}".\n\nSOURCE TSX CONTENT:\n${content}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 65000,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  let mdx = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

  // Strip code block wrappers if present
  mdx = mdx.replace(/^```mdx?\n?/i, '').replace(/\n?```$/i, '');

  return mdx;
}

async function extractData(
  slug: string,
  content: string
): Promise<Record<string, unknown>> {
  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `${DATA_SYSTEM_PROMPT}\n\n---\n\nExtract data from this craps guide. The slug is "${slug}".\n\nCONTENT:\n${content}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json',
        responseSchema: CRAPS_SCHEMA,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
  return JSON.parse(jsonText);
}

function generateDataFile(slug: string, data: Record<string, unknown>): string {
  const varName = slug.replace(/-/g, '_').replace(/^\d/, '_$&');

  return `import type { CrapsData } from './types';

export const ${varName}: CrapsData = {
  slug: '${slug}',
  name: ${JSON.stringify(data.name || slug)},
  nameJa: ${JSON.stringify(data.nameJa || slug)},

  category: ${JSON.stringify(data.category || 'overview')},

  highlights: ${JSON.stringify(data.highlights || [], null, 2).replace(/\n/g, '\n  ')},

  ${data.difficulty ? `difficulty: ${JSON.stringify(data.difficulty)},` : '// difficulty: undefined,'}

  ${data.relatedTopics && (data.relatedTopics as string[]).length > 0 ? `relatedTopics: ${JSON.stringify(data.relatedTopics)},` : '// relatedTopics: [],'}

  recommendedCasinos: ${JSON.stringify(data.recommendedCasinos || [], null, 2).replace(/\n/g, '\n  ')},

  meta: {
    title: ${JSON.stringify(data.metaTitle || `${data.nameJa || slug} | CasinoTsu`)},
    description: ${JSON.stringify(data.metaDescription || '')},
  },
};
`;
}

async function processSlug(slug: string): Promise<ConversionResult> {
  try {
    console.log(`  Processing: ${slug}`);

    // Read source content
    const content = await readSourceContent(slug);

    // Convert to MDX and extract data in parallel
    const [mdx, data] = await Promise.all([
      convertToMDX(slug, content),
      extractData(slug, content),
    ]);

    // Write MDX file
    const mdxPath = path.join(MDX_OUTPUT_DIR, `${slug}.mdx`);
    await fs.writeFile(mdxPath, mdx);

    // Write data file
    const dataPath = path.join(DATA_OUTPUT_DIR, `${slug}.ts`);
    const dataContent = generateDataFile(slug, data);
    await fs.writeFile(dataPath, dataContent);

    console.log(`  ✅ ${slug}`);
    return { slug, success: true, mdxPath, dataPath };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`  ❌ ${slug}: ${message}`);
    return { slug, success: false, error: message };
  }
}

async function processBatch(slugs: string[]): Promise<ConversionResult[]> {
  return Promise.all(slugs.map((slug) => processSlug(slug)));
}

async function main() {
  const args = process.argv.slice(2);
  const skipExisting = args.includes('--skip-existing');
  const dryRun = args.includes('--dry-run');
  const onlyArg = args.find((a) => a.startsWith('--only='));
  const onlyList = onlyArg ? onlyArg.split('=')[1].split(',') : null;

  if (!GEMINI_API_KEY && !dryRun) {
    console.error('Error: GEMINI_API_KEY environment variable not set');
    process.exit(1);
  }

  // Ensure output directories exist
  await fs.mkdir(MDX_OUTPUT_DIR, { recursive: true });
  await fs.mkdir(DATA_OUTPUT_DIR, { recursive: true });

  // Get all source files
  let slugs = await getSourceFiles();
  console.log(`Found ${slugs.length} craps guides in source directory\n`);

  if (slugs.length === 0) {
    console.log('No craps guides found.');
    return;
  }

  // Filter by --only if specified
  if (onlyList) {
    slugs = slugs.filter((s) => onlyList.includes(s));
    console.log(`Filtered to ${slugs.length} craps guides (--only)\n`);
  }

  // Skip existing if requested
  if (skipExisting) {
    const existingMdx = await fs.readdir(MDX_OUTPUT_DIR).catch(() => []);
    const existingSlugs = new Set(
      existingMdx.filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', ''))
    );
    const before = slugs.length;
    slugs = slugs.filter((s) => !existingSlugs.has(s));
    console.log(`Skipping ${before - slugs.length} existing, ${slugs.length} remaining\n`);
  }

  if (dryRun) {
    console.log('Dry run - would process:');
    slugs.forEach((s) => console.log(`  - ${s}`));
    return;
  }

  if (slugs.length === 0) {
    console.log('No craps guides to process.');
    return;
  }

  // Process in batches
  const results: ConversionResult[] = [];
  for (let i = 0; i < slugs.length; i += CONCURRENCY) {
    const batch = slugs.slice(i, i + CONCURRENCY);
    console.log(`\nBatch ${Math.floor(i / CONCURRENCY) + 1}/${Math.ceil(slugs.length / CONCURRENCY)}:`);

    const batchResults = await processBatch(batch);
    results.push(...batchResults);

    // Delay between batches
    if (i + CONCURRENCY < slugs.length) {
      await new Promise((r) => setTimeout(r, DELAY_BETWEEN_BATCHES));
    }
  }

  // Summary
  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);

  console.log('\n========================================');
  console.log(`Conversion complete!`);
  console.log(`  ✅ Successful: ${successful.length}`);
  console.log(`  ❌ Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log('\nFailed conversions:');
    failed.forEach((r) => console.log(`  - ${r.slug}: ${r.error}`));
  }

  // Write log file
  const logPath = path.join(DATA_OUTPUT_DIR, 'conversion-log.json');
  await fs.writeFile(
    logPath,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        total: results.length,
        successful: successful.length,
        failed: failed.length,
        results,
      },
      null,
      2
    )
  );
  console.log(`\nLog written to: ${logPath}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
