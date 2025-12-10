/**
 * Convert Review Script
 * Transforms a review markdown file to MDX using Gemini API
 *
 * Usage: npx tsx scripts/convert-review.ts <slug>
 * Example: npx tsx scripts/convert-review.ts bitz
 */

import fs from 'fs/promises';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OLD_CONTENT_DIR = '/Users/simon/Sites/japanese/japanese/NewContent';
const NEW_MDX_DIR = path.join(process.cwd(), 'content', 'mdx', 'reviews');

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
}

/**
 * Call Gemini API
 */
async function callGemini(systemPrompt: string, userPrompt: string): Promise<string> {
  // Combine system + user prompt as a single user message
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

/**
 * Build the system prompt (instructions)
 */
function buildSystemPrompt(slug: string): string {
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

/**
 * Build the user prompt (the actual content to convert)
 */
function buildUserPrompt(markdown: string): string {
  return `Convert this markdown article to MDX format:

${markdown}`;
}

/**
 * Main conversion function
 */
async function convertReview(slug: string): Promise<void> {
  console.log(`Converting review: ${slug}`);

  // Read source markdown
  const sourcePath = path.join(OLD_CONTENT_DIR, 'reviews', slug, 'rewritten.md');
  console.log(`Reading from: ${sourcePath}`);

  const markdown = await fs.readFile(sourcePath, 'utf-8');
  console.log(`Source content: ${markdown.length} characters`);

  // Build prompts and call Gemini
  const systemPrompt = buildSystemPrompt(slug);
  const userPrompt = buildUserPrompt(markdown);
  console.log('Calling Gemini 2.5 Pro API...');

  let mdxContent = await callGemini(systemPrompt, userPrompt);

  // Clean up any code block wrappers that Gemini might add
  mdxContent = mdxContent
    .replace(/^```(?:yaml|mdx|markdown)?\n/gm, '')
    .replace(/\n```$/gm, '')
    .replace(/^```\n/gm, '')
    .trim();

  console.log(`Generated MDX: ${mdxContent.length} characters`);

  // Ensure output directory exists
  await fs.mkdir(NEW_MDX_DIR, { recursive: true });

  // Write output
  const outputPath = path.join(NEW_MDX_DIR, `${slug}.mdx`);
  await fs.writeFile(outputPath, mdxContent);
  console.log(`Written to: ${outputPath}`);

  // Also output to console for review
  console.log('\n--- GENERATED MDX ---\n');
  console.log(mdxContent);
}

// Run
const slug = process.argv[2];
if (!slug) {
  console.error('Usage: npx tsx scripts/convert-review.ts <slug>');
  console.error('Example: npx tsx scripts/convert-review.ts bitz');
  process.exit(1);
}

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable not set');
  process.exit(1);
}

convertReview(slug).catch((err) => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
