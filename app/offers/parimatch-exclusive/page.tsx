import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getOffer } from '@/content/data/offers';

export const metadata: Metadata = {
  title: "パリマッチのCasinoTsu限定入金不要ボーナス5,250円分！ CasinoTsuよりご案内",
  description: "簡単な登録手続きを完了させるだけで、スロット専用の無料ボーナスをお受け取りいただけます。 CasinoTsu 推薦のパリマッチを、リスクなくお楽しみください！",
};

export default async function ParimatchExclusiveOffersPage() {
  const { content, frontmatter } = await loadMDX('offers', 'parimatch-exclusive');
  const offerData = getOffer('parimatch-exclusive');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-pink-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              カジノオファー
            </span>
            {offerData?.offerType && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {offerData.offerType === 'no-deposit' ? '入金不要' :
                 offerData.offerType === 'welcome' ? 'ウェルカム' :
                 offerData.offerType === 'exclusive' ? '限定' :
                 offerData.offerType === 'seasonal' ? '期間限定' : 'リロード'}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
          )}
          {offerData && (
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {offerData.bonusAmount && (
                <span className="px-3 py-1 bg-white/10 rounded text-sm">
                  ボーナス: {offerData.bonusAmount}
                </span>
              )}
              {offerData.wagering && (
                <span className="px-3 py-1 bg-white/10 rounded text-sm">
                  賭け条件: {offerData.wagering}
                </span>
              )}
              {offerData.bonusCode && (
                <span className="px-3 py-1 bg-amber-500 rounded text-sm font-bold">
                  コード: {offerData.bonusCode}
                </span>
              )}
            </div>
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-pink-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
