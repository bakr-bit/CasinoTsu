import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getGuide } from '@/content/data/guides';

export const metadata: Metadata = {
  title: "オンラインカジノのVIPプログラム：豪華特典と招待への道筋をCasinoTsuが徹底解説",
  description: "オンラインカジノのVIPプログラムは、プレイヤーに特別な報酬と体験を提供します。CasinoTsuでは、VIPになるための条件、豪華な特典内容、そしてプログラムを最大限に活用する方法まで、皆様が気になる情報を徹底的に解説します。",
};

export default async function VipProgramGuidesPage() {
  const { content, frontmatter } = await loadMDX('guides', 'vip-program');
  const guideData = getGuide('vip-program');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              ガイド
            </span>
            {guideData?.category && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {guideData.category === 'beginner' ? '初心者' :
                 guideData.category === 'strategy' ? '戦略' :
                 guideData.category === 'poker' ? 'ポーカー' :
                 guideData.category === 'casino' ? 'カジノ' :
                 guideData.category === 'bonus' ? 'ボーナス' :
                 guideData.category === 'safety' ? '安全性' : 'ゲーム'}
              </span>
            )}
            {guideData?.targetAudience && (
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                {guideData.targetAudience === 'beginner' ? '初心者向け' :
                 guideData.targetAudience === 'intermediate' ? '中級者向け' :
                 guideData.targetAudience === 'advanced' ? '上級者向け' : '全レベル'}
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-green-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
