import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getPayment } from '@/content/data/payments';

export const metadata: Metadata = {
  title: "SUMOPAY（相撲ペイ）2025年最新版レビュー｜安全性と実態を徹底解説",
  description: "SUMOPAY（相撲ペイ）の最新情報を解説。国内銀行送金で便利な決済サービスですが、現在の安全性や利用時の注意点、入出金方法を徹底レビューします。",
};

export default async function SumopayPaymentPage() {
  const { content, frontmatter } = await loadMDX('payment', 'sumopay');
  const paymentData = getPayment('sumopay');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              決済方法ガイド
            </span>
            {paymentData && (
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-medium">
                {paymentData.type === 'crypto' ? '仮想通貨' : paymentData.type}
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-emerald-600 prose-strong:text-gray-900">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
