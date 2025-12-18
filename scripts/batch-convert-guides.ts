/**
 * Batch Convert Guides Script
 * Converts guide articles from old TSX format to MDX format using Gemini API
 *
 * Source: /Users/simon/Sites/japanese/japanese/content/data/guides/*.tsx
 * Output: MDX + TypeScript data files
 *
 * Usage:
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-guides.ts
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-guides.ts --skip-existing
 *   npx tsx scripts/batch-convert-guides.ts --dry-run
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Paths
const SOURCE_DIR = '/Users/simon/Sites/japanese/japanese/content/data/guides';
const MDX_OUTPUT_DIR = '/Users/simon/Sites/japanese/japanese-new/content/mdx/guides';
const DATA_OUTPUT_DIR = '/Users/simon/Sites/japanese/japanese-new/content/data/guides';

// Gemini API config
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// Processing config
const CONCURRENCY = 2;
const DELAY_BETWEEN_BATCHES = 3000;

// Schema for structured data extraction
const GUIDES_SCHEMA = {
  type: 'OBJECT',
  properties: {
    name: { type: 'STRING', description: 'English name of the guide' },
    nameJa: { type: 'STRING', description: 'Japanese name of the guide' },
    category: {
      type: 'STRING',
      description: 'Guide category',
      enum: ['beginner', 'strategy', 'poker', 'casino', 'bonus', 'safety', 'games'],
    },
    targetAudience: {
      type: 'STRING',
      description: 'Target audience level',
      enum: ['beginner', 'intermediate', 'advanced', 'all'],
    },
    highlights: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: '3-5 key topics covered in Japanese',
    },
    relatedGuides: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'Slugs of related guides',
    },
    recommendedCasinos: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'Casino slugs mentioned',
    },
    metaTitle: { type: 'STRING', description: 'SEO title in Japanese (50-60 chars)' },
    metaDescription: { type: 'STRING', description: 'SEO description in Japanese (150-160 chars)' },
  },
  required: [
    'name',
    'nameJa',
    'category',
    'highlights',
    'metaTitle',
    'metaDescription',
  ],
};

// MDX conversion prompt
const MDX_SYSTEM_PROMPT = `You are converting Japanese casino guide content from TSX format to MDX format for CasinoTsu.

The source content is embedded in TypeScript objects with properties like:
- hero: { title, description, featureImage, lastUpdated }
- introduction: markdown string with embedded <Link> components
- sections: array of { id, heading, content }
- featuredCasinos: array of recommended casinos
- faq: array of { question, answer }

IMPORTANT RULES:
1. Output ONLY valid MDX - no code block wrappers
2. Keep all Japanese text
3. Replace "ジャパカジ" or "JapaCasino" with "CasinoTsu"
4. Convert <Link href="/path"> to markdown links [text](/path)
5. Remove all images and external <a> tags
6. Remove emoji characters
7. OMIT any markdown tables - convert to bullet lists or prose
8. Clean up malformed HTML

FRONTMATTER FORMAT:
---
slug: "{slug}"
title: "Article title in Japanese"
description: "Brief description"
author: "casinotsu"
lastUpdated: "${new Date().toISOString().split('T')[0]}"
status: "active"
---

MDX COMPONENTS TO USE:
- <InfoBox type="tip|warning|info" title="Title">Content</InfoBox>
- <CasinoList toplistId="best-casinos" limit={5} />
- <AffiliateButton casino="casino-slug" />

CONTENT STRUCTURE:
1. Start with engaging intro (no heading)
2. Use ## for main sections (numbered if it's a step guide)
3. Use ### for subsections
4. Include all section content from the sections array
5. Add <InfoBox type="tip"> for important tips
6. FAQ section (## よくある質問) if present
7. Summary section (## まとめ)
8. End with <CasinoList toplistId="best-casinos" limit={5} />

CRITICAL: Extract ALL content from introduction, sections, and faq. The article MUST be complete with proper ending.`;

// Data extraction prompt
const DATA_SYSTEM_PROMPT = `Extract structured data from this Japanese casino guide article.

CATEGORY DETERMINATION:
- "beginner": Beginner guides, getting started (初心者ガイド)
- "strategy": Strategy guides, winning tips (戦略、攻略)
- "poker": Poker-specific guides (ポーカー)
- "casino": General casino guides, game explanations (カジノ)
- "bonus": Bonus guides, wagering requirements (ボーナス、賭け条件)
- "safety": Security, responsible gambling (安全性、責任あるギャンブル)
- "games": Specific game guides (スロット、ルーレット、麻雀、パチンコ等)

TARGET AUDIENCE:
- "beginner": For newcomers
- "intermediate": Some experience needed
- "advanced": For experienced players
- "all": Applicable to all levels

EXTRACTION:
1. Extract guide name in English and Japanese
2. Determine category and target audience
3. Extract 3-5 key highlights as Japanese bullet points
4. List related guide slugs mentioned
5. List recommended casino slugs from featuredCasinos
6. Generate SEO metadata

SLUG CLEANING:
The source files have long names like "www.japanesecasino.com_guides_beginner.tsx"
Extract just the meaningful slug part: "beginner"

Return valid JSON matching the schema.`;

interface ConversionResult {
  slug: string;
  success: boolean;
  error?: string;
  mdxPath?: string;
  dataPath?: string;
}

function cleanSlug(filename: string): string {
  let slug = filename.replace('.tsx', '');
  slug = slug.replace(/^www\.japanesecasino\.com_guides_/, '');
  if (slug === 'www.japanesecasino.com_guides') {
    slug = 'guides';
  }
  return slug;
}

async function getSourceFiles(): Promise<{ filename: string; slug: string }[]> {
  const entries = await fs.readdir(SOURCE_DIR);
  return entries
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => ({
      filename: f,
      slug: cleanSlug(f),
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

async function readSourceContent(filename: string): Promise<string> {
  const filePath = path.join(SOURCE_DIR, filename);
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
              text: `${DATA_SYSTEM_PROMPT}\n\n---\n\nExtract data from this guide article. The slug is "${slug}".\n\nCONTENT:\n${content}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json',
        responseSchema: GUIDES_SCHEMA,
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

  return `import type { GuideData } from './types';

export const ${varName}: GuideData = {
  slug: '${slug}',
  name: ${JSON.stringify(data.name || slug)},
  nameJa: ${JSON.stringify(data.nameJa || slug)},

  category: ${JSON.stringify(data.category || 'casino')},
  ${data.targetAudience ? `targetAudience: ${JSON.stringify(data.targetAudience)},` : '// targetAudience: undefined,'}

  highlights: ${JSON.stringify(data.highlights || [], null, 2).replace(/\n/g, '\n  ')},

  ${data.relatedGuides && (data.relatedGuides as string[]).length > 0 ? `relatedGuides: ${JSON.stringify(data.relatedGuides)},` : '// relatedGuides: [],'}
  ${data.recommendedCasinos && (data.recommendedCasinos as string[]).length > 0 ? `recommendedCasinos: ${JSON.stringify(data.recommendedCasinos)},` : '// recommendedCasinos: [],'}

  meta: {
    title: ${JSON.stringify(data.metaTitle || `${data.nameJa || slug} | CasinoTsu`)},
    description: ${JSON.stringify(data.metaDescription || '')},
  },
};
`;
}

async function processFile(file: { filename: string; slug: string }): Promise<ConversionResult> {
  try {
    console.log(`  Processing: ${file.slug} (${file.filename})`);
    const content = await readSourceContent(file.filename);

    const [mdx, data] = await Promise.all([
      convertToMDX(file.slug, content),
      extractData(file.slug, content),
    ]);

    const mdxPath = path.join(MDX_OUTPUT_DIR, `${file.slug}.mdx`);
    await fs.writeFile(mdxPath, mdx);

    const dataPath = path.join(DATA_OUTPUT_DIR, `${file.slug}.ts`);
    const dataContent = generateDataFile(file.slug, data);
    await fs.writeFile(dataPath, dataContent);

    console.log(`  ✅ ${file.slug}`);
    return { slug: file.slug, success: true, mdxPath, dataPath };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`  ❌ ${file.slug}: ${message}`);
    return { slug: file.slug, success: false, error: message };
  }
}

async function processBatch(files: { filename: string; slug: string }[]): Promise<ConversionResult[]> {
  return Promise.all(files.map((file) => processFile(file)));
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

  await fs.mkdir(MDX_OUTPUT_DIR, { recursive: true });
  await fs.mkdir(DATA_OUTPUT_DIR, { recursive: true });

  let files = await getSourceFiles();
  console.log(`Found ${files.length} guides in source directory\n`);

  if (files.length === 0) {
    console.log('No guides found.');
    return;
  }

  if (onlyList) {
    files = files.filter((f) => onlyList.includes(f.slug));
    console.log(`Filtered to ${files.length} guides (--only)\n`);
  }

  if (skipExisting) {
    const existingMdx = await fs.readdir(MDX_OUTPUT_DIR).catch(() => []);
    const existingSlugs = new Set(
      existingMdx.filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', ''))
    );
    const before = files.length;
    files = files.filter((f) => !existingSlugs.has(f.slug));
    console.log(`Skipping ${before - files.length} existing, ${files.length} remaining\n`);
  }

  if (dryRun) {
    console.log('Dry run - would process:');
    files.forEach((f) => console.log(`  - ${f.slug} (${f.filename})`));
    return;
  }

  if (files.length === 0) {
    console.log('No guides to process.');
    return;
  }

  const results: ConversionResult[] = [];
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY);
    console.log(`\nBatch ${Math.floor(i / CONCURRENCY) + 1}/${Math.ceil(files.length / CONCURRENCY)}:`);

    const batchResults = await processBatch(batch);
    results.push(...batchResults);

    if (i + CONCURRENCY < files.length) {
      await new Promise((r) => setTimeout(r, DELAY_BETWEEN_BATCHES));
    }
  }

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
