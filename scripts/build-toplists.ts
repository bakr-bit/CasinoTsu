/**
 * Build Toplists Script
 * Generates toplist configurations from casino data
 *
 * Usage: npx tsx scripts/build-toplists.ts
 */

import fs from 'fs/promises';
import path from 'path';

const CASINOS_DIR = path.join(process.cwd(), 'content', 'data', 'casinos');
const TOPLISTS_FILE = path.join(process.cwd(), 'content', 'data', 'toplists', 'index.ts');

interface CasinoData {
  slug: string;
  name: string;
  nameJa: string;
  rating: number;
  payments: string[];
  features: {
    bonusHeadline: string;
    highlights: string[];
    watchouts?: string[];
  };
  facts: { label: string; value: string }[];
}

interface ToplistEntry {
  casinoSlug: string;
  headlineOverride?: string;
  descriptionOverride?: string;
  badge?: string;
}

interface ToplistConfig {
  id: string;
  title: string;
  description?: string;
  casinos: ToplistEntry[];
  lastUpdated: string;
}

async function loadAllCasinos(): Promise<CasinoData[]> {
  const files = await fs.readdir(CASINOS_DIR);
  const casinoFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts'
  );

  const casinos: CasinoData[] = [];

  for (const file of casinoFiles) {
    const filePath = path.join(CASINOS_DIR, file);
    const content = await fs.readFile(filePath, 'utf-8');

    // Extract the exported object from the TypeScript file
    const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
    const nameMatch = content.match(/name:\s*['"]([^'"]+)['"]/);
    const nameJaMatch = content.match(/nameJa:\s*['"]([^'"]+)['"]/);
    const ratingMatch = content.match(/rating:\s*([\d.]+)/);
    const paymentsMatch = content.match(/payments:\s*\[([^\]]+)\]/);
    const bonusHeadlineMatch = content.match(/bonusHeadline:\s*['"]([^'"]+)['"]/);
    const highlightsMatch = content.match(/highlights:\s*\[([\s\S]*?)\],/);

    if (slugMatch && nameMatch && ratingMatch) {
      const payments = paymentsMatch
        ? paymentsMatch[1]
            .split(',')
            .map((p) => p.trim().replace(/['"]/g, ''))
            .filter(Boolean)
        : [];

      const highlights: string[] = [];
      if (highlightsMatch) {
        const highlightStrings = highlightsMatch[1].match(/'([^']+)'|"([^"]+)"/g);
        if (highlightStrings) {
          highlights.push(...highlightStrings.map((h) => h.replace(/['"]/g, '')));
        }
      }

      casinos.push({
        slug: slugMatch[1],
        name: nameMatch[1],
        nameJa: nameJaMatch?.[1] || nameMatch[1],
        rating: parseFloat(ratingMatch[1]),
        payments,
        features: {
          bonusHeadline: bonusHeadlineMatch?.[1] || '',
          highlights,
        },
        facts: [],
      });
    }
  }

  return casinos;
}

function hasPaymentMethod(casino: CasinoData, method: string): boolean {
  return casino.payments.some((p) => p.toLowerCase().includes(method.toLowerCase()));
}

function hasCrypto(casino: CasinoData): boolean {
  const cryptoMethods = ['bitcoin', 'ethereum', 'litecoin', 'usdt', 'tether', 'ripple', 'crypto', 'dogecoin', 'solana'];
  return cryptoMethods.some((m) => hasPaymentMethod(casino, m));
}

function generateToplists(casinos: CasinoData[]): Record<string, ToplistConfig> {
  const today = new Date().toISOString().split('T')[0];

  // Sort by rating for most lists
  const byRating = [...casinos].sort((a, b) => b.rating - a.rating);

  // Top 10 overall
  const topRated: ToplistConfig = {
    id: 'top-rated',
    title: 'おすすめオンラインカジノTOP10',
    description: '当サイトが厳選した日本人プレイヤーに人気のオンラインカジノ',
    casinos: byRating.slice(0, 10).map((c, i) => ({
      casinoSlug: c.slug,
      badge: i === 0 ? '第1位' : undefined,
    })),
    lastUpdated: today,
  };

  // Bitcoin casinos (top 10 with bitcoin support)
  const bitcoinCasinos = byRating.filter((c) => hasPaymentMethod(c, 'bitcoin'));
  const bitcoinToplist: ToplistConfig = {
    id: 'bitcoin-casinos',
    title: 'ビットコイン対応おすすめカジノ',
    description: '日本人プレイヤーに人気のビットコイン対応オンラインカジノ',
    casinos: bitcoinCasinos.slice(0, 10).map((c) => ({
      casinoSlug: c.slug,
    })),
    lastUpdated: today,
  };

  // Crypto casinos (any crypto)
  const cryptoCasinos = byRating.filter(hasCrypto);
  const cryptoToplist: ToplistConfig = {
    id: 'crypto-casinos',
    title: '仮想通貨対応オンラインカジノ',
    description: 'ビットコインやイーサリアムなど暗号資産で遊べるカジノ',
    casinos: cryptoCasinos.slice(0, 10).map((c) => ({
      casinoSlug: c.slug,
    })),
    lastUpdated: today,
  };

  // Anonymous/KYC-free casinos (based on keywords in highlights or facts)
  const anonymousCasinos = byRating.filter((c) => {
    const allText = [...c.features.highlights].join(' ').toLowerCase();
    return (
      allText.includes('kyc不要') ||
      allText.includes('本人確認不要') ||
      allText.includes('匿名') ||
      allText.includes('kyc') ||
      allText.includes('anonymous')
    );
  });
  const anonymousToplist: ToplistConfig = {
    id: 'anonymous-casinos',
    title: '本人確認不要で遊べるカジノ',
    description: 'KYC不要または簡易KYCで遊べる匿名性の高いカジノ',
    casinos: (anonymousCasinos.length > 0 ? anonymousCasinos : cryptoCasinos)
      .slice(0, 10)
      .map((c) => ({
        casinoSlug: c.slug,
      })),
    lastUpdated: today,
  };

  // Best bonuses (all casinos with bonus headlines, sorted by rating)
  const bonusCasinos = byRating.filter((c) => c.features.bonusHeadline);
  const bonusToplist: ToplistConfig = {
    id: 'best-bonuses',
    title: 'ボーナスが充実したカジノTOP10',
    description: '入金不要ボーナスやウェルカムボーナスが魅力的なカジノ',
    casinos: bonusCasinos.slice(0, 10).map((c, i) => ({
      casinoSlug: c.slug,
      badge: i === 0 ? '最大ボーナス' : undefined,
    })),
    lastUpdated: today,
  };

  // New casinos (recently established, if we had that data - for now use rating)
  const newCasinos: ToplistConfig = {
    id: 'new-casinos',
    title: '新規オープンのオンラインカジノ',
    description: '2023年以降にローンチした新しいオンラインカジノ',
    casinos: byRating.slice(0, 10).map((c) => ({
      casinoSlug: c.slug,
    })),
    lastUpdated: today,
  };

  // Ethereum casinos
  const ethereumCasinos = byRating.filter((c) => hasPaymentMethod(c, 'ethereum'));
  const ethereumToplist: ToplistConfig = {
    id: 'ethereum-casinos',
    title: 'イーサリアム対応カジノ',
    description: 'ETH（イーサリアム）で入出金できるオンラインカジノ',
    casinos: ethereumCasinos.slice(0, 10).map((c) => ({
      casinoSlug: c.slug,
    })),
    lastUpdated: today,
  };

  // Litecoin casinos
  const litecoinCasinos = byRating.filter((c) => hasPaymentMethod(c, 'litecoin'));
  const litecoinToplist: ToplistConfig = {
    id: 'litecoin-casinos',
    title: 'ライトコイン対応カジノ',
    description: 'LTC（ライトコイン）で入出金できるオンラインカジノ',
    casinos: litecoinCasinos.slice(0, 10).map((c) => ({
      casinoSlug: c.slug,
    })),
    lastUpdated: today,
  };

  // Bank transfer casinos
  const bankCasinos = byRating.filter((c) => hasPaymentMethod(c, 'bank'));
  const bankToplist: ToplistConfig = {
    id: 'bank-transfer-casinos',
    title: '銀行振込対応カジノ',
    description: '銀行振込で入出金できるオンラインカジノ',
    casinos: bankCasinos.slice(0, 10).map((c) => ({
      casinoSlug: c.slug,
    })),
    lastUpdated: today,
  };

  // USDT/Tether casinos
  const usdtCasinos = byRating.filter(
    (c) => hasPaymentMethod(c, 'usdt') || hasPaymentMethod(c, 'tether')
  );
  const usdtToplist: ToplistConfig = {
    id: 'usdt-casinos',
    title: 'USDT（テザー）対応カジノ',
    description: 'USDT（テザー）で入出金できるオンラインカジノ',
    casinos: usdtCasinos.slice(0, 10).map((c) => ({
      casinoSlug: c.slug,
    })),
    lastUpdated: today,
  };

  // Similar casinos (generic list for "related" sections)
  const similarCasinos: ToplistConfig = {
    id: 'similar-casinos',
    title: '類似のおすすめカジノ',
    description: '似た特徴を持つ他のオンラインカジノ',
    casinos: byRating.slice(0, 5).map((c) => ({
      casinoSlug: c.slug,
    })),
    lastUpdated: today,
  };

  // Live casino focus
  const liveCasinoToplist: ToplistConfig = {
    id: 'live-casino',
    title: 'ライブカジノが充実したカジノ',
    description: '本格的なライブディーラーゲームが楽しめるカジノ',
    casinos: byRating
      .filter((c) => {
        const text = c.features.highlights.join(' ').toLowerCase();
        return text.includes('ライブ') || text.includes('live');
      })
      .slice(0, 10)
      .map((c) => ({
        casinoSlug: c.slug,
      })),
    lastUpdated: today,
  };

  // Sports betting
  const sportsBettingToplist: ToplistConfig = {
    id: 'sports-betting',
    title: 'スポーツベット対応カジノ',
    description: 'スポーツベッティングも楽しめるハイブリッドカジノ',
    casinos: byRating
      .filter((c) => {
        const text = c.features.highlights.join(' ').toLowerCase();
        return text.includes('スポーツ') || text.includes('sports') || text.includes('ベット');
      })
      .slice(0, 10)
      .map((c) => ({
        casinoSlug: c.slug,
      })),
    lastUpdated: today,
  };

  // VIP/High roller
  const vipToplist: ToplistConfig = {
    id: 'vip-casinos',
    title: 'VIPプログラムが充実したカジノ',
    description: 'ハイローラー向けの豪華VIP特典があるカジノ',
    casinos: byRating
      .filter((c) => {
        const text = c.features.highlights.join(' ').toLowerCase();
        return text.includes('vip') || text.includes('ハイローラー') || text.includes('降格なし');
      })
      .slice(0, 10)
      .map((c) => ({
        casinoSlug: c.slug,
      })),
    lastUpdated: today,
  };

  // Low wagering (賭け条件が低い)
  const lowWageringToplist: ToplistConfig = {
    id: 'low-wagering',
    title: '賭け条件が低いカジノ',
    description: 'ボーナスの賭け条件が低く出金しやすいカジノ',
    casinos: byRating
      .filter((c) => {
        const text =
          c.features.bonusHeadline.toLowerCase() + ' ' + c.features.highlights.join(' ').toLowerCase();
        return text.includes('賭け条件') || text.includes('wagering') || text.includes('倍');
      })
      .slice(0, 10)
      .map((c) => ({
        casinoSlug: c.slug,
      })),
    lastUpdated: today,
  };

  return {
    'top-rated': topRated,
    'bitcoin-casinos': bitcoinToplist,
    'crypto-casinos': cryptoToplist,
    'anonymous-casinos': anonymousToplist,
    'best-bonuses': bonusToplist,
    'new-casinos': newCasinos,
    'ethereum-casinos': ethereumToplist,
    'litecoin-casinos': litecoinToplist,
    'bank-transfer-casinos': bankToplist,
    'usdt-casinos': usdtToplist,
    'similar-casinos': similarCasinos,
    'live-casino': liveCasinoToplist,
    'sports-betting': sportsBettingToplist,
    'vip-casinos': vipToplist,
    'low-wagering': lowWageringToplist,
  };
}

function generateToplistsFile(toplists: Record<string, ToplistConfig>): string {
  const entries = Object.entries(toplists);

  return `/**
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
${entries
  .map(([id, config]) => {
    const casinoEntries = config.casinos
      .map((c) => {
        const parts = [`        casinoSlug: '${c.casinoSlug}'`];
        if (c.headlineOverride) parts.push(`        headlineOverride: '${c.headlineOverride}'`);
        if (c.descriptionOverride) parts.push(`        descriptionOverride: '${c.descriptionOverride}'`);
        if (c.badge) parts.push(`        badge: '${c.badge}'`);
        return `      {\n${parts.join(',\n')},\n      }`;
      })
      .join(',\n');

    return `  '${id}': {
    id: '${id}',
    title: '${config.title}',
    description: '${config.description || ''}',
    casinos: [
${casinoEntries}
    ],
    lastUpdated: '${config.lastUpdated}',
  }`;
  })
  .join(',\n\n')},
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

  return entries
    .map((entry) => {
      const casino = getCasino(entry.casinoSlug);
      if (!casino) return null;

      return {
        casino,
        headline: entry.headlineOverride || casino.features.bonusHeadline,
        description:
          entry.descriptionOverride || casino.features.highlights.slice(0, 2).join('。') + '。',
        badge: entry.badge,
      };
    })
    .filter((entry): entry is ResolvedToplistEntry => entry !== null);
}
`;
}

async function main(): Promise<void> {
  console.log('Building toplists from casino data...\n');

  // Load all casinos
  const casinos = await loadAllCasinos();
  console.log(`Loaded ${casinos.length} casinos\n`);

  // Generate toplists
  const toplists = generateToplists(casinos);
  console.log(`Generated ${Object.keys(toplists).length} toplists:\n`);

  for (const [id, config] of Object.entries(toplists)) {
    console.log(`  - ${id}: ${config.casinos.length} casinos`);
  }

  // Generate and write the file
  const content = generateToplistsFile(toplists);
  await fs.writeFile(TOPLISTS_FILE, content);

  console.log(`\n✅ Generated ${TOPLISTS_FILE}`);
}

main().catch((err) => {
  console.error('Failed to build toplists:', err);
  process.exit(1);
});
