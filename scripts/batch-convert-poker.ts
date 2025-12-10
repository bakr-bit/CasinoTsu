/**
 * Batch Convert Poker Script
 * Converts poker variant/strategy guides to MDX + TypeScript data files using Gemini API
 *
 * Usage:
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-poker.ts
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-poker.ts --skip-existing
 *   GEMINI_API_KEY="xxx" npx tsx scripts/batch-convert-poker.ts --only=texas-hold-em,omaha
 *   npx tsx scripts/batch-convert-poker.ts --dry-run
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Paths
const SOURCE_DIR = '/Users/simon/Sites/japanese/japanese/NewContent/poker';
const MDX_OUTPUT_DIR = '/Users/simon/Sites/japanese/japanese-new/content/mdx/poker';
const DATA_OUTPUT_DIR = '/Users/simon/Sites/japanese/japanese-new/content/data/poker';

// Gemini API config
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// Processing config
const CONCURRENCY = 3;
const DELAY_BETWEEN_BATCHES = 2000;

// Schema for structured data extraction
const POKER_SCHEMA = {
  type: 'OBJECT',
  properties: {
    name: { type: 'STRING', description: 'English name of the poker variant/topic' },
    nameJa: { type: 'STRING', description: 'Japanese name' },
    category: {
      type: 'STRING',
      description: 'Content category',
      enum: ['variant', 'strategy', 'rules', 'guide'],
    },
    playerCount: { type: 'STRING', description: 'Number of players, e.g., "2-10", "1 vs dealer"' },
    deckCount: { type: 'INTEGER', description: 'Number of decks used (usually 1)' },
    houseEdge: { type: 'STRING', description: 'House edge percentage if applicable' },
    highlights: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: '3-5 key features/benefits in Japanese',
    },
    difficulty: {
      type: 'STRING',
      description: 'Difficulty level',
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    relatedVariants: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'Slugs of related poker variants',
    },
    recommendedCasinos: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'Casino slugs that offer good poker games',
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
const MDX_SYSTEM_PROMPT = `You are converting Japanese poker guide content to MDX format for a casino information site called CasinoTsu (カジノTsu).

IMPORTANT RULES:
1. Output ONLY valid MDX - no code block wrappers
2. Keep all Japanese text, this is a Japanese language site
3. Remove any references to "JapaCasino" or "じゃぱかじ" - replace with "CasinoTsu" or "カジノTsu"
4. Remove all images, mascot dialogues (ブラッフィー, ポカ博士, しぼり, etc.), and author bios
5. Remove emoji characters like 😊 💪 🎴 🤔 ★ etc. - they can break MDX parsing
6. OMIT any markdown tables completely - convert hand ranking tables, casino comparison tables, etc. to bullet lists or descriptive prose instead
7. Use first person plural ("私たち") for the site voice
8. Remove or replace old casinotsu.com URLs with <AffiliateButton> components

POKER-SPECIFIC INSTRUCTIONS:
- For hand ranking explanations, use bullet lists with clear formatting:
  - **ロイヤルストレートフラッシュ**: A-K-Q-J-10の同スート (最強)
  - **ストレートフラッシュ**: 同スートの5連続カード
  etc.
- For betting rounds/game flow, use ### subsections with numbered steps
- Replace casino recommendation tables with <CasinoList> component
- For strategy tips, wrap important advice in <InfoBox type="tip">

FRONTMATTER FORMAT:
---
slug: "{slug}"
title: "Article title in Japanese"
description: "Brief description in Japanese"
author: "rina-okabe"
lastUpdated: "${new Date().toISOString().split('T')[0]}"
status: "active"
---

MDX COMPONENTS TO USE:
- <InfoBox type="tip|warning|info" title="Title">Content</InfoBox> - For important tips and strategy advice
- <AffiliateButton casino="casino-slug" /> - For casino CTAs (use slugs: stake, bitz, ramenbet, eldoah, queen-casino)
- <CasinoList toplistId="poker-casinos" limit={5} /> - To show recommended poker casinos at the end

CONTENT STRUCTURE:
1. Start with an engaging intro paragraph (no heading before it)
2. Use ## for main sections (ルール, 戦略, etc.), ### for subsections
3. Include clear explanations of poker rules, hand rankings, and strategies
4. Convert all tables to prose or bullet lists
5. Add <InfoBox type="tip"> components for important strategy tips
6. End with a まとめ (summary) section and <CasinoList toplistId="poker-casinos" /> component

CRITICAL: The article MUST have a complete ending with a まとめ (summary) section or clear conclusion. Never truncate the article.`;

// Data extraction prompt
const DATA_SYSTEM_PROMPT = `Extract structured data from this Japanese poker guide article.

CATEGORY DETERMINATION:
- "variant": Specific poker game types (Texas Hold'em, Omaha, Caribbean Stud, Three Card, etc.)
- "strategy": Playing strategies, betting strategies, bluffing techniques
- "rules": Rule explanations, hand rankings, game flow guides
- "guide": General poker guides, overview content, free poker guides

CONTENT EXTRACTION:
1. Extract the poker variant/topic name in English (e.g., "Texas Hold'em", "Three Card Poker") and Japanese (e.g., "テキサスホールデム", "スリーカードポーカー")
2. For game variants: include playerCount (e.g., "2-10", "1 vs dealer"), deckCount (usually 1), houseEdge if mentioned
3. Extract 3-5 key highlights/features as Japanese bullet points describing what makes this variant/topic notable:
   - For variants: unique gameplay features, betting structure, strategic elements
   - For rules/strategy: key concepts covered, target audience benefits
4. Determine difficulty level based on content
5. List related poker variant slugs mentioned (e.g., "texas-hold-em", "omaha-hold-em", "seven-card-stud")
6. List recommended casino slugs from the content (use: stake, bitz, ramenbet, eldoah, queen-casino, casino-me)

DIFFICULTY GUIDELINES:
- beginner: Basic rules introduction, what is poker, simple game explanations
- intermediate: Hand rankings, betting rounds, basic strategy, position play
- advanced: Complex strategies, GTO concepts, advanced odds, professional techniques

SEO METADATA:
- metaTitle: 50-60 character Japanese SEO title (include main keyword)
- metaDescription: 150-160 character Japanese meta description (summarize content value)

Return valid JSON matching the schema.`;

interface ConversionResult {
  slug: string;
  success: boolean;
  error?: string;
  mdxPath?: string;
  dataPath?: string;
}

/**
 * Extract base slug from folder name (handles timestamp suffixes)
 * e.g., "strategy.2025-09-21t17-04-45.624z" -> "strategy"
 */
function extractBaseSlug(folderName: string): string {
  // Check if folder name has timestamp suffix pattern
  const timestampPattern = /^(.+)\.\d{4}-\d{2}-\d{2}t\d{2}-\d{2}-\d{2}\.\d+z$/i;
  const match = folderName.match(timestampPattern);
  return match ? match[1] : folderName;
}

async function getSourceSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(SOURCE_DIR, { withFileTypes: true });
    const slugMap = new Map<string, string>(); // baseSlug -> folderName

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const rewrittenPath = path.join(SOURCE_DIR, entry.name, 'rewritten.md');
        try {
          await fs.access(rewrittenPath);
          const baseSlug = extractBaseSlug(entry.name);
          // Prefer folder without timestamp if both exist
          if (!slugMap.has(baseSlug) || !entry.name.includes('.')) {
            slugMap.set(baseSlug, entry.name);
          }
        } catch {
          // No rewritten.md, skip
        }
      }
    }

    return Array.from(slugMap.keys()).sort();
  } catch {
    return [];
  }
}

// Map from slug to actual folder name
async function getSlugToFolderMap(): Promise<Map<string, string>> {
  const entries = await fs.readdir(SOURCE_DIR, { withFileTypes: true });
  const slugMap = new Map<string, string>();

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const rewrittenPath = path.join(SOURCE_DIR, entry.name, 'rewritten.md');
      try {
        await fs.access(rewrittenPath);
        const baseSlug = extractBaseSlug(entry.name);
        if (!slugMap.has(baseSlug) || !entry.name.includes('.')) {
          slugMap.set(baseSlug, entry.name);
        }
      } catch {
        // No rewritten.md, skip
      }
    }
  }

  return slugMap;
}

async function readSourceContent(slug: string, folderName: string): Promise<string> {
  const filePath = path.join(SOURCE_DIR, folderName, 'rewritten.md');
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
              text: `${MDX_SYSTEM_PROMPT}\n\n---\n\nConvert the following content to MDX format. The slug is "${slug}".\n\nSOURCE CONTENT:\n${content}`,
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
              text: `${DATA_SYSTEM_PROMPT}\n\n---\n\nExtract data from this poker guide. The slug is "${slug}".\n\nCONTENT:\n${content}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json',
        responseSchema: POKER_SCHEMA,
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

  return `import type { PokerData } from './types';

export const ${varName}: PokerData = {
  slug: '${slug}',
  name: ${JSON.stringify(data.name || slug)},
  nameJa: ${JSON.stringify(data.nameJa || slug)},

  category: ${JSON.stringify(data.category || 'guide')},

  ${data.playerCount ? `playerCount: ${JSON.stringify(data.playerCount)},` : '// playerCount: undefined,'}
  ${data.deckCount ? `deckCount: ${data.deckCount},` : '// deckCount: undefined,'}
  ${data.houseEdge ? `houseEdge: ${JSON.stringify(data.houseEdge)},` : '// houseEdge: undefined,'}

  highlights: ${JSON.stringify(data.highlights || [], null, 2).replace(/\n/g, '\n  ')},

  ${data.difficulty ? `difficulty: ${JSON.stringify(data.difficulty)},` : '// difficulty: undefined,'}

  ${data.relatedVariants && (data.relatedVariants as string[]).length > 0 ? `relatedVariants: ${JSON.stringify(data.relatedVariants)},` : '// relatedVariants: [],'}

  recommendedCasinos: ${JSON.stringify(data.recommendedCasinos || [], null, 2).replace(/\n/g, '\n  ')},

  meta: {
    title: ${JSON.stringify(data.metaTitle || `${data.nameJa || slug} | CasinoTsu`)},
    description: ${JSON.stringify(data.metaDescription || '')},
  },
};
`;
}

// Global slug-to-folder map
let slugToFolderMap: Map<string, string>;

async function processSlug(slug: string): Promise<ConversionResult> {
  try {
    console.log(`  Processing: ${slug}`);

    // Get the actual folder name for this slug
    const folderName = slugToFolderMap.get(slug) || slug;

    // Read source content
    const content = await readSourceContent(slug, folderName);

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

  // Initialize slug-to-folder mapping (handles timestamp suffixes)
  slugToFolderMap = await getSlugToFolderMap();

  // Get all source slugs
  let slugs = await getSourceSlugs();
  console.log(`Found ${slugs.length} poker guides in source directory\n`);

  if (slugs.length === 0) {
    console.log('No poker guides found.');
    return;
  }

  // Filter by --only if specified
  if (onlyList) {
    slugs = slugs.filter((s) => onlyList.includes(s));
    console.log(`Filtered to ${slugs.length} poker guides (--only)\n`);
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
    console.log('No poker guides to process.');
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
