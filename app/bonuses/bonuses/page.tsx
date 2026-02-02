import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';

export const metadata: Metadata = {
  title: "オンラインカジノボーナス完全攻略ガイド【2025年最新版】",
  description: "オンラインカジノのボーナスを種類別に徹底解説。入金不要ボーナス、フリースピン、賭け条件の仕組みを理解し、2025年最新のお得なボーナスを賢く選びましょう。",
};

export default async function BonusesBonusPage() {
  const { content, frontmatter } = await loadMDX('bonuses', 'bonuses');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ボーナスガイド
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
