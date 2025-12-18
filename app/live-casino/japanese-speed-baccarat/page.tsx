import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getLiveCasino } from '@/content/data/live-casino';

export const metadata: Metadata = {
  title: "ジャパニーズ・スピードバカラ｜遊び方と完全攻略ガイド",
  description: "Pragmatic Playのジャパニーズ・スピードバカラの遊び方、ルール、ベットの種類と配当、ノーコミッションモードの特徴を徹底解説。RTPや攻略法、おすすめカジノも紹介。",
};

export default async function JapaneseSpeedBaccaratLiveCasinoPage() {
  const { content, frontmatter } = await loadMDX('live-casino', 'japanese-speed-baccarat');
  const liveCasinoData = getLiveCasino('japanese-speed-baccarat');

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
