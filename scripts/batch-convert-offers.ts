/**
 * Batch Convert Offers Script
 * Converts offer/promotion content from old TSX format to MDX format using Gemini API
 *
 * Source: /Users/simon/Sites/japanese/japanese/content/data/offers/*.tsx
 * Output: MDX + TypeScript data files
 *
 * Usage:
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-offers.ts
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-offers.ts --skip-existing
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-offers.ts --only=ramenbet-exclusive,bons-exclusive
 *   npx tsx scripts/batch-convert-offers.ts --dry-run
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Paths
const SOURCE_DIR = '/Users/simon/Sites/japanese/japanese/content/data/offers';
const MDX_OUTPUT_DIR = '/Users/simon/Sites/japanese/japanese-new/content/mdx/offers';
const DATA_OUTPUT_DIR = '/Users/simon/Sites/japanese/japanese-new/content/data/offers';

// Gemini API config
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// Processing config
const CONCURRENCY = 2;
const DELAY_BETWEEN_BATCHES = 3000;

// Schema for structured data extraction
const OFFERS_SCHEMA = {
  type: 'OBJECT',
  properties: {
    name: { type: 'STRING', description: 'English name of the offer' },
    nameJa: { type: 'STRING', description: 'Japanese name of the offer' },
    casinoSlug: { type: 'STRING', description: 'Slug of the casino this offer is for' },
    offerType: {
      type: 'STRING',
      description: 'Type of offer',
      enum: ['no-deposit', 'welcome', 'exclusive', 'seasonal', 'reload'],
    },
    bonusAmount: { type: 'STRING', description: 'Bonus amount (e.g., "¥3,000", "200%")' },
    wagering: { type: 'STRING', description: 'Wagering requirement (e.g., "5倍", "30x")' },
    bonusCode: { type: 'STRING', description: 'Bonus code if required' },
    validity: { type: 'STRING', description: 'Validity period (e.g., "30日")' },
    highlights: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: '3-5 key highlights of the offer in Japanese',
    },
    metaTitle: { type: 'STRING', description: 'SEO title in Japanese (50-60 chars)' },
    metaDescription: { type: 'STRING', description: 'SEO description in Japanese (150-160 chars)' },
  },
  required: [
    'name',
    'nameJa',
    'casinoSlug',
    'offerType',
    'highlights',
    'metaTitle',
    'metaDescription',
  ],
};

// MDX conversion prompt
const MDX_SYSTEM_PROMPT = `You are converting Japanese casino offer/promotion content from TSX format to MDX format for CasinoTsu.

The source content is embedded in TypeScript objects with properties like:
- hero: { title, description, casino, casinoSlug, promotionalPeriod }
- offerHighlight: { bonusAmount, bonusType, wagering, validity, maxWinnings, bonusCode }
- intro: array of paragraph strings
- claimSteps: array of { stepNumber, title, description, bonusCode, note }
- sections: array of { id, heading, content }
- faq: array of { question, answer }

IMPORTANT RULES:
1. Output ONLY valid MDX - no code block wrappers
2. Keep all Japanese text
3. Replace "ジャパカジ" or "JapaCasino" with "CasinoTsu"
4. Remove all images and mascot dialogues (カジ子, Slotaro, Bonabo, etc.)
5. Remove emoji characters
6. OMIT any markdown tables - convert to bullet lists
7. Remove malformed HTML tags

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
- <AffiliateButton casino="{casinoSlug}" text="今すぐボーナスを獲得" />

CONTENT STRUCTURE:
1. Start with engaging intro about the offer (no heading)
2. Show offer highlights in a clear format (bonus amount, wagering, etc.)
3. Step-by-step guide on how to claim (## 獲得方法)
4. Include <AffiliateButton> after the claim steps
5. Terms and conditions section if present
6. FAQ section (## よくある質問)
7. End with summary and final <AffiliateButton>

CRITICAL: Extract ALL content including intro, offerHighlight, claimSteps, terms, and faq. Article MUST be complete.`;

// Data extraction prompt
const DATA_SYSTEM_PROMPT = `Extract structured data from this Japanese casino offer content.

OFFER TYPE DETERMINATION:
- "no-deposit": No deposit bonus (入金不要ボーナス)
- "welcome": Welcome/first deposit bonus (ウェルカムボーナス、初回入金)
- "exclusive": Site-exclusive offers (限定、独占オファー)
- "seasonal": Holiday/event promotions (クリスマス、ゴールデンウィーク、バレンタイン等)
- "reload": Reload bonuses (リロード)

EXTRACTION:
1. Extract offer name in English and Japanese
2. Identify the casino slug (e.g., "ramenbet", "bons", "casino-me")
3. Extract bonus amount, wagering requirements, bonus code if present
4. Extract 3-5 highlights as Japanese bullet points
5. Generate SEO metadata

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
              text: `${DATA_SYSTEM_PROMPT}\n\n---\n\nExtract data from this offer content. The slug is "${slug}".\n\nCONTENT:\n${content}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json',
        responseSchema: OFFERS_SCHEMA,
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

  return `import type { OfferData } from './types';

export const ${varName}: OfferData = {
  slug: '${slug}',
  name: ${JSON.stringify(data.name || slug)},
  nameJa: ${JSON.stringify(data.nameJa || slug)},

  casinoSlug: ${JSON.stringify(data.casinoSlug || '')},
  offerType: ${JSON.stringify(data.offerType || 'exclusive')},

  ${data.bonusAmount ? `bonusAmount: ${JSON.stringify(data.bonusAmount)},` : '// bonusAmount: undefined,'}
  ${data.wagering ? `wagering: ${JSON.stringify(data.wagering)},` : '// wagering: undefined,'}
  ${data.bonusCode ? `bonusCode: ${JSON.stringify(data.bonusCode)},` : '// bonusCode: undefined,'}
  ${data.validity ? `validity: ${JSON.stringify(data.validity)},` : '// validity: undefined,'}

  highlights: ${JSON.stringify(data.highlights || [], null, 2).replace(/\n/g, '\n  ')},

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
    const content = await readSourceContent(slug);

    const [mdx, data] = await Promise.all([
      convertToMDX(slug, content),
      extractData(slug, content),
    ]);

    const mdxPath = path.join(MDX_OUTPUT_DIR, `${slug}.mdx`);
    await fs.writeFile(mdxPath, mdx);

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

  await fs.mkdir(MDX_OUTPUT_DIR, { recursive: true });
  await fs.mkdir(DATA_OUTPUT_DIR, { recursive: true });

  let slugs = await getSourceFiles();
  console.log(`Found ${slugs.length} offers in source directory\n`);

  if (slugs.length === 0) {
    console.log('No offers found.');
    return;
  }

  if (onlyList) {
    slugs = slugs.filter((s) => onlyList.includes(s));
    console.log(`Filtered to ${slugs.length} offers (--only)\n`);
  }

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
    console.log('No offers to process.');
    return;
  }

  const results: ConversionResult[] = [];
  for (let i = 0; i < slugs.length; i += CONCURRENCY) {
    const batch = slugs.slice(i, i + CONCURRENCY);
    console.log(`\nBatch ${Math.floor(i / CONCURRENCY) + 1}/${Math.ceil(slugs.length / CONCURRENCY)}:`);

    const batchResults = await processBatch(batch);
    results.push(...batchResults);

    if (i + CONCURRENCY < slugs.length) {
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
