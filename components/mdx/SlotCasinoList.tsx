import { getSlot } from '@/content/data/slots';
import { Building2, ExternalLink, Percent, Zap, TrendingUp, Trophy } from 'lucide-react';

interface SlotCasinoListProps {
  slotId: string;
}

export function SlotCasinoList({ slotId }: SlotCasinoListProps) {
  const slotData = getSlot(slotId);

  if (!slotData) {
    return null;
  }

  const stats = [
    { icon: Building2, label: 'プロバイダー', value: slotData.hero.provider, gradient: 'from-indigo-600 to-indigo-700' },
    { icon: Percent, label: 'RTP', value: slotData.hero.rtp, gradient: 'from-violet-500 to-purple-600' },
    { icon: Zap, label: 'ボラティリティ', value: slotData.hero.volatility, gradient: 'from-amber-500 to-orange-500' },
    { icon: Trophy, label: '最大倍率', value: slotData.hero.maxMultiplier, gradient: 'from-emerald-500 to-green-600' },
  ].filter(stat => stat.value);

  return (
    <div className="my-8 not-prose">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">
                {slotData.hero.title}が遊べるカジノ
              </h3>
              <p className="text-white/70 text-sm">
                このスロットは多くのオンラインカジノでプレイできます
              </p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="bg-white p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-4 border border-slate-200/50"
                >
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-bl-full`} />
                  <div className="relative z-10">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-2 shadow-sm`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-xs text-gray-500 mb-0.5">{stat.label}</div>
                    <div className="font-bold text-gray-900 text-sm">{stat.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-4 text-center">
            <a
              href="/reviews"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse" />
              <span className="relative z-10">カジノ一覧を見る</span>
              <ExternalLink className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
