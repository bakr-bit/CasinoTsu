/**
 * Build Game Shows Index Script
 * Scans all game show data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-game-shows-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const GAME_SHOW_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'game-shows');

/**
 * Convert a slug to a valid JavaScript variable name
 * e.g., "crazy-time" -> "crazy_time", "lightning-roulette" -> "lightning_roulette"
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

async function buildGameShowsIndex(): Promise<void> {
  console.log('Building game shows index...\n');

  // Read all .ts files in the game-shows directory (excluding types.ts and index.ts)
  const files = await fs.readdir(GAME_SHOW_DATA_DIR);
  const gameShowFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts'
  );

  console.log(`Found ${gameShowFiles.length} game show files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of gameShowFiles.sort()) {
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
 * Game Show Data Registry
 * Central hub for all game show data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:game-shows-index
 */

import type { GameShowData, GameShowRegistry } from './types';

// Import individual game show data
${imports.join('\n')}

// Re-export types
export type { GameShowData, GameShowRegistry } from './types';

/**
 * Registry of all game shows indexed by slug
 */
export const gameShowsRegistry: GameShowRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single game show by slug
 */
export function getGameShow(slug: string): GameShowData | undefined {
  return gameShowsRegistry[slug];
}

/**
 * Get all game shows as an array
 */
export function getAllGameShows(): GameShowData[] {
  return Object.values(gameShowsRegistry);
}

/**
 * Get all game show slugs
 */
export function getGameShowSlugs(): string[] {
  return Object.keys(gameShowsRegistry);
}

/**
 * Get game shows by category
 */
export function getGameShowsByCategory(category: GameShowData['category']): GameShowData[] {
  return getAllGameShows().filter((game) => game.category === category);
}

/**
 * Get game shows by provider
 */
export function getGameShowsByProvider(provider: string): GameShowData[] {
  return getAllGameShows().filter((game) =>
    game.provider.toLowerCase().includes(provider.toLowerCase())
  );
}

/**
 * Get casinos that offer a specific game show
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForGameShow(gameShowSlug: string): string[] {
  const gameShow = gameShowsRegistry[gameShowSlug];
  return gameShow?.recommendedCasinos || [];
}
`;

  // Write the generated index.ts
  const indexPath = path.join(GAME_SHOW_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${gameShowFiles.length} game shows registered`);
}

buildGameShowsIndex().catch((err) => {
  console.error('Failed to build game shows index:', err);
  process.exit(1);
});
