import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';

export const metadata: Metadata = {
  title: "ファイヤーボールルーレット完全レビュー｜Evolutionの新感覚ライブルーレット🔥",
  description: "Evolution社が2025年4月にリリースした最大2,500倍配当のライブゲームショー「ファイヤーボールルーレット」の遊び方、戦略、日本人向けカジノを徹底解説します。",
};

export default async function FireballRouletteGameShowPage() {
  const { content, frontmatter } = await loadMDX('game-shows', 'fireball-roulette');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-rose-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ゲームショー
            </span>
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-rose-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
