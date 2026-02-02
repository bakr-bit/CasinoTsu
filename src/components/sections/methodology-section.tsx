import { BadgeCheck, CreditCard, Gamepad2, Gift, MonitorSmartphone } from 'lucide-react';
import { methodologyWeights } from '@/src/data/content';

const iconMap: Record<string, { icon: React.ReactNode; gradient: string }> = {
  'badge-check': { icon: <BadgeCheck className="h-5 w-5" />, gradient: 'from-blue-600 via-indigo-700 to-blue-800' },
  'credit-card': { icon: <CreditCard className="h-5 w-5" />, gradient: 'from-emerald-600 via-teal-700 to-emerald-800' },
  'gamepad-2': { icon: <Gamepad2 className="h-5 w-5" />, gradient: 'from-violet-600 via-purple-700 to-violet-800' },
  gift: { icon: <Gift className="h-5 w-5" />, gradient: 'from-amber-600 via-orange-600 to-amber-700' },
  'monitor-smartphone': { icon: <MonitorSmartphone className="h-5 w-5" />, gradient: 'from-sky-600 via-cyan-700 to-sky-800' },
};

const defaultIcon = { icon: <BadgeCheck className="h-5 w-5" />, gradient: 'from-indigo-600 via-indigo-700 to-indigo-800' };

export function MethodologySection() {
  return (
    <section id="methodology" className="py-14 lg:py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-indigo-400 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            評価基準
          </h2>
          <p className="text-base text-indigo-200/80 mt-2 max-w-2xl mx-auto">
            各カジノは5つの主要カテゴリーで総合評価されています。
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-base text-indigo-100/70 leading-relaxed">
            私たちのランキングは、実際のテストと詳細な分析に基づいています。各オペレーターを公平に評価するため、以下の基準に従って点数を付けています。ライセンスと信頼性が最も重要視され、次に決済方法、ゲームカタログ、ボーナス、UXとサポートが続きます。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {methodologyWeights.map((item) => {
            const cfg = iconMap[item.icon] || defaultIcon;
            return (
              <div
                key={item.criterion}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/10 transition-all group"
              >
                {/* Header with gradient and shine */}
                <div className={`p-4 bg-gradient-to-br ${cfg.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  <div className="relative flex items-center justify-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white group-hover:scale-105 transition-transform">
                      {cfg.icon}
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-bold text-white mb-2">{item.criterion}</h3>
                  <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div
                      className={`absolute left-0 top-0 h-full bg-gradient-to-r ${cfg.gradient} rounded-full`}
                      style={{ width: `${item.weight}%` }}
                    />
                  </div>
                  <span className="text-lg font-bold text-indigo-300">{item.weight}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
