import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getCasino } from '@/content/data/casinos';

export const metadata: Metadata = {
  title: "オー・マイ・スピンズの評判からボーナス・登録方法まで徹底検証！",
  description: "オー・マイ・スピンズ（Oh My Spins）のボーナス、安全性、入出金方法、ゲームラインナップをCasinoTsuが徹底レビュー。マニアックなプロバイダーも見つかる！",
};

export default async function OhmyspinsReviewPage() {
  const { content, frontmatter } = await loadMDX('reviews', 'ohmyspins');
  const casinoData = getCasino('ohmyspins');

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
              {frontmatter.description && (
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
              )}
              {casinoData?.features?.bonusHeadline && (
                <div className="mt-4 p-3 bg-white/10 rounded-lg inline-block">
                  <span className="text-amber-300 font-medium">ボーナス: </span>
                  <span>{casinoData.features.bonusHeadline}</span>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-white/70">
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
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
