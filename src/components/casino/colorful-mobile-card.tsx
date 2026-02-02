'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, ExternalLink, Gift } from 'lucide-react';
import type { CasinoData } from '@/content/data/casinos';

// Indigo-themed color schemes with good contrast
const colorSchemes = [
  { gradient: 'from-slate-900 via-slate-800 to-slate-900', accent: 'bg-indigo-500', shadow: 'shadow-indigo-500/20', cta: 'from-indigo-500 to-indigo-700', ring: 'ring-indigo-500/30' },
  { gradient: 'from-violet-950 via-purple-900 to-violet-950', accent: 'bg-violet-500', shadow: 'shadow-violet-500/20', cta: 'from-violet-500 to-fuchsia-500', ring: 'ring-violet-500/30' },
  { gradient: 'from-blue-950 via-blue-900 to-indigo-950', accent: 'bg-cyan-500', shadow: 'shadow-cyan-500/20', cta: 'from-cyan-500 to-blue-500', ring: 'ring-cyan-500/30' },
  { gradient: 'from-emerald-950 via-green-900 to-teal-950', accent: 'bg-emerald-500', shadow: 'shadow-emerald-500/20', cta: 'from-emerald-500 to-teal-500', ring: 'ring-emerald-500/30' },
  { gradient: 'from-indigo-950 via-indigo-900 to-blue-950', accent: 'bg-indigo-500', shadow: 'shadow-indigo-500/20', cta: 'from-indigo-500 to-blue-600', ring: 'ring-indigo-500/30' },
  { gradient: 'from-rose-950 via-pink-900 to-red-950', accent: 'bg-rose-500', shadow: 'shadow-rose-500/20', cta: 'from-rose-500 to-pink-500', ring: 'ring-rose-500/30' },
  { gradient: 'from-sky-950 via-blue-900 to-indigo-950', accent: 'bg-sky-500', shadow: 'shadow-sky-500/20', cta: 'from-sky-500 to-indigo-500', ring: 'ring-sky-500/30' },
  { gradient: 'from-teal-950 via-cyan-900 to-sky-950', accent: 'bg-teal-500', shadow: 'shadow-teal-500/20', cta: 'from-teal-500 to-cyan-500', ring: 'ring-teal-500/30' },
  { gradient: 'from-fuchsia-950 via-pink-900 to-rose-950', accent: 'bg-fuchsia-500', shadow: 'shadow-fuchsia-500/20', cta: 'from-fuchsia-500 to-pink-500', ring: 'ring-fuchsia-500/30' },
  { gradient: 'from-purple-950 via-violet-900 to-indigo-950', accent: 'bg-purple-500', shadow: 'shadow-purple-500/20', cta: 'from-purple-500 to-violet-500', ring: 'ring-purple-500/30' },
];

// Badge based on rank
function getBadge(rank: number): string | null {
  if (rank === 1) return 'TOP #1';
  if (rank === 2) return 'TOP #2';
  if (rank === 3) return 'TOP #3';
  return null;
}

export interface ColorfulMobileCardProps {
  casino: CasinoData;
  rank: number;
  index: number;
}

export function ColorfulMobileCard({ casino, rank, index }: ColorfulMobileCardProps) {
  const scheme = colorSchemes[index % colorSchemes.length];
  const badge = getBadge(rank);

  return (
    <div
      className={`relative rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl ${scheme.shadow} ring-1 ${scheme.ring}`}
    >
      {/* Header with dark gradient for contrast */}
      <div className={`bg-gradient-to-br ${scheme.gradient} p-5 relative`}>
        {/* Light effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-3xl rounded-full" />

        {/* Floating rank badge */}
        <div className={`absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-2xl ${scheme.accent} text-white font-black text-lg shadow-lg`}>
          {rank}
        </div>

        {/* Centered prominent logo */}
        <div className="flex flex-col items-center pt-6 pb-2 relative">
          <div className="relative w-20 h-20 rounded-2xl bg-white shadow-xl overflow-hidden ring-4 ring-white/20 mb-4">
            <Image
              src={casino.logo}
              alt={casino.nameJa || casino.name}
              fill
              className="object-contain p-2"
              sizes="80px"
            />
          </div>

          {/* Large casino name */}
          <h3 className="text-2xl font-black text-white text-center tracking-tight drop-shadow-lg">
            {casino.nameJa || casino.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-bold text-sm">{(casino.rating * 2).toFixed(1)}</span>
              <span className="text-white/60 text-xs">/10</span>
            </div>
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-white/90 text-xs font-semibold uppercase">
              {casino.license?.jurisdiction || 'Curaçao'}
            </span>
          </div>
        </div>
      </div>

      {/* Bonus section - white background for contrast */}
      <div className="bg-white p-5">
        {/* Featured bonus */}
        <div className={`rounded-2xl bg-gradient-to-r ${scheme.cta} p-4 mb-4 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12" />
          <div className="relative flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wide mb-0.5">ウェルカムボーナス</p>
              <p className="text-white font-black text-lg leading-tight">
                {casino.features?.bonusHeadline || 'ボーナスを獲得'}
              </p>
            </div>
          </div>
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {casino.features?.highlights?.[0] && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              {casino.features.highlights[0]}
            </span>
          )}
          {casino.features?.highlights?.[1] && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              {casino.features.highlights[1]}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <a
          href={casino.affiliate?.url || `/reviews/${casino.slug}`}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`group relative flex items-center justify-center gap-2 w-full rounded-2xl py-4 text-base font-black text-white transition-all duration-300 overflow-hidden bg-gradient-to-r ${scheme.cta} shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]`}
        >
          <span className="relative z-10">今すぐプレイ</span>
          <ExternalLink className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Corner badge */}
      {badge && (
        <div className="absolute top-4 -right-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 text-[10px] font-black px-10 py-1.5 rotate-45 shadow-lg">
          {badge}
        </div>
      )}
    </div>
  );
}

// Component for complete list
export interface ColorfulMobileListProps {
  casinos: CasinoData[];
  initialCount?: number;
  showMoreEnabled?: boolean;
}

export function ColorfulMobileList({ casinos, initialCount = 10, showMoreEnabled = true }: ColorfulMobileListProps) {
  const [showAll, setShowAll] = React.useState(false);

  const visibleCasinos = showMoreEnabled && !showAll
    ? casinos.slice(0, initialCount)
    : casinos;
  const remainingCount = casinos.length - initialCount;
  const hasMore = showMoreEnabled && remainingCount > 0 && !showAll;

  return (
    <div className="lg:hidden">
      <div className="space-y-5">
        {visibleCasinos.map((casino, i) => (
          <ColorfulMobileCard key={casino.slug} casino={casino} rank={i + 1} index={i} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-bold text-base shadow-2xl shadow-slate-900/30 hover:shadow-slate-900/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 group-hover:animate-pulse" />
            <span className="relative z-10">さらに{remainingCount}件を表示</span>
            <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
