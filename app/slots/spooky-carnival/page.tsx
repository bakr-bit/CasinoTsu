import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getSlot } from '@/content/data/slots';

export const metadata: Metadata = {
  title: "スプーキー・カーニバル（Spooky Carnival）スロットレビュー",
  description: "このスロットでは、5枚集めると通常シンボルをワイルドシンボルに変化させる「スプーキーコイン」機能が特徴です。",
};

export default async function SpookyCarnivalSlotPage() {
  const { content, frontmatter } = await loadMDX('slots', 'spooky-carnival');
  const slotData = getSlot('spooky-carnival');

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
