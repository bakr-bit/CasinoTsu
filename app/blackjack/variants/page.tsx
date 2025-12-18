import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getBlackjack } from '@/content/data/blackjack';
import { ArticleContent } from '@/components/mdx';

export const metadata: Metadata = {
  title: 'ブラックジャックのバリエーション：定番から変わり種まで徹底解説',
  description:
    '定番のブラックジャックから少し変わったバリエーションまで、様々な種類を詳しく解説。それぞれのルールや特徴、遊び方のヒントを理解し、自分にぴったりのブラックジャックを見つけましょう。',
};

export default async function BlackjackVariantsPage() {
  const { content, frontmatter, headings } = await loadMDX('blackjack', 'variants');
  const blackjackData = getBlackjack('variants');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ブラックジャックガイド
            </span>
            {blackjackData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {blackjackData.category === 'variant'
                  ? 'バリアント'
                  : blackjackData.category === 'strategy'
                    ? '戦略'
                    : blackjackData.category === 'rules'
                      ? 'ルール'
                      : 'ガイド'}
              </span>
            )}
            {blackjackData?.difficulty && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                {blackjackData.difficulty === 'beginner'
                  ? '初心者向け'
                  : blackjackData.difficulty === 'intermediate'
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
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-emerald-600 prose-strong:text-gray-900"
          />
        </div>
      </section>
    </div>
  );
}
