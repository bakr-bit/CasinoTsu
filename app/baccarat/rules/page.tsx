import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: 'バカラのルールを徹底解説！初心者でもすぐに理解できる完全ガイド',
  description:
    'バカラのルールを初心者の方にも分かりやすく丁寧に解説。基本的なルールからゲームの流れ、配当まで、バカラをプレイするために必要な情報を網羅しています。',
};

export default async function BaccaratRulesPage() {
  const { content, frontmatter, headings } = await loadMDX('baccarat', 'rules');

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
