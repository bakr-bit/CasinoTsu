/**
 * Build Offers Index Script
 * Scans all offers data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-offers-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const OFFERS_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'offers');

/**
 * Extract the actual export name from an offers data file
 */
async function getExportName(filePath: string): Promise<string | null> {
  const content = await fs.readFile(filePath, 'utf-8');
  const match = content.match(/export const ([a-zA-Z_][a-zA-Z0-9_]*): OfferData/);
  return match ? match[1] : null;
}

async function buildOffersIndex(): Promise<void> {
  console.log('Building offers index...\n');

  // Read all .ts files in the offers directory (excluding types.ts and index.ts)
  const files = await fs.readdir(OFFERS_DATA_DIR);
  const offerFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts' && !f.endsWith('.json')
  );

  console.log(`Found ${offerFiles.length} offer files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of offerFiles.sort()) {
    const slug = file.replace('.ts', '');
    const filePath = path.join(OFFERS_DATA_DIR, file);
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
 * Offers Data Registry
 * Central hub for all casino offer data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:offers-index
 */

import type { OfferData } from './types';

// Import individual offer data
${imports.join('\n')}

// Re-export types
export type { OfferData } from './types';

/**
 * Registry type for offers
 */
export type OffersRegistry = Record<string, OfferData>;

/**
 * Registry of all offers indexed by slug
 */
export const offersRegistry: OffersRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single offer by slug
 */
export function getOffer(slug: string): OfferData | undefined {
  return offersRegistry[slug];
}

/**
 * Get all offers as an array
 */
export function getAllOffers(): OfferData[] {
  return Object.values(offersRegistry);
}

/**
 * Get all offer slugs
 */
export function getOfferSlugs(): string[] {
  return Object.keys(offersRegistry);
}

/**
 * Get offers by type
 */
export function getOffersByType(type: OfferData['offerType']): OfferData[] {
  return getAllOffers().filter((offer) => offer.offerType === type);
}

/**
 * Get offers for a specific casino
 */
export function getOffersByCasino(casinoSlug: string): OfferData[] {
  return getAllOffers().filter((offer) => offer.casinoSlug === casinoSlug);
}

/**
 * Get no-deposit bonus offers
 */
export function getNoDepositOffers(): OfferData[] {
  return getOffersByType('no-deposit');
}

/**
 * Get welcome bonus offers
 */
export function getWelcomeOffers(): OfferData[] {
  return getOffersByType('welcome');
}

/**
 * Get exclusive offers
 */
export function getExclusiveOffers(): OfferData[] {
  return getOffersByType('exclusive');
}
`;

  // Write the generated index.ts
  const indexPath = path.join(OFFERS_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${offerFiles.length} offers registered`);
}

buildOffersIndex().catch((err) => {
  console.error('Failed to build offers index:', err);
  process.exit(1);
});
