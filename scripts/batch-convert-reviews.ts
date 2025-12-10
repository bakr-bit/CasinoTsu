/**
 * Batch Convert Reviews Script
 * Converts all reviews from markdown to MDX + extracts structured casino data
 *
 * Usage:
 *   npx tsx scripts/batch-convert-reviews.ts              # Convert all
 *   npx tsx scripts/batch-convert-reviews.ts --skip-existing  # Skip already converted
 *   npx tsx scripts/batch-convert-reviews.ts --only=bitz,stake  # Convert specific slugs
 *   npx tsx scripts/batch-convert-reviews.ts --dry-run    # List what would be converted
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OLD_CONTENT_DIR = '/Users/simon/Sites/japanese/japanese/NewContent';
const NEW_MDX_DIR = path.join(process.cwd(), 'content', 'mdx', 'reviews');
const CASINO_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'casinos');

// Concurrency limit to avoid rate limiting
const CONCURRENCY = 3;
// Delay between batches (ms)
const BATCH_DELAY = 2000;

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
}

interface ConversionResult {
  slug: string;
  success: boolean;
  mdxGenerated: boolean;
  dataExtracted: boolean;
  error?: string;
  duration: number;
}

// ============================================
// MDX CONVERSION
// ============================================

function buildMDXSystemPrompt(slug: string): string {
  return `You are converting a Japanese casino review article from Markdown to MDX format.

## BRANDING & VOICE
- You are writing for a blog called CasinoTsu (casinotsu.com)
- Write in first person voice, engaging and professional
- Remove any residual text that refers to JapaCasino, japanesecasino.com, ジャパカジ, or similar old branding
- The correct branding is CasinoTsu (casinotsu.com)

## YOUR TASK

Convert the provided markdown to MDX format with the following requirements:

### 1. FRONTMATTER
Add YAML frontmatter at the top:
\`\`\`yaml
---
slug: ${slug}
title: "[Extract main H1 title]"
description: "[Extract or create a 1-2 sentence meta description in Japanese]"
lastUpdated: "2025-01-15"
author: "rina-okabe"
status: "active"
---
\`\`\`

### 2. CONTENT CLEANING
- Remove all navigation elements (breadcrumbs, table of contents links)
- Remove ALL image references including:
  - Markdown images: ![...](...)
  - Image links with img.japanesecasino.com domain
  - SVG icons and payment method images
  - Any [![...](image-url)](link) patterns
- Remove mascot character dialogue boxes (ココモ, カジ子, オカ教授, サポ美, etc.)
- Remove cookie consent notices and footer content
- Remove author bio sections at the bottom
- Keep all substantive content and lists
- Keep internal links to other pages on the site (but NOT image links)
- IMPORTANT: Remove ALL emoticons/kaomoji that contain special Unicode characters (like ๑, ω, ᴗ, ✧, etc.)
- Remove or simplify any text art faces like (๑′ᴗ‵1), ( •̀ ω •́ ), ٩(｡•ω•｡), etc.
- Standard emoji (😎, 🔥, ✨, etc.) are OK to keep

### 2b. TABLE HANDLING
- OMIT ALL TABLES from the output entirely
- Do NOT include any markdown tables (| ... | format)
- If a table contains important information, convert it to a bullet list or flowing prose instead
- Example: Instead of a table showing bonus tiers, write: "初回入金で100%ボーナス（最大5万円）、2回目は50%（最大3万円）..."

### 2c. ARTICLE ENDING (CRITICAL)
- The article MUST have a natural, complete ending
- If the source content ends abruptly or mid-sentence, you MUST add a brief conclusion
- Every article should end with either:
  - A summary section (## まとめ) with key takeaways
  - A final call-to-action paragraph
  - A closing statement that wraps up the review
- NEVER leave the article ending mid-thought or incomplete
- If the source cuts off, write a natural 2-3 sentence conclusion based on the content

### 3. MDX COMPONENTS TO INSERT

Replace affiliate/CTA links with this component:
\`\`\`jsx
<AffiliateButton casino="${slug}" text="今すぐプレイ" />
\`\`\`

Add a casino info box near the top (after the intro paragraph):
\`\`\`jsx
<CasinoList toplistId="similar-casinos" limit={1} title="[Casino Japanese Name]" />
\`\`\`

Use InfoBox for important notices:
\`\`\`jsx
<InfoBox type="tip" title="[Title]">
[Content]
</InfoBox>
\`\`\`

InfoBox types: "tip", "warning", "info"

### 4. STRUCTURE
- Keep the article flowing naturally
- Use proper heading hierarchy (## for main sections, ### for subsections)
- Convert any table data to bullet lists or prose (no tables)
- Keep lists as markdown lists

### 5. OUTPUT FORMAT
Output ONLY the MDX content, starting with the frontmatter. No explanations or code blocks wrapping the output.

### 6. FINAL CHECK - ARTICLE MUST BE COMPLETE (CRITICAL)
Before outputting, verify that:
- The article has a proper ending (まとめ section, conclusion, or final CTA)
- NO sentence is cut off mid-way
- If the source content is incomplete, you MUST write a conclusion that summarizes the casino's key points
- The last section should wrap up the review naturally
- Example good ending: "## まとめ\\n\\nビッツカジノは[key points]...ぜひ一度お試しください。\\n\\n<AffiliateButton casino="${slug}" text="今すぐプレイ" />"
`;
}

// ============================================
// DATA EXTRACTION SCHEMA
// ============================================

const CASINO_SCHEMA = {
  type: 'OBJECT',
  properties: {
    name: {
      type: 'STRING',
      description: 'Casino name in English (e.g., "Bitz Casino")',
    },
    nameJa: {
      type: 'STRING',
      description: 'Casino name in Japanese (e.g., "ビッツカジノ")',
    },
    rating: {
      type: 'NUMBER',
      description: 'Overall rating from 0-5 (e.g., 4.3)',
    },
    license: {
      type: 'OBJECT',
      properties: {
        name: {
          type: 'STRING',
          description: 'License name (e.g., "Curacao eGaming", "Anjouan Gaming License")',
        },
        jurisdiction: {
          type: 'STRING',
          description: 'Jurisdiction in Japanese (e.g., "キュラソー", "アンジュアン")',
        },
      },
      required: ['name', 'jurisdiction'],
    },
    operator: {
      type: 'STRING',
      description: 'Operating company name (e.g., "Dama N.V.")',
    },
    established: {
      type: 'NUMBER',
      description: 'Year the casino was launched (e.g., 2022)',
    },
    bonusHeadline: {
      type: 'STRING',
      description: 'Main bonus headline in Japanese (e.g., "最大$1,000ウェルカムボーナス")',
    },
    highlights: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 3-5 key highlights/pros in Japanese',
    },
    watchouts: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 1-3 potential concerns/cons in Japanese',
    },
    payments: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'Payment method slugs (e.g., ["bitcoin", "ethereum", "bank-transfer"])',
    },
    facts: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          label: { type: 'STRING', description: 'Fact label in Japanese' },
          value: { type: 'STRING', description: 'Fact value in Japanese' },
        },
        required: ['label', 'value'],
      },
      description: 'Key facts about the casino (5-8 items)',
    },
    metaTitle: {
      type: 'STRING',
      description: 'SEO title in Japanese with year (e.g., "Bitz Casino（ビッツカジノ）レビュー【2025年最新版】")',
    },
    metaDescription: {
      type: 'STRING',
      description: 'SEO meta description in Japanese (120-160 characters)',
    },
  },
  required: [
    'name',
    'nameJa',
    'rating',
    'license',
    'operator',
    'established',
    'bonusHeadline',
    'highlights',
    'payments',
    'facts',
    'metaTitle',
    'metaDescription',
  ],
};

interface ExtractedData {
  name: string;
  nameJa: string;
  rating: number;
  license: {
    name: string;
    jurisdiction: string;
  };
  operator: string;
  established: number;
  bonusHeadline: string;
  highlights: string[];
  watchouts?: string[];
  payments: string[];
  facts: { label: string; value: string }[];
  metaTitle: string;
  metaDescription: string;
}

// ============================================
// GEMINI API CALLS
// ============================================

async function callGeminiText(systemPrompt: string, userPrompt: string): Promise<string> {
  const combinedPrompt = `${systemPrompt}\n\n---\n\n${userPrompt}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: combinedPrompt }] }],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 65000,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${error}`);
  }

  const data = (await response.json()) as GeminiResponse;
  return data.candidates[0].content.parts[0].text;
}

async function callGeminiStructured(prompt: string): Promise<ExtractedData> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: 'application/json',
          responseSchema: CASINO_SCHEMA,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${error}`);
  }

  const data = (await response.json()) as GeminiResponse;
  const jsonText = data.candidates[0].content.parts[0].text;

  return JSON.parse(jsonText) as ExtractedData;
}

// ============================================
// CONVERSION FUNCTIONS
// ============================================

async function convertToMDX(slug: string, markdown: string): Promise<string> {
  const systemPrompt = buildMDXSystemPrompt(slug);
  const userPrompt = `Convert this markdown article to MDX format:\n\n${markdown}`;

  let mdxContent = await callGeminiText(systemPrompt, userPrompt);

  // Clean up any code block wrappers
  mdxContent = mdxContent
    .replace(/^```(?:yaml|mdx|markdown)?\n/gm, '')
    .replace(/\n```$/gm, '')
    .replace(/^```\n/gm, '')
    .trim();

  return mdxContent;
}

async function extractCasinoData(slug: string, markdown: string): Promise<ExtractedData> {
  const prompt = `Extract structured casino data from this Japanese casino review article.

## CASINO SLUG
${slug}

## SOURCE CONTENT
${markdown}

## EXTRACTION INSTRUCTIONS

Extract the following information from the article:

1. **name**: The casino's English name (e.g., "Bitz Casino")
2. **nameJa**: The casino's Japanese name (e.g., "ビッツカジノ")
3. **rating**: Overall rating (look for scores like 4.0/5 or similar). Use a number between 0-5.
4. **license**: License information
   - name: License name (e.g., "Curacao eGaming", "Anjouan Gaming License")
   - jurisdiction: Jurisdiction in Japanese (e.g., "キュラソー")
5. **operator**: Operating company name (look for 運営会社)
6. **established**: Year launched (look for ローンチ, 設立)
7. **bonusHeadline**: Main bonus offer summary in Japanese (e.g., "最大$1,000ウェルカムボーナス、賭け条件29倍")
8. **highlights**: 3-5 key pros/highlights in Japanese
9. **watchouts**: 1-3 potential concerns/cons in Japanese (optional)
10. **payments**: Payment method slugs (lowercase, hyphenated). Common mappings:
    - ビットコイン/BTC → "bitcoin"
    - イーサリアム/ETH → "ethereum"
    - ライトコイン/LTC → "litecoin"
    - テザー/USDT → "usdt"
    - 銀行送金 → "bank-transfer"
    - Payz → "payz"
    - Vega Wallet → "vega-wallet"
11. **facts**: Key facts for display (5-8 items with label/value pairs)
    - Include: 名称, ローンチ, ライセンス, 運営会社, KYC要件, etc.
12. **metaTitle**: SEO title (include casino name in both languages and year)
13. **metaDescription**: SEO description (120-160 characters, Japanese)

Return the extracted data as JSON matching the schema.`;

  return await callGeminiStructured(prompt);
}

function generateTypeScriptFile(slug: string, data: ExtractedData): string {
  const highlightsStr = data.highlights.map((h) => `      '${h.replace(/'/g, "\\'")}'`).join(',\n');
  const watchoutsStr = data.watchouts
    ? data.watchouts.map((w) => `      '${w.replace(/'/g, "\\'")}'`).join(',\n')
    : '';
  const paymentsStr = data.payments.map((p) => `'${p}'`).join(', ');
  const factsStr = data.facts
    .map((f) => `    { label: '${f.label.replace(/'/g, "\\'")}', value: '${f.value.replace(/'/g, "\\'")}' }`)
    .join(',\n');

  // Convert slug to valid JS identifier (replace hyphens with underscores)
  const varName = slug.replace(/-/g, '_');

  return `import type { CasinoData } from './types';

export const ${varName}: CasinoData = {
  slug: '${slug}',
  name: '${data.name.replace(/'/g, "\\'")}',
  nameJa: '${data.nameJa.replace(/'/g, "\\'")}',
  logo: '/assets/casino/${slug}.png',
  rating: ${data.rating},

  license: {
    name: '${data.license.name.replace(/'/g, "\\'")}',
    jurisdiction: '${data.license.jurisdiction.replace(/'/g, "\\'")}',
  },

  operator: '${data.operator.replace(/'/g, "\\'")}',
  established: ${data.established},

  affiliate: {
    url: 'https://casinotsu.com/go/${slug}',
  },

  features: {
    bonusHeadline: '${data.bonusHeadline.replace(/'/g, "\\'")}',
    highlights: [
${highlightsStr}
    ],${
      watchoutsStr
        ? `
    watchouts: [
${watchoutsStr}
    ],`
        : ''
    }
  },

  payments: [${paymentsStr}],

  facts: [
${factsStr}
  ],

  meta: {
    title: '${data.metaTitle.replace(/'/g, "\\'")}',
    description:
      '${data.metaDescription.replace(/'/g, "\\'")}',
  },
};
`;
}

// ============================================
// MAIN BATCH PROCESSING
// ============================================

async function convertSingleReview(slug: string): Promise<ConversionResult> {
  const startTime = Date.now();
  const result: ConversionResult = {
    slug,
    success: false,
    mdxGenerated: false,
    dataExtracted: false,
    duration: 0,
  };

  try {
    // Read source markdown
    const sourcePath = path.join(OLD_CONTENT_DIR, 'reviews', slug, 'rewritten.md');
    const markdown = await fs.readFile(sourcePath, 'utf-8');

    // Convert to MDX
    console.log(`  [${slug}] Converting to MDX...`);
    const mdxContent = await convertToMDX(slug, markdown);
    await fs.writeFile(path.join(NEW_MDX_DIR, `${slug}.mdx`), mdxContent);
    result.mdxGenerated = true;

    // Extract casino data
    console.log(`  [${slug}] Extracting casino data...`);
    const casinoData = await extractCasinoData(slug, markdown);
    const tsContent = generateTypeScriptFile(slug, casinoData);
    await fs.writeFile(path.join(CASINO_DATA_DIR, `${slug}.ts`), tsContent);
    result.dataExtracted = true;

    result.success = true;
  } catch (error) {
    result.error = error instanceof Error ? error.message : String(error);
  }

  result.duration = Date.now() - startTime;
  return result;
}

async function processBatch(slugs: string[]): Promise<ConversionResult[]> {
  const results = await Promise.all(slugs.map((slug) => convertSingleReview(slug)));
  return results;
}

async function getAllSlugs(): Promise<string[]> {
  const entries = await fs.readdir(path.join(OLD_CONTENT_DIR, 'reviews'), { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name)
    .sort();
}

async function getExistingMDXSlugs(): Promise<Set<string>> {
  try {
    const files = await fs.readdir(NEW_MDX_DIR);
    return new Set(files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', '')));
  } catch {
    return new Set();
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const skipExisting = args.includes('--skip-existing');
  const dryRun = args.includes('--dry-run');
  const onlyArg = args.find((a) => a.startsWith('--only='));
  const specificSlugs = onlyArg ? onlyArg.replace('--only=', '').split(',') : null;

  if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY environment variable not set');
    process.exit(1);
  }

  // Ensure output directories exist
  await fs.mkdir(NEW_MDX_DIR, { recursive: true });
  await fs.mkdir(CASINO_DATA_DIR, { recursive: true });

  // Get slugs to process
  let slugs = specificSlugs || (await getAllSlugs());

  if (skipExisting) {
    const existing = await getExistingMDXSlugs();
    slugs = slugs.filter((s) => !existing.has(s));
    console.log(`Skipping ${existing.size} already converted reviews`);
  }

  console.log(`\n📋 Reviews to convert: ${slugs.length}`);
  console.log(`   Concurrency: ${CONCURRENCY}`);
  console.log(`   Skip existing: ${skipExisting}`);
  console.log(`   Dry run: ${dryRun}\n`);

  if (dryRun) {
    console.log('Would convert:');
    slugs.forEach((s) => console.log(`  - ${s}`));
    return;
  }

  const allResults: ConversionResult[] = [];
  const totalBatches = Math.ceil(slugs.length / CONCURRENCY);

  for (let i = 0; i < slugs.length; i += CONCURRENCY) {
    const batch = slugs.slice(i, i + CONCURRENCY);
    const batchNum = Math.floor(i / CONCURRENCY) + 1;

    console.log(`\n🔄 Batch ${batchNum}/${totalBatches}: ${batch.join(', ')}`);

    const results = await processBatch(batch);
    allResults.push(...results);

    // Log batch results
    results.forEach((r) => {
      if (r.success) {
        console.log(`  ✅ ${r.slug} (${(r.duration / 1000).toFixed(1)}s)`);
      } else {
        console.log(`  ❌ ${r.slug}: ${r.error}`);
      }
    });

    // Delay between batches (except for last batch)
    if (i + CONCURRENCY < slugs.length) {
      await new Promise((resolve) => setTimeout(resolve, BATCH_DELAY));
    }
  }

  // Summary
  const successful = allResults.filter((r) => r.success).length;
  const failed = allResults.filter((r) => !r.success);
  const totalDuration = allResults.reduce((sum, r) => sum + r.duration, 0);

  console.log(`\n${'='.repeat(50)}`);
  console.log(`📊 CONVERSION SUMMARY`);
  console.log(`${'='.repeat(50)}`);
  console.log(`✅ Successful: ${successful}/${allResults.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  console.log(`⏱️  Total time: ${(totalDuration / 1000 / 60).toFixed(1)} minutes`);

  if (failed.length > 0) {
    console.log(`\n❌ Failed conversions:`);
    failed.forEach((r) => {
      console.log(`  - ${r.slug}: ${r.error}`);
    });
  }

  // Write results to log file
  const logPath = path.join(process.cwd(), 'conversion-log.json');
  await fs.writeFile(
    logPath,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        total: allResults.length,
        successful,
        failed: failed.length,
        results: allResults,
      },
      null,
      2
    )
  );
  console.log(`\n📝 Full log written to: ${logPath}`);
}

main().catch((err) => {
  console.error('Batch conversion failed:', err);
  process.exit(1);
});
