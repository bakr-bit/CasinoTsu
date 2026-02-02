#!/usr/bin/env node
/**
 * Script to update child pages to use ArticleHeroWrapper with category header images
 * Usage: node scripts/update-hero-images.js [--dry-run] [--category=NAME]
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const SKIP_CATEGORIES = ['slots']; // Categories to skip

// Parse command line arguments
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const categoryArg = args.find(a => a.startsWith('--category='));
const specificCategory = categoryArg ? categoryArg.split('=')[1] : null;

// Get all categories
const categories = fs.readdirSync(APP_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(name => !SKIP_CATEGORIES.includes(name))
  .filter(name => !specificCategory || name === specificCategory);

console.log(`Processing categories: ${categories.join(', ')}`);
console.log(`Mode: ${dryRun ? 'DRY RUN' : 'LIVE'}\n`);

let totalUpdated = 0;
let totalSkipped = 0;
let totalErrors = 0;

for (const category of categories) {
  const categoryDir = path.join(APP_DIR, category);

  // Find all page.tsx files in subdirectories (child pages, not pillar page)
  const childDirs = fs.readdirSync(categoryDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const childDir of childDirs) {
    const pagePath = path.join(categoryDir, childDir, 'page.tsx');

    if (!fs.existsSync(pagePath)) {
      continue;
    }

    try {
      let content = fs.readFileSync(pagePath, 'utf-8');

      // Skip if already updated
      if (content.includes('ArticleHeroWrapper')) {
        console.log(`  [SKIP] ${category}/${childDir} - already updated`);
        totalSkipped++;
        continue;
      }

      // Check if it has a hero section pattern
      const heroMatch = content.match(/<section className="(bg-[\w-]+) text-white">/);
      if (!heroMatch) {
        console.log(`  [SKIP] ${category}/${childDir} - no standard hero pattern found`);
        totalSkipped++;
        continue;
      }

      const bgColor = heroMatch[1];

      // Add imports if not present
      if (!content.includes("import { ArticleHeroWrapper }")) {
        // Find the last import line
        const importMatch = content.match(/^(import .+;\n)+/m);
        if (importMatch) {
          const lastImportEnd = importMatch.index + importMatch[0].length;
          const newImports = `import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';\nimport { getCategoryHeader } from '@/lib/category-headers';\n`;
          content = content.slice(0, lastImportEnd) + newImports + content.slice(lastImportEnd);
        }
      }

      // Replace the hero section opening
      // Old: <section className="bg-COLOR text-white">
      //        <div className="container mx-auto px-4 py-16 md:py-24">
      // New: <ArticleHeroWrapper bgColor="bg-COLOR" heroImage={getCategoryHeader('CATEGORY')}>

      const heroOpenPattern = /<section className="(bg-[\w-]+) text-white">\s*<div className="container mx-auto px-4 py-16 md:py-24">/;
      content = content.replace(heroOpenPattern, `<ArticleHeroWrapper bgColor="${bgColor}" heroImage={getCategoryHeader('${category}')}>`);

      // Also handle the variant with relative overflow-hidden
      const heroOpenPattern2 = /<section className="(bg-[\w-]+) text-white relative overflow-hidden">\s*<div className="container mx-auto px-4 py-16 md:py-24">/;
      content = content.replace(heroOpenPattern2, `<ArticleHeroWrapper bgColor="${bgColor}" heroImage={getCategoryHeader('${category}')}>`);

      // Replace the hero section closing
      // Look for the pattern: </div>\n      </section> where the div closes the container
      // This is tricky because there might be nested divs

      // Find the {/* Hero Section */} comment and track from there
      const heroCommentMatch = content.match(/\{\/\* Hero Section \*\/\}/);
      if (heroCommentMatch) {
        // Find </section> after the hero comment
        const heroStart = heroCommentMatch.index;
        const afterHero = content.slice(heroStart);

        // Find the first </section> which closes the hero
        const sectionCloseMatch = afterHero.match(/<\/section>/);
        if (sectionCloseMatch) {
          const sectionCloseIndex = heroStart + sectionCloseMatch.index;

          // Look for the </div> before </section> that closes the container
          const beforeSection = content.slice(0, sectionCloseIndex);
          const lastDivClose = beforeSection.lastIndexOf('</div>');

          if (lastDivClose > heroStart) {
            // Check if this </div> is right before </section> (with whitespace)
            const between = content.slice(lastDivClose + 6, sectionCloseIndex);
            if (between.trim() === '') {
              // Remove the </div> and replace </section> with </ArticleHeroWrapper>
              content = content.slice(0, lastDivClose) +
                       content.slice(lastDivClose + 6, sectionCloseIndex) +
                       '</ArticleHeroWrapper>' +
                       content.slice(sectionCloseIndex + 10);
            }
          }
        }
      }

      if (!dryRun) {
        fs.writeFileSync(pagePath, content);
      }

      console.log(`  [${dryRun ? 'WOULD UPDATE' : 'UPDATED'}] ${category}/${childDir}`);
      totalUpdated++;

    } catch (err) {
      console.error(`  [ERROR] ${category}/${childDir}: ${err.message}`);
      totalErrors++;
    }
  }
}

console.log(`\n--- Summary ---`);
console.log(`Updated: ${totalUpdated}`);
console.log(`Skipped: ${totalSkipped}`);
console.log(`Errors: ${totalErrors}`);
