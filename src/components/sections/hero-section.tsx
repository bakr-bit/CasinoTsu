import { CalendarDays, UserCircle } from 'lucide-react';
import { getTopCasinos } from '@/src/lib/data-helpers';
import { HeroTop3 } from '@/src/components/casino/hero-top3';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  authorName?: string;
  lastUpdated?: string;
  showTop3?: boolean;
}

export function HeroSection({
  title = 'オンラインカジノランキング',
  subtitle = '日本人プレイヤー向けの厳選されたオンラインカジノをご紹介。ボーナス、安全性、入出金方法を徹底比較。',
  authorName = 'CasinoTsu編集部',
  lastUpdated = '2026年2月',
  showTop3 = true,
}: HeroSectionProps) {
  const casinos = showTop3 ? getTopCasinos(3) : [];

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient and subtle pattern - indigo themed */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50/30" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto max-w-7xl pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 px-4 sm:px-6 lg:px-8 text-center">
        {/* Author line */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400 mb-5">
          <div className="flex items-center gap-1.5">
            <UserCircle className="h-3.5 w-3.5 text-indigo-400" />
            <span className="font-medium text-gray-500">{authorName}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-indigo-400" />
            <span>{lastUpdated}</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-2 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.15]">
          {title}
        </h1>
        <p className="mb-4 text-2xl sm:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
          2026
        </p>

        {/* Intro */}
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>

        {/* TOP 3 PODIUM */}
        {showTop3 && casinos.length >= 3 && (
          <div className="mb-8">
            <HeroTop3 casinos={casinos} />
          </div>
        )}

        {/* CTA */}
        <a
          href="#top-casinos"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 hover:-translate-y-0.5"
        >
          トップ20を見る
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
