import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getCrashGame } from '@/content/data/crash-games';

export const metadata: Metadata = {
  title: "バスタビット（Bustabit）クラッシュゲーム完全ガイド【2025年版】",
  description: "バスタビット（Bustabit）は、クラッシュゲームの元祖。配当倍率が上昇し、クラッシュ前にキャッシュアウトするシンプルなゲームです。遊び方、安全性、対応カジノを徹底解説。",
};

export default async function BustabitCrashGamesPage() {
  const { content, frontmatter } = await loadMDX('crash-games', 'bustabit');
  const crashGameData = getCrashGame('bustabit');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cyan-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
          )}
          {crashGameData?.provider && (
            <div className="mt-4 flex flex-wrap items-center gap-4">
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
          <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-cyan-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
