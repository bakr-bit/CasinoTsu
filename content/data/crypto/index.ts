/**
 * Crypto Data Registry
 * Central hub for all crypto guide data access
 */

import type { CryptoData, CryptoRegistry } from './types';

// Import individual crypto data
import { exchange } from './exchange';

// Re-export types
export type { CryptoData, CryptoRegistry } from './types';

/**
 * Registry of all crypto content indexed by slug
 */
export const cryptoRegistry: CryptoRegistry = {
  exchange: exchange,
};

/**
 * Get a single crypto entry by slug
 */
export function getCrypto(slug: string): CryptoData | undefined {
  return cryptoRegistry[slug];
}

/**
 * Get all crypto entries as an array
 */
export function getAllCrypto(): CryptoData[] {
  return Object.values(cryptoRegistry);
}

/**
 * Get all crypto slugs
 */
export function getCryptoSlugs(): string[] {
  return Object.keys(cryptoRegistry);
}

/**
 * Get crypto entries by category
 * @param category - One of: 'guide', 'exchange', 'currency'
 */
export function getCryptoByCategory(category: string): CryptoData[] {
  return getAllCrypto().filter((crypto) => crypto.category === category);
}
