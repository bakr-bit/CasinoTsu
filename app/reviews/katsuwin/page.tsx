import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getCasino } from '@/content/data/casinos';

export const metadata: Metadata = {
  title: "勝WIN（Katsuwin）カジノの入金不要ボーナスや口コミ・評判【最新】",
  description: "2023年オープンの勝WIN（KatsuWIN）カジノを徹底レビュー。5,000円の入金不要ボーナスや業界トップクラスのパチンコ・パチスロ台数、安全性、決済方法を解説します。",
};

export default async function KatsuwinReviewPage() {
  const { content, frontmatter } = await loadMDX('reviews', 'katsuwin');
  const casinoData = getCasino('katsuwin');

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
