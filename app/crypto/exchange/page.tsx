import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { ArticleContent } from '@/components/mdx';
import { ArticleHeroWrapper } from '@/components/ui/ArticleHeroWrapper';

export const metadata: Metadata = {
  title: '暗号通貨でオンラインカジノに入金する方法【2025年最新】',
  description:
    '暗号通貨でオンラインカジノに入金する方法を分かりやすく解説。暗号通貨取引所の選び方、入金手順、注意点など、安全にプレイするための情報を網羅しています。',
};

export default async function CryptoExchangePage() {
  const { content, frontmatter, headings } = await loadMDX('crypto', 'exchange');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ArticleHeroWrapper
        title={frontmatter.title}
        description={frontmatter.description}
        authorName={frontmatter.author}
        lastUpdated={frontmatter.lastUpdated}
        badge="暗号通貨ガイド"
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
