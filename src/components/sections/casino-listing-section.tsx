'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import { getTopCasinos } from '@/src/lib/data-helpers';
import { ColorfulMobileList } from '@/src/components/casino/colorful-mobile-card';
import type { CasinoData } from '@/content/data/casinos/types';

interface CasinoListingSectionProps {
  title?: string;
  count?: number;
  /** Optional: pass casinos directly instead of fetching top casinos */
  casinos?: CasinoData[];
  /** Hide section header */
  hideHeader?: boolean;
  /** Custom subtitle */
  subtitle?: string;
}

export function CasinoListingSection({
  title = 'トップ20オンラインカジノ',
  count = 20,
  casinos: propCasinos,
  hideHeader = false,
  subtitle = '厳格な評価基準に基づき選定 · 2026年1月更新',
}: CasinoListingSectionProps) {
  const casinos = propCasinos || getTopCasinos(count);
  const [showAll, setShowAll] = React.useState(false);
  const initialCount = 10;

  const visibleCasinos = showAll ? casinos : casinos.slice(0, initialCount);
  const remainingCount = casinos.length - initialCount;
  const hasMore = remainingCount > 0 && !showAll;

  return (
    <section id="top-casinos" className="py-14 lg:py-20 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="mb-10 text-center">
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-4 mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        )}

        {/* Mobile cards - TOP TIER DESIGN */}
        <ColorfulMobileList casinos={casinos} initialCount={initialCount} showMoreEnabled={true} />

        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto rounded-3xl border-0 shadow-2xl shadow-slate-200/50">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-12">#</th>
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider">カジノ</th>
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider">ボーナス</th>
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-24">ライセンス</th>
                <th className="px-4 py-4 text-[11px] font-bold text-white/80 uppercase tracking-wider w-20 text-center">評価</th>
                <th className="px-4 py-4 w-32" />
              </tr>
            </thead>
            <tbody>
              {visibleCasinos.map((casino, i) => {
                const rank = i + 1;
                const isTop3 = rank <= 3;

                const rowColors = {
                  1: 'bg-gradient-to-r from-amber-50 via-indigo-50 to-amber-50',
                  2: 'bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50',
                  3: 'bg-gradient-to-r from-amber-50/50 via-indigo-50/50 to-amber-50/50',
                };

                const rankColors = {
                  1: 'bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-lg shadow-indigo-500/30',
                  2: 'bg-gradient-to-br from-slate-500 to-slate-600 shadow-lg shadow-slate-500/30',
                  3: 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30',
                };

                const ctaColors = {
                  1: 'from-indigo-600 to-indigo-700 shadow-indigo-500/30 hover:shadow-indigo-500/50',
                  2: 'from-violet-500 to-purple-500 shadow-violet-500/30 hover:shadow-violet-500/50',
                  3: 'from-amber-500 to-orange-500 shadow-amber-500/30 hover:shadow-amber-500/50',
                };

                return (
                  <tr
                    key={casino.slug}
                    className={`border-b border-gray-100 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:z-10 relative ${
                      isTop3 ? rowColors[rank as 1 | 2 | 3] : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div className="relative">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white ${
                          isTop3 ? rankColors[rank as 1 | 2 | 3] : 'bg-gray-300'
                        }`}>
                          {rank}
                        </span>
                        {rank === 1 && (
                          <span className="absolute -top-1 -right-1 text-[10px]">👑</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-md ${
                          isTop3 ? 'ring-2 ring-indigo-200' : 'border border-gray-100'
                        }`}>
                          <Image
                            src={casino.logo}
                            alt={casino.nameJa || casino.name}
                            fill
                            className="object-contain p-1.5"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <a
                            href={casino.affiliate?.url || `/reviews/${casino.slug}`}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className={`text-sm font-bold hover:text-indigo-600 transition-colors ${
                              rank === 1 ? 'text-indigo-700' : 'text-gray-900'
                            }`}
                          >
                            {casino.nameJa || casino.name}
                          </a>
                          {isTop3 && (
                            <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                              rank === 1 ? 'bg-indigo-100 text-indigo-700' : rank === 2 ? 'bg-slate-100 text-slate-700' : 'bg-amber-100 text-amber-700'
                            }`}>
                              TOP #{rank}
                            </span>
                          )}
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {casino.features?.highlights?.[0] || '人気カジノ'}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${
                        isTop3 ? 'bg-gradient-to-r from-indigo-100 to-blue-100' : 'bg-gray-50'
                      }`}>
                        <span className={`text-sm font-bold ${isTop3 ? 'text-indigo-700' : 'text-gray-700'}`}>
                          {casino.features?.bonusHeadline || 'ウェルカムボーナス'}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase bg-blue-100 text-blue-700">
                        {casino.license?.jurisdiction || 'Curaçao'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${
                        casino.rating >= 4.5 ? 'bg-gradient-to-r from-amber-100 to-yellow-100' : 'bg-gray-50'
                      }`}>
                        <Star className={`h-4 w-4 ${casino.rating >= 4.5 ? 'text-amber-500' : 'text-gray-400'} fill-current`} />
                        <span className={`text-sm font-black ${casino.rating >= 4.5 ? 'text-amber-700' : 'text-gray-700'}`}>
                          {(casino.rating * 2).toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <a
                        href={casino.affiliate?.url || `/reviews/${casino.slug}`}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className={`group inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r ${
                          isTop3 ? ctaColors[rank as 1 | 2 | 3] : 'from-gray-700 to-gray-800 shadow-gray-500/20 hover:shadow-gray-500/40'
                        } shadow-lg`}
                      >
                        今すぐプレイ
                        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Show More Button - Desktop only */}
        {hasMore && (
          <div className="hidden lg:flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-bold text-base shadow-2xl shadow-slate-900/30 hover:shadow-slate-900/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 group-hover:animate-pulse" />
              <span className="relative z-10">さらに{remainingCount}件を表示</span>
              <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          * すべてのボーナスには利用規約が適用されます。18歳以上限定。責任あるギャンブルを心がけましょう。
        </p>
      </div>
    </section>
  );
}
