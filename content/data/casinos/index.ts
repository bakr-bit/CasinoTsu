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
import { alohaShark } from './aloha-shark';
import { bcGame } from './bc-game';
import { betgoat } from './betgoat';
import { betpanda } from './betpanda';
import { betrebels } from './betrebels';
import { betsIo } from './bets-io';
import { betswap } from './betswap';
import { bettilt } from './bettilt';
import { bigWins } from './big-wins';
import { bitcasinoIo } from './bitcasino-io';
import { bitstarz } from './bitstarz';
import { bitz } from './bitz';
import { bombastic } from './bombastic';
import { bons } from './bons';
import { caibo } from './caibo';
import { casinoGods } from './casino-gods';
import { casinoMe } from './casino-me';
import { casinoSecret } from './casino-secret';
import { casinoSky } from './casino-sky';
import { casinoX } from './casino-x';
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
import { energyCasino } from './energy-casino';
import { freshCasino } from './fresh-casino';
import { futocasi } from './futocasi';
import { gambolaCasino } from './gambola-casino';
import { gamdom } from './gamdom';
import { gohog } from './gohog';
import { goldenPanda } from './golden-panda';
import { interCasino } from './inter-casino';
import { joycasino } from './joycasino';
import { justSpin } from './just-spin';
import { k8 } from './k8';
import { kakeyo } from './kakeyo';
import { katsuwin } from './katsuwin';
import { kingsOfSport } from './kings-of-sport';
import { konibet } from './konibet';
import { lilibet } from './lilibet';
import { liveCasinoHouse } from './live-casino-house';
import { livecasinoIo } from './livecasino-io';
import { luckyBlock } from './lucky-block';
import { luckyBull } from './lucky-bull';
import { luckyCasino } from './lucky-casino';
import { lynxbet } from './lynxbet';
import { megaDice } from './mega-dice';
import { miki } from './miki';
import { mintIo } from './mint-io';
import { miracleCasino } from './miracle-casino';
import { mystino } from './mystino';
import { netbet } from './netbet';
import { ohmyspins } from './ohmyspins';
import { pachipachi } from './pachipachi';
import { parimatch } from './parimatch';
import { playamo } from './playamo';
import { playojo } from './playojo';
import { pokerstars } from './pokerstars';
import { queenCasino } from './queen-casino';
import { ramenbet } from './ramenbet';
import { respin } from './respin';
import { roobet } from './roobet';
import { royalVegas } from './royal-vegas';
import { shinobibet } from './shinobibet';
import { shuffle } from './shuffle';
import { snatchCasino } from './snatch-casino';
import { sportsbetIo } from './sportsbet-io';
import { stake } from './stake';
import { sushiCasino } from './sushi-casino';
import { tedbet } from './tedbet';
import { trustdice } from './trustdice';
import { veraJohn } from './vera-john';
import { videoSlots } from './video-slots';
import { vulkanVegas } from './vulkan-vegas';
import { wazamba } from './wazamba';
import { williamHill } from './william-hill';
import { winunique } from './winunique';
import { winzIo } from './winz-io';
import { wonderCasino } from './wonder-casino';
import { wsmCasino } from './wsm-casino';
import { yousCasino } from './yous-casino';
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
  'aloha-shark': alohaShark,
  'bc-game': bcGame,
  betgoat: betgoat,
  betpanda: betpanda,
  betrebels: betrebels,
  'bets-io': betsIo,
  betswap: betswap,
  bettilt: bettilt,
  'big-wins': bigWins,
  'bitcasino-io': bitcasinoIo,
  bitstarz: bitstarz,
  bitz: bitz,
  bombastic: bombastic,
  bons: bons,
  caibo: caibo,
  'casino-gods': casinoGods,
  'casino-me': casinoMe,
  'casino-secret': casinoSecret,
  'casino-sky': casinoSky,
  'casino-x': casinoX,
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
  'energy-casino': energyCasino,
  'fresh-casino': freshCasino,
  futocasi: futocasi,
  'gambola-casino': gambolaCasino,
  gamdom: gamdom,
  gohog: gohog,
  'golden-panda': goldenPanda,
  'inter-casino': interCasino,
  joycasino: joycasino,
  'just-spin': justSpin,
  k8: k8,
  kakeyo: kakeyo,
  katsuwin: katsuwin,
  'kings-of-sport': kingsOfSport,
  konibet: konibet,
  lilibet: lilibet,
  'live-casino-house': liveCasinoHouse,
  'livecasino-io': livecasinoIo,
  'lucky-block': luckyBlock,
  'lucky-bull': luckyBull,
  'lucky-casino': luckyCasino,
  lynxbet: lynxbet,
  'mega-dice': megaDice,
  miki: miki,
  'mint-io': mintIo,
  'miracle-casino': miracleCasino,
  mystino: mystino,
  netbet: netbet,
  ohmyspins: ohmyspins,
  pachipachi: pachipachi,
  parimatch: parimatch,
  playamo: playamo,
  playojo: playojo,
  pokerstars: pokerstars,
  'queen-casino': queenCasino,
  ramenbet: ramenbet,
  respin: respin,
  roobet: roobet,
  'royal-vegas': royalVegas,
  shinobibet: shinobibet,
  shuffle: shuffle,
  'snatch-casino': snatchCasino,
  'sportsbet-io': sportsbetIo,
  stake: stake,
  'sushi-casino': sushiCasino,
  tedbet: tedbet,
  trustdice: trustdice,
  'vera-john': veraJohn,
  'video-slots': videoSlots,
  'vulkan-vegas': vulkanVegas,
  wazamba: wazamba,
  'william-hill': williamHill,
  winunique: winunique,
  'winz-io': winzIo,
  'wonder-casino': wonderCasino,
  'wsm-casino': wsmCasino,
  'yous-casino': yousCasino,
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
