/**
 * Extract Casino Data Script
 * Extracts structured casino data from markdown using Gemini API with JSON schema
 *
 * Usage: npx tsx scripts/extract-casino-data.ts <slug>
 * Example: npx tsx scripts/extract-casino-data.ts bitz
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OLD_CONTENT_DIR = '/Users/simon/Sites/japanese/japanese/NewContent';
const CASINO_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'casinos');

/**
 * JSON Schema for structured casino data extraction
 * Matches the CasinoData TypeScript interface
 */
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

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
}

/**
 * Call Gemini API with structured JSON output
 */
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

/**
 * Build the extraction prompt
 */
function buildExtractionPrompt(markdown: string, slug: string): string {
  return `Extract structured casino data from this Japanese casino review article.

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
}

/**
 * Generate TypeScript file content from extracted data
 */
function generateTypeScriptFile(slug: string, data: ExtractedData): string {
  const highlightsStr = data.highlights.map((h) => `      '${h.replace(/'/g, "\\'")}',`).join('\n');
  const watchoutsStr = data.watchouts
    ? data.watchouts.map((w) => `      '${w.replace(/'/g, "\\'")}',`).join('\n')
    : '';
  const paymentsStr = data.payments.map((p) => `'${p}'`).join(', ');
  const factsStr = data.facts
    .map((f) => `    { label: '${f.label.replace(/'/g, "\\'")}', value: '${f.value.replace(/'/g, "\\'")}' },`)
    .join('\n');

  return `import type { CasinoData } from './types';

export const ${slug.replace(/-/g, '_')}: CasinoData = {
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

/**
 * Main extraction function
 */
async function extractCasinoData(slug: string): Promise<void> {
  console.log(`Extracting data for: ${slug}`);

  // Read source markdown
  const sourcePath = path.join(OLD_CONTENT_DIR, 'reviews', slug, 'rewritten.md');
  console.log(`Reading from: ${sourcePath}`);

  const markdown = await fs.readFile(sourcePath, 'utf-8');
  console.log(`Source content: ${markdown.length} characters`);

  // Build prompt and call Gemini
  const prompt = buildExtractionPrompt(markdown, slug);
  console.log('Calling Gemini API with structured output...');

  const extractedData = await callGeminiStructured(prompt);
  console.log('Extracted data:', JSON.stringify(extractedData, null, 2));

  // Generate TypeScript file
  const tsContent = generateTypeScriptFile(slug, extractedData);
  console.log(`\nGenerated TypeScript:\n${tsContent}`);

  // Write output
  const outputPath = path.join(CASINO_DATA_DIR, `${slug}.ts`);
  await fs.writeFile(outputPath, tsContent);
  console.log(`\nWritten to: ${outputPath}`);
}

// Run
const slug = process.argv[2];
if (!slug) {
  console.error('Usage: npx tsx scripts/extract-casino-data.ts <slug>');
  console.error('Example: npx tsx scripts/extract-casino-data.ts bitz');
  process.exit(1);
}

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable not set');
  process.exit(1);
}

extractCasinoData(slug).catch((err) => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
