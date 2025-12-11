/**
 * Build Casinos Index Script
 * Scans all casino data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-casinos-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const CASINO_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'casinos');

/**
 * Extract the actual export name from a casino data file
 */
async function getExportName(filePath: string): Promise<string | null> {
  const content = await fs.readFile(filePath, 'utf-8');
  const match = content.match(/export const ([a-zA-Z_][a-zA-Z0-9_]*): CasinoData/);
  return match ? match[1] : null;
}

async function buildCasinosIndex(): Promise<void> {
  console.log('Building casinos index...\n');

  // Read all .ts files in the casinos directory (excluding types.ts and index.ts)
  const files = await fs.readdir(CASINO_DATA_DIR);
  const casinoFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts'
  );

  console.log(`Found ${casinoFiles.length} casino files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of casinoFiles.sort()) {
    const slug = file.replace('.ts', '');
    const filePath = path.join(CASINO_DATA_DIR, file);
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
 * Casino Data Registry
 * Central hub for all casino data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:casinos-index
 */

import type { CasinoData, CasinoRegistry } from './types';

// Import individual casino data
${imports.join('\n')}

// Re-export types
export type { CasinoData, CasinoRegistry } from './types';

/**
 * Registry of all casinos indexed by slug
 */
export const casinosRegistry: CasinoRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single casino by slug
 */
export function getCasino(slug: string): CasinoData | undefined {
  return casinosRegistry[slug];
}

/**
 * Get all casinos as an array
 */
export function getAllCasinos(): CasinoData[] {
  return Object.values(casinosRegistry);
}

/**
 * Get all casino slugs
 */
export function getCasinoSlugs(): string[] {
  return Object.keys(casinosRegistry);
}

/**
 * Get casinos by payment method support
 */
export function getCasinosByPayment(paymentSlug: string): CasinoData[] {
  return getAllCasinos().filter((casino) => casino.payments.includes(paymentSlug));
}

/**
 * Get casinos sorted by rating (highest first)
 */
export function getCasinosByRating(limit?: number): CasinoData[] {
  const sorted = getAllCasinos().sort((a, b) => b.rating - a.rating);
  return limit ? sorted.slice(0, limit) : sorted;
}

/**
 * Get affiliate URL for a casino
 */
export function getCasinoAffiliateUrl(slug: string): string | undefined {
  return casinosRegistry[slug]?.affiliate.url;
}
`;

  // Write the generated index.ts
  const indexPath = path.join(CASINO_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${casinoFiles.length} casinos registered`);
}

buildCasinosIndex().catch((err) => {
  console.error('Failed to build casinos index:', err);
  process.exit(1);
});
