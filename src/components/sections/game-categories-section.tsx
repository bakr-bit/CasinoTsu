import {
  Dice5,
  Tv,
  Layers,
  Rocket,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { gameCategories, slotGuideContent } from '@/src/data/content';

const categoryConfig: Record<string, { icon: LucideIcon; color: string; bg: string; border: string; badge: string; gradient: string }> = {
  slots: {
    icon: Dice5,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-700',
    gradient: 'from-indigo-600 via-indigo-700 to-indigo-800',
  },
  'live-casino': {
    icon: Tv,
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-700',
    gradient: 'from-red-600 via-rose-700 to-red-800',
  },
  'table-games': {
    icon: Layers,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    gradient: 'from-emerald-600 via-teal-700 to-emerald-800',
  },
  'crash-games': {
    icon: Rocket,
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    gradient: 'from-violet-600 via-purple-700 to-violet-800',
  },
  'game-shows': {
    icon: Sparkles,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    gradient: 'from-amber-600 via-orange-600 to-amber-700',
  },
};

const defaultConfig = {
  icon: Dice5,
  color: 'text-gray-500',
  bg: 'bg-gray-50',
  border: 'border-gray-200',
  badge: 'bg-gray-100 text-gray-700',
  gradient: 'from-gray-600 via-gray-700 to-gray-800',
};

export function GameCategoriesSection() {
  // First two (Slots + Live) are featured, rest are in a grid
  const featured = gameCategories.slice(0, 2);
  const rest = gameCategories.slice(2);

  return (
    <section id="games" className="py-14 lg:py-20 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-indigo-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            カジノゲームの種類
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            5,000以上のスロット、ライブカジノ、クラッシュゲーム、ゲームショーなど。Pragmatic Play、Evolution、NetEntの最新タイトル。
          </p>
        </div>

        {/* Featured: Slots + Casino Live — larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {featured.map((cat) => {
            const cfg = categoryConfig[cat.category] ?? defaultConfig;
            const Icon = cfg.icon;
            return (
              <div
                key={cat.category}
                className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all group"
              >
                {/* Header with gradient and shine */}
                <div className={`p-5 bg-gradient-to-br ${cfg.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-1">
                        <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 text-white border border-white/30">
                          {cat.count.toLocaleString('ja-JP')}+ ゲーム
                        </span>
                      </div>
                      <p className="text-sm text-white/90 leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                </div>
                {/* Popular games */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide mr-1 py-1">人気:</span>
                    {cat.popularGames.map((game) => (
                      <span
                        key={game}
                        className="text-[11px] text-gray-600 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rest: smaller categories in 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {rest.map((cat) => {
            const cfg = categoryConfig[cat.category] ?? defaultConfig;
            const Icon = cfg.icon;
            return (
              <div
                key={cat.category}
                className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all group"
              >
                {/* Header with gradient and shine */}
                <div className={`p-4 bg-gradient-to-br ${cfg.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">{cat.name}</h3>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/20 text-white border border-white/30">
                        {cat.count}+
                      </span>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{cat.description}</p>
                  {/* Popular games */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                    {cat.popularGames.map((game) => (
                      <span
                        key={game}
                        className="text-[10px] text-gray-500 bg-gray-50 border border-gray-100 rounded px-2 py-0.5"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slot guide tip */}
        <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50">
          {/* Header */}
          <div className="p-4 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white">
                {slotGuideContent.heading}
              </h3>
            </div>
          </div>
          {/* Body */}
          <div className="p-6">
            <div className="space-y-2">
              {slotGuideContent.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
