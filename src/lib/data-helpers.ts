import { casinosRegistry, getAllCasinos, getCasinosByRating } from '@/content/data/casinos';
import type { CasinoData } from '@/content/data/casinos/types';
import { categoryPicks, faqItems } from '@/src/data/content';

/**
 * Get top casinos sorted by rating
 */
export function getTopCasinos(count: number = 20): CasinoData[] {
  return getCasinosByRating(count);
}

/**
 * Get a single casino by slug
 */
export function getCasinoBySlug(slug: string): CasinoData | undefined {
  return casinosRegistry[slug];
}

/**
 * Get multiple casinos by their slugs
 */
export function getCasinosBySlugs(slugs: string[]): CasinoData[] {
  return slugs
    .map((slug) => casinosRegistry[slug])
    .filter((c): c is CasinoData => c !== undefined);
}

/**
 * Get all casinos as array
 */
export function getAllCasinosArray(): CasinoData[] {
  return getAllCasinos();
}

/**
 * Get casinos that support a specific payment method
 */
export function getCasinosByPayment(paymentSlug: string): CasinoData[] {
  return getAllCasinos().filter((casino) =>
    casino.payments.includes(paymentSlug)
  );
}

/**
 * Get category picks with resolved casino data
 */
export function getCategoryPicks() {
  return categoryPicks.map((pick) => ({
    ...pick,
    casinos: getCasinosBySlugs(pick.casinoSlugs),
  }));
}

/**
 * Get all FAQ items
 */
export function getAllFAQs() {
  return faqItems;
}

/**
 * Format currency for Japanese locale
 */
export function formatCurrency(amount: number, currency: string = 'JPY'): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number for Japanese locale
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ja-JP').format(num);
}
