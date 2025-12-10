/**
 * Affiliate URL Management
 * Centralized system for managing all affiliate/tracking links
 */

import { getCasino } from '../casinos';

/**
 * Link types for different contexts
 */
export type AffiliateLinkType =
  | 'default' // Standard affiliate link
  | 'bonus' // Bonus-specific landing page
  | 'review' // From review page
  | 'comparison' // From comparison/toplist
  | 'payment'; // From payment method page

/**
 * Configuration for affiliate link generation
 */
interface AffiliateLinkConfig {
  /** Base URL for the affiliate */
  baseUrl: string;
  /** Default tracking parameters */
  defaultParams?: Record<string, string>;
  /** Link type specific overrides */
  typeOverrides?: Partial<Record<AffiliateLinkType, string>>;
}

/**
 * Registry of affiliate configurations by casino slug
 * This allows for casino-specific tracking setups
 */
const affiliateConfigs: Record<string, AffiliateLinkConfig> = {
  ramenbet: {
    baseUrl: 'https://casinotsu.com/go/ramenbet',
    defaultParams: { src: 'japacasi' },
  },
  bitz: {
    baseUrl: 'https://casinotsu.com/go/bitz',
    defaultParams: { src: 'japacasi' },
  },
  'mega-dice': {
    baseUrl: 'https://casinotsu.com/go/mega-dice',
    defaultParams: { src: 'japacasi' },
  },
  // Default fallback pattern
  _default: {
    baseUrl: 'https://casinotsu.com/go/',
    defaultParams: { src: 'japacasi' },
  },
};

/**
 * Get affiliate URL for a casino
 *
 * @param casinoSlug - The casino slug
 * @param type - Optional link type for tracking
 * @param extraParams - Optional additional tracking parameters
 * @returns The complete affiliate URL
 */
export function getAffiliateUrl(
  casinoSlug: string,
  type: AffiliateLinkType = 'default',
  extraParams?: Record<string, string>
): string {
  // First try to get from casino data
  const casino = getCasino(casinoSlug);
  if (casino?.affiliate.url) {
    return buildUrl(casino.affiliate.url, type, extraParams);
  }

  // Fall back to affiliate config
  const config = affiliateConfigs[casinoSlug] || affiliateConfigs._default;
  const baseUrl = config.typeOverrides?.[type] || config.baseUrl;

  // For default config, append the slug
  const url =
    config === affiliateConfigs._default ? `${baseUrl}${casinoSlug}` : baseUrl;

  return buildUrl(url, type, extraParams, config.defaultParams);
}

/**
 * Build URL with tracking parameters
 */
function buildUrl(
  baseUrl: string,
  type: AffiliateLinkType,
  extraParams?: Record<string, string>,
  defaultParams?: Record<string, string>
): string {
  const url = new URL(baseUrl);

  // Add default params
  if (defaultParams) {
    Object.entries(defaultParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  // Add link type for tracking
  if (type !== 'default') {
    url.searchParams.set('type', type);
  }

  // Add extra params
  if (extraParams) {
    Object.entries(extraParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
}

/**
 * Get bonus code for a casino (if available)
 */
export function getBonusCode(casinoSlug: string): string | undefined {
  const casino = getCasino(casinoSlug);
  return casino?.affiliate.bonusCode;
}

/**
 * Check if a casino has a special bonus code
 */
export function hasBonusCode(casinoSlug: string): boolean {
  return !!getBonusCode(casinoSlug);
}
