/**
 * Batch Convert Game Shows Script
 * Converts all game show guides from markdown to MDX + extracts structured game show data
 *
 * Game shows are live casino games like Crazy Time, Lightning Roulette, etc.
 *
 * Usage:
 *   npx tsx scripts/batch-convert-game-shows.ts              # Convert all
 *   npx tsx scripts/batch-convert-game-shows.ts --skip-existing  # Skip already converted
 *   npx tsx scripts/batch-convert-game-shows.ts --only=crazy-time,lightning-roulette  # Convert specific slugs
 *   npx tsx scripts/batch-convert-game-shows.ts --dry-run    # List what would be converted
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OLD_CONTENT_DIR = '/Users/simon/Sites/japanese/japanese/NewContent';
const NEW_MDX_DIR = path.join(process.cwd(), 'content', 'mdx', 'game-shows');
const GAME_SHOW_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'game-shows');

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
  return `You are converting a Japanese live casino game show guide article from Markdown to MDX format.

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
- Example: Instead of a table showing RTP values, write: "RTPは96.08%で、ホイールゲームとしては標準的な数値です..."

### 2c. ARTICLE ENDING (CRITICAL)
- The article MUST have a natural, complete ending
- If the source content ends abruptly or mid-sentence, you MUST add a brief conclusion
- Every article should end with either:
  - A summary section (## まとめ) with key takeaways
  - A final recommendation paragraph
  - A closing statement that wraps up the guide
- NEVER leave the article ending mid-thought or incomplete

### 3. MDX COMPONENTS TO INSERT

Use CasinoList to show casinos offering this game:
\`\`\`jsx
<CasinoList toplistId="${slug}-casinos" limit={5} title="[Game Name]がプレイできるカジノ" />
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
- If the source content is incomplete, you MUST write a conclusion that summarizes the game's key points
- The last section should wrap up the guide naturally
`;
}

// ============================================
// DATA EXTRACTION SCHEMA
// ============================================

const GAME_SHOW_SCHEMA = {
  type: 'OBJECT',
  properties: {
    name: {
      type: 'STRING',
      description: 'Game show name in English (e.g., "Crazy Time", "Lightning Roulette")',
    },
    nameJa: {
      type: 'STRING',
      description: 'Game show name in Japanese (e.g., "クレイジータイム", "ライトニングルーレット")',
    },
    provider: {
      type: 'STRING',
      description: 'Game provider name (e.g., "Evolution Gaming", "Pragmatic Play Live")',
    },
    category: {
      type: 'STRING',
      description:
        'Game category: "wheel" (money wheel games), "dice" (dice games), "roulette", "baccarat", "blackjack", or "other"',
    },
    rtp: {
      type: 'STRING',
      description: 'Return to Player percentage (e.g., "96.08%", "97.30%")',
    },
    maxWin: {
      type: 'STRING',
      description: 'Maximum win multiplier or amount (e.g., "500,000x", "160,000倍")',
    },
    highlights: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 3-5 key features/highlights of this game in Japanese',
    },
    watchouts: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 1-3 potential concerns/things to watch out for in Japanese',
    },
    recommendedCasinos: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description:
        'List of 3-5 recommended casino slugs to play this game (e.g., ["stake", "bc-game", "bons"]). Use kebab-case slugs.',
    },
    metaTitle: {
      type: 'STRING',
      description: 'SEO title in Japanese with year (e.g., "クレイジータイム完全ガイド【2025年最新版】")',
    },
    metaDescription: {
      type: 'STRING',
      description: 'SEO meta description in Japanese (120-160 characters)',
    },
  },
  required: ['name', 'nameJa', 'provider', 'category', 'highlights', 'recommendedCasinos', 'metaTitle', 'metaDescription'],
};

interface ExtractedGameShowData {
  name: string;
  nameJa: string;
  provider: string;
  category: 'wheel' | 'dice' | 'roulette' | 'baccarat' | 'blackjack' | 'other';
  rtp?: string;
  maxWin?: string;
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

async function callGeminiStructured(prompt: string): Promise<ExtractedGameShowData> {
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
          responseSchema: GAME_SHOW_SCHEMA,
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

  return JSON.parse(jsonText) as ExtractedGameShowData;
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

async function extractGameShowData(slug: string, markdown: string): Promise<ExtractedGameShowData> {
  const prompt = `Extract structured game show data from this Japanese live casino game guide article.

## GAME SHOW SLUG
${slug}

## SOURCE CONTENT
${markdown}

## EXTRACTION INSTRUCTIONS

Extract the following information from the article:

1. **name**: The game's English name (e.g., "Crazy Time", "Lightning Roulette")
2. **nameJa**: The game's Japanese name (e.g., "クレイジータイム", "ライトニングルーレット")
3. **provider**: Game provider (usually "Evolution Gaming" or "Pragmatic Play Live")
4. **category**: Game category - one of:
   - "wheel" - Money wheel games (Crazy Time, Dream Catcher, Monopoly Live, etc.)
   - "dice" - Dice games (Lightning Dice, Sic Bo, etc.)
   - "roulette" - Roulette variants (Lightning Roulette, etc.)
   - "baccarat" - Baccarat variants (Lightning Baccarat, etc.)
   - "blackjack" - Blackjack variants (Lightning Blackjack, etc.)
   - "other" - Everything else
5. **rtp**: Return to Player percentage if mentioned (e.g., "96.08%")
6. **maxWin**: Maximum win multiplier if mentioned (e.g., "500,000x", "160,000倍")
7. **highlights**: 3-5 key features in Japanese
8. **watchouts**: 1-3 potential concerns in Japanese (optional)
9. **recommendedCasinos**: 3-5 casino slugs to play this game
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
10. **metaTitle**: SEO title (include game name and year)
11. **metaDescription**: SEO description (120-160 characters, Japanese)

Return the extracted data as JSON matching the schema.`;

  return await callGeminiStructured(prompt);
}

function generateTypeScriptFile(slug: string, data: ExtractedGameShowData): string {
  const highlightsStr = data.highlights.map((h) => `    '${h.replace(/'/g, "\\'")}'`).join(',\n');
  const watchoutsStr = data.watchouts
    ? data.watchouts.map((w) => `    '${w.replace(/'/g, "\\'")}'`).join(',\n')
    : '';
  const casinosStr = data.recommendedCasinos.map((c) => `    '${c}'`).join(',\n');

  // Convert slug to valid JS identifier
  const varName = slug.replace(/-/g, '_');

  return `import type { GameShowData } from './types';

export const ${varName}: GameShowData = {
  slug: '${slug}',
  name: '${data.name.replace(/'/g, "\\'")}',
  nameJa: '${data.nameJa.replace(/'/g, "\\'")}',
  provider: '${data.provider.replace(/'/g, "\\'")}',
  category: '${data.category}',
${data.rtp ? `  rtp: '${data.rtp}',\n` : ''}${data.maxWin ? `  maxWin: '${data.maxWin.replace(/'/g, "\\'")}',\n` : ''}
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
  recommendedCasinos: [
${casinosStr}
  ],

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

async function convertSingleGameShow(slug: string): Promise<ConversionResult> {
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
    const sourcePath = path.join(OLD_CONTENT_DIR, 'game-shows', slug, 'rewritten.md');
    const markdown = await fs.readFile(sourcePath, 'utf-8');

    // Convert to MDX
    console.log(`  [${slug}] Converting to MDX...`);
    const mdxContent = await convertToMDX(slug, markdown);
    await fs.writeFile(path.join(NEW_MDX_DIR, `${slug}.mdx`), mdxContent);
    result.mdxGenerated = true;

    // Extract game show data
    console.log(`  [${slug}] Extracting game show data...`);
    const gameShowData = await extractGameShowData(slug, markdown);
    const tsContent = generateTypeScriptFile(slug, gameShowData);
    await fs.writeFile(path.join(GAME_SHOW_DATA_DIR, `${slug}.ts`), tsContent);
    result.dataExtracted = true;

    result.success = true;
  } catch (error) {
    result.error = error instanceof Error ? error.message : String(error);
  }

  result.duration = Date.now() - startTime;
  return result;
}

async function processBatch(slugs: string[]): Promise<ConversionResult[]> {
  const results = await Promise.all(slugs.map((slug) => convertSingleGameShow(slug)));
  return results;
}

async function getAllSlugs(): Promise<string[]> {
  const entries = await fs.readdir(path.join(OLD_CONTENT_DIR, 'game-shows'), { withFileTypes: true });
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

  if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY environment variable not set');
    process.exit(1);
  }

  // Ensure output directories exist
  await fs.mkdir(NEW_MDX_DIR, { recursive: true });
  await fs.mkdir(GAME_SHOW_DATA_DIR, { recursive: true });

  // Get slugs to process
  let slugs = specificSlugs || (await getAllSlugs());

  if (skipExisting) {
    const existing = await getExistingMDXSlugs();
    slugs = slugs.filter((s) => !existing.has(s));
    console.log(`Skipping ${existing.size} already converted game shows`);
  }

  console.log(`\n📋 Game shows to convert: ${slugs.length}`);
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
  const logPath = path.join(process.cwd(), 'game-show-conversion-log.json');
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
