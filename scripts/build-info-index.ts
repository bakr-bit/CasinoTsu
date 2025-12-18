/**
 * Build Info Index Script
 * Scans all info data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-info-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const INFO_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'info');

/**
 * Extract the actual export name from an info data file
 */
async function getExportName(filePath: string): Promise<string | null> {
  const content = await fs.readFile(filePath, 'utf-8');
  const match = content.match(/export const ([a-zA-Z_][a-zA-Z0-9_]*): InfoData/);
  return match ? match[1] : null;
}

async function buildInfoIndex(): Promise<void> {
  console.log('Building info index...\n');

  // Read all .ts files in the info directory (excluding types.ts and index.ts)
  const files = await fs.readdir(INFO_DATA_DIR);
  const infoFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts' && !f.endsWith('.json')
  );

  console.log(`Found ${infoFiles.length} info files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of infoFiles.sort()) {
    const slug = file.replace('.ts', '');
    const filePath = path.join(INFO_DATA_DIR, file);
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
 * Info Data Registry
 * Central hub for all casino info/knowledge article data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:info-index
 */

import type { InfoData } from './types';

// Import individual info data
${imports.join('\n')}

// Re-export types
export type { InfoData } from './types';

/**
 * Registry type for info articles
 */
export type InfoRegistry = Record<string, InfoData>;

/**
 * Registry of all info articles indexed by slug
 */
export const infoRegistry: InfoRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single info article by slug
 */
export function getInfo(slug: string): InfoData | undefined {
  return infoRegistry[slug];
}

/**
 * Get all info articles as an array
 */
export function getAllInfo(): InfoData[] {
  return Object.values(infoRegistry);
}

/**
 * Get all info article slugs
 */
export function getInfoSlugs(): string[] {
  return Object.keys(infoRegistry);
}

/**
 * Get info articles by category
 */
export function getInfoByCategory(category: InfoData['category']): InfoData[] {
  return getAllInfo().filter((info) => info.category === category);
}

/**
 * Get license-related info articles
 */
export function getLicenseInfo(): InfoData[] {
  return getInfoByCategory('license');
}

/**
 * Get history-related info articles
 */
export function getHistoryInfo(): InfoData[] {
  return getInfoByCategory('history');
}

/**
 * Get people-related info articles
 */
export function getPeopleInfo(): InfoData[] {
  return getInfoByCategory('people');
}

/**
 * Get legal-related info articles
 */
export function getLegalInfo(): InfoData[] {
  return getInfoByCategory('legal');
}

/**
 * Get industry-related info articles
 */
export function getIndustryInfo(): InfoData[] {
  return getInfoByCategory('industry');
}

/**
 * Get trivia info articles
 */
export function getTriviaInfo(): InfoData[] {
  return getInfoByCategory('trivia');
}
`;

  // Write the generated index.ts
  const indexPath = path.join(INFO_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${infoFiles.length} info articles registered`);
}

buildInfoIndex().catch((err) => {
  console.error('Failed to build info index:', err);
  process.exit(1);
});
