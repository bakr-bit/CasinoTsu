import Image from 'next/image';
import { Zap, Tv, Bitcoin, Percent, Smartphone } from 'lucide-react';
import { getCategoryPicks } from '@/src/lib/data-helpers';

const categoryConfig: Record<string, { icon: React.ReactNode; gradient: string }> = {
  'fast-withdrawals': { icon: <Zap className="h-5 w-5" />, gradient: 'from-amber-600 via-orange-600 to-amber-700' },
  'live-casino': { icon: <Tv className="h-5 w-5" />, gradient: 'from-red-600 via-rose-700 to-red-800' },
  'crypto-casino': { icon: <Bitcoin className="h-5 w-5" />, gradient: 'from-orange-500 via-amber-600 to-orange-700' },
  'low-wagering': { icon: <Percent className="h-5 w-5" />, gradient: 'from-emerald-600 via-teal-700 to-emerald-800' },
  mobil: { icon: <Smartphone className="h-5 w-5" />, gradient: 'from-indigo-600 via-indigo-700 to-indigo-800' },
  mobile: { icon: <Smartphone className="h-5 w-5" />, gradient: 'from-indigo-600 via-indigo-700 to-indigo-800' },
};

const defaultCategory = { icon: <Zap className="h-5 w-5" />, gradient: 'from-violet-600 via-purple-700 to-violet-800' };

export function CategoryPicksSection() {
  const picks = getCategoryPicks();

  return (
    <section id="categories" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-indigo-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            カテゴリー別ランキング
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            目的別に最適なカジノを厳選。出金速度、仮想通貨、ライブカジノ、低賭け条件、モバイル対応。
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-base text-gray-600 leading-relaxed">
            プレイヤーによって優先順位は異なります。仮想通貨での即時出金を求める方、ライブディーラーとのプレイを好む方、賭け条件が低いボーナスを探している方など様々です。各ニーズに合わせたミニランキングを作成しました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {picks.map((pick) => {
            const cfg = categoryConfig[pick.id] || defaultCategory;
            return (
              <div
                key={pick.id}
                className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all group"
              >
                {/* Header with gradient and shine */}
                <div className={`p-4 bg-gradient-to-br ${cfg.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  <div className="relative flex items-center gap-2.5">
                    <span className="flex items-center justify-center h-9 w-9 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white group-hover:scale-105 transition-transform">
                      {cfg.icon}
                    </span>
                    <h3 className="text-base font-bold text-white">{pick.title}</h3>
                  </div>
                </div>
                {/* Body */}
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-4">{pick.description}</p>
                  <div className="space-y-3">
                    {pick.casinos.map((casino, i) => (
                      <a
                        key={casino.slug}
                        href={casino.affiliate?.url || `/reviews/${casino.slug}`}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-3 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group/casino"
                      >
                        <span className="text-sm text-indigo-500 font-bold w-5">#{i + 1}</span>
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white">
                          <Image
                            src={casino.logo}
                            alt={casino.nameJa || casino.name}
                            fill
                            className="object-contain p-1"
                            sizes="40px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-gray-900 group-hover/casino:text-indigo-600 transition-colors">
                            {casino.nameJa || casino.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            ★ {(casino.rating * 2).toFixed(1)}/10
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
