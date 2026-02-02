import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: 'スピードブラックジャック徹底攻略ガイド【2025年最新版】',
  description:
    'スピードブラックジャックのルール、戦略、メリット・デメリットを詳しく解説。初心者から上級者まで役立つ情報を網羅的に紹介します。',
};

export default async function SpeedBlackjackPage() {
  const { content, frontmatter, headings } = await loadMDX('blackjack', 'speed-blackjack');

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
