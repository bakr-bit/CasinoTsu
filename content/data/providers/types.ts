/**
 * Provider Data Types
 * For game provider/developer guides (Evolution, Pragmatic Play, NetEnt, etc.)
 */

export interface ProviderData {
  slug: string;
  name: string;
  nameJa: string;

  // Company info
  founded: number;
  headquarters: string; // e.g., "Stockholm, Sweden"

  // Game portfolio
  gameCount: string; // e.g., "500+", "200+"
  gameTypes: string[]; // ['slots', 'live-casino', 'table-games']

  // Notable games (top 3-5)
  notableGames: string[];

  // Key features
  highlights: string[]; // 3-5 pros in Japanese
  watchouts?: string[]; // 1-3 cons (optional)

  // Casinos using this provider
  recommendedCasinos: string[];

  // SEO metadata
  meta: {
    title: string;
    description: string;
  };
}

export type ProviderRegistry = Record<string, ProviderData>;
