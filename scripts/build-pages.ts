/**
 * Build Pages Script
 * Generates page.tsx files from MDX content
 *
 * Usage: npx tsx scripts/build-pages.ts
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const MDX_DIR = path.join(ROOT, 'content', 'mdx');
const APP_DIR = path.join(ROOT, 'app');

/**
 * Category configuration
 */
interface CategoryConfig {
  /** Category name (matches MDX folder name) */
  name: string;
  /** Template to use for this category */
  template: 'payment' | 'review' | 'bonus' | 'game-show' | 'provider' | 'poker' | 'roulette' | 'live-casino' | 'crash-games' | 'slot';
  /** Data import statement */
  dataImport?: string;
  /** Data getter function call */
  dataGetter?: string;
}

/**
 * Pillar page configuration for category landing pages
 */
interface PillarConfig {
  /** Category name (matches MDX folder name and pillar file name) */
  name: string;
  /** Japanese category name for display */
  nameJa: string;
  /** Category description */
  description: string;
  /** Hero gradient colors (Tailwind classes) */
  gradient: string;
  /** Data getter function name */
  dataGetter: string;
  /** Data import statement */
  dataImport: string;
  /** Function to extract article meta from data */
  metaExtractor: string;
}

const PILLAR_CATEGORIES: PillarConfig[] = [
  {
    name: 'slots',
    nameJa: 'スロット',
    description: 'オンラインスロットの完全ガイド。RTP、ボラティリティ、プロバイダー情報など。',
    gradient: 'from-blue-600 to-indigo-800',
    dataGetter: 'getAllSlots',
    dataImport: "import { getAllSlots } from '@/content/data/slots';",
    metaExtractor: `(d) => ({
      provider: d.hero?.provider,
      rtp: d.hero?.rtp,
      volatility: d.hero?.volatility,
      score: d.hero?.score,
      slotImageSrc: d.hero?.slotImageSrc,
    })`,
  },
  {
    name: 'payment',
    nameJa: '決済方法',
    description: 'オンラインカジノの入出金方法を徹底解説。手数料、処理時間、対応カジノなど。',
    gradient: 'from-emerald-600 to-teal-800',
    dataGetter: 'getAllPayments',
    dataImport: "import { getAllPayments } from '@/content/data/payments';",
    metaExtractor: `(d) => ({
      type: d.type,
      jpySupported: d.features?.jpySupported,
    })`,
  },
  {
    name: 'reviews',
    nameJa: 'カジノレビュー',
    description: '信頼できるオンラインカジノを徹底レビュー。ライセンス、ボーナス、決済方法など。',
    gradient: 'from-purple-600 to-purple-800',
    dataGetter: 'getAllCasinos',
    dataImport: "import { getAllCasinos } from '@/content/data/casinos';",
    metaExtractor: `(d) => ({
      rating: d.rating,
      bonusHeadline: d.features?.bonusHeadline,
      logo: d.logo,
    })`,
  },
  {
    name: 'providers',
    nameJa: 'プロバイダー',
    description: 'オンラインカジノゲームを開発する主要プロバイダーを紹介。',
    gradient: 'from-blue-600 to-indigo-700',
    dataGetter: 'getAllProviders',
    dataImport: "import { getAllProviders } from '@/content/data/providers';",
    metaExtractor: `(d) => ({
      gameCount: d.gameCount,
      gameTypes: d.gameTypes,
    })`,
  },
  {
    name: 'bonuses',
    nameJa: 'ボーナス',
    description: '入金不要ボーナス、ウェルカムボーナス、キャッシュバックなど各種ボーナスを解説。',
    gradient: 'from-amber-500 to-orange-600',
    dataGetter: 'getAllBonusTypes',
    dataImport: "import { getAllBonusTypes } from '@/content/data/bonus-types';",
    metaExtractor: `(d) => ({
      type: d.type,
    })`,
  },
  {
    name: 'poker',
    nameJa: 'ポーカー',
    description: 'テキサスホールデム、オマハなど各種ポーカーのルールと戦略を解説。',
    gradient: 'from-green-600 to-teal-700',
    dataGetter: 'getAllPoker',
    dataImport: "import { getAllPoker } from '@/content/data/poker';",
    metaExtractor: `(d) => ({
      category: d.category,
      difficulty: d.difficulty,
    })`,
  },
  {
    name: 'roulette',
    nameJa: 'ルーレット',
    description: 'ヨーロピアン、アメリカン、フレンチルーレットのルールと攻略法を解説。',
    gradient: 'from-red-600 to-rose-700',
    dataGetter: 'getAllRoulette',
    dataImport: "import { getAllRoulette } from '@/content/data/roulette';",
    metaExtractor: `(d) => ({
      category: d.category,
      wheelType: d.wheelType,
      houseEdge: d.houseEdge,
    })`,
  },
  {
    name: 'live-casino',
    nameJa: 'ライブカジノ',
    description: 'ライブバカラ、ライブブラックジャック、ライブルーレットなどを徹底解説。',
    gradient: 'from-amber-600 to-yellow-700',
    dataGetter: 'getAllLiveCasino',
    dataImport: "import { getAllLiveCasino } from '@/content/data/live-casino';",
    metaExtractor: `(d) => ({
      gameType: d.gameType,
      providerName: d.providerJa || d.provider,
    })`,
  },
  {
    name: 'crash-games',
    nameJa: 'クラッシュゲーム',
    description: 'Aviator、Spaceman、JetXなど人気クラッシュゲームのルールと攻略法。',
    gradient: 'from-cyan-600 to-sky-700',
    dataGetter: 'getAllCrashGames',
    dataImport: "import { getAllCrashGames } from '@/content/data/crash-games';",
    metaExtractor: `(d) => ({
      maxMultiplier: d.maxMultiplier,
      providerName: d.providerJa || d.provider,
    })`,
  },
  {
    name: 'game-shows',
    nameJa: 'ゲームショー',
    description: 'Crazy Time、Monopoly Live、Lightning Rouletteなど人気ゲームショーを解説。',
    gradient: 'from-pink-500 to-rose-600',
    dataGetter: 'getAllGameShows',
    dataImport: "import { getAllGameShows } from '@/content/data/game-shows';",
    metaExtractor: `(d) => ({
      category: d.category,
      providerName: d.providerJa || d.provider,
    })`,
  },
];

const CATEGORIES: CategoryConfig[] = [
  {
    name: 'payment',
    template: 'payment',
    dataImport: "import { getPayment } from '@/content/data/payments';",
    dataGetter: "getPayment('{slug}')",
  },
  {
    name: 'reviews',
    template: 'review',
    dataImport: "import { getCasino } from '@/content/data/casinos';",
    dataGetter: "getCasino('{slug}')",
  },
  {
    name: 'bonuses',
    template: 'bonus',
  },
  {
    name: 'game-shows',
    template: 'game-show',
  },
  {
    name: 'providers',
    template: 'provider',
    dataImport: "import { getProvider } from '@/content/data/providers';",
    dataGetter: "getProvider('{slug}')",
  },
  {
    name: 'poker',
    template: 'poker',
    dataImport: "import { getPoker } from '@/content/data/poker';",
    dataGetter: "getPoker('{slug}')",
  },
  {
    name: 'roulette',
    template: 'roulette',
    dataImport: "import { getRoulette } from '@/content/data/roulette';",
    dataGetter: "getRoulette('{slug}')",
  },
  {
    name: 'live-casino',
    template: 'live-casino',
    dataImport: "import { getLiveCasino } from '@/content/data/live-casino';",
    dataGetter: "getLiveCasino('{slug}')",
  },
  {
    name: 'crash-games',
    template: 'crash-games',
    dataImport: "import { getCrashGame } from '@/content/data/crash-games';",
    dataGetter: "getCrashGame('{slug}')",
  },
  {
    name: 'slots',
    template: 'slot',
    dataImport: "import { getSlot } from '@/content/data/slots';",
    dataGetter: "getSlot('{slug}')",
  },
];

/**
 * Generate page.tsx content for payment category
 */
function generatePaymentPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Payment Guide`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getPayment } from '@/content/data/payments';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}PaymentPage() {
  const { content, frontmatter } = await loadMDX('payment', '${slug}');
  const paymentData = getPayment('${slug}');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              決済方法ガイド
            </span>
            {paymentData && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {paymentData.type === 'crypto' ? '仮想通貨' : paymentData.type}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-emerald-100">{frontmatter.description}</p>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-emerald-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for review category
 */
function generateReviewPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Review`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getCasino } from '@/content/data/casinos';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}ReviewPage() {
  const { content, frontmatter } = await loadMDX('reviews', '${slug}');
  const casinoData = getCasino('${slug}');

  // Generate star rating display
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    return (
      '★'.repeat(fullStars) +
      (hasHalf ? '☆' : '') +
      '☆'.repeat(emptyStars)
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Casino Logo */}
            {casinoData?.logo && (
              <div className="flex-shrink-0 w-full md:w-48 lg:w-56">
                <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-4">
                  <img
                    src={casinoData.logo}
                    alt={casinoData.nameJa || frontmatter.title as string}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}

            {/* Hero Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  カジノレビュー
                </span>
                {casinoData && (
                  <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                    {renderStars(casinoData.rating)} ({casinoData.rating}/5)
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
              {frontmatter.description && (
                <p className="text-lg text-purple-100">{frontmatter.description}</p>
              )}
              {casinoData?.features?.bonusHeadline && (
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <span className="text-amber-300 font-medium">ボーナス: </span>
                  <span>{casinoData.features.bonusHeadline}</span>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-purple-200">
                <span>著者: {frontmatter.author}</span>
                <span>•</span>
                <span>更新日: {frontmatter.lastUpdated}</span>
                {casinoData?.established && (
                  <>
                    <span>•</span>
                    <span>設立: {casinoData.established}年</span>
                  </>
                )}
                {casinoData?.license?.jurisdiction && (
                  <>
                    <span>•</span>
                    <span>ライセンス: {casinoData.license.jurisdiction}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 hover:prose-a:text-purple-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for bonus category
 */
function generateBonusPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Bonus`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}BonusPage() {
  const { content, frontmatter } = await loadMDX('bonuses', '${slug}');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ボーナスガイド
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-amber-100">{frontmatter.description}</p>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-amber-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600 hover:prose-a:text-amber-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for game-show category
 */
function generateGameShowPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Game Show`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}GameShowPage() {
  const { content, frontmatter } = await loadMDX('game-shows', '${slug}');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ゲームショー
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-pink-100">{frontmatter.description}</p>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-pink-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-pink-600 hover:prose-a:text-pink-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for provider category
 */
function generateProviderPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Provider Guide`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getProvider } from '@/content/data/providers';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}ProviderPage() {
  const { content, frontmatter } = await loadMDX('providers', '${slug}');
  const providerData = getProvider('${slug}');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              プロバイダーガイド
            </span>
            {providerData && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {providerData.gameCount}ゲーム
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-blue-100">{frontmatter.description}</p>
          )}
          {providerData && (
            <div className="flex flex-wrap gap-2 mt-4">
              {providerData.gameTypes.map((type: string) => (
                <span key={type} className="px-2 py-1 bg-white/10 rounded text-sm">
                  {type}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-blue-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
            {providerData && (
              <>
                <span>•</span>
                <span>設立: {providerData.founded}年</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for poker category
 */
function generatePokerPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Poker Guide`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getPoker } from '@/content/data/poker';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}PokerPage() {
  const { content, frontmatter } = await loadMDX('poker', '${slug}');
  const pokerData = getPoker('${slug}');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ポーカーガイド
            </span>
            {pokerData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {pokerData.category === 'variant' ? 'バリアント' :
                 pokerData.category === 'strategy' ? '戦略' :
                 pokerData.category === 'rules' ? 'ルール' : 'ガイド'}
              </span>
            )}
            {pokerData?.difficulty && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                {pokerData.difficulty === 'beginner' ? '初心者向け' :
                 pokerData.difficulty === 'intermediate' ? '中級者向け' : '上級者向け'}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-green-100">{frontmatter.description}</p>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-green-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-green-600 hover:prose-a:text-green-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for roulette category
 */
function generateRoulettePage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Roulette Guide`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getRoulette } from '@/content/data/roulette';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}RoulettePage() {
  const { content, frontmatter } = await loadMDX('roulette', '${slug}');
  const rouletteData = getRoulette('${slug}');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ルーレットガイド
            </span>
            {rouletteData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {rouletteData.category === 'variant' ? 'バリアント' :
                 rouletteData.category === 'strategy' ? '戦略' :
                 rouletteData.category === 'rules' ? 'ルール' : 'ガイド'}
              </span>
            )}
            {rouletteData?.wheelType && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                {rouletteData.wheelType === 'european' ? 'ヨーロピアン' :
                 rouletteData.wheelType === 'american' ? 'アメリカン' :
                 rouletteData.wheelType === 'french' ? 'フレンチ' : 'その他'}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-red-100">{frontmatter.description}</p>
          )}
          {rouletteData?.houseEdge && (
            <div className="mt-4 flex items-center gap-4">
              <span className="px-3 py-1 bg-white/10 rounded text-sm">
                ハウスエッジ: {rouletteData.houseEdge}
              </span>
              {rouletteData.rtp && (
                <span className="px-3 py-1 bg-white/10 rounded text-sm">
                  RTP: {rouletteData.rtp}
                </span>
              )}
            </div>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-red-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-600 hover:prose-a:text-red-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for live-casino category
 */
function generateLiveCasinoPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Live Casino Guide`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getLiveCasino } from '@/content/data/live-casino';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}LiveCasinoPage() {
  const { content, frontmatter } = await loadMDX('live-casino', '${slug}');
  const liveCasinoData = getLiveCasino('${slug}');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ライブカジノガイド
            </span>
            {liveCasinoData?.gameType && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {liveCasinoData.gameType === 'baccarat' ? 'バカラ' :
                 liveCasinoData.gameType === 'blackjack' ? 'ブラックジャック' :
                 liveCasinoData.gameType === 'roulette' ? 'ルーレット' :
                 liveCasinoData.gameType === 'poker' ? 'ポーカー' :
                 liveCasinoData.gameType === 'craps' ? 'クラップス' : 'その他'}
              </span>
            )}
            {liveCasinoData?.hasJapaneseTable && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                日本語テーブルあり
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-amber-100">{frontmatter.description}</p>
          )}
          {liveCasinoData?.provider && (
            <div className="mt-4 flex items-center gap-4">
              <span className="px-3 py-1 bg-white/10 rounded text-sm">
                プロバイダー: {liveCasinoData.providerJa || liveCasinoData.provider}
              </span>
              {liveCasinoData.rtp && (
                <span className="px-3 py-1 bg-white/10 rounded text-sm">
                  RTP: {liveCasinoData.rtp}
                </span>
              )}
              {liveCasinoData.streamQuality && (
                <span className="px-3 py-1 bg-white/10 rounded text-sm">
                  {liveCasinoData.streamQuality}配信
                </span>
              )}
            </div>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-amber-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600 hover:prose-a:text-amber-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for crash-games category
 */
function generateCrashGamesPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Crash Game Guide`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getCrashGame } from '@/content/data/crash-games';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}CrashGamesPage() {
  const { content, frontmatter } = await loadMDX('crash-games', '${slug}');
  const crashGameData = getCrashGame('${slug}');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              クラッシュゲームガイド
            </span>
            {crashGameData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {crashGameData.category === 'guide' ? 'ガイド' :
                 crashGameData.category === 'variant' ? 'バリアント' :
                 crashGameData.category === 'strategy' ? '戦略' : 'レビュー'}
              </span>
            )}
            {crashGameData?.provablyFair && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                公正性証明あり
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-cyan-100">{frontmatter.description}</p>
          )}
          {crashGameData?.provider && (
            <div className="mt-4 flex items-center gap-4">
              <span className="px-3 py-1 bg-white/10 rounded text-sm">
                プロバイダー: {crashGameData.providerJa || crashGameData.provider}
              </span>
              {crashGameData.maxMultiplier && (
                <span className="px-3 py-1 bg-white/10 rounded text-sm">
                  最大倍率: {crashGameData.maxMultiplier}
                </span>
              )}
              {crashGameData.rtp && (
                <span className="px-3 py-1 bg-white/10 rounded text-sm">
                  RTP: {crashGameData.rtp}
                </span>
              )}
              {crashGameData.volatility && (
                <span className="px-3 py-1 bg-white/10 rounded text-sm">
                  {crashGameData.volatility === 'low' ? '低ボラティリティ' :
                   crashGameData.volatility === 'medium' ? '中ボラティリティ' :
                   crashGameData.volatility === 'high' ? '高ボラティリティ' : '超高ボラティリティ'}
                </span>
              )}
            </div>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-cyan-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-cyan-600 hover:prose-a:text-cyan-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate page.tsx content for slots category
 */
function generateSlotPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Slot Guide`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getSlot } from '@/content/data/slots';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}SlotPage() {
  const { content, frontmatter } = await loadMDX('slots', '${slug}');
  const slotData = getSlot('${slug}');

  // Generate star rating display
  const renderStars = (score: number, max: number) => {
    const fullStars = Math.floor(score);
    const hasHalf = score % 1 >= 0.5;
    const emptyStars = max - fullStars - (hasHalf ? 1 : 0);
    return (
      '★'.repeat(fullStars) +
      (hasHalf ? '☆' : '') +
      '☆'.repeat(emptyStars)
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Slot Image */}
            {slotData?.hero?.slotImageSrc && (
              <div className="flex-shrink-0 w-full md:w-64 lg:w-80">
                <div className="rounded-xl overflow-hidden shadow-2xl bg-white/10">
                  <img
                    src={slotData.hero.slotImageSrc}
                    alt={frontmatter.title as string}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}

            {/* Hero Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  スロットガイド
                </span>
                {slotData?.hero?.provider && (
                  <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                    {slotData.hero.provider}
                  </span>
                )}
                {slotData?.hero?.volatility && (
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                    {slotData.hero.volatility}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
              {frontmatter.description && (
                <p className="text-lg text-blue-100">{frontmatter.description}</p>
              )}
              {slotData?.hero && (
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {slotData.hero.score !== undefined && (
                    <span className="px-3 py-1 bg-white/10 rounded text-sm">
                      評価: {renderStars(slotData.hero.score, slotData.hero.scoreMax || 5)} ({slotData.hero.score}/{slotData.hero.scoreMax || 5})
                    </span>
                  )}
                  {slotData.hero.rtp && (
                    <span className="px-3 py-1 bg-white/10 rounded text-sm">
                      RTP: {slotData.hero.rtp}
                    </span>
                  )}
                  {slotData.hero.maxMultiplier && (
                    <span className="px-3 py-1 bg-white/10 rounded text-sm">
                      最大倍率: {slotData.hero.maxMultiplier}
                    </span>
                  )}
                  {slotData.hero.reels && slotData.hero.paylines && (
                    <span className="px-3 py-1 bg-white/10 rounded text-sm">
                      {slotData.hero.reels} / {slotData.hero.paylines}
                    </span>
                  )}
                </div>
              )}
              <div className="flex items-center gap-4 mt-6 text-sm text-blue-200">
                <span>著者: {frontmatter.author}</span>
                <span>•</span>
                <span>更新日: {frontmatter.lastUpdated}</span>
                {slotData?.hero?.releaseDate && (
                  <>
                    <span>•</span>
                    <span>リリース: {slotData.hero.releaseDate}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
`;
}

/**
 * Generate pillar page for a category landing page
 */
function generatePillarPage(config: PillarConfig, hasPillarMdx: boolean): string {
  const pillarMdxImport = hasPillarMdx
    ? `import { loadMDX } from '@/lib/mdx';`
    : '';
  const pillarMdxLoad = hasPillarMdx
    ? `const { content } = await loadMDX('pillars', '${config.name}');`
    : `const content = null;`;

  return `import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
${pillarMdxImport}
${config.dataImport}
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: '${config.nameJa} | CasinoTsu',
  description: '${config.description}',
};

export default async function ${toPascalCase(config.name)}PillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('${config.name}');
  const dataRegistry = ${config.dataGetter}();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = ${config.metaExtractor};

  // Merge MDX frontmatter with registry data
  const enrichedArticles = articles.map(({ slug, frontmatter }) => {
    const data = dataRegistry.find((d: { slug: string }) => d.slug === slug);
    const meta = data ? extractMeta(data) : {};
    return {
      slug,
      title: frontmatter.title || slug,
      description: frontmatter.description,
      lastUpdated: frontmatter.lastUpdated,
      category: '${config.name}',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  ${pillarMdxLoad}

  return (
    <PillarPageTemplate
      category="${config.name}"
      categoryNameJa="${config.nameJa}"
      description="${config.description}"
      heroGradient="${config.gradient}"
      content={content}
      articles={enrichedArticles}
    />
  );
}
`;
}

/**
 * Check if pillar MDX file exists
 */
async function pillarMdxExists(category: string): Promise<boolean> {
  const filePath = path.join(MDX_DIR, 'pillars', `${category}.mdx`);
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generate pillar page for a category
 */
async function buildPillarPage(config: PillarConfig): Promise<void> {
  const hasPillarMdx = await pillarMdxExists(config.name);
  const pageDir = path.join(APP_DIR, config.name);
  const pagePath = path.join(pageDir, 'page.tsx');

  const pageContent = generatePillarPage(config, hasPillarMdx);

  await fs.mkdir(pageDir, { recursive: true });
  await fs.writeFile(pagePath, pageContent);
  console.log(`  Generated pillar: app/${config.name}/page.tsx${hasPillarMdx ? ' (with MDX content)' : ''}`);
}

/**
 * Convert slug to PascalCase for component names
 * Prefixes with 'N' if the result would start with a number
 */
function toPascalCase(str: string): string {
  const result = str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  // Prefix with 'N' if starts with a number (invalid JS identifier)
  return /^\d/.test(result) ? `N${result}` : result;
}

/**
 * Get all MDX files in a category
 */
async function getMDXFiles(category: string): Promise<string[]> {
  const dir = path.join(MDX_DIR, category);
  try {
    const files = await fs.readdir(dir);
    return files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', ''));
  } catch {
    return [];
  }
}

/**
 * Read frontmatter from MDX file
 */
async function getFrontmatter(category: string, slug: string): Promise<Record<string, unknown>> {
  const filePath = path.join(MDX_DIR, category, `${slug}.mdx`);
  const content = await fs.readFile(filePath, 'utf-8');
  const { data } = matter(content);
  return data;
}

/**
 * Generate page for a single MDX file
 */
async function generatePage(category: string, slug: string): Promise<void> {
  const frontmatter = await getFrontmatter(category, slug);
  const pageDir = path.join(APP_DIR, category, slug);
  const pagePath = path.join(pageDir, 'page.tsx');

  // Generate page content based on category
  let pageContent: string;
  switch (category) {
    case 'payment':
      pageContent = generatePaymentPage(slug, frontmatter);
      break;
    case 'reviews':
      pageContent = generateReviewPage(slug, frontmatter);
      break;
    case 'bonuses':
      pageContent = generateBonusPage(slug, frontmatter);
      break;
    case 'game-shows':
      pageContent = generateGameShowPage(slug, frontmatter);
      break;
    case 'providers':
      pageContent = generateProviderPage(slug, frontmatter);
      break;
    case 'poker':
      pageContent = generatePokerPage(slug, frontmatter);
      break;
    case 'roulette':
      pageContent = generateRoulettePage(slug, frontmatter);
      break;
    case 'live-casino':
      pageContent = generateLiveCasinoPage(slug, frontmatter);
      break;
    case 'crash-games':
      pageContent = generateCrashGamesPage(slug, frontmatter);
      break;
    case 'slots':
      pageContent = generateSlotPage(slug, frontmatter);
      break;
    default:
      console.warn(`Unknown category: ${category}`);
      return;
  }

  // Create directory and write file
  await fs.mkdir(pageDir, { recursive: true });
  await fs.writeFile(pagePath, pageContent);
  console.log(`  Generated: app/${category}/${slug}/page.tsx`);
}

/**
 * Main build function
 */
async function build(): Promise<void> {
  console.log('Building pages from MDX content...\n');

  let totalGenerated = 0;

  // Generate individual article pages
  for (const config of CATEGORIES) {
    const slugs = await getMDXFiles(config.name);
    if (slugs.length === 0) {
      console.log(`[${config.name}] No MDX files found`);
      continue;
    }

    console.log(`[${config.name}] Found ${slugs.length} MDX file(s)`);
    for (const slug of slugs) {
      await generatePage(config.name, slug);
      totalGenerated++;
    }
    console.log('');
  }

  // Generate pillar (category landing) pages
  console.log('Building pillar pages...\n');
  let pillarCount = 0;

  for (const config of PILLAR_CATEGORIES) {
    await buildPillarPage(config);
    pillarCount++;
  }
  console.log('');

  console.log(`Done! Generated ${totalGenerated} article page(s) and ${pillarCount} pillar page(s).`);
}

// Run build
build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
