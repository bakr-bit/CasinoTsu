import {
  Smartphone,
  TabletSmartphone,
  Globe,
  Check,
  X,
  Wifi,
  Zap,
  Shield,
} from 'lucide-react';
import { mobileCasinoData } from '@/src/data/content';

const optionConfig: Record<string, { icon: React.ReactNode; color: string; bg: string; border: string; gradient: string }> = {
  apple: {
    icon: <Smartphone className="h-6 w-6" />,
    color: 'text-gray-800',
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    gradient: 'from-slate-700 via-gray-800 to-slate-900',
  },
  android: {
    icon: <TabletSmartphone className="h-6 w-6" />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    gradient: 'from-emerald-600 via-green-700 to-emerald-800',
  },
  browser: {
    icon: <Globe className="h-6 w-6" />,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    gradient: 'from-indigo-600 via-indigo-700 to-indigo-800',
  },
};

const tips = [
  {
    icon: <Wifi className="h-5 w-5" />,
    title: '安定した接続',
    text: 'ライブカジノや高グラフィックゲームにはWi-Fiを推奨。スロットなら4G/5Gで十分です。',
    gradient: 'from-sky-600 via-cyan-700 to-sky-800',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'バッテリーと性能',
    text: 'バックグラウンドアプリを閉じてスムーズなプレイを。ライブカジノはバッテリー消費が多いです。',
    gradient: 'from-amber-600 via-orange-600 to-amber-700',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'モバイルセキュリティ',
    text: '生体認証（Face ID / 指紋）を有効化。共有デバイスに決済情報を保存しないでください。',
    gradient: 'from-emerald-600 via-teal-700 to-emerald-800',
  },
];

export function MobileCasinoSection() {
  return (
    <section id="mobile" className="py-14 lg:py-20 relative overflow-hidden">
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
            モバイルカジノ
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            ランキング内のすべてのカジノはモバイル最適化済み。自分に合った方法を選択してください。
          </p>
        </div>

        {/* 3 option cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {mobileCasinoData.map((opt) => {
            const cfg = optionConfig[opt.icon] ?? optionConfig.browser;
            return (
              <div
                key={opt.option}
                className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all group"
              >
                {/* Header with gradient and shine */}
                <div className={`p-4 bg-gradient-to-br ${cfg.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white group-hover:scale-105 transition-transform">
                      {cfg.icon}
                    </div>
                    <h3 className="text-base font-bold text-white">{opt.option}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{opt.howItWorks}</p>

                  {/* Pros */}
                  <ul className="space-y-1.5 mb-3">
                    {opt.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                        <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Cons */}
                  <ul className="space-y-1.5">
                    {opt.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                        <X className="h-3.5 w-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <div key={tip.title} className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all group">
              {/* Header with gradient and shine */}
              <div className={`p-3 bg-gradient-to-br ${tip.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                <div className="relative flex items-center gap-2.5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                    {tip.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white">{tip.title}</h4>
                </div>
              </div>
              {/* Body */}
              <div className="p-4">
                <p className="text-sm text-gray-500 leading-relaxed">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
