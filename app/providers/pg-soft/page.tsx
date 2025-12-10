import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getProvider } from '@/content/data/providers';

export const metadata: Metadata = {
  title: "PG Soft（ポケットゲームズソフト）徹底解説：モバイル特化型プロバイダーの魅力と人気スロット",
  description: "PG Soft（ポケットゲームズソフト）は、モバイルカジノ体験に革命をもたらす注目のプロバイダーです。CasinoTsuがその特徴、ライセンス、高RTPスロットを徹底解説します。",
};

export default async function PgSoftProviderPage() {
  const { content, frontmatter } = await loadMDX('providers', 'pg-soft');
  const providerData = getProvider('pg-soft');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-blue-100">{frontmatter.description}</p>
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
          <div className="flex items-center gap-4 mt-6 text-sm text-blue-200">
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
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
