import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: 'ブラックジャック必勝戦略ガイド：基礎から応用まで徹底解説',
  description:
    'ブラックジャックの戦略を初心者から上級者まで役立つ形で詳しく解説。基本戦略からカードカウンティング、オンラインカジノで活用できるヒントまで網羅しています。',
};

export default async function BlackjackStrategyPage() {
  const { content, frontmatter, headings } = await loadMDX('blackjack', 'strategy');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ArticleHeroWrapper
        title={frontmatter.title}
        description={frontmatter.description}
        authorName={frontmatter.author}
        lastUpdated={frontmatter.lastUpdated}
        badge="ブラックジャック戦略"
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
