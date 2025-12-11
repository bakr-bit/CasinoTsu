import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getLiveCasino } from '@/content/data/live-casino';

export const metadata: Metadata = {
  title: "【2025年版】CasinoTsu厳選！ライブルーレット攻略＆おすすめオンラインカジノ完全ガイド",
  description: "2025年最新版ライブルーレット完全ガイド。日本人プレイヤー向けに、おすすめカジノ、遊び方、種類、RTP、攻略法、安全な選び方を徹底解説。CasinoTsuが厳選した情報で、自宅から臨場感あふれるルーレットを楽しもう。",
};

export default async function LiveRouletteLiveCasinoPage() {
  const { content, frontmatter } = await loadMDX('live-casino', 'live-roulette');
  const liveCasinoData = getLiveCasino('live-roulette');

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
