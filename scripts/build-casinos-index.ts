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
 * Convert a slug to a valid JavaScript variable name
 * e.g., "mega-dice" -> "megaDice", "21-com" -> "_21Com"
 */
function slugToVarName(slug: string): string {
  // Handle slugs that start with numbers
  let name = slug;
  if (/^\d/.test(name)) {
    name = '_' + name;
  }

  // Convert kebab-case to camelCase
  return name.replace(/-([a-z0-9])/gi, (_, char) => char.toUpperCase());
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
