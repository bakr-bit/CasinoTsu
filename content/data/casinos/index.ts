/**
 * Casino Data Registry
 * Central hub for all casino data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:casinos-index
 */

import type { CasinoData, CasinoRegistry } from './types';

// Import individual casino data
import { _10bet } from './10bet';
import { _1win } from './1win';
import { _21Com } from './21-com';
import { _2up } from './2up';
import { _7spin } from './7spin';
import { aloha_shark } from './aloha-shark';
import { bc_game } from './bc-game';
import { betgoat } from './betgoat';
import { betpanda } from './betpanda';
import { betrebels } from './betrebels';
import { bets_io } from './bets-io';
import { betswap } from './betswap';
import { bettilt } from './bettilt';
import { big_wins } from './big-wins';
import { bitcasino_io } from './bitcasino-io';
import { bitstarz } from './bitstarz';
import { bitz } from './bitz';
import { bombastic } from './bombastic';
import { bons } from './bons';
import { caibo } from './caibo';
import { casino_gods } from './casino-gods';
import { casino_me } from './casino-me';
import { casino_secret } from './casino-secret';
import { casino_sky } from './casino-sky';
import { casino_x } from './casino-x';
import { casinoin } from './casinoin';
import { casinoleo } from './casinoleo';
import { casitabi } from './casitabi';
import { casumo } from './casumo';
import { cloudbet } from './cloudbet';
import { conquestador } from './conquestador';
import { cosmoswin } from './cosmoswin';
import { cybet } from './cybet';
import { dafabet } from './dafabet';
import { duelbits } from './duelbits';
import { eldoah } from './eldoah';
import { energy_casino } from './energy-casino';
import { fresh_casino } from './fresh-casino';
import { futocasi } from './futocasi';
import { gambola_casino } from './gambola-casino';
import { gamdom } from './gamdom';
import { gohog } from './gohog';
import { golden_panda } from './golden-panda';
import { inter_casino } from './inter-casino';
import { joycasino } from './joycasino';
import { just_spin } from './just-spin';
import { k8 } from './k8';
import { kakeyo } from './kakeyo';
import { katsuwin } from './katsuwin';
import { kings_of_sport } from './kings-of-sport';
import { konibet } from './konibet';
import { lilibet } from './lilibet';
import { live_casino_house } from './live-casino-house';
import { livecasino_io } from './livecasino-io';
import { lucky_block } from './lucky-block';
import { lucky_bull } from './lucky-bull';
import { lucky_casino } from './lucky-casino';
import { lynxbet } from './lynxbet';
import { mega_dice } from './mega-dice';
import { miki } from './miki';
import { mint_io } from './mint-io';
import { miracle_casino } from './miracle-casino';
import { mystino } from './mystino';
import { netbet } from './netbet';
import { ohmyspins } from './ohmyspins';
import { pachipachi } from './pachipachi';
import { parimatch } from './parimatch';
import { playamo } from './playamo';
import { playojo } from './playojo';
import { pokerstars } from './pokerstars';
import { queen_casino } from './queen-casino';
import { ramenbet } from './ramenbet';
import { respin } from './respin';
import { roobet } from './roobet';
import { royal_vegas } from './royal-vegas';
import { shinobibet } from './shinobibet';
import { shuffle } from './shuffle';
import { snatch_casino } from './snatch-casino';
import { sportsbet_io } from './sportsbet-io';
import { stake } from './stake';
import { sushi_casino } from './sushi-casino';
import { tedbet } from './tedbet';
import { trustdice } from './trustdice';
import { vera_john } from './vera-john';
import { video_slots } from './video-slots';
import { vulkan_vegas } from './vulkan-vegas';
import { wazamba } from './wazamba';
import { william_hill } from './william-hill';
import { winunique } from './winunique';
import { winz_io } from './winz-io';
import { wonder_casino } from './wonder-casino';
import { wsm_casino } from './wsm-casino';
import { yous_casino } from './yous-casino';
import { yuugado } from './yuugado';

// Re-export types
export type { CasinoData, CasinoRegistry } from './types';

/**
 * Registry of all casinos indexed by slug
 */
export const casinosRegistry: CasinoRegistry = {
  '10bet': _10bet,
  '1win': _1win,
  '21-com': _21Com,
  '2up': _2up,
  '7spin': _7spin,
  'aloha-shark': aloha_shark,
  'bc-game': bc_game,
  betgoat: betgoat,
  betpanda: betpanda,
  betrebels: betrebels,
  'bets-io': bets_io,
  betswap: betswap,
  bettilt: bettilt,
  'big-wins': big_wins,
  'bitcasino-io': bitcasino_io,
  bitstarz: bitstarz,
  bitz: bitz,
  bombastic: bombastic,
  bons: bons,
  caibo: caibo,
  'casino-gods': casino_gods,
  'casino-me': casino_me,
  'casino-secret': casino_secret,
  'casino-sky': casino_sky,
  'casino-x': casino_x,
  casinoin: casinoin,
  casinoleo: casinoleo,
  casitabi: casitabi,
  casumo: casumo,
  cloudbet: cloudbet,
  conquestador: conquestador,
  cosmoswin: cosmoswin,
  cybet: cybet,
  dafabet: dafabet,
  duelbits: duelbits,
  eldoah: eldoah,
  'energy-casino': energy_casino,
  'fresh-casino': fresh_casino,
  futocasi: futocasi,
  'gambola-casino': gambola_casino,
  gamdom: gamdom,
  gohog: gohog,
  'golden-panda': golden_panda,
  'inter-casino': inter_casino,
  joycasino: joycasino,
  'just-spin': just_spin,
  k8: k8,
  kakeyo: kakeyo,
  katsuwin: katsuwin,
  'kings-of-sport': kings_of_sport,
  konibet: konibet,
  lilibet: lilibet,
  'live-casino-house': live_casino_house,
  'livecasino-io': livecasino_io,
  'lucky-block': lucky_block,
  'lucky-bull': lucky_bull,
  'lucky-casino': lucky_casino,
  lynxbet: lynxbet,
  'mega-dice': mega_dice,
  miki: miki,
  'mint-io': mint_io,
  'miracle-casino': miracle_casino,
  mystino: mystino,
  netbet: netbet,
  ohmyspins: ohmyspins,
  pachipachi: pachipachi,
  parimatch: parimatch,
  playamo: playamo,
  playojo: playojo,
  pokerstars: pokerstars,
  'queen-casino': queen_casino,
  ramenbet: ramenbet,
  respin: respin,
  roobet: roobet,
  'royal-vegas': royal_vegas,
  shinobibet: shinobibet,
  shuffle: shuffle,
  'snatch-casino': snatch_casino,
  'sportsbet-io': sportsbet_io,
  stake: stake,
  'sushi-casino': sushi_casino,
  tedbet: tedbet,
  trustdice: trustdice,
  'vera-john': vera_john,
  'video-slots': video_slots,
  'vulkan-vegas': vulkan_vegas,
  wazamba: wazamba,
  'william-hill': william_hill,
  winunique: winunique,
  'winz-io': winz_io,
  'wonder-casino': wonder_casino,
  'wsm-casino': wsm_casino,
  'yous-casino': yous_casino,
  yuugado: yuugado,
};

/**
 * Get a single casino by slug
 */
export function getCasino(slug: string): CasinoData | undefined {
  return casinosRegistry[slug];
}

/**
 * Get all casinos as an array
 */
export function getAllCasinos(): CasinoData[] {
  return Object.values(casinosRegistry);
}

/**
 * Get all casino slugs
 */
export function getCasinoSlugs(): string[] {
  return Object.keys(casinosRegistry);
}

/**
 * Get casinos by payment method support
 */
export function getCasinosByPayment(paymentSlug: string): CasinoData[] {
  return getAllCasinos().filter((casino) => casino.payments.includes(paymentSlug));
}

/**
 * Get casinos sorted by rating (highest first)
 */
export function getCasinosByRating(limit?: number): CasinoData[] {
  const sorted = getAllCasinos().sort((a, b) => b.rating - a.rating);
  return limit ? sorted.slice(0, limit) : sorted;
}

/**
 * Get affiliate URL for a casino
 */
export function getCasinoAffiliateUrl(slug: string): string | undefined {
  return casinosRegistry[slug]?.affiliate.url;
}
