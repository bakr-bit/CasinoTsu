import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: 'バカラ攻略法｜勝率を上げる戦略・必勝法を徹底解説【2025年最新】',
  description:
    'オンラインカジノのバカラで勝率を上げるための戦略を詳しく解説。マーチンゲール法やパーレー法など、代表的な攻略法のメリット・デメリットを比較します。',
};

export default async function BaccaratStrategyPage() {
  const { content, frontmatter, headings } = await loadMDX('baccarat', 'strategy');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ArticleHeroWrapper
        title={frontmatter.title}
        description={frontmatter.description}
        authorName={frontmatter.author}
        lastUpdated={frontmatter.lastUpdated}
        badge="バカラ戦略"
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
