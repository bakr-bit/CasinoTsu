import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getSlot } from '@/content/data/slots';

export const metadata: Metadata = {
  title: "Bonanza Billion",
  description: "ボナンザ・ビリオン（Bonanza Billion） は、フルーツや宝石が弾ける クラスターペイスロット 🍇 です。 BGaming社 から2021年12月2日にリリースされたこのスロットは、その名の通り「Bonanza（豊富さ、豊穣）」をテーマに、プレイヤーに大きな配当のチャンスを提供します。特に、スピン中に現れる100倍マルチプライヤーや、ボーナスステージでの連続配当、そして追加スピンの可能性は、ゲームを一層盛り上げます。高ボラティリティながらも、クラシックなフルーツテーマと最新のゲーム機能を組み合わせた、魅力的なゲーム体験が期待できます。CasinoTsu は、この「豊富さ」を追求するスロットを皆様にご紹介いたします。",
};

export default async function BonanzaBillionSlotPage() {
  const { content, frontmatter } = await loadMDX('slots', 'bonanza-billion');
  const slotData = getSlot('bonanza-billion');

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
              {frontmatter.description && (
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
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
              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-white/70">
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
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
