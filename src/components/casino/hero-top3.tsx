'use client';

import Image from 'next/image';
import { Star, ExternalLink, Crown, Award, Sparkles, Trophy } from 'lucide-react';
import type { CasinoData } from '@/content/data/casinos/types';

interface HeroTop3Props {
  casinos: CasinoData[];
}

export function HeroTop3({ casinos }: HeroTop3Props) {
  if (casinos.length < 3) return null;

  const top3 = casinos.slice(0, 3);
  // Podium order: 2nd, 1st, 3rd
  const [first, second, third] = top3;
  const podiumOrder = [second, first, third];

  return (
    <>
      {/* MOBILE - Compact horizontal podium */}
      <div className="lg:hidden relative py-2">
        {/* Background glow - indigo themed */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-32 bg-gradient-to-r from-indigo-400/30 via-indigo-500/30 to-indigo-400/30 rounded-full blur-3xl" />
        </div>

        {/* Trophy header */}
        <div className="relative flex items-center justify-center gap-2 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-400/50" />
          <Trophy className="w-5 h-5 text-indigo-500 fill-indigo-500" />
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600">Top 3</span>
          <Trophy className="w-5 h-5 text-indigo-500 fill-indigo-500" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-400/50" />
        </div>

        {/* Horizontal cards with podium heights */}
        <div className="relative flex items-end justify-center gap-1.5">
          {podiumOrder.map((casino, idx) => {
            const isFirst = idx === 1;
            const isSecond = idx === 0;
            const position = isFirst ? 1 : isSecond ? 2 : 3;

            // Indigo-themed gradients
            const gradients = {
              1: 'from-indigo-500 via-indigo-600 to-indigo-700',
              2: 'from-slate-400 via-slate-500 to-slate-600',
              3: 'from-indigo-700 via-indigo-800 to-indigo-900',
            };

            const shadows = {
              1: 'shadow-indigo-500/50',
              2: 'shadow-slate-500/40',
              3: 'shadow-indigo-700/40',
            };

            return (
              <a
                key={casino.slug}
                href={casino.affiliate.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={`group relative flex-1 transition-all duration-300 active:scale-95 ${
                  isFirst ? 'z-10' : ''
                }`}
              >
                {/* Main card */}
                <div
                  className={`relative overflow-hidden rounded-t-2xl shadow-xl transition-all duration-300 bg-gradient-to-br ${gradients[position as 1 | 2 | 3]} ${shadows[position as 1 | 2 | 3]}`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -skew-x-12 animate-shimmer" />

                  {/* Content */}
                  <div className="relative px-2 pt-4 pb-4">
                    {/* Logo */}
                    <div className={`relative mx-auto rounded-xl bg-white shadow-lg overflow-hidden ${
                      isFirst
                        ? 'w-14 h-14 ring-2 ring-white/60'
                        : 'w-11 h-11 ring-1 ring-white/40'
                    }`}>
                      <Image
                        src={casino.logo}
                        alt={casino.nameJa}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>

                    {/* Bonus */}
                    <div className="mt-3 bg-white/20 backdrop-blur-sm rounded-lg px-1.5 py-1.5">
                      <p className={`text-white font-bold text-center leading-tight line-clamp-2 ${
                        isFirst ? 'text-[10px]' : 'text-[8px]'
                      }`}>
                        {casino.features.bonusHeadline}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className={`mt-4 rounded-lg text-center transition-all ${
                      isFirst
                        ? 'bg-white text-indigo-600 py-2'
                        : 'bg-white/25 text-white py-1.5'
                    }`}>
                      <span className={`font-bold flex items-center justify-center gap-0.5 ${
                        isFirst ? 'text-[10px]' : 'text-[8px]'
                      }`}>
                        プレイ <ExternalLink className={isFirst ? 'w-3 h-3' : 'w-2.5 h-2.5'} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Podium base */}
                <div className={`rounded-b-lg ${
                  isFirst
                    ? 'h-8 bg-gradient-to-b from-indigo-600 to-indigo-800'
                    : isSecond
                      ? 'h-6 bg-gradient-to-b from-slate-500 to-slate-700'
                      : 'h-5 bg-gradient-to-b from-indigo-800 to-indigo-950'
                }`}>
                  <div className="h-full flex items-center justify-center px-2">
                    <span className={`font-black text-white/40 ${isFirst ? 'text-2xl' : 'text-lg'}`}>
                      {position}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* DESKTOP - Full podium */}
      <div className="hidden lg:block relative py-4">
        {/* Background glow - indigo themed */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-r from-indigo-400/20 via-indigo-500/20 to-indigo-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative flex items-end justify-center gap-5 lg:gap-8 max-w-4xl mx-auto px-2">
          {podiumOrder.map((casino, idx) => {
            const isFirst = idx === 1;
            const isSecond = idx === 0;
            const position = isFirst ? 1 : isSecond ? 2 : 3;

            return (
              <a
                key={casino.slug}
                href={casino.affiliate.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={`group relative flex-1 transition-all duration-500 hover:z-20 ${
                  isFirst
                    ? 'max-w-[240px] lg:max-w-[280px] z-10 -mt-4 hover:scale-110'
                    : 'max-w-[200px] lg:max-w-[220px] hover:scale-105'
                }`}
                style={{
                  animationDelay: isFirst ? '0s' : isSecond ? '0.1s' : '0.2s',
                }}
              >
                {/* Card */}
                <div className={`relative overflow-hidden rounded-t-3xl shadow-2xl transition-all duration-300 ${
                  isFirst
                    ? 'bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 shadow-indigo-500/40 group-hover:shadow-indigo-500/60'
                    : isSecond
                      ? 'bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 shadow-slate-500/30 group-hover:shadow-slate-500/50'
                      : 'bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 shadow-indigo-700/30 group-hover:shadow-indigo-700/50'
                }`}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  {/* Crown/Medal icon for position */}
                  <div className={`absolute top-3 left-3 z-20 ${
                    isFirst ? 'text-white drop-shadow-lg' : 'text-white/80'
                  }`}>
                    {isFirst ? (
                      <Crown className="w-6 h-6 fill-current" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>

                  {/* Position badge */}
                  <div className={`absolute top-3 right-3 z-20 flex items-center justify-center rounded-full font-black text-sm ${
                    isFirst
                      ? 'w-8 h-8 bg-white text-indigo-600 shadow-lg'
                      : 'w-7 h-7 bg-white/20 text-white backdrop-blur-sm'
                  }`}>
                    #{position}
                  </div>

                  {/* Content */}
                  <div className={`relative p-4 ${isFirst ? 'pt-12' : 'pt-10'}`}>
                    {/* Sparkle effect for #1 */}
                    {isFirst && (
                      <div className="absolute top-6 right-1/4 animate-pulse">
                        <Sparkles className="w-3 h-3 text-white/60" />
                      </div>
                    )}

                    {/* Logo */}
                    <div className={`relative mx-auto rounded-2xl bg-white shadow-xl overflow-hidden ${
                      isFirst
                        ? 'w-20 h-20 ring-4 ring-white/50'
                        : 'w-16 h-16 ring-2 ring-white/30'
                    }`}>
                      <Image
                        src={casino.logo}
                        alt={casino.nameJa}
                        fill
                        className="object-contain p-2"
                        sizes="80px"
                      />
                    </div>

                    {/* Name */}
                    <h3 className={`text-white font-black text-center mt-3 leading-tight truncate ${
                      isFirst ? 'text-base' : 'text-sm'
                    }`}>
                      {casino.nameJa}
                    </h3>

                    {/* Rating */}
                    <div className={`flex items-center justify-center gap-1 mt-2 ${
                      isFirst ? 'bg-white/20' : 'bg-white/10'
                    } backdrop-blur-sm rounded-full px-2 py-1 mx-auto w-fit`}>
                      <Star className={`fill-current ${
                        isFirst ? 'w-4 h-4 text-white' : 'w-3 h-3 text-white/80'
                      }`} />
                      <span className={`font-bold ${
                        isFirst ? 'text-sm text-white' : 'text-xs text-white/90'
                      }`}>
                        {casino.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Bonus - only show on first */}
                    {isFirst && (
                      <div className="mt-3 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
                        <p className="text-white/80 text-[10px] font-semibold uppercase tracking-wide text-center">ボーナス</p>
                        <p className="text-white font-bold text-xs text-center leading-tight">
                          {casino.features.bonusHeadline}
                        </p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className={`mt-3 rounded-xl text-center transition-all duration-300 ${
                      isFirst
                        ? 'bg-white text-indigo-600 py-2.5 group-hover:bg-indigo-50 shadow-lg'
                        : 'bg-white/20 text-white py-2 group-hover:bg-white/30'
                    }`}>
                      <span className={`font-bold flex items-center justify-center gap-1 ${
                        isFirst ? 'text-sm' : 'text-xs'
                      }`}>
                        今すぐプレイ <ExternalLink className={isFirst ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Podium base */}
                <div className={`relative overflow-hidden rounded-b-2xl ${
                  isFirst
                    ? 'h-16 bg-gradient-to-b from-indigo-600 to-indigo-800'
                    : isSecond
                      ? 'h-12 bg-gradient-to-b from-slate-500 to-slate-700'
                      : 'h-10 bg-gradient-to-b from-indigo-800 to-indigo-950'
                }`}>
                  {/* Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                  {/* Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`font-black text-white/20 ${
                      isFirst ? 'text-4xl' : 'text-2xl'
                    }`}>
                      {position}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
