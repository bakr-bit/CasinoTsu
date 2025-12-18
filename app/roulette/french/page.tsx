import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getRoulette } from '@/content/data/roulette';

export const metadata: Metadata = {
  title: "初心者も安心！日本で遊べるフレンチルーレット完全ガイド｜ルールから戦略、オンラインカジノ選びまで",
  description: "フレンチルーレットの基本ルールから賭け方、戦略、日本人プレイヤー向けオンラインカジノの選び方まで徹底解説。有利な「En Prison」や「La Partage」ルールで勝率を高め、安全に楽しむための情報が満載です。",
};

export default async function FrenchRoulettePage() {
  const { content, frontmatter } = await loadMDX('roulette', 'french');
  const rouletteData = getRoulette('french');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
