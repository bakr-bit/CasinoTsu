/**
 * Build Poker Index Script
 * Scans all poker data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-poker-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const POKER_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'poker');

/**
 * Convert a slug to a valid JavaScript variable name
 * e.g., "texas-hold-em" -> "texas_hold_em", "7-card-stud" -> "_7_card_stud"
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

async function buildPokerIndex(): Promise<void> {
  console.log('Building poker index...\n');

  // Read all .ts files in the poker directory (excluding types.ts and index.ts)
  const files = await fs.readdir(POKER_DATA_DIR);
  const pokerFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts'
  );

  console.log(`Found ${pokerFiles.length} poker files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of pokerFiles.sort()) {
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
 * Poker Data Registry
 * Central hub for all poker variant/guide data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:poker-index
 */

import type { PokerData, PokerRegistry } from './types';

// Import individual poker data
${imports.join('\n')}

// Re-export types
export type { PokerData, PokerRegistry } from './types';

/**
 * Registry of all poker content indexed by slug
 */
export const pokerRegistry: PokerRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single poker entry by slug
 */
export function getPoker(slug: string): PokerData | undefined {
  return pokerRegistry[slug];
}

/**
 * Get all poker entries as an array
 */
export function getAllPoker(): PokerData[] {
  return Object.values(pokerRegistry);
}

/**
 * Get all poker slugs
 */
export function getPokerSlugs(): string[] {
  return Object.keys(pokerRegistry);
}

/**
 * Get poker entries by category
 * @param category - One of: 'variant', 'strategy', 'rules', 'guide'
 */
export function getPokerByCategory(category: string): PokerData[] {
  return getAllPoker().filter((poker) => poker.category === category);
}

/**
 * Get poker entries by difficulty
 * @param difficulty - One of: 'beginner', 'intermediate', 'advanced'
 */
export function getPokerByDifficulty(difficulty: string): PokerData[] {
  return getAllPoker().filter((poker) => poker.difficulty === difficulty);
}

/**
 * Get casinos that offer good poker games
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForPoker(pokerSlug: string): string[] {
  const poker = pokerRegistry[pokerSlug];
  return poker?.recommendedCasinos || [];
}

/**
 * Search poker entries by name (English or Japanese)
 */
export function searchPoker(query: string): PokerData[] {
  const lowerQuery = query.toLowerCase();
  return getAllPoker().filter(
    (poker) =>
      poker.name.toLowerCase().includes(lowerQuery) ||
      poker.nameJa.includes(query)
  );
}
`;

  // Write the generated index.ts
  const indexPath = path.join(POKER_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`Generated ${indexPath}`);
  console.log(`   - ${pokerFiles.length} poker entries registered`);
}

buildPokerIndex().catch((err) => {
  console.error('Failed to build poker index:', err);
  process.exit(1);
});
