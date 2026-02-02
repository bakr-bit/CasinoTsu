import {
  PartyPopper,
  Banknote,
  RotateCw,
  Undo2,
  Crown,
  type LucideIcon,
} from 'lucide-react';
import { bonusDetails } from '@/src/data/content';

const iconMap: Record<string, LucideIcon> = {
  'welcome-bonus': PartyPopper,
  'no-deposit': Banknote,
  'free-spins': RotateCw,
  cashback: Undo2,
  'vip-program': Crown,
};

const accentColors: Record<string, { bg: string; border: string; icon: string; badge: string; badgeText: string; headerGradient: string }> = {
  'welcome-bonus': {
    bg: 'bg-indigo-50/60',
    border: 'border-indigo-200',
    icon: 'text-indigo-500',
    badge: 'bg-indigo-100 border-indigo-200',
    badgeText: 'text-indigo-700',
    headerGradient: 'from-indigo-600 via-indigo-700 to-indigo-800',
  },
  'no-deposit': {
    bg: 'bg-emerald-50/60',
    border: 'border-emerald-200',
    icon: 'text-emerald-500',
    badge: 'bg-emerald-100 border-emerald-200',
    badgeText: 'text-emerald-700',
    headerGradient: 'from-emerald-600 via-emerald-700 to-teal-800',
  },
  'free-spins': {
    bg: 'bg-violet-50/60',
    border: 'border-violet-200',
    icon: 'text-violet-500',
    badge: 'bg-violet-100 border-violet-200',
    badgeText: 'text-violet-700',
    headerGradient: 'from-violet-600 via-purple-700 to-violet-800',
  },
  cashback: {
    bg: 'bg-sky-50/60',
    border: 'border-sky-200',
    icon: 'text-sky-500',
    badge: 'bg-sky-100 border-sky-200',
    badgeText: 'text-sky-700',
    headerGradient: 'from-sky-600 via-blue-700 to-sky-800',
  },
  'vip-program': {
    bg: 'bg-amber-50/60',
    border: 'border-amber-200',
    icon: 'text-amber-500',
    badge: 'bg-amber-100 border-amber-200',
    badgeText: 'text-amber-700',
    headerGradient: 'from-amber-600 via-orange-600 to-amber-700',
  },
};

const defaultColors = {
  bg: 'bg-gray-50/60',
  border: 'border-gray-200',
  icon: 'text-gray-500',
  badge: 'bg-gray-100 border-gray-200',
  badgeText: 'text-gray-700',
  headerGradient: 'from-gray-600 via-gray-700 to-gray-800',
};

const bonusValues: Record<string, { typical: string; wagering: string }> = {
  'welcome-bonus': { typical: '100%〜500%', wagering: 'x25〜x45' },
  'no-deposit': { typical: '2,000〜10,000円', wagering: 'x40〜x60' },
  'free-spins': { typical: '50〜300回', wagering: 'x20〜x40' },
  cashback: { typical: '2%〜50%', wagering: 'x1〜x10' },
  'vip-program': { typical: '最大50%', wagering: '条件なし' },
};

export function BonusComparisonSection() {
  return (
    <section id="bonuses" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            カジノボーナスの種類
          </h2>
          <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto">
            各ボーナスの仕組みを理解し、最大限に活用する方法を解説します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonusDetails.map((bonus) => {
            const Icon = iconMap[bonus.slug] ?? PartyPopper;
            const colors = accentColors[bonus.slug] ?? defaultColors;
            const values = bonusValues[bonus.slug] ?? { typical: '様々', wagering: '様々' };

            return (
              <div
                key={bonus.slug}
                className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {/* Header with gradient and shine */}
                <div className={`p-4 bg-gradient-to-br ${colors.headerGradient} relative overflow-hidden`}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {bonus.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${colors.badge} ${colors.badgeText}`}>
                      {values.typical}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-lg border border-gray-200 bg-gray-50 text-gray-500">
                      賭け条件 {values.wagering}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {bonus.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
