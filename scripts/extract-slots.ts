/**
 * Extract slot data from old TSX files to new MDX + TypeScript data format
 *
 * Usage:
 *   npx tsx scripts/extract-slots.ts              # Extract all slots
 *   npx tsx scripts/extract-slots.ts --only=sweet-bonanza,bonanza  # Extract specific slots
 *   npx tsx scripts/extract-slots.ts --dry-run    # Preview without writing
 */

import * as fs from 'fs';
import * as path from 'path';
import * as vm from 'vm';

const OLD_SLOTS_DIR = '/Users/simon/Sites/japanese/japanese/app/slots';
const DATA_OUT_DIR = './content/data/slots';
const MDX_OUT_DIR = './content/mdx/slots';

// Category pages to skip (use SlotsTemplate instead of SlotTemplate)
const CATEGORY_PAGES = ['best-payout', 'bonus-buy'];

interface ExtractedSlot {
  slug: string;
  data: any;
  sections: any[];
}

function slugToVarName(slug: string): string {
  return slug
    .replace(/-/g, '_')
    .replace(/^(\d)/, '_$1'); // Prefix with _ if starts with number
}

function escapeForTS(str: string): string {
  if (typeof str !== 'string') return str;
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function extractDataFromTSX(content: string): any | null {
  // Extract the data object - match from "const data: SlotPageData = {" or "const data = {" to the closing "};"
  // We need to find the balanced braces
  const startMatch = content.match(/const data(?::\s*SlotPageData)?\s*=\s*\{/);
  if (!startMatch || startMatch.index === undefined) {
    return null;
  }

  const startIndex = startMatch.index + startMatch[0].length - 1; // Position of opening {
  let braceCount = 1;
  let i = startIndex + 1;

  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') braceCount++;
    else if (content[i] === '}') braceCount--;
    i++;
  }

  if (braceCount !== 0) {
    return null;
  }

  const objectStr = content.substring(startIndex, i);

  try {
    // Use vm to safely evaluate the object literal
    const sandbox = {};
    const result = vm.runInNewContext(`(${objectStr})`, sandbox);
    return result;
  } catch (error) {
    console.error('Failed to parse data object:', error);
    return null;
  }
}

function generateDataFile(slug: string, data: any): string {
  const varName = slugToVarName(slug);

  // Extract relevant fields, excluding casinos, breadcrumbs, etc.
  const {
    casinos,
    featuredCasino,
    breadcrumbs,
    tableOfContents,
    cta,
    sections,
    ...slotData
  } = data;

  const lines: string[] = [];
  lines.push(`import type { SlotData } from './types';`);
  lines.push('');
  lines.push(`export const ${varName}: SlotData = {`);
  lines.push(`  slug: '${slug}',`);
  lines.push(`  title: '${escapeForTS(data.title)}',`);

  // Hero
  if (data.hero) {
    lines.push(`  hero: {`);
    lines.push(`    title: '${escapeForTS(data.hero.title)}',`);
    if (data.hero.subheading) lines.push(`    subheading: '${escapeForTS(data.hero.subheading)}',`);
    if (data.hero.description) lines.push(`    description: '${escapeForTS(data.hero.description)}',`);
    lines.push(`    score: ${data.hero.score},`);
    lines.push(`    scoreMax: ${data.hero.scoreMax},`);
    if (data.hero.rtp) lines.push(`    rtp: '${escapeForTS(data.hero.rtp)}',`);
    if (data.hero.maxMultiplier) lines.push(`    maxMultiplier: '${escapeForTS(data.hero.maxMultiplier)}',`);
    if (data.hero.provider) lines.push(`    provider: '${escapeForTS(data.hero.provider)}',`);
    if (data.hero.releaseDate) lines.push(`    releaseDate: '${escapeForTS(data.hero.releaseDate)}',`);
    if (data.hero.volatility) lines.push(`    volatility: '${escapeForTS(data.hero.volatility)}',`);
    if (data.hero.reels) lines.push(`    reels: '${escapeForTS(data.hero.reels)}',`);
    if (data.hero.paylines) lines.push(`    paylines: '${escapeForTS(data.hero.paylines)}',`);
    if (data.hero.minBet) lines.push(`    minBet: '${escapeForTS(data.hero.minBet)}',`);
    if (data.hero.maxBet) lines.push(`    maxBet: '${escapeForTS(data.hero.maxBet)}',`);
    if (data.hero.slotImageSrc) lines.push(`    slotImageSrc: '${escapeForTS(data.hero.slotImageSrc)}',`);
    if (data.hero.highlights?.length) {
      lines.push(`    highlights: [`);
      data.hero.highlights.forEach((h: string) => lines.push(`      '${escapeForTS(h)}',`));
      lines.push(`    ],`);
    }
    if (data.hero.watchouts?.length) {
      lines.push(`    watchouts: [`);
      data.hero.watchouts.forEach((w: string) => lines.push(`      '${escapeForTS(w)}',`));
      lines.push(`    ],`);
    }
    lines.push(`  },`);
  }

  // Game info
  if (data.gameInfo) {
    lines.push(`  gameInfo: {`);
    if (data.gameInfo.intro) lines.push(`    intro: '${escapeForTS(data.gameInfo.intro)}',`);
    if (data.gameInfo.basicInfo) {
      lines.push(`    basicInfo: {`);
      const bi = data.gameInfo.basicInfo;
      lines.push(`      rtp: '${escapeForTS(bi.rtp)}',`);
      lines.push(`      volatility: '${escapeForTS(bi.volatility)}',`);
      lines.push(`      reels: '${escapeForTS(bi.reels)}',`);
      lines.push(`      paylines: '${escapeForTS(bi.paylines)}',`);
      lines.push(`      minBet: '${escapeForTS(bi.minBet)}',`);
      lines.push(`      maxBet: '${escapeForTS(bi.maxBet)}',`);
      lines.push(`      provider: '${escapeForTS(bi.provider)}',`);
      if (bi.releaseDate) lines.push(`      releaseDate: '${escapeForTS(bi.releaseDate)}',`);
      lines.push(`    },`);
    }
    lines.push(`  },`);
  }

  // Payout table
  if (data.payoutTable) {
    lines.push(`  payoutTable: {`);
    if (data.payoutTable.title) lines.push(`    title: '${escapeForTS(data.payoutTable.title)}',`);
    lines.push(`    symbols: [`);
    data.payoutTable.symbols?.forEach((s: any) => {
      lines.push(`      {`);
      lines.push(`        name: '${escapeForTS(s.name)}',`);
      if (s.description) lines.push(`        description: '${escapeForTS(s.description)}',`);
      if (s.payout5) lines.push(`        payout5: '${escapeForTS(s.payout5)}',`);
      if (s.payout4) lines.push(`        payout4: '${escapeForTS(s.payout4)}',`);
      if (s.payout3) lines.push(`        payout3: '${escapeForTS(s.payout3)}',`);
      if (s.isSpecial) lines.push(`        isSpecial: true,`);
      lines.push(`      },`);
    });
    lines.push(`    ],`);
    if (data.payoutTable.maxPayout) lines.push(`    maxPayout: '${escapeForTS(data.payoutTable.maxPayout)}',`);
    if (data.payoutTable.notes?.length) {
      lines.push(`    notes: [`);
      data.payoutTable.notes.forEach((n: string) => lines.push(`      '${escapeForTS(n)}',`));
      lines.push(`    ],`);
    }
    lines.push(`  },`);
  }

  // Features
  if (data.features) {
    lines.push(`  features: {`);
    if (data.features.title) lines.push(`    title: '${escapeForTS(data.features.title)}',`);
    lines.push(`    items: [`);
    data.features.items?.forEach((f: any) => {
      lines.push(`      {`);
      lines.push(`        name: '${escapeForTS(f.name)}',`);
      lines.push(`        description: '${escapeForTS(f.description)}',`);
      lines.push(`      },`);
    });
    lines.push(`    ],`);
    lines.push(`  },`);
  }

  // Similar games
  if (data.similarGames?.length) {
    lines.push(`  similarGames: [`);
    data.similarGames.forEach((g: any) => {
      lines.push(`    {`);
      lines.push(`      name: '${escapeForTS(g.name)}',`);
      if (g.href) lines.push(`      href: '${escapeForTS(g.href)}',`);
      if (g.provider) lines.push(`      provider: '${escapeForTS(g.provider)}',`);
      if (g.description) lines.push(`      description: '${escapeForTS(g.description)}',`);
      lines.push(`    },`);
    });
    lines.push(`  ],`);
  }

  // Pros/cons
  if (data.prosCons) {
    lines.push(`  prosCons: {`);
    lines.push(`    pros: [`);
    data.prosCons.pros?.forEach((p: string) => lines.push(`      '${escapeForTS(p)}',`));
    lines.push(`    ],`);
    lines.push(`    cons: [`);
    data.prosCons.cons?.forEach((c: string) => lines.push(`      '${escapeForTS(c)}',`));
    lines.push(`    ],`);
    lines.push(`  },`);
  }

  // FAQ
  if (data.faq?.length) {
    lines.push(`  faq: [`);
    data.faq.forEach((qa: any) => {
      lines.push(`    {`);
      lines.push(`      q: '${escapeForTS(qa.q)}',`);
      lines.push(`      a: '${escapeForTS(qa.a)}',`);
      lines.push(`    },`);
    });
    lines.push(`  ],`);
  }

  // Meta
  lines.push(`  meta: {`);
  lines.push(`    title: '${escapeForTS(data.title)}',`);
  lines.push(`    description: '${escapeForTS(data.hero?.description || '')}',`);
  lines.push(`  },`);

  lines.push(`};`);
  lines.push('');

  return lines.join('\n');
}

function generateMDXFile(slug: string, data: any): string {
  const lines: string[] = [];

  // Frontmatter
  lines.push('---');
  lines.push(`slug: ${slug}`);
  lines.push(`title: "${data.title?.replace(/"/g, '\\"') || slug}"`);
  lines.push(`description: "${(data.hero?.description || '').replace(/"/g, '\\"')}"`);
  lines.push(`author: casinotsu`);
  lines.push(`lastUpdated: ${new Date().toISOString().split('T')[0]}`);
  lines.push(`status: active`);
  lines.push('---');
  lines.push('');

  // Game intro
  if (data.gameInfo?.intro) {
    lines.push(`## ゲーム概要`);
    lines.push('');
    lines.push(data.gameInfo.intro);
    lines.push('');
  }

  // Casino list component
  lines.push(`<SlotCasinoList slotId="${slug}" />`);
  lines.push('');

  // Payout table component (if exists)
  if (data.payoutTable) {
    lines.push(`## シンボルとペイアウト`);
    lines.push('');
    lines.push(`<PayoutTable slotId="${slug}" />`);
    lines.push('');
  }

  // Features component (if exists)
  if (data.features?.items?.length) {
    lines.push(`## ゲームフィーチャー`);
    lines.push('');
    lines.push(`<SlotFeatures slotId="${slug}" />`);
    lines.push('');
  }

  // Sections (prose content)
  if (data.sections?.length) {
    data.sections.forEach((section: any) => {
      if (section.heading) {
        lines.push(`## ${section.heading}`);
        lines.push('');
      }

      if (section.paragraphs?.length) {
        section.paragraphs.forEach((p: string) => {
          lines.push(p);
          lines.push('');
        });
      }

      if (section.bullets?.length) {
        section.bullets.forEach((b: string) => {
          lines.push(`- ${b}`);
        });
        lines.push('');
      }

      if (section.table) {
        // Convert table to markdown
        if (section.table.title) {
          lines.push(`### ${section.table.title}`);
          lines.push('');
        }
        if (section.table.columns && section.table.rows) {
          lines.push('| ' + section.table.columns.join(' | ') + ' |');
          lines.push('| ' + section.table.columns.map(() => '---').join(' | ') + ' |');
          section.table.rows.forEach((row: string[]) => {
            lines.push('| ' + row.join(' | ') + ' |');
          });
          lines.push('');
        }
      }
    });
  }

  // Similar games
  if (data.similarGames?.length) {
    lines.push(`## 類似ゲーム`);
    lines.push('');
    data.similarGames.forEach((g: any) => {
      if (g.href) {
        lines.push(`- [${g.name}](${g.href})${g.provider ? ` (${g.provider})` : ''}${g.description ? `: ${g.description}` : ''}`);
      } else {
        lines.push(`- ${g.name}${g.provider ? ` (${g.provider})` : ''}${g.description ? `: ${g.description}` : ''}`);
      }
    });
    lines.push('');
  }

  // Pros/cons
  if (data.prosCons) {
    lines.push(`## メリット・デメリット`);
    lines.push('');
    if (data.prosCons.pros?.length) {
      lines.push(`### メリット`);
      lines.push('');
      data.prosCons.pros.forEach((p: string) => lines.push(`- ${p}`));
      lines.push('');
    }
    if (data.prosCons.cons?.length) {
      lines.push(`### デメリット`);
      lines.push('');
      data.prosCons.cons.forEach((c: string) => lines.push(`- ${c}`));
      lines.push('');
    }
  }

  // FAQ
  if (data.faq?.length) {
    lines.push(`## よくある質問`);
    lines.push('');
    data.faq.forEach((qa: any) => {
      lines.push(`### ${qa.q}`);
      lines.push('');
      lines.push(qa.a);
      lines.push('');
    });
  }

  return lines.join('\n');
}

async function extractSlot(slug: string, dryRun: boolean = false): Promise<boolean> {
  const tsxPath = path.join(OLD_SLOTS_DIR, slug, 'page.tsx');

  if (!fs.existsSync(tsxPath)) {
    console.error(`  ✗ File not found: ${tsxPath}`);
    return false;
  }

  const content = fs.readFileSync(tsxPath, 'utf-8');

  // Skip category pages
  if (content.includes('SlotsTemplate')) {
    console.log(`  ⊘ Skipping category page: ${slug}`);
    return false;
  }

  // Extract data
  const data = extractDataFromTSX(content);
  if (!data) {
    console.error(`  ✗ Could not extract data from ${slug}`);
    return false;
  }

  // Generate files
  const dataContent = generateDataFile(slug, data);
  const mdxContent = generateMDXFile(slug, data);

  if (dryRun) {
    console.log(`  ✓ Would write: ${DATA_OUT_DIR}/${slug}.ts`);
    console.log(`  ✓ Would write: ${MDX_OUT_DIR}/${slug}.mdx`);
    return true;
  }

  // Write files
  const dataPath = path.join(DATA_OUT_DIR, `${slug}.ts`);
  const mdxPath = path.join(MDX_OUT_DIR, `${slug}.mdx`);

  fs.writeFileSync(dataPath, dataContent);
  fs.writeFileSync(mdxPath, mdxContent);

  console.log(`  ✓ Extracted: ${slug}`);
  return true;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const onlyArg = args.find(a => a.startsWith('--only='));
  const skipExisting = args.includes('--skip-existing');

  // Ensure output directories exist
  if (!dryRun) {
    if (!fs.existsSync(DATA_OUT_DIR)) fs.mkdirSync(DATA_OUT_DIR, { recursive: true });
    if (!fs.existsSync(MDX_OUT_DIR)) fs.mkdirSync(MDX_OUT_DIR, { recursive: true });
  }

  // Get list of slots to process
  let slugs: string[];

  if (onlyArg) {
    slugs = onlyArg.replace('--only=', '').split(',');
  } else {
    slugs = fs.readdirSync(OLD_SLOTS_DIR)
      .filter(f => {
        const stat = fs.statSync(path.join(OLD_SLOTS_DIR, f));
        return stat.isDirectory() && !CATEGORY_PAGES.includes(f);
      });
  }

  console.log(`\nExtracting ${slugs.length} slots...${dryRun ? ' (dry run)' : ''}\n`);

  let success = 0;
  let failed = 0;
  let skipped = 0;

  for (const slug of slugs) {
    // Skip if already exists
    if (skipExisting) {
      const dataPath = path.join(DATA_OUT_DIR, `${slug}.ts`);
      if (fs.existsSync(dataPath)) {
        console.log(`  ⊘ Already exists: ${slug}`);
        skipped++;
        continue;
      }
    }

    const result = await extractSlot(slug, dryRun);
    if (result) {
      success++;
    } else if (!CATEGORY_PAGES.includes(slug)) {
      failed++;
    } else {
      skipped++;
    }
  }

  console.log(`\n✓ Completed: ${success} extracted, ${failed} failed, ${skipped} skipped`);
}

main().catch(console.error);
