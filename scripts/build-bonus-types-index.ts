/**
 * Build Bonus Types Index Script
 * Scans all bonus type data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-bonus-types-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const BONUS_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'bonus-types');

/**
 * Convert a slug to a valid JavaScript variable name
 * e.g., "welcome-bonus" -> "welcome_bonus", "no-deposit" -> "no_deposit"
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

async function buildBonusTypesIndex(): Promise<void> {
  console.log('Building bonus types index...\n');

  // Read all .ts files in the bonus-types directory (excluding types.ts and index.ts)
  const files = await fs.readdir(BONUS_DATA_DIR);
  const bonusFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts'
  );

  console.log(`Found ${bonusFiles.length} bonus type files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of bonusFiles.sort()) {
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
 * Bonus Type Data Registry
 * Central hub for all bonus type data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:bonus-types-index
 */

import type { BonusTypeData, BonusTypeRegistry } from './types';

// Import individual bonus type data
${imports.join('\n')}

// Re-export types
export type { BonusTypeData, BonusTypeRegistry } from './types';

/**
 * Registry of all bonus types indexed by slug
 */
export const bonusTypesRegistry: BonusTypeRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single bonus type by slug
 */
export function getBonusType(slug: string): BonusTypeData | undefined {
  return bonusTypesRegistry[slug];
}

/**
 * Get all bonus types as an array
 */
export function getAllBonusTypes(): BonusTypeData[] {
  return Object.values(bonusTypesRegistry);
}

/**
 * Get all bonus type slugs
 */
export function getBonusTypeSlugs(): string[] {
  return Object.keys(bonusTypesRegistry);
}

/**
 * Get casinos that offer a specific bonus type
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForBonusType(bonusTypeSlug: string): string[] {
  const bonusType = bonusTypesRegistry[bonusTypeSlug];
  return bonusType?.recommendedCasinos || [];
}
`;

  // Write the generated index.ts
  const indexPath = path.join(BONUS_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${bonusFiles.length} bonus types registered`);
}

buildBonusTypesIndex().catch((err) => {
  console.error('Failed to build bonus types index:', err);
  process.exit(1);
});
