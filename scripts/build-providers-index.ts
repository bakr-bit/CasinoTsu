/**
 * Build Providers Index Script
 * Scans all provider data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-providers-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const PROVIDER_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'providers');

/**
 * Convert a slug to a valid JavaScript variable name
 * e.g., "evolution-gaming" -> "evolution_gaming", "play-n-go" -> "play_n_go"
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

async function buildProvidersIndex(): Promise<void> {
  console.log('Building providers index...\n');

  // Read all .ts files in the providers directory (excluding types.ts and index.ts)
  const files = await fs.readdir(PROVIDER_DATA_DIR);
  const providerFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts'
  );

  console.log(`Found ${providerFiles.length} provider files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of providerFiles.sort()) {
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
 * Provider Data Registry
 * Central hub for all game provider/developer data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:providers-index
 */

import type { ProviderData, ProviderRegistry } from './types';

// Import individual provider data
${imports.join('\n')}

// Re-export types
export type { ProviderData, ProviderRegistry } from './types';

/**
 * Registry of all providers indexed by slug
 */
export const providersRegistry: ProviderRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single provider by slug
 */
export function getProvider(slug: string): ProviderData | undefined {
  return providersRegistry[slug];
}

/**
 * Get all providers as an array
 */
export function getAllProviders(): ProviderData[] {
  return Object.values(providersRegistry);
}

/**
 * Get all provider slugs
 */
export function getProviderSlugs(): string[] {
  return Object.keys(providersRegistry);
}

/**
 * Get providers by game type
 * @param gameType - One of: 'slots', 'live-casino', 'table-games', 'video-poker', 'scratch-cards', 'crash-games'
 */
export function getProvidersByGameType(gameType: string): ProviderData[] {
  return getAllProviders().filter((provider) =>
    provider.gameTypes.includes(gameType)
  );
}

/**
 * Get casinos that feature a specific provider
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForProvider(providerSlug: string): string[] {
  const provider = providersRegistry[providerSlug];
  return provider?.recommendedCasinos || [];
}

/**
 * Get providers founded after a specific year
 */
export function getProvidersByFoundedYear(year: number): ProviderData[] {
  return getAllProviders().filter((provider) => provider.founded >= year);
}

/**
 * Search providers by name (English or Japanese)
 */
export function searchProviders(query: string): ProviderData[] {
  const lowerQuery = query.toLowerCase();
  return getAllProviders().filter(
    (provider) =>
      provider.name.toLowerCase().includes(lowerQuery) ||
      provider.nameJa.includes(query)
  );
}
`;

  // Write the generated index.ts
  const indexPath = path.join(PROVIDER_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${providerFiles.length} providers registered`);
}

buildProvidersIndex().catch((err) => {
  console.error('Failed to build providers index:', err);
  process.exit(1);
});
