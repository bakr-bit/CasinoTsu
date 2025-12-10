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
  template: 'payment' | 'review' | 'bonus' | 'game-show' | 'provider' | 'poker' | 'roulette';
  /** Data import statement */
  dataImport?: string;
  /** Data getter function call */
  dataGetter?: string;
}

const CATEGORIES: CategoryConfig[] = [
  {
    name: 'payment',
    template: 'payment',
    dataImport: "import { getPaymentMethod } from '@/content/data/payments';",
    dataGetter: "getPaymentMethod('{slug}')",
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
];

/**
 * Generate page.tsx content for payment category
 */
function generatePaymentPage(slug: string, frontmatter: Record<string, unknown>): string {
  const title = frontmatter.title || `${slug} Payment Guide`;
  const description = frontmatter.description || '';

  return `import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getPaymentMethod } from '@/content/data/payments';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default async function ${toPascalCase(slug)}PaymentPage() {
  const { content, frontmatter } = await loadMDX('payment', '${slug}');
  const paymentData = getPaymentMethod('${slug}');

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

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              カジノレビュー
            </span>
            {casinoData && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                評価: {casinoData.rating}/5
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-purple-100">{frontmatter.description}</p>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-purple-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
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
 * Convert slug to PascalCase for component names
 */
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
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

  console.log(`Done! Generated ${totalGenerated} page(s).`);
}

// Run build
build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
