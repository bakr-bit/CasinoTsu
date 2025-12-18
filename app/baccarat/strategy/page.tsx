import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getBaccarat } from '@/content/data/baccarat';
import { ArticleContent } from '@/components/mdx';

export const metadata: Metadata = {
  title: 'バカラ攻略法｜勝率を上げる戦略・必勝法を徹底解説【2025年最新】',
  description:
    'オンラインカジノのバカラで勝率を上げるための戦略を詳しく解説。マーチンゲール法やパーレー法など、代表的な攻略法のメリット・デメリットを比較します。',
};

export default async function BaccaratStrategyPage() {
  const { content, frontmatter, headings } = await loadMDX('baccarat', 'strategy');
  const baccaratData = getBaccarat('strategy');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              バカラガイド
            </span>
            {baccaratData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {baccaratData.category === 'variant'
                  ? 'バリアント'
                  : baccaratData.category === 'strategy'
                    ? '戦略'
                    : baccaratData.category === 'rules'
                      ? 'ルール'
                      : 'ガイド'}
              </span>
            )}
            {baccaratData?.difficulty && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                {baccaratData.difficulty === 'beginner'
                  ? '初心者向け'
                  : baccaratData.difficulty === 'intermediate'
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
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-600 prose-strong:text-gray-900"
          />
        </div>
      </section>
    </div>
  );
}
