/**
 * Build Guides Index Script
 * Scans all guides data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-guides-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const GUIDES_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'guides');

/**
 * Extract the actual export name from a guides data file
 */
async function getExportName(filePath: string): Promise<string | null> {
  const content = await fs.readFile(filePath, 'utf-8');
  const match = content.match(/export const ([a-zA-Z_][a-zA-Z0-9_]*): GuideData/);
  return match ? match[1] : null;
}

async function buildGuidesIndex(): Promise<void> {
  console.log('Building guides index...\n');

  // Read all .ts files in the guides directory (excluding types.ts and index.ts)
  const files = await fs.readdir(GUIDES_DATA_DIR);
  const guideFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts' && !f.endsWith('.json')
  );

  console.log(`Found ${guideFiles.length} guide files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of guideFiles.sort()) {
    const slug = file.replace('.ts', '');
    const filePath = path.join(GUIDES_DATA_DIR, file);
    const varName = await getExportName(filePath);

    if (!varName) {
      console.warn(`⚠️ Could not find export in ${file}, skipping`);
      continue;
    }

    imports.push(`import { ${varName} } from './${slug}';`);

    // If the slug has special characters, we need to quote it in the registry
    if (slug.includes('-') || /^\d/.test(slug)) {
      registryEntries.push(`  '${slug}': ${varName},`);
    } else {
      registryEntries.push(`  ${slug}: ${varName},`);
    }
  }

  // Generate the index.ts content
  const indexContent = `/**
 * Guides Data Registry
 * Central hub for all casino guide data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:guides-index
 */

import type { GuideData } from './types';

// Import individual guide data
${imports.join('\n')}

// Re-export types
export type { GuideData } from './types';

/**
 * Registry type for guides
 */
export type GuidesRegistry = Record<string, GuideData>;

/**
 * Registry of all guides indexed by slug
 */
export const guidesRegistry: GuidesRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single guide by slug
 */
export function getGuide(slug: string): GuideData | undefined {
  return guidesRegistry[slug];
}

/**
 * Get all guides as an array
 */
export function getAllGuides(): GuideData[] {
  return Object.values(guidesRegistry);
}

/**
 * Get all guide slugs
 */
export function getGuideSlugs(): string[] {
  return Object.keys(guidesRegistry);
}

/**
 * Get guides by category
 */
export function getGuidesByCategory(category: GuideData['category']): GuideData[] {
  return getAllGuides().filter((guide) => guide.category === category);
}

/**
 * Get guides by target audience
 */
export function getGuidesByAudience(audience: 'beginner' | 'intermediate' | 'advanced' | 'all'): GuideData[] {
  return getAllGuides().filter((guide) => guide.targetAudience === audience);
}

/**
 * Get beginner guides
 */
export function getBeginnerGuides(): GuideData[] {
  return getGuidesByCategory('beginner');
}

/**
 * Get strategy guides
 */
export function getStrategyGuides(): GuideData[] {
  return getGuidesByCategory('strategy');
}

/**
 * Get poker guides
 */
export function getPokerGuides(): GuideData[] {
  return getGuidesByCategory('poker');
}

/**
 * Get casino guides
 */
export function getCasinoGuides(): GuideData[] {
  return getGuidesByCategory('casino');
}

/**
 * Get bonus guides
 */
export function getBonusGuides(): GuideData[] {
  return getGuidesByCategory('bonus');
}

/**
 * Get safety guides
 */
export function getSafetyGuides(): GuideData[] {
  return getGuidesByCategory('safety');
}

/**
 * Get game guides
 */
export function getGameGuides(): GuideData[] {
  return getGuidesByCategory('games');
}
`;

  // Write the generated index.ts
  const indexPath = path.join(GUIDES_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${guideFiles.length} guides registered`);
}

buildGuidesIndex().catch((err) => {
  console.error('Failed to build guides index:', err);
  process.exit(1);
});
