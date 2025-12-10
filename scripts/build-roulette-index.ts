/**
 * Build Roulette Index Script
 * Scans all roulette data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-roulette-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const ROULETTE_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'roulette');

/**
 * Convert a slug to a valid JavaScript variable name
 * e.g., "european" -> "european", "ez-dealer-roulette-japanese" -> "ez_dealer_roulette_japanese"
 */
function slugToVarName(slug: string): string {
  // Handle slugs that start with numbers
  let name = slug;
  if (/^\d/.test(name)) {
    name = '_' + name;
  }

  // Convert kebab-case to snake_case (matching the generated files)
  return name.replace(/-/g, '_');
}

async function buildRouletteIndex(): Promise<void> {
  console.log('Building roulette index...\n');

  // Read all .ts files in the roulette directory (excluding types.ts and index.ts)
  const files = await fs.readdir(ROULETTE_DATA_DIR);
  const rouletteFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts'
  );

  console.log(`Found ${rouletteFiles.length} roulette files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of rouletteFiles.sort()) {
    const slug = file.replace('.ts', '');
    const varName = slugToVarName(slug);

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
 * Roulette Data Registry
 * Central hub for all roulette variant/guide data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:roulette-index
 */

import type { RouletteData, RouletteRegistry } from './types';

// Import individual roulette data
${imports.join('\n')}

// Re-export types
export type { RouletteData, RouletteRegistry } from './types';

/**
 * Registry of all roulette content indexed by slug
 */
export const rouletteRegistry: RouletteRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single roulette entry by slug
 */
export function getRoulette(slug: string): RouletteData | undefined {
  return rouletteRegistry[slug];
}

/**
 * Get all roulette entries as an array
 */
export function getAllRoulette(): RouletteData[] {
  return Object.values(rouletteRegistry);
}

/**
 * Get all roulette slugs
 */
export function getRouletteSlugs(): string[] {
  return Object.keys(rouletteRegistry);
}

/**
 * Get roulette entries by category
 * @param category - One of: 'variant', 'strategy', 'rules', 'guide'
 */
export function getRouletteByCategory(category: string): RouletteData[] {
  return getAllRoulette().filter((roulette) => roulette.category === category);
}

/**
 * Get roulette entries by wheel type
 * @param wheelType - One of: 'european', 'american', 'french', 'other'
 */
export function getRouletteByWheelType(wheelType: string): RouletteData[] {
  return getAllRoulette().filter((roulette) => roulette.wheelType === wheelType);
}

/**
 * Get roulette entries by difficulty
 * @param difficulty - One of: 'beginner', 'intermediate', 'advanced'
 */
export function getRouletteByDifficulty(difficulty: string): RouletteData[] {
  return getAllRoulette().filter((roulette) => roulette.difficulty === difficulty);
}

/**
 * Get casinos that offer good roulette games
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForRoulette(rouletteSlug: string): string[] {
  const roulette = rouletteRegistry[rouletteSlug];
  return roulette?.recommendedCasinos || [];
}

/**
 * Search roulette entries by name (English or Japanese)
 */
export function searchRoulette(query: string): RouletteData[] {
  const lowerQuery = query.toLowerCase();
  return getAllRoulette().filter(
    (roulette) =>
      roulette.name.toLowerCase().includes(lowerQuery) ||
      roulette.nameJa.includes(query)
  );
}
`;

  // Write the generated index.ts
  const indexPath = path.join(ROULETTE_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`Generated ${indexPath}`);
  console.log(`   - ${rouletteFiles.length} roulette entries registered`);
}

buildRouletteIndex().catch((err) => {
  console.error('Failed to build roulette index:', err);
  process.exit(1);
});
