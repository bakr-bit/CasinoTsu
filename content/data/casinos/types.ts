/**
 * Casino Data Types
 * Structured data for casino information used across the site
 */

export interface CasinoData {
  /** Unique identifier (URL slug) */
  slug: string;

  /** Casino name in English */
  name: string;

  /** Casino name in Japanese */
  nameJa: string;

  /** Path to logo image */
  logo: string;

  /** Overall rating (0-5) */
  rating: number;

  /** License information */
  license: {
    name: string;
    jurisdiction: string;
  };

  /** Operating company */
  operator: string;

  /** Year established/launched */
  established: number;

  /** Affiliate link configuration */
  affiliate: {
    /** Base tracking URL */
    url: string;
    /** Bonus code if applicable */
    bonusCode?: string;
  };

  /** Key features and selling points */
  features: {
    /** Main bonus headline */
    bonusHeadline: string;
    /** List of highlights/pros */
    highlights: string[];
    /** List of watchouts/cons */
    watchouts?: string[];
  };

  /** Supported payment methods (slugs) */
  payments: string[];

  /** Quick facts for display */
  facts: {
    label: string;
    value: string;
  }[];

  /** SEO metadata */
  meta: {
    title: string;
    description: string;
  };
}

/**
 * Registry type for all casinos
 */
export type CasinoRegistry = Record<string, CasinoData>;
