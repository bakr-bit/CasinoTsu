import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: 'ブラックジャックのバリエーション：定番から変わり種まで徹底解説',
  description:
    '定番のブラックジャックから少し変わったバリエーションまで、様々な種類を詳しく解説。それぞれのルールや特徴、遊び方のヒントを理解し、自分にぴったりのブラックジャックを見つけましょう。',
};

export default async function BlackjackVariantsPage() {
  const { content, frontmatter, headings } = await loadMDX('blackjack', 'variants');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ArticleHeroWrapper
        title={frontmatter.title}
        description={frontmatter.description}
        authorName={frontmatter.author}
        lastUpdated={frontmatter.lastUpdated}
        badge="ブラックジャックバリアント"
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
