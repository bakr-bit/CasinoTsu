import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getOffer } from '@/content/data/offers';

export const metadata: Metadata = {
  title: "ビットカジノの初回入金ボーナス最大20万円＋キャッシュバック！《現在停止中》",
  description: "仮想通貨に特化しつつも、日本円を含む複数の通貨を一つのアカウントで利用できるハイブリッド型カジノ、ビットカジノ（Bitcasino.io）。約3,000種類ものゲームを提供し、多くのプレイヤーに支持されています。この度、CasinoTsu 推薦のビットカジノでは、最大5,000 USDT相当の特大入金ボーナスと、CasinoTsu限定で最大20％のキャッシュバックをご提供しております。",
};

export default async function BitcasinoWelcomePackageOffersPage() {
  const { content, frontmatter } = await loadMDX('offers', 'bitcasino-welcome-package');
  const offerData = getOffer('bitcasino-welcome-package');

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
