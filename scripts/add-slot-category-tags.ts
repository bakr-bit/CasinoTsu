/**
 * Script to automatically add categoryTags to slot data files
 * Based on analyzing existing slot data (name, volatility, RTP, features)
 */

import * as fs from 'fs';
import * as path from 'path';

const SLOTS_DIR = path.join(__dirname, '../content/data/slots');

interface CategoryTags {
  mechanics?: string[];
  volatilityLevel?: 'low' | 'medium' | 'high';
  themes?: string[];
  features?: string[];
  isNew?: boolean;
  isHighRtp?: boolean;
}

function detectMechanics(slug: string, title: string, content: string): string[] {
  const mechanics: string[] = [];
  const lowerTitle = title.toLowerCase();
  const lowerContent = content.toLowerCase();

  if (lowerTitle.includes('megaways') || slug.includes('megaways')) {
    mechanics.push('megaways');
  }
  if (lowerContent.includes('クラスター') || lowerContent.includes('cluster')) {
    mechanics.push('cluster');
  }
  if (lowerTitle.includes('hold') || lowerContent.includes('hold and win') || lowerContent.includes('hold & win')) {
    mechanics.push('hold-and-win');
  }
  if (lowerContent.includes('ボーナス購入') || lowerContent.includes('bonus buy') || lowerContent.includes('フリースピン購入')) {
    mechanics.push('bonus-buy');
  }
  if (lowerContent.includes('タンブル') || lowerContent.includes('tumble') || lowerContent.includes('落下機能')) {
    mechanics.push('tumble');
  }
  if (lowerContent.includes('expanding wild') || lowerContent.includes('拡大ワイルド')) {
    mechanics.push('expanding-wilds');
  }

  return mechanics;
}

function detectVolatility(volatilityText?: string): 'low' | 'medium' | 'high' | undefined {
  if (!volatilityText) return undefined;
  const lower = volatilityText.toLowerCase();

  if (lower.includes('低') || lower === 'low') return 'low';
  if (lower.includes('高') || lower === 'high') return 'high';
  if (lower.includes('中') || lower === 'medium' || lower.includes('medium')) return 'medium';

  // Handle combined like "中～高"
  if (lower.includes('中') && lower.includes('高')) return 'high';
  if (lower.includes('低') && lower.includes('中')) return 'medium';

  return undefined;
}

function detectThemes(slug: string, title: string): string[] {
  const themes: string[] = [];
  const lowerTitle = title.toLowerCase();
  const lowerSlug = slug.toLowerCase();

  // Japanese themes
  if (lowerSlug.includes('geisha') || lowerSlug.includes('oiran') ||
      lowerSlug.includes('sakura') || lowerSlug.includes('ninja') ||
      lowerSlug.includes('samurai') || lowerSlug.includes('matsuri') ||
      lowerSlug.includes('densho') || lowerSlug.includes('shinobi') ||
      lowerTitle.includes('芸者') || lowerTitle.includes('花魁')) {
    themes.push('japanese');
    if (lowerSlug.includes('geisha') || lowerSlug.includes('oiran')) {
      themes.push('geisha');
    }
  }

  // Halloween/Horror
  if (lowerSlug.includes('halloween') || lowerSlug.includes('spooky') ||
      lowerSlug.includes('zombie') || lowerSlug.includes('vampire') ||
      lowerSlug.includes('blood') || lowerSlug.includes('dead') ||
      lowerSlug.includes('dracula')) {
    themes.push('halloween');
  }

  // Christmas
  if (lowerSlug.includes('christmas') || lowerSlug.includes('xmas') ||
      lowerSlug.includes('santa') || lowerSlug.includes('winter')) {
    themes.push('xmas');
  }

  // Valentine
  if (lowerSlug.includes('valentine') || lowerSlug.includes('love') ||
      lowerSlug.includes('cupid')) {
    themes.push('valentine');
  }

  // Egyptian
  if (lowerSlug.includes('egypt') || lowerSlug.includes('pharaoh') ||
      lowerSlug.includes('cleopatra') || lowerSlug.includes('book-of')) {
    themes.push('egyptian');
  }

  // Mythology
  if (lowerSlug.includes('olympus') || lowerSlug.includes('zeus') ||
      lowerSlug.includes('athena') || lowerSlug.includes('viking') ||
      lowerSlug.includes('thor') || lowerSlug.includes('gods')) {
    themes.push('mythology');
  }

  // Fruit/Classic
  if (lowerSlug.includes('fruit') || lowerSlug.includes('cherry') ||
      lowerSlug.includes('joker') || lowerTitle.includes('フルーツ')) {
    themes.push('fruit');
  }

  // Asian (non-Japanese)
  if (lowerSlug.includes('dragon') || lowerSlug.includes('mahjong') ||
      lowerSlug.includes('fortune') || lowerSlug.includes('lucky')) {
    themes.push('asian');
  }

  return [...new Set(themes)]; // Remove duplicates
}

function detectFeatures(content: string): string[] {
  const features: string[] = [];
  const lower = content.toLowerCase();

  if (lower.includes('フリースピン') || lower.includes('free spin')) {
    features.push('free-spins');
  }
  if (lower.includes('プログレッシブ') || lower.includes('progressive') || lower.includes('ジャックポット')) {
    features.push('progressive-jackpot');
  }
  if (lower.includes('マルチプライヤー') || lower.includes('multiplier') || lower.includes('倍率')) {
    features.push('multiplier');
  }
  if (lower.includes('ボーナスラウンド') || lower.includes('bonus round')) {
    features.push('bonus-round');
  }
  if (lower.includes('リスピン') || lower.includes('re-spin') || lower.includes('respin')) {
    features.push('re-spins');
  }

  return features;
}

function parseRtp(rtpStr?: string): number {
  if (!rtpStr) return 0;
  const match = rtpStr.match(/(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 0;
}

function generateCategoryTags(
  slug: string,
  title: string,
  volatility?: string,
  rtp?: string,
  content?: string
): CategoryTags {
  const tags: CategoryTags = {};

  const mechanics = detectMechanics(slug, title, content || '');
  if (mechanics.length > 0) tags.mechanics = mechanics;

  const volatilityLevel = detectVolatility(volatility);
  if (volatilityLevel) tags.volatilityLevel = volatilityLevel;

  const themes = detectThemes(slug, title);
  if (themes.length > 0) tags.themes = themes;

  const features = detectFeatures(content || '');
  if (features.length > 0) tags.features = features;

  const rtpValue = parseRtp(rtp);
  if (rtpValue >= 96.5) {
    tags.isHighRtp = true;
  }

  return tags;
}

function formatCategoryTags(tags: CategoryTags): string {
  const parts: string[] = [];

  if (tags.mechanics && tags.mechanics.length > 0) {
    parts.push(`    mechanics: [${tags.mechanics.map(m => `'${m}'`).join(', ')}],`);
  }
  if (tags.volatilityLevel) {
    parts.push(`    volatilityLevel: '${tags.volatilityLevel}',`);
  }
  if (tags.themes && tags.themes.length > 0) {
    parts.push(`    themes: [${tags.themes.map(t => `'${t}'`).join(', ')}],`);
  }
  if (tags.features && tags.features.length > 0) {
    parts.push(`    features: [${tags.features.map(f => `'${f}'`).join(', ')}],`);
  }
  if (tags.isHighRtp) {
    parts.push(`    isHighRtp: true,`);
  }
  if (tags.isNew) {
    parts.push(`    isNew: true,`);
  }

  if (parts.length === 0) return '';

  return `  categoryTags: {\n${parts.join('\n')}\n  },`;
}

async function processSlotFile(filePath: string): Promise<boolean> {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has categoryTags
  if (content.includes('categoryTags:')) {
    console.log(`Skipping ${path.basename(filePath)} - already has categoryTags`);
    return false;
  }

  // Extract key data from the file
  const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  const volatilityMatch = content.match(/volatility:\s*['"]([^'"]+)['"]/);
  const rtpMatch = content.match(/rtp:\s*['"]([^'"]+)['"]/);

  if (!slugMatch || !titleMatch) {
    console.log(`Skipping ${path.basename(filePath)} - could not extract slug/title`);
    return false;
  }

  const slug = slugMatch[1];
  const title = titleMatch[1];
  const volatility = volatilityMatch?.[1];
  const rtp = rtpMatch?.[1];

  const tags = generateCategoryTags(slug, title, volatility, rtp, content);

  // Check if we have any meaningful tags
  if (Object.keys(tags).length === 0) {
    console.log(`Skipping ${path.basename(filePath)} - no tags detected`);
    return false;
  }

  const tagsString = formatCategoryTags(tags);

  // Find the position to insert categoryTags (before meta:)
  const metaIndex = content.indexOf('  meta:');
  if (metaIndex === -1) {
    console.log(`Skipping ${path.basename(filePath)} - could not find meta: section`);
    return false;
  }

  // Insert categoryTags before meta
  const newContent = content.slice(0, metaIndex) + tagsString + '\n' + content.slice(metaIndex);

  fs.writeFileSync(filePath, newContent);
  console.log(`Updated ${path.basename(filePath)} with categoryTags:`, JSON.stringify(tags));
  return true;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const onlyArg = args.find(a => a.startsWith('--only='));
  const onlyFiles = onlyArg ? onlyArg.split('=')[1].split(',') : null;

  const files = fs.readdirSync(SLOTS_DIR)
    .filter(f => f.endsWith('.ts') && !['index.ts', 'types.ts', 'categories.ts'].includes(f));

  let updated = 0;
  let skipped = 0;

  for (const file of files) {
    if (onlyFiles && !onlyFiles.some(of => file.includes(of))) {
      continue;
    }

    const filePath = path.join(SLOTS_DIR, file);

    if (dryRun) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
      const volatilityMatch = content.match(/volatility:\s*['"]([^'"]+)['"]/);
      const rtpMatch = content.match(/rtp:\s*['"]([^'"]+)['"]/);

      if (slugMatch && titleMatch) {
        const tags = generateCategoryTags(
          slugMatch[1],
          titleMatch[1],
          volatilityMatch?.[1],
          rtpMatch?.[1],
          content
        );
        console.log(`[DRY RUN] ${file}:`, JSON.stringify(tags));
      }
      continue;
    }

    try {
      const wasUpdated = await processSlotFile(filePath);
      if (wasUpdated) {
        updated++;
      } else {
        skipped++;
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
      skipped++;
    }
  }

  console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
}

main().catch(console.error);
