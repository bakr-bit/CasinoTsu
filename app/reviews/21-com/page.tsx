import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getCasino } from '@/content/data/casinos';

export const metadata: Metadata = {
  title: "21.com（21ドットコム）の評判・入金方法を解説",
  description: "スタイリッシュなデザインが魅力の21.com（21ドットコム）について、入金不要フリースピンや最大$1,000のウェルカムボーナス、評判、入出金方法を徹底解説します。",
};

export default async function N21ComReviewPage() {
  const { content, frontmatter } = await loadMDX('reviews', '21-com');
  const casinoData = getCasino('21-com');

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
