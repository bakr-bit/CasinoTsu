import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getProvider } from '@/content/data/providers';

export const metadata: Metadata = {
  title: "StakeLogic（ステーク・ロジック）レビュー｜ゲームプロバイダー",
  description: "StakeLogic（ステークロジック）の基本情報、おすすめスロット、安全性、そして革新的なSuper Stake機能について、CasinoTsuが徹底解説します。",
};

export default async function StakelogicProviderPage() {
  const { content, frontmatter } = await loadMDX('providers', 'stakelogic');
  const providerData = getProvider('stakelogic');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              プロバイダーガイド
            </span>
            {providerData && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {providerData.gameCount}ゲーム
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{frontmatter.description}</p>
          )}
          {providerData && (
            <div className="flex flex-wrap gap-2 mt-4">
              {providerData.gameTypes.map((type: string) => (
                <span key={type} className="px-2 py-1 bg-white/10 rounded text-sm">
                  {type}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
            {providerData && (
              <>
                <span>•</span>
                <span>設立: {providerData.founded}年</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
