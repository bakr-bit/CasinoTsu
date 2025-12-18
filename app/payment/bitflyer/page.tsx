import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getPayment } from '@/content/data/payments';

export const metadata: Metadata = {
  title: "bitFlyer（ビットフライヤー）でビットコイン入出金！日本人向け完全ガイド",
  description: "国内最大級の仮想通貨取引所bitFlyer（ビットフライヤー）を使ったオンラインカジノへの入出金方法を徹底解説。アカウント開設からBTC購入、送金手順、手数料、安全性まで、初心者向けに詳しくご紹介します。",
};

export default async function BitflyerPaymentPage() {
  const { content, frontmatter } = await loadMDX('payment', 'bitflyer');
  const paymentData = getPayment('bitflyer');

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
