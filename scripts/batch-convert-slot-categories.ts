/**
 * Batch Convert Slot Categories Script
 * Converts slot category pages from old SlotsTemplate format to MDX
 *
 * Usage:
 *   GEMINI_API_KEY="..." npx tsx scripts/batch-convert-slot-categories.ts
 *   GEMINI_API_KEY="..." npx tsx scripts/batch-convert-slot-categories.ts --skip-existing
 *   GEMINI_API_KEY="..." npx tsx scripts/batch-convert-slot-categories.ts --only=megaways,high-rtp
 *   GEMINI_API_KEY="..." npx tsx scripts/batch-convert-slot-categories.ts --dry-run
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OLD_SLOTS_DIR = '/Users/simon/Sites/japanese/japanese/app/slots';
const NEW_MDX_DIR = path.join(process.cwd(), 'content', 'mdx', 'slots-categories');

// List of category slugs (not individual slot pages)
const CATEGORY_SLUGS = [
  'megaways',
  'bonus-buy',
  'hold-and-win',
  'high-volatility',
  'medium-volatility',
  'low-volatility',
  'high-rtp',
  'best-payout',
  'geisha',
  'halloween-slots',
  'xmas',
  'valentine',
  'progressive-jackpot',
  'free',
  'new-slots',
  'slots-strategies',
  'hidden',
];

// Concurrency limit to avoid rate limiting
const CONCURRENCY = 2;
const BATCH_DELAY = 3000;

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
  error?: string;
  duration: number;
}

function buildSystemPrompt(slug: string): string {
  return `You are converting a Japanese slot category page from a SlotsTemplate data object to MDX format.

## BRANDING & VOICE
- You are writing for a blog called CasinoTsu (casinotsu.com)
- Write in first person voice, engaging and professional
- The correct branding is CasinoTsu (casinotsu.com)

## YOUR TASK

Convert the provided SlotsPageData object into a comprehensive MDX article about this slot category.

### 1. FRONTMATTER
Add YAML frontmatter at the top:
\`\`\`yaml
---
slug: ${slug}
title: "[Extract or improve the title]"
description: "[Create a compelling 1-2 sentence meta description in Japanese]"
lastUpdated: "2025-01-15"
author: "CasinoTsu"
status: "active"
---
\`\`\`

### 2. CONTENT STRUCTURE
Create a full article with these sections:

#### Introduction
- Start with an engaging introduction based on the "intro" field
- Explain what this category of slots is and why it's popular

#### Main Content Sections
Based on the data provided, create meaningful sections with ## headers:
- What are [category] slots? (explain the concept)
- Benefits and features (use prosCons data)
- How to choose the best [category] slot (use criteria data)
- Tips for playing (use tips data)
- FAQ section (use faq data)

#### Use MDX Components
Include relevant MDX components:

For casino/slot recommendations:
\`\`\`jsx
<CasinoList toplistId="slots-${slug}" limit={5} />
\`\`\`

For important tips or warnings:
\`\`\`jsx
<InfoBox type="tip" title="ヒント">
[Content]
</InfoBox>
\`\`\`

InfoBox types: "tip", "warning", "info"

#### Conclusion
End with a summary (## まとめ) that:
- Recaps key points
- Encourages responsible gambling
- Has a call to action

### 3. WRITING GUIDELINES
- Write naturally flowing Japanese content, not just bullet points
- Expand on the data provided to create informative paragraphs
- Use proper heading hierarchy (## for main sections, ### for subsections)
- Include internal links where appropriate: [テキスト](/slots/[slug])
- Make it SEO-friendly with keywords naturally integrated
- Minimum 800-1000 words of actual content

### 4. OUTPUT FORMAT
Output ONLY the MDX content, starting with the frontmatter. No explanations or code blocks wrapping the output.
`;
}

async function callGemini(prompt: string, sourceData: string): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required');
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt },
              { text: `\n\n## SOURCE DATA:\n\n${sourceData}` },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 8192,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${error}`);
  }

  const data = (await response.json()) as GeminiResponse;
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error('No content in Gemini response');
  }

  return text;
}

async function readOldPageData(slug: string): Promise<string | null> {
  const pagePath = path.join(OLD_SLOTS_DIR, slug, 'page.tsx');

  try {
    const content = await fs.readFile(pagePath, 'utf-8');

    // Check if it's a category page (uses SlotsTemplate)
    if (!content.includes('SlotsTemplate')) {
      return null;
    }

    // Extract the data object
    const dataMatch = content.match(/const data:\s*SlotsPageData\s*=\s*(\{[\s\S]*?\});/);
    if (!dataMatch) {
      // Try alternative pattern
      const altMatch = content.match(/const data\s*=\s*(\{[\s\S]*?\});/);
      if (altMatch) {
        return altMatch[1];
      }
      return null;
    }

    return dataMatch[1];
  } catch (error) {
    return null;
  }
}

async function convertCategory(slug: string): Promise<ConversionResult> {
  const startTime = Date.now();

  try {
    console.log(`\n📄 Processing: ${slug}`);

    // Read old page data
    const sourceData = await readOldPageData(slug);
    if (!sourceData) {
      return {
        slug,
        success: false,
        error: 'No SlotsTemplate data found or not a category page',
        duration: Date.now() - startTime,
      };
    }

    console.log(`  ✓ Found source data (${sourceData.length} chars)`);

    // Call Gemini to convert to MDX
    const prompt = buildSystemPrompt(slug);
    const mdxContent = await callGemini(prompt, sourceData);

    console.log(`  ✓ Generated MDX (${mdxContent.length} chars)`);

    // Write MDX file
    const mdxPath = path.join(NEW_MDX_DIR, `${slug}.mdx`);
    await fs.writeFile(mdxPath, mdxContent, 'utf-8');
    console.log(`  ✓ Wrote: ${mdxPath}`);

    return {
      slug,
      success: true,
      duration: Date.now() - startTime,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`  ✗ Error: ${message}`);
    return {
      slug,
      success: false,
      error: message,
      duration: Date.now() - startTime,
    };
  }
}

async function processBatch(slugs: string[]): Promise<ConversionResult[]> {
  const results: ConversionResult[] = [];

  for (let i = 0; i < slugs.length; i += CONCURRENCY) {
    const batch = slugs.slice(i, i + CONCURRENCY);

    const batchResults = await Promise.all(batch.map((slug) => convertCategory(slug)));

    results.push(...batchResults);

    // Delay between batches
    if (i + CONCURRENCY < slugs.length) {
      console.log(`\n⏳ Waiting ${BATCH_DELAY / 1000}s before next batch...`);
      await new Promise((resolve) => setTimeout(resolve, BATCH_DELAY));
    }
  }

  return results;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const skipExisting = args.includes('--skip-existing');
  const onlyArg = args.find((a) => a.startsWith('--only='));
  const onlySlugs = onlyArg ? onlyArg.split('=')[1].split(',') : null;

  console.log('🎰 Slot Category Conversion Script');
  console.log('===================================\n');

  if (!GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY environment variable is required');
    process.exit(1);
  }

  // Ensure output directory exists
  await fs.mkdir(NEW_MDX_DIR, { recursive: true });

  // Filter slugs
  let slugsToProcess = CATEGORY_SLUGS;

  if (onlySlugs) {
    slugsToProcess = CATEGORY_SLUGS.filter((s) => onlySlugs.includes(s));
    console.log(`📋 Processing only: ${slugsToProcess.join(', ')}`);
  }

  if (skipExisting) {
    const existing = await fs.readdir(NEW_MDX_DIR);
    const existingSlugs = existing.map((f) => f.replace('.mdx', ''));
    slugsToProcess = slugsToProcess.filter((s) => !existingSlugs.includes(s));
    console.log(`📋 Skipping existing, ${slugsToProcess.length} to process`);
  }

  if (dryRun) {
    console.log('\n🔍 DRY RUN - Would process:');
    for (const slug of slugsToProcess) {
      const hasData = await readOldPageData(slug);
      console.log(`  ${hasData ? '✓' : '✗'} ${slug}`);
    }
    return;
  }

  console.log(`\n📊 Processing ${slugsToProcess.length} categories...\n`);

  const results = await processBatch(slugsToProcess);

  // Summary
  console.log('\n\n📊 CONVERSION SUMMARY');
  console.log('=====================\n');

  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);

  console.log(`✅ Successful: ${successful.length}`);
  console.log(`❌ Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log('\nFailed conversions:');
    for (const r of failed) {
      console.log(`  - ${r.slug}: ${r.error}`);
    }
  }

  const totalTime = results.reduce((sum, r) => sum + r.duration, 0);
  console.log(`\n⏱️  Total time: ${(totalTime / 1000).toFixed(1)}s`);
}

main().catch(console.error);
