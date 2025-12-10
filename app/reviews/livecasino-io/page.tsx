import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getCasino } from '@/content/data/casinos';

export const metadata: Metadata = {
  title: "ライブカジノアイオー（Livecasino.io）の評判と最新レビュー",
  description: "ライブカジノアイオー（Livecasino.io）の信頼性、ボーナス、仮想通貨決済について徹底解説。ライブカジノ特化型の魅力を紹介します。",
};

export default async function LivecasinoIoReviewPage() {
  const { content, frontmatter } = await loadMDX('reviews', 'livecasino-io');
  const casinoData = getCasino('livecasino-io');

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
