/**
 * Offers Data Registry
 * Central hub for all casino offer data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:offers-index
 */

import type { OfferData } from './types';

// Import individual offer data
import { _1win } from './1win';
import { _2up_exclusive } from './2up-exclusive';
import { betpanda_exclusive } from './betpanda-exclusive';
import { betrebels_exclusive } from './betrebels-exclusive';
import { bitcasino_welcome_package } from './bitcasino-welcome-package';
import { bitstars_exclusive } from './bitstars-exclusive';
import { bons_exclusive } from './bons-exclusive';
import { casino_me_exclusive } from './casino-me-exclusive';
import { casino_secret_exclusive } from './casino-secret-exclusive';
import { casino_sky_exclusive } from './casino-sky-exclusive';
import { casino_x_exclusive } from './casino-x-exclusive';
import { christmas } from './christmas';
import { conquestador_exclusive } from './conquestador-exclusive';
import { cosmoswin_welcome_offer } from './cosmoswin-welcome-offer';
import { duelbits_exclusive } from './duelbits-exclusive';
import { easter } from './easter';
import { eldoah_exclusive } from './eldoah-exclusive';
import { flush_welcome_offer } from './flush-welcome-offer';
import { fresh_casino_exclusive } from './fresh-casino-exclusive';
import { golden_week } from './golden-week';
import { intercasino_welcome_offer } from './intercasino-welcome-offer';
import { joycasino_exclusive } from './joycasino-exclusive';
import { kakeyo_exclusive } from './kakeyo-exclusive';
import { katsuwin_exclusive } from './katsuwin-exclusive';
import { konibet_exclusive } from './konibet-exclusive';
import { lilibet_exclusive } from './lilibet-exclusive';
import { mystino_exclusive } from './mystino-exclusive';
import { offers } from './offers';
import { parimatch_exclusive } from './parimatch-exclusive';
import { ramenbet_exclusive } from './ramenbet-exclusive';
import { roobet_welcome_offer } from './roobet-welcome-offer';
import { shinqueen_no_deposit_bonus } from './shinqueen-no-deposit-bonus';
import { shuffle_exclusive } from './shuffle-exclusive';
import { stake_rake_back } from './stake-rake-back';
import { summer_holiday } from './summer-holiday';
import { tedbet } from './tedbet';
import { trustdice_exclusive } from './trustdice-exclusive';
import { valentines_day } from './valentines-day';
import { vera_john_exclusive } from './vera-john-exclusive';
import { winz_io_exclusive } from './winz-io-exclusive';
import { wonder_casino_exclusive } from './wonder-casino-exclusive';
import { wsm } from './wsm';
import { yuugado_exclusive } from './yuugado-exclusive';

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
  '1win': _1win,
  '2up-exclusive': _2up_exclusive,
  'betpanda-exclusive': betpanda_exclusive,
  'betrebels-exclusive': betrebels_exclusive,
  'bitcasino-welcome-package': bitcasino_welcome_package,
  'bitstars-exclusive': bitstars_exclusive,
  'bons-exclusive': bons_exclusive,
  'casino-me-exclusive': casino_me_exclusive,
  'casino-secret-exclusive': casino_secret_exclusive,
  'casino-sky-exclusive': casino_sky_exclusive,
  'casino-x-exclusive': casino_x_exclusive,
  christmas: christmas,
  'conquestador-exclusive': conquestador_exclusive,
  'cosmoswin-welcome-offer': cosmoswin_welcome_offer,
  'duelbits-exclusive': duelbits_exclusive,
  easter: easter,
  'eldoah-exclusive': eldoah_exclusive,
  'flush-welcome-offer': flush_welcome_offer,
  'fresh-casino-exclusive': fresh_casino_exclusive,
  'golden-week': golden_week,
  'intercasino-welcome-offer': intercasino_welcome_offer,
  'joycasino-exclusive': joycasino_exclusive,
  'kakeyo-exclusive': kakeyo_exclusive,
  'katsuwin-exclusive': katsuwin_exclusive,
  'konibet-exclusive': konibet_exclusive,
  'lilibet-exclusive': lilibet_exclusive,
  'mystino-exclusive': mystino_exclusive,
  offers: offers,
  'parimatch-exclusive': parimatch_exclusive,
  'ramenbet-exclusive': ramenbet_exclusive,
  'roobet-welcome-offer': roobet_welcome_offer,
  'shinqueen-no-deposit-bonus': shinqueen_no_deposit_bonus,
  'shuffle-exclusive': shuffle_exclusive,
  'stake-rake-back': stake_rake_back,
  'summer-holiday': summer_holiday,
  tedbet: tedbet,
  'trustdice-exclusive': trustdice_exclusive,
  'valentines-day': valentines_day,
  'vera-john-exclusive': vera_john_exclusive,
  'winz-io-exclusive': winz_io_exclusive,
  'wonder-casino-exclusive': wonder_casino_exclusive,
  wsm: wsm,
  'yuugado-exclusive': yuugado_exclusive,
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
