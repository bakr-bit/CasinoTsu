/**
 * Batch Convert Providers Script
 * Converts all provider guides from markdown to MDX + extracts structured provider data
 *
 * Providers are game developers like Evolution Gaming, Pragmatic Play, NetEnt, etc.
 *
 * Usage:
 *   npx tsx scripts/batch-convert-providers.ts              # Convert all
 *   npx tsx scripts/batch-convert-providers.ts --skip-existing  # Skip already converted
 *   npx tsx scripts/batch-convert-providers.ts --only=evolution,netent  # Convert specific slugs
 *   npx tsx scripts/batch-convert-providers.ts --dry-run    # List what would be converted
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OLD_CONTENT_DIR = '/Users/simon/Sites/japanese/japanese/NewContent';
const NEW_MDX_DIR = path.join(process.cwd(), 'content', 'mdx', 'providers');
const PROVIDER_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'providers');

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
  return `You are converting a Japanese game provider/developer guide article from Markdown to MDX format.

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
author: "casinotsu"
status: "active"
---
\`\`\`

### 2. CONTENT CLEANING
- Remove all navigation elements (breadcrumbs, table of contents links)
- Remove ALL image references including:
  - Markdown images: ![...](...)
  - Image links with img.japanesecasino.com domain
  - SVG icons and game screenshots
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
- Example: Instead of a table showing game RTPs, write: "人気スロット「Starburst」のRTPは96.09%で..." as flowing prose

### 2c. ARTICLE ENDING (CRITICAL)
- The article MUST have a natural, complete ending
- If the source content ends abruptly or mid-sentence, you MUST add a brief conclusion
- Every article should end with either:
  - A summary section (## まとめ) with key takeaways
  - A final recommendation paragraph
  - A closing statement that wraps up the guide
- NEVER leave the article ending mid-thought or incomplete

### 3. MDX COMPONENTS TO INSERT

Use CasinoList to show casinos featuring this provider:
\`\`\`jsx
<CasinoList toplistId="${slug}-casinos" limit={5} title="[Provider Name]のゲームがプレイできるカジノ" />
\`\`\`

Use InfoBox for important notices:
\`\`\`jsx
<InfoBox type="tip" title="[Title]">
[Content]
</InfoBox>
\`\`\`

InfoBox types: "tip", "warning", "info"

### 4. CASINO LINKS
When mentioning specific casinos, use the AffiliateButton component or link to the review:
\`\`\`jsx
<AffiliateButton casino="casino-slug" text="今すぐプレイ" />
\`\`\`

Or for inline mentions, link to the review page: [カジノ名](/reviews/casino-slug)

### 5. STRUCTURE
- Keep the article flowing naturally
- Use proper heading hierarchy (## for main sections, ### for subsections)
- Convert any table data to bullet lists or prose (no tables)
- Keep lists as markdown lists

### 6. OUTPUT FORMAT
Output ONLY the MDX content, starting with the frontmatter. No explanations or code blocks wrapping the output.

### 7. FINAL CHECK - ARTICLE MUST BE COMPLETE (CRITICAL)
Before outputting, verify that:
- The article has a proper ending (まとめ section, conclusion, or final recommendation)
- NO sentence is cut off mid-way
- If the source content is incomplete, you MUST write a conclusion that summarizes the provider's key points
- The last section should wrap up the guide naturally
`;
}

// ============================================
// DATA EXTRACTION SCHEMA
// ============================================

const PROVIDER_SCHEMA = {
  type: 'OBJECT',
  properties: {
    name: {
      type: 'STRING',
      description: 'Provider name in English (e.g., "Evolution Gaming", "Pragmatic Play")',
    },
    nameJa: {
      type: 'STRING',
      description: 'Provider name in Japanese (e.g., "エボリューションゲーミング", "プラグマティックプレイ")',
    },
    founded: {
      type: 'INTEGER',
      description: 'Year the company was founded (e.g., 2006)',
    },
    headquarters: {
      type: 'STRING',
      description: 'Company headquarters location (e.g., "Stockholm, Sweden", "Riga, Latvia")',
    },
    gameCount: {
      type: 'STRING',
      description: 'Approximate number of games in portfolio (e.g., "500+", "200+", "300以上")',
    },
    gameTypes: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description:
        'Types of games this provider makes: "slots", "live-casino", "table-games", "video-poker", "scratch-cards", "crash-games"',
    },
    notableGames: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 3-5 most famous/notable game titles from this provider',
    },
    highlights: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 3-5 key strengths/features of this provider in Japanese',
    },
    watchouts: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 1-3 potential concerns/things to watch out for in Japanese (optional)',
    },
    recommendedCasinos: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description:
        'List of 3-5 recommended casino slugs featuring this provider (e.g., ["stake", "bc-game", "bons"]). Use kebab-case slugs.',
    },
    metaTitle: {
      type: 'STRING',
      description: 'SEO title in Japanese with year (e.g., "Evolution Gaming完全ガイド【2025年最新版】")',
    },
    metaDescription: {
      type: 'STRING',
      description: 'SEO meta description in Japanese (120-160 characters)',
    },
  },
  required: [
    'name',
    'nameJa',
    'founded',
    'headquarters',
    'gameCount',
    'gameTypes',
    'notableGames',
    'highlights',
    'recommendedCasinos',
    'metaTitle',
    'metaDescription',
  ],
};

interface ExtractedProviderData {
  name: string;
  nameJa: string;
  founded: number;
  headquarters: string;
  gameCount: string;
  gameTypes: string[];
  notableGames: string[];
  highlights: string[];
  watchouts?: string[];
  recommendedCasinos: string[];
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

async function callGeminiStructured(prompt: string): Promise<ExtractedProviderData> {
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
          responseSchema: PROVIDER_SCHEMA,
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

  return JSON.parse(jsonText) as ExtractedProviderData;
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

async function extractProviderData(slug: string, markdown: string): Promise<ExtractedProviderData> {
  const prompt = `Extract structured game provider/developer data from this Japanese provider guide article.

## PROVIDER SLUG
${slug}

## SOURCE CONTENT
${markdown}

## EXTRACTION INSTRUCTIONS

Extract the following information from the article:

1. **name**: The provider's English name (e.g., "Evolution Gaming", "Pragmatic Play", "NetEnt")
2. **nameJa**: The provider's Japanese name (e.g., "エボリューションゲーミング", "プラグマティックプレイ")
3. **founded**: Year the company was founded (integer, e.g., 2006)
4. **headquarters**: Company headquarters location (e.g., "Stockholm, Sweden", "Riga, Latvia", "Malta")
5. **gameCount**: Approximate number of games with "+" suffix (e.g., "500+", "200+")
6. **gameTypes**: Types of games they make, use these kebab-case values:
   - "slots" - Video slots/pachislots
   - "live-casino" - Live dealer games
   - "table-games" - RNG table games (blackjack, roulette, etc.)
   - "video-poker" - Video poker
   - "scratch-cards" - Scratch cards/instant win
   - "crash-games" - Crash/aviator style games
7. **notableGames**: 3-5 most famous game titles from this provider
8. **highlights**: 3-5 key strengths in Japanese
9. **watchouts**: 1-3 potential concerns in Japanese (optional)
10. **recommendedCasinos**: 3-5 casino slugs featuring this provider's games
    - Use kebab-case slugs (e.g., "vera-john", "stake", "bc-game")
    - Common casino name to slug mappings:
      - ベラジョン → vera-john
      - Stake → stake
      - ステーク → stake
      - BC.Game → bc-game
      - Bons → bons
      - ボンズ → bons
      - Eldoah → eldoah
      - エルドア → eldoah
      - コニベット → konibet
      - ミスティーノ → mystino
      - カジノミー → casino-me
      - インターカジノ → inter-casino
      - カジノシークレット → casino-secret
      - ビットカジノ → bitcasino
      - ベットリッチ → bet-rich
11. **metaTitle**: SEO title (include provider name and year)
12. **metaDescription**: SEO description (120-160 characters, Japanese)

Return the extracted data as JSON matching the schema.`;

  return await callGeminiStructured(prompt);
}

function generateTypeScriptFile(slug: string, data: ExtractedProviderData): string {
  const highlightsStr = data.highlights.map((h) => `    '${h.replace(/'/g, "\\'")}'`).join(',\n');
  const watchoutsStr = data.watchouts
    ? data.watchouts.map((w) => `    '${w.replace(/'/g, "\\'")}'`).join(',\n')
    : '';
  const casinosStr = data.recommendedCasinos.map((c) => `    '${c}'`).join(',\n');
  const gameTypesStr = data.gameTypes.map((t) => `    '${t}'`).join(',\n');
  const notableGamesStr = data.notableGames.map((g) => `    '${g.replace(/'/g, "\\'")}'`).join(',\n');

  // Convert slug to valid JS identifier
  const varName = slug.replace(/-/g, '_');

  return `import type { ProviderData } from './types';

export const ${varName}: ProviderData = {
  slug: '${slug}',
  name: '${data.name.replace(/'/g, "\\'")}',
  nameJa: '${data.nameJa.replace(/'/g, "\\'")}',

  // Company info
  founded: ${data.founded},
  headquarters: '${data.headquarters.replace(/'/g, "\\'")}',

  // Game portfolio
  gameCount: '${data.gameCount}',
  gameTypes: [
${gameTypesStr}
  ],

  // Notable games
  notableGames: [
${notableGamesStr}
  ],

  // Key features
  highlights: [
${highlightsStr}
  ],
${
  watchoutsStr
    ? `
  watchouts: [
${watchoutsStr}
  ],
`
    : ''
}
  // Casinos using this provider
  recommendedCasinos: [
${casinosStr}
  ],

  // SEO metadata
  meta: {
    title: '${data.metaTitle.replace(/'/g, "\\'")}',
    description: '${data.metaDescription.replace(/'/g, "\\'")}',
  },
};
`;
}

// ============================================
// MAIN BATCH PROCESSING
// ============================================

async function convertSingleProvider(slug: string): Promise<ConversionResult> {
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
    const sourcePath = path.join(OLD_CONTENT_DIR, 'providers', slug, 'rewritten.md');
    const markdown = await fs.readFile(sourcePath, 'utf-8');

    // Convert to MDX
    console.log(`  [${slug}] Converting to MDX...`);
    const mdxContent = await convertToMDX(slug, markdown);
    await fs.writeFile(path.join(NEW_MDX_DIR, `${slug}.mdx`), mdxContent);
    result.mdxGenerated = true;

    // Extract provider data
    console.log(`  [${slug}] Extracting provider data...`);
    const providerData = await extractProviderData(slug, markdown);
    const tsContent = generateTypeScriptFile(slug, providerData);
    await fs.writeFile(path.join(PROVIDER_DATA_DIR, `${slug}.ts`), tsContent);
    result.dataExtracted = true;

    result.success = true;
  } catch (error) {
    result.error = error instanceof Error ? error.message : String(error);
  }

  result.duration = Date.now() - startTime;
  return result;
}

async function processBatch(slugs: string[]): Promise<ConversionResult[]> {
  const results = await Promise.all(slugs.map((slug) => convertSingleProvider(slug)));
  return results;
}

async function getAllSlugs(): Promise<string[]> {
  const entries = await fs.readdir(path.join(OLD_CONTENT_DIR, 'providers'), { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('.') && !e.name.includes(':'))
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

  if (!GEMINI_API_KEY && !dryRun) {
    console.error('Error: GEMINI_API_KEY environment variable not set');
    process.exit(1);
  }

  // Ensure output directories exist
  await fs.mkdir(NEW_MDX_DIR, { recursive: true });
  await fs.mkdir(PROVIDER_DATA_DIR, { recursive: true });

  // Get slugs to process
  let slugs = specificSlugs || (await getAllSlugs());

  if (skipExisting) {
    const existing = await getExistingMDXSlugs();
    slugs = slugs.filter((s) => !existing.has(s));
    console.log(`Skipping ${existing.size} already converted providers`);
  }

  console.log(`\n📋 Providers to convert: ${slugs.length}`);
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
  const logPath = path.join(process.cwd(), 'provider-conversion-log.json');
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
