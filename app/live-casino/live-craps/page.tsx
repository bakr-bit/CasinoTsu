import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getLiveCasino } from '@/content/data/live-casino';

export const metadata: Metadata = {
  title: "ライブクラップス完全ガイド｜日本人プレイヤー向け最新情報",
  description: "オンラインカジノのライブクラップス完全ガイド。基本ルール、魅力、日本人向けカジノ、決済方法、RTP、戦略、最新テクノロジーまで徹底解説。安全に楽しむための情報が満載です。",
};

export default async function LiveCrapsLiveCasinoPage() {
  const { content, frontmatter } = await loadMDX('live-casino', 'live-craps');
  const liveCasinoData = getLiveCasino('live-craps');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amber-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
          )}
          {liveCasinoData?.provider && (
            <div className="mt-4 flex flex-wrap items-center gap-4">
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
