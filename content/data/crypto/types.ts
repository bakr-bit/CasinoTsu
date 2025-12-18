/**
 * Crypto Data Types
 * For crypto casino guides (exchange, bitcoin, etc.)
 */

export interface CryptoData {
  slug: string;
  name: string;
  nameJa: string;

  // Content classification
  category: 'guide' | 'exchange' | 'currency';

  // Key features
  highlights: string[]; // 3-5 pros in Japanese
  difficulty?: 'beginner' | 'intermediate' | 'advanced';

  // Related content
  relatedContent?: string[];
  recommendedCasinos: string[];

  // SEO metadata
  meta: {
    title: string;
    description: string;
  };
}

export type CryptoRegistry = Record<string, CryptoData>;
