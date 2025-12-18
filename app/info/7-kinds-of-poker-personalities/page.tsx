import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getInfo } from '@/content/data/info';

export const metadata: Metadata = {
  title: "ポーカープレイヤーの7つのタイプを知り、勝利への道を切り拓こう！",
  description: "ポーカーテーブルでの戦略を練る上で、相手のタイプを理解することは非常に重要です。本記事ではポーカープレイヤーを様々なタイプに分類し、それぞれの特徴と対策を詳しく解説します。相手のスタイルを読み解き、勝利への道を切り拓きましょう。",
};

export default async function N7KindsOfPokerPersonalitiesInfoPage() {
  const { content, frontmatter } = await loadMDX('info', '7-kinds-of-poker-personalities');
  const infoData = getInfo('7-kinds-of-poker-personalities');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              カジノ情報
            </span>
            {infoData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {infoData.category === 'license' ? 'ライセンス' :
                 infoData.category === 'history' ? '歴史' :
                 infoData.category === 'people' ? '人物' :
                 infoData.category === 'legal' ? '法律' :
                 infoData.category === 'industry' ? '業界' : 'トリビア'}
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
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-slate-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
