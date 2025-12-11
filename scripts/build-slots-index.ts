/**
 * Build slots index from extracted data files
 *
 * Usage:
 *   npx tsx scripts/build-slots-index.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const DATA_DIR = './content/data/slots';
const INDEX_FILE = path.join(DATA_DIR, 'index.ts');

function slugToVarName(slug: string): string {
  return slug
    .replace(/-/g, '_')
    .replace(/^(\d)/, '_$1'); // Prefix with _ if starts with number
}

function main() {
  // Get all .ts files except types.ts and index.ts
  const files = fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts')
    .sort();

  console.log(`\nBuilding slots index from ${files.length} files...\n`);

  const slugs = files.map(f => f.replace('.ts', ''));
  const imports: string[] = [];
  const exports: string[] = [];

  slugs.forEach(slug => {
    const varName = slugToVarName(slug);
    imports.push(`import { ${varName} } from './${slug}';`);
    exports.push(`  '${slug}': ${varName},`);
  });

  const indexContent = `// Auto-generated slots index
// Do not edit manually - run 'npm run build:slots-index' to regenerate

import type { SlotData, SlotRegistry } from './types';

${imports.join('\n')}

export const slots: SlotRegistry = {
${exports.join('\n')}
};

// Helper functions
export function getSlot(slug: string): SlotData | undefined {
  return slots[slug];
}

export function getAllSlots(): SlotData[] {
  return Object.values(slots);
}

export function getSlotSlugs(): string[] {
  return Object.keys(slots);
}

export function getSlotsByProvider(provider: string): SlotData[] {
  return getAllSlots().filter(s =>
    s.hero.provider?.toLowerCase().includes(provider.toLowerCase())
  );
}

export function getSlotsByVolatility(volatility: string): SlotData[] {
  return getAllSlots().filter(s =>
    s.hero.volatility?.toLowerCase().includes(volatility.toLowerCase())
  );
}

export function searchSlots(query: string): SlotData[] {
  const q = query.toLowerCase();
  return getAllSlots().filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.hero.title.toLowerCase().includes(q) ||
    s.hero.provider?.toLowerCase().includes(q)
  );
}

// Re-export types
export type { SlotData, SlotRegistry } from './types';
`;

  fs.writeFileSync(INDEX_FILE, indexContent);
  console.log(`✓ Generated index with ${slugs.length} slots at ${INDEX_FILE}`);
}

main();
