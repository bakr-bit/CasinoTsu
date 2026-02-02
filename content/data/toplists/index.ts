/**
 * Toplist Registry
 * Central configuration for all casino ranking lists
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npx tsx scripts/build-toplists.ts
 */

import type { ToplistConfig, ToplistRegistry, ToplistEntry } from './types';
import { getCasino, type CasinoData } from '../casinos';

// Re-export types
export type { ToplistConfig, ToplistEntry } from './types';

/**
 * Registry of all toplists indexed by ID
 */
export const toplistsRegistry: ToplistRegistry = {
  'top-rated': {
    id: 'top-rated',
    title: 'おすすめオンラインカジノTOP10',
    description: '当サイトが厳選した日本人プレイヤーに人気のオンラインカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
        badge: '第1位',
      },
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'joycasino',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'bitcoin-casinos': {
    id: 'bitcoin-casinos',
    title: 'ビットコイン対応おすすめカジノ',
    description: '日本人プレイヤーに人気のビットコイン対応オンラインカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'joycasino',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'crypto-casinos': {
    id: 'crypto-casinos',
    title: '仮想通貨対応オンラインカジノ',
    description: 'ビットコインやイーサリアムなど暗号資産で遊べるカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'joycasino',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'anonymous-casinos': {
    id: 'anonymous-casinos',
    title: '本人確認不要で遊べるカジノ',
    description: 'KYC不要または簡易KYCで遊べる匿名性の高いカジノ',
    casinos: [
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'bitz',
      },
      {
        casinoSlug: '1win',
      },
      {
        casinoSlug: 'betgoat',
      },
      {
        casinoSlug: 'betpanda',
      },
      {
        casinoSlug: 'mega-dice',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'best-bonuses': {
    id: 'best-bonuses',
    title: 'ボーナスが充実したカジノTOP10',
    description: '入金不要ボーナスやウェルカムボーナスが魅力的なカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
        badge: '最大ボーナス',
      },
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'joycasino',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'new-casinos': {
    id: 'new-casinos',
    title: '新規オープンのオンラインカジノ',
    description: '2023年以降にローンチした新しいオンラインカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'joycasino',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'ethereum-casinos': {
    id: 'ethereum-casinos',
    title: 'イーサリアム対応カジノ',
    description: 'ETH（イーサリアム）で入出金できるオンラインカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'joycasino',
      },
      {
        casinoSlug: 'konibet',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'litecoin-casinos': {
    id: 'litecoin-casinos',
    title: 'ライトコイン対応カジノ',
    description: 'LTC（ライトコイン）で入出金できるオンラインカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'joycasino',
      },
      {
        casinoSlug: 'konibet',
      },
      {
        casinoSlug: 'bettilt',
      },
      {
        casinoSlug: 'bitcasino-io',
      },
      {
        casinoSlug: 'bitstarz',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'bank-transfer-casinos': {
    id: 'bank-transfer-casinos',
    title: '銀行振込対応カジノ',
    description: '銀行振込で入出金できるオンラインカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'joycasino',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'usdt-casinos': {
    id: 'usdt-casinos',
    title: 'USDT（テザー）対応カジノ',
    description: 'USDT（テザー）で入出金できるオンラインカジノ',
    casinos: [
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'joycasino',
      },
      {
        casinoSlug: 'konibet',
      },
      {
        casinoSlug: 'aloha-shark',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'similar-casinos': {
    id: 'similar-casinos',
    title: '類似のおすすめカジノ',
    description: '似た特徴を持つ他のオンラインカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'live-casino': {
    id: 'live-casino',
    title: 'ライブカジノが充実したカジノ',
    description: '本格的なライブディーラーゲームが楽しめるカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'inter-casino',
      },
      {
        casinoSlug: 'bettilt',
      },
      {
        casinoSlug: 'bitcasino-io',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'sports-betting': {
    id: 'sports-betting',
    title: 'スポーツベット対応カジノ',
    description: 'スポーツベッティングも楽しめるハイブリッドカジノ',
    casinos: [
      {
        casinoSlug: 'bons',
      },
      {
        casinoSlug: 'yuugado',
      },
      {
        casinoSlug: 'casino-x',
      },
      {
        casinoSlug: 'bettilt',
      },
      {
        casinoSlug: 'miracle-casino',
      },
      {
        casinoSlug: 'playojo',
      },
      {
        casinoSlug: 'sportsbet-io',
      },
      {
        casinoSlug: 'tedbet',
      },
      {
        casinoSlug: 'winz-io',
      },
      {
        casinoSlug: 'cosmoswin',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'vip-casinos': {
    id: 'vip-casinos',
    title: 'VIPプログラムが充実したカジノ',
    description: 'ハイローラー向けの豪華VIP特典があるカジノ',
    casinos: [
      {
        casinoSlug: 'queen-casino',
      },
      {
        casinoSlug: 'wonder-casino',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'bitcasino-io',
      },
      {
        casinoSlug: 'k8',
      },
      {
        casinoSlug: 'miracle-casino',
      },
      {
        casinoSlug: 'stake',
      },
      {
        casinoSlug: 'snatch-casino',
      },
      {
        casinoSlug: '2up',
      },
      {
        casinoSlug: 'conquestador',
      }
    ],
    lastUpdated: '2025-12-09',
  },

  'low-wagering': {
    id: 'low-wagering',
    title: '賭け条件が低いカジノ',
    description: 'ボーナスの賭け条件が低く出金しやすいカジノ',
    casinos: [
      {
        casinoSlug: 'mystino',
      },
      {
        casinoSlug: 'vera-john',
      },
      {
        casinoSlug: 'eldoah',
      },
      {
        casinoSlug: 'konibet',
      },
      {
        casinoSlug: 'yous-casino',
      },
      {
        casinoSlug: 'bitcasino-io',
      },
      {
        casinoSlug: 'bitstarz',
      },
      {
        casinoSlug: 'casino-secret',
      },
      {
        casinoSlug: 'casitabi',
      },
      {
        casinoSlug: 'katsuwin',
      }
    ],
    lastUpdated: '2025-12-09',
  },
};

/**
 * Get a toplist configuration by ID
 */
export function getToplist(id: string): ToplistConfig | undefined {
  return toplistsRegistry[id];
}

/**
 * Get all toplist IDs
 */
export function getToplistIds(): string[] {
  return Object.keys(toplistsRegistry);
}

/**
 * Resolved toplist entry with full casino data
 */
export interface ResolvedToplistEntry {
  casino: CasinoData;
  headline: string;
  description: string;
  badge?: string;
}

/**
 * Get a toplist with resolved casino data
 */
export function getResolvedToplist(
  id: string,
  limit?: number
): ResolvedToplistEntry[] | undefined {
  const toplist = getToplist(id);
  if (!toplist) return undefined;

  const entries = limit ? toplist.casinos.slice(0, limit) : toplist.casinos;

  const resolved: ResolvedToplistEntry[] = [];
  for (const entry of entries) {
    const casino = getCasino(entry.casinoSlug);
    if (!casino) continue;

    resolved.push({
      casino,
      headline: entry.headlineOverride || casino.features.bonusHeadline,
      description:
        entry.descriptionOverride || casino.features.highlights.slice(0, 2).join('。') + '。',
      badge: entry.badge,
    });
  }
  return resolved;
}
