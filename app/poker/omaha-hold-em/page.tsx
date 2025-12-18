import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getPoker } from '@/content/data/poker';

export const metadata: Metadata = {
  title: "オマハポーカー＆オマハホールデム完全ガイド｜日本で遊べるルール・戦略・サイト情報",
  description: "オマハポーカーとオマハホールデムのルール、テキサスホールデムとの違い、バリエーション、日本で遊べるオンラインカジノ情報、戦略のコツまで、CasinoTsuが徹底解説します。",
};

export default async function OmahaHoldEmPokerPage() {
  const { content, frontmatter } = await loadMDX('poker', 'omaha-hold-em');
  const pokerData = getPoker('omaha-hold-em');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ポーカーガイド
            </span>
            {pokerData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {pokerData.category === 'variant' ? 'バリアント' :
                 pokerData.category === 'strategy' ? '戦略' :
                 pokerData.category === 'rules' ? 'ルール' : 'ガイド'}
              </span>
            )}
            {pokerData?.difficulty && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                {pokerData.difficulty === 'beginner' ? '初心者向け' :
                 pokerData.difficulty === 'intermediate' ? '中級者向け' : '上級者向け'}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-teal-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
