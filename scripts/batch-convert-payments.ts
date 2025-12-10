/**
 * Batch Convert Payments Script
 * Converts all payment method guides from markdown to MDX + extracts structured payment data
 *
 * Usage:
 *   npx tsx scripts/batch-convert-payments.ts              # Convert all
 *   npx tsx scripts/batch-convert-payments.ts --skip-existing  # Skip already converted
 *   npx tsx scripts/batch-convert-payments.ts --only=bitcoin,ethereum  # Convert specific slugs
 *   npx tsx scripts/batch-convert-payments.ts --dry-run    # List what would be converted
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OLD_CONTENT_DIR = '/Users/simon/Sites/japanese/japanese/NewContent';
const NEW_MDX_DIR = path.join(process.cwd(), 'content', 'mdx', 'payment');
const PAYMENT_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'payments');

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
  return `You are converting a Japanese payment method guide article from Markdown to MDX format.

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
- Example: Instead of a table showing fees, write: "入金手数料は無料、出金は1〜3%程度..."

### 2c. ARTICLE ENDING (CRITICAL)
- The article MUST have a natural, complete ending
- If the source content ends abruptly or mid-sentence, you MUST add a brief conclusion
- Every article should end with either:
  - A summary section (## まとめ) with key takeaways
  - A final recommendation paragraph
  - A closing statement that wraps up the guide
- NEVER leave the article ending mid-thought or incomplete

### 3. MDX COMPONENTS TO INSERT

Use CasinoList to show casinos that support this payment method:
\`\`\`jsx
<CasinoList toplistId="${slug}-casinos" limit={5} title="[Payment Method Name]対応カジノ" />
\`\`\`

Use InfoBox for important notices:
\`\`\`jsx
<InfoBox type="tip" title="[Title]">
[Content]
</InfoBox>
\`\`\`

InfoBox types: "tip", "warning", "info"

For fee/limit summaries, use PaymentTable component:
\`\`\`jsx
<PaymentTable paymentSlug="${slug}" />
\`\`\`

### 4. STRUCTURE
- Keep the article flowing naturally
- Use proper heading hierarchy (## for main sections, ### for subsections)
- Convert any table data to bullet lists or prose (no tables)
- Keep lists as markdown lists

### 5. OUTPUT FORMAT
Output ONLY the MDX content, starting with the frontmatter. No explanations or code blocks wrapping the output.

### 6. FINAL CHECK - ARTICLE MUST BE COMPLETE (CRITICAL)
Before outputting, verify that:
- The article has a proper ending (まとめ section, conclusion, or final recommendation)
- NO sentence is cut off mid-way
- If the source content is incomplete, you MUST write a conclusion that summarizes the payment method's key points
- The last section should wrap up the guide naturally
`;
}

// ============================================
// DATA EXTRACTION SCHEMA
// ============================================

const PAYMENT_SCHEMA = {
  type: 'OBJECT',
  properties: {
    name: {
      type: 'STRING',
      description: 'Payment method name in English (e.g., "Bitcoin", "Bank Transfer")',
    },
    nameJa: {
      type: 'STRING',
      description: 'Payment method name in Japanese (e.g., "ビットコイン", "銀行送金")',
    },
    type: {
      type: 'STRING',
      description: 'Payment type: "crypto", "ewallet", "bank", "card", or "other"',
    },
    processingTimeDeposit: {
      type: 'STRING',
      description: 'Deposit processing time in Japanese (e.g., "即時", "数分", "1-3営業日")',
    },
    processingTimeWithdrawal: {
      type: 'STRING',
      description: 'Withdrawal processing time in Japanese (e.g., "数時間〜1営業日")',
    },
    feeDeposit: {
      type: 'STRING',
      description: 'Deposit fee (e.g., "無料", "1-3%")',
    },
    feeWithdrawal: {
      type: 'STRING',
      description: 'Withdrawal fee (e.g., "無料", "数百円相当")',
    },
    feeNote: {
      type: 'STRING',
      description: 'Additional fee notes in Japanese',
    },
    highlights: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 3-5 key advantages/highlights in Japanese',
    },
    watchouts: {
      type: 'ARRAY',
      items: { type: 'STRING' },
      description: 'List of 1-3 potential concerns/things to watch out for in Japanese',
    },
    jpySupported: {
      type: 'BOOLEAN',
      description: 'Whether Japanese Yen is directly supported',
    },
    kycRequired: {
      type: 'BOOLEAN',
      description: 'Whether KYC/identity verification is typically required',
    },
    metaTitle: {
      type: 'STRING',
      description: 'SEO title in Japanese with year (e.g., "ビットコイン入出金ガイド【2025年最新版】")',
    },
    metaDescription: {
      type: 'STRING',
      description: 'SEO meta description in Japanese (120-160 characters)',
    },
  },
  required: [
    'name',
    'nameJa',
    'type',
    'processingTimeDeposit',
    'processingTimeWithdrawal',
    'highlights',
    'jpySupported',
    'kycRequired',
    'metaTitle',
    'metaDescription',
  ],
};

interface ExtractedPaymentData {
  name: string;
  nameJa: string;
  type: 'crypto' | 'ewallet' | 'bank' | 'card' | 'other';
  processingTimeDeposit: string;
  processingTimeWithdrawal: string;
  feeDeposit?: string;
  feeWithdrawal?: string;
  feeNote?: string;
  highlights: string[];
  watchouts?: string[];
  jpySupported: boolean;
  kycRequired: boolean;
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

async function callGeminiStructured(prompt: string): Promise<ExtractedPaymentData> {
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
          responseSchema: PAYMENT_SCHEMA,
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

  return JSON.parse(jsonText) as ExtractedPaymentData;
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

async function extractPaymentData(slug: string, markdown: string): Promise<ExtractedPaymentData> {
  const prompt = `Extract structured payment method data from this Japanese payment guide article.

## PAYMENT METHOD SLUG
${slug}

## SOURCE CONTENT
${markdown}

## EXTRACTION INSTRUCTIONS

Extract the following information from the article:

1. **name**: The payment method's English name (e.g., "Bitcoin", "Bank Transfer")
2. **nameJa**: The payment method's Japanese name (e.g., "ビットコイン", "銀行送金")
3. **type**: Payment type - one of: "crypto", "ewallet", "bank", "card", "other"
   - crypto: Bitcoin, Ethereum, USDT, etc.
   - ewallet: Payz, Vega Wallet, MuchBetter, etc.
   - bank: Bank transfer, J-Pay, etc.
   - card: Visa, Mastercard, JCB, etc.
   - other: Everything else
4. **processingTimeDeposit**: How long deposits take (e.g., "即時", "数分", "1-3営業日")
5. **processingTimeWithdrawal**: How long withdrawals take (e.g., "数時間〜1営業日", "24-72時間")
6. **feeDeposit**: Deposit fees (e.g., "無料", "1-3%") - optional
7. **feeWithdrawal**: Withdrawal fees (e.g., "無料", "数百円相当") - optional
8. **feeNote**: Additional fee notes in Japanese - optional
9. **highlights**: 3-5 key advantages in Japanese
10. **watchouts**: 1-3 potential concerns in Japanese - optional
11. **jpySupported**: true if Japanese Yen is directly supported, false otherwise
12. **kycRequired**: true if KYC/identity verification is typically required
13. **metaTitle**: SEO title (include payment method name and year)
14. **metaDescription**: SEO description (120-160 characters, Japanese)

Return the extracted data as JSON matching the schema.`;

  return await callGeminiStructured(prompt);
}

function generateTypeScriptFile(slug: string, data: ExtractedPaymentData): string {
  const highlightsStr = data.highlights.map((h) => `      '${h.replace(/'/g, "\\'")}'`).join(',\n');
  const watchoutsStr = data.watchouts
    ? data.watchouts.map((w) => `      '${w.replace(/'/g, "\\'")}'`).join(',\n')
    : '';

  // Convert slug to valid JS identifier (replace hyphens with underscores)
  const varName = slug.replace(/-/g, '_');

  return `import type { PaymentMethodData } from './types';

export const ${varName}: PaymentMethodData = {
  slug: '${slug}',
  name: '${data.name.replace(/'/g, "\\'")}',
  nameJa: '${data.nameJa.replace(/'/g, "\\'")}',
  logo: '/assets/payment/${slug}.png',
  type: '${data.type}',

  processingTime: {
    deposit: '${data.processingTimeDeposit.replace(/'/g, "\\'")}',
    withdrawal: '${data.processingTimeWithdrawal.replace(/'/g, "\\'")}',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '${(data.feeDeposit || '無料').replace(/'/g, "\\'")}',
    withdrawal: '${(data.feeWithdrawal || 'カジノによる').replace(/'/g, "\\'")}',${
      data.feeNote
        ? `
    note: '${data.feeNote.replace(/'/g, "\\'")}',`
        : ''
    }
  },

  features: {
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
    jpySupported: ${data.jpySupported},
    kycRequired: ${data.kycRequired},
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: '${data.metaTitle.replace(/'/g, "\\'")}',
    description: '${data.metaDescription.replace(/'/g, "\\'")}',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
`;
}

// ============================================
// MAIN BATCH PROCESSING
// ============================================

async function convertSinglePayment(slug: string): Promise<ConversionResult> {
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
    const sourcePath = path.join(OLD_CONTENT_DIR, 'payment', slug, 'rewritten.md');
    const markdown = await fs.readFile(sourcePath, 'utf-8');

    // Convert to MDX
    console.log(`  [${slug}] Converting to MDX...`);
    const mdxContent = await convertToMDX(slug, markdown);
    await fs.writeFile(path.join(NEW_MDX_DIR, `${slug}.mdx`), mdxContent);
    result.mdxGenerated = true;

    // Extract payment data
    console.log(`  [${slug}] Extracting payment data...`);
    const paymentData = await extractPaymentData(slug, markdown);
    const tsContent = generateTypeScriptFile(slug, paymentData);
    await fs.writeFile(path.join(PAYMENT_DATA_DIR, `${slug}.ts`), tsContent);
    result.dataExtracted = true;

    result.success = true;
  } catch (error) {
    result.error = error instanceof Error ? error.message : String(error);
  }

  result.duration = Date.now() - startTime;
  return result;
}

async function processBatch(slugs: string[]): Promise<ConversionResult[]> {
  const results = await Promise.all(slugs.map((slug) => convertSinglePayment(slug)));
  return results;
}

async function getAllSlugs(): Promise<string[]> {
  const entries = await fs.readdir(path.join(OLD_CONTENT_DIR, 'payment'), { withFileTypes: true });
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
  await fs.mkdir(PAYMENT_DATA_DIR, { recursive: true });

  // Get slugs to process
  let slugs = specificSlugs || (await getAllSlugs());

  if (skipExisting) {
    const existing = await getExistingMDXSlugs();
    slugs = slugs.filter((s) => !existing.has(s));
    console.log(`Skipping ${existing.size} already converted payment methods`);
  }

  console.log(`\n📋 Payment methods to convert: ${slugs.length}`);
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
  const logPath = path.join(process.cwd(), 'payment-conversion-log.json');
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
