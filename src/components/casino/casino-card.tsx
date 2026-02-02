import Image from 'next/image';
import { cn } from '@/src/lib/utils';
import type { CasinoData } from '@/content/data/casinos/types';
import { RATING_MAX } from '@/src/lib/constants';

interface CasinoCardProps {
  casino: CasinoData;
  rank: number;
}

export function CasinoCard({ casino, rank }: CasinoCardProps) {
  const isTop = rank <= 3;

  return (
    <article
      className={cn(
        'group rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-0.5',
        isTop
          ? 'border-indigo-200 bg-gradient-to-br from-indigo-50/50 via-white to-white shadow-md shadow-indigo-100/50'
          : 'border-gray-200 bg-white hover:border-indigo-200'
      )}
    >
      {/* Mobile layout */}
      <div className="flex flex-col gap-4 p-5 sm:hidden">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-sm',
              rank === 1 ? 'bg-indigo-600' : rank <= 3 ? 'bg-indigo-500' : 'bg-gray-400'
            )}
          >
            {rank}
          </span>
          <a
            href={casino.affiliate.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-indigo-200 transition-colors"
          >
            <Image
              src={casino.logo}
              alt={`${casino.nameJa} ロゴ`}
              fill
              className="object-contain p-1.5"
              sizes="64px"
            />
          </a>
          <div className="min-w-0 flex-1">
            <a
              href={casino.affiliate.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors truncate"
            >
              {casino.nameJa}
            </a>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-amber-500">&#9733;</span>
              <span className="text-base font-bold text-gray-900">
                {casino.rating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-400">/{RATING_MAX}</span>
            </div>
          </div>
        </div>

        <p className="text-sm font-medium text-indigo-600">
          {casino.features.bonusHeadline}
        </p>

        <div className="flex flex-wrap gap-2">
          {casino.features.highlights.slice(0, 3).map((feature, i) => (
            <span key={i} className="text-sm text-gray-500 bg-gray-50 rounded-lg px-2.5 py-1">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-gray-200 text-gray-500 uppercase tracking-wide">
            {casino.license.name}
          </span>
          <a
            href={casino.affiliate.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group/btn relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">今すぐプレイ</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:flex items-center gap-5 p-5 lg:p-6">
        {/* Rank */}
        <span
          className={cn(
            'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white shadow-sm',
            rank === 1 ? 'bg-indigo-600' : rank <= 3 ? 'bg-indigo-500' : 'bg-gray-400'
          )}
        >
          {rank}
        </span>

        {/* Logo */}
        <a
          href={casino.affiliate.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="relative h-20 w-20 lg:h-[88px] lg:w-[88px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-indigo-200 transition-colors"
        >
          <Image
            src={casino.logo}
            alt={`${casino.nameJa} ロゴ`}
            fill
            className="object-contain p-2"
            sizes="88px"
          />
        </a>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <div className="min-w-0">
              <a
                href={casino.affiliate.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-lg lg:text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
              >
                {casino.nameJa}
              </a>
              <p className="text-sm font-medium text-indigo-600 mt-0.5 truncate">
                {casino.features.bonusHeadline}
              </p>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0 bg-gray-50 rounded-lg px-3 py-1.5">
              <span className="text-amber-500">&#9733;</span>
              <span className="text-lg font-bold text-gray-900">
                {casino.rating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-400">/{RATING_MAX}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {casino.features.highlights.slice(0, 4).map((feature, i) => (
              <span
                key={i}
                className="text-sm text-gray-500 bg-gray-50 rounded-lg px-2.5 py-1"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* License + CTA */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <a
            href={casino.affiliate.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group/btn relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 w-full overflow-hidden"
          >
            <span className="relative z-10">今すぐプレイ</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-gray-200 text-gray-500 uppercase tracking-wide">
            {casino.license.name}
          </span>
        </div>
      </div>
    </article>
  );
}
