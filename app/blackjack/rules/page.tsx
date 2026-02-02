import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: 'ブラックジャックのルール徹底解説：基礎から戦略まで',
  description:
    'ブラックジャックのルールを初心者にも分かりやすく解説。基本的な遊び方から、ハウスエッジを下げるための戦略、オンラインカジノでプレイする際の注意点まで網羅的にご紹介します。',
};

export default async function BlackjackRulesPage() {
  const { content, frontmatter, headings } = await loadMDX('blackjack', 'rules');

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
