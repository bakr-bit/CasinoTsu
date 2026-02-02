import Image from 'next/image';
import { Star, Check, X, ExternalLink, Gamepad2, Gift, CreditCard } from 'lucide-react';
import { getTopCasinos } from '@/src/lib/data-helpers';
import { casinoReviews } from '@/src/data/content';

const rankLabels = [
  '2026年 最優秀カジノ',
  '2026年 TOP 2',
  '2026年 TOP 3',
  '2026年 TOP 4',
  '2026年 TOP 5',
];

export function TopReviewsSection() {
  const top5 = getTopCasinos(5);

  return (
    <section id="reviews" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-indigo-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            個別レビュー — トップ5カジノ
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            2026年ランキング上位5カジノの詳細分析。ゲーム、ボーナス、決済方法を徹底解説。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {top5.map((casino, index) => {
            const review = casinoReviews[casino.slug];

            return (
              <article
                key={casino.slug}
                className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all"
              >
                {/* Header: Rank + Name + Score */}
                <div className="p-6 sm:p-8 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 relative overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  <div className="relative flex flex-col sm:flex-row items-start gap-5">
                    {/* Left: Rank + Logo */}
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-xl font-bold text-white shadow-md border border-white/30">
                          {index + 1}
                        </span>
                      </div>
                      <a
                        href={casino.affiliate?.url || `/reviews/${casino.slug}`}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 border-white/30 bg-white hover:border-white/50 transition-colors shadow-lg"
                      >
                        <Image src={casino.logo} alt={`${casino.nameJa || casino.name} logo`} fill className="object-contain p-2" sizes="80px" />
                      </a>
                    </div>

                    {/* Right: Name + Tagline + Score */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <span className="inline-block text-[10px] font-bold text-indigo-100 bg-white/20 backdrop-blur-sm rounded px-2 py-0.5 uppercase tracking-widest mb-2 border border-white/20">
                            {rankLabels[index]}
                          </span>
                          <a
                            href={casino.affiliate?.url || `/reviews/${casino.slug}`}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="block text-xl sm:text-2xl font-bold text-white hover:text-indigo-200 transition-colors"
                          >
                            {casino.nameJa || casino.name}
                          </a>
                          {review && (
                            <p className="text-sm text-indigo-200 mt-1">{review.tagline}</p>
                          )}
                        </div>

                        {/* Score box */}
                        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3 flex-shrink-0">
                          <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-wider">スコア</span>
                          <div className="flex items-baseline gap-0.5 mt-1">
                            <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1" />
                            <span className="text-2xl font-bold text-white">{(casino.rating * 2).toFixed(1)}</span>
                            <span className="text-xs text-indigo-200">/10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body: Structured review sections */}
                {review && (
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Platform & Games */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Gamepad2 className="h-4 w-4 text-indigo-500" />
                        <h4 className="text-sm font-bold text-gray-900">プラットフォーム・ゲーム</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.platform}</p>
                    </div>

                    {/* Bonuses & Promotions */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="h-4 w-4 text-indigo-500" />
                        <h4 className="text-sm font-bold text-gray-900">ボーナス・プロモーション</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.bonuses}</p>
                    </div>

                    {/* Payments & Mobile */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="h-4 w-4 text-indigo-500" />
                        <h4 className="text-sm font-bold text-gray-900">決済・出金</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.payments}</p>
                    </div>
                  </div>
                )}

                {/* Analyst Verdict: Pros & Cons */}
                <div className="border-t border-gray-100 p-6 sm:p-8">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-4">分析評価</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Pros */}
                    <div>
                      <ul className="space-y-2">
                        {casino.features?.highlights?.slice(0, 3).map((pro, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-green-700">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons placeholder */}
                    <div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-red-600">
                          <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span>一部地域で利用制限あり</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-red-600">
                          <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span>初回出金時にKYC必要</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bonus Offer at Bottom */}
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 sm:px-8 py-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">ウェルカムオファー</span>
                      <p className="text-lg sm:text-xl font-bold text-white mt-1">
                        {casino.features?.bonusHeadline || 'ボーナスを獲得'}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-indigo-100">
                        <span>有効期限 {review?.bonusValidity ?? '30日間'}</span>
                        <span className="w-1 h-1 rounded-full bg-indigo-300" />
                        <span>{casino.license?.jurisdiction || 'Curaçao'}</span>
                      </div>
                    </div>
                    <a
                      href={casino.affiliate?.url || `/reviews/${casino.slug}`}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-bold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-md flex-shrink-0"
                    >
                      今すぐプレイ
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
