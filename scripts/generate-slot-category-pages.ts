/**
 * Script to generate static page.tsx files for slot category pages
 * Creates /app/slots/{category}/page.tsx for each category
 */

import * as fs from 'fs';
import * as path from 'path';
import { SLOT_CATEGORIES } from '../content/data/slots/categories';

const APP_SLOTS_DIR = path.join(__dirname, '../app/slots');

function generatePageContent(slug: string, titleJa: string, description: string): string {
  // Convert slug to PascalCase for component name
  const componentName = slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('') + 'Page';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';

export const metadata: Metadata = {
  title: "${titleJa}｜オンラインスロット攻略",
  description: "${description}",
};

export default async function ${componentName}() {
  const { content, frontmatter } = await loadMDX('slots-categories', '${slug}');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              スロットカテゴリー
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
`;
}

function generatePlaceholderMDX(slug: string, titleJa: string, description: string): string {
  const today = new Date().toISOString().split('T')[0];

  return `---
slug: ${slug}
title: "${titleJa}"
description: "${description}"
lastUpdated: "${today}"
author: "CasinoTsu"
status: draft
---

{/* User will provide longform SEO content here */}

## ${titleJa}について

${description}

{/* Add more content sections as needed */}
`;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const withMdx = args.includes('--with-mdx');

  console.log('Generating slot category pages...');
  if (dryRun) console.log('[DRY RUN MODE]');

  let created = 0;
  let skipped = 0;

  for (const category of SLOT_CATEGORIES) {
    const categoryDir = path.join(APP_SLOTS_DIR, category.slug);
    const pagePath = path.join(categoryDir, 'page.tsx');

    // Check if this is an existing slot (not a category)
    // Skip if directory exists with a page.tsx that imports slot data
    if (fs.existsSync(pagePath)) {
      const existingContent = fs.readFileSync(pagePath, 'utf-8');
      if (existingContent.includes('getSlot(')) {
        console.log(`Skipping ${category.slug} - existing slot page`);
        skipped++;
        continue;
      }
    }

    const pageContent = generatePageContent(category.slug, category.titleJa, category.description);

    if (dryRun) {
      console.log(`[DRY RUN] Would create: ${pagePath}`);
      continue;
    }

    // Create directory
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Write page.tsx
    fs.writeFileSync(pagePath, pageContent);
    console.log(`Created: ${pagePath}`);
    created++;

    // Optionally create placeholder MDX
    if (withMdx) {
      const mdxDir = path.join(__dirname, '../content/mdx/slots-categories');
      const mdxPath = path.join(mdxDir, `${category.slug}.mdx`);

      if (!fs.existsSync(mdxPath)) {
        const mdxContent = generatePlaceholderMDX(category.slug, category.titleJa, category.description);
        fs.writeFileSync(mdxPath, mdxContent);
        console.log(`Created MDX: ${mdxPath}`);
      }
    }
  }

  console.log(`\nDone! Created: ${created}, Skipped: ${skipped}`);
}

main().catch(console.error);
