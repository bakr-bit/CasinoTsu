import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: '無料ブラックジャックで腕を磨こう！ルール、戦略、おすすめサイトを紹介',
  description:
    '無料ブラックジャックの遊び方、基本戦略、おすすめのオンラインカジノなどを詳しく解説。リアルマネーを使うことなく、ゲームのルールや戦略を学ぶことができます。',
};

export default async function BlackjackFreePage() {
  const { content, frontmatter, headings } = await loadMDX('blackjack', 'free');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ArticleHeroWrapper
        title={frontmatter.title}
        description={frontmatter.description}
        authorName={frontmatter.author}
        lastUpdated={frontmatter.lastUpdated}
        badge="ブラックジャックガイド"
      />

      {/* Main Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <ArticleContent
            content={content}
            headings={headings}
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900"
          />
        </div>
      </section>
    </div>
  );
}
