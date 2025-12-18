/**
 * Build Craps Index Script
 * Scans all craps data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-craps-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const CRAPS_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'craps');

/**
 * Extract the actual export name from a craps data file
 */
async function getExportName(filePath: string): Promise<string | null> {
  const content = await fs.readFile(filePath, 'utf-8');
  const match = content.match(/export const ([a-zA-Z_][a-zA-Z0-9_]*): CrapsData/);
  return match ? match[1] : null;
}

async function buildCrapsIndex(): Promise<void> {
  console.log('Building craps index...\n');

  // Read all .ts files in the craps directory (excluding types.ts and index.ts)
  const files = await fs.readdir(CRAPS_DATA_DIR);
  const crapsFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts' && f !== 'conversion-log.json'
  );

  console.log(`Found ${crapsFiles.length} craps files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of crapsFiles.sort()) {
    const slug = file.replace('.ts', '');
    const filePath = path.join(CRAPS_DATA_DIR, file);
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
 * Craps Data Registry
 * Central hub for all craps article data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:craps-index
 */

import type { CrapsData } from './types';

// Import individual craps data
${imports.join('\n')}

// Re-export types
export type { CrapsData } from './types';

/**
 * Registry type for craps articles
 */
export type CrapsRegistry = Record<string, CrapsData>;

/**
 * Registry of all craps articles indexed by slug
 */
export const crapsRegistry: CrapsRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single craps article by slug
 */
export function getCraps(slug: string): CrapsData | undefined {
  return crapsRegistry[slug];
}

/**
 * Get all craps articles as an array
 */
export function getAllCraps(): CrapsData[] {
  return Object.values(crapsRegistry);
}

/**
 * Get all craps article slugs
 */
export function getCrapsSlugs(): string[] {
  return Object.keys(crapsRegistry);
}

/**
 * Get craps articles by category
 */
export function getCrapsByCategory(category: CrapsData['category']): CrapsData[] {
  return getAllCraps().filter((craps) => craps.category === category);
}

/**
 * Get craps articles by difficulty level
 */
export function getCrapsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): CrapsData[] {
  return getAllCraps().filter((craps) => craps.difficulty === difficulty);
}
`;

  // Write the generated index.ts
  const indexPath = path.join(CRAPS_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${crapsFiles.length} craps articles registered`);
}

buildCrapsIndex().catch((err) => {
  console.error('Failed to build craps index:', err);
  process.exit(1);
});
