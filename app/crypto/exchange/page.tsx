import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getCrypto } from '@/content/data/crypto';
import { ArticleContent } from '@/components/mdx';

export const metadata: Metadata = {
  title: '暗号通貨でオンラインカジノに入金する方法【2025年最新】',
  description:
    '暗号通貨でオンラインカジノに入金する方法を分かりやすく解説。暗号通貨取引所の選び方、入金手順、注意点など、安全にプレイするための情報を網羅しています。',
};

export default async function CryptoExchangePage() {
  const { content, frontmatter, headings } = await loadMDX('crypto', 'exchange');
  const cryptoData = getCrypto('exchange');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              暗号通貨ガイド
            </span>
            {cryptoData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {cryptoData.category === 'guide'
                  ? 'ガイド'
                  : cryptoData.category === 'exchange'
                    ? '取引所'
                    : '通貨'}
              </span>
            )}
            {cryptoData?.difficulty && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                {cryptoData.difficulty === 'beginner'
                  ? '初心者向け'
                  : cryptoData.difficulty === 'intermediate'
                    ? '中級者向け'
                    : '上級者向け'}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            {frontmatter.lastUpdated && (
              <span>
                最終更新日:{' '}
                <time dateTime={frontmatter.lastUpdated}>
                  {new Date(frontmatter.lastUpdated).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <ArticleContent
            content={content}
            headings={headings}
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-600 prose-strong:text-gray-900"
          />
        </div>
      </section>
    </div>
  );
}
