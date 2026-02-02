import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: 'バカラ スクイーズ徹底解説：遊び方・ルール・戦略・オンラインカジノで体験する方法',
  description:
    'バカラ スクイーズのルールや遊び方、戦略を詳しく解説。カードをゆっくりと開いていく独特の演出が特徴で、特別なスリルを楽しめます。',
};

export default async function BaccaratSqueezePage() {
  const { content, frontmatter, headings } = await loadMDX('baccarat', 'squeeze');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ArticleHeroWrapper
        title={frontmatter.title}
        description={frontmatter.description}
        authorName={frontmatter.author}
        lastUpdated={frontmatter.lastUpdated}
        badge="バカラガイド"
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
