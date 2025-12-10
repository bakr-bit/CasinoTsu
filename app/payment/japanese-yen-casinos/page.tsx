import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getPaymentMethod } from '@/content/data/payments';

export const metadata: Metadata = {
  title: "日本円で遊べるオンラインカジノ完全ガイド【2025年最新版】",
  description: "日本円（JPY）で入出金できる安全で信頼性の高いオンラインカジノを徹底解説。為替リスクなしで遊べるカジノの選び方、決済方法、メリット・注意点をまとめました。",
};

export default async function JapaneseYenCasinosPaymentPage() {
  const { content, frontmatter } = await loadMDX('payment', 'japanese-yen-casinos');
  const paymentData = getPaymentMethod('japanese-yen-casinos');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-emerald-100">{frontmatter.description}</p>
          )}
          <div className="flex items-center gap-4 mt-6 text-sm text-emerald-200">
            <span>著者: {frontmatter.author}</span>
            <span>•</span>
            <span>更新日: {frontmatter.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
            {content}
          </div>
        </article>
      </div>
    </main>
  );
}
