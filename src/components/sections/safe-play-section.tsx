import {
  ShieldCheck,
  BadgeCheck,
  Scale,
  Ban,
  Timer,
  Wallet,
  UserX,
  FileWarning,
  CircleDollarSign,
  Globe,
  Fingerprint,
  Eye,
} from 'lucide-react';
import { licenseData, verifyChecklist, responsibleTools, mistakesToAvoid } from '@/src/data/content';

export function SafePlaySection() {
  return (
    <section id="safety" className="py-14 lg:py-20 relative overflow-hidden">
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
            安全にプレイするために
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            ライセンス、確認方法、制限設定、避けるべきミスなど、責任あるギャンブルの完全ガイド。
          </p>
        </div>

        {/* Licenses */}
        <div className="mb-8">
          {/* Section header card */}
          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-blue-100/50 mb-5">
            <div className="p-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <div className="relative flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">カジノライセンスの種類</h3>
                  <p className="text-sm text-white/80">各ライセンスが保証する内容</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {licenseData.map((lic) => (
              <div key={lic.name} className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h4 className="text-base font-bold text-gray-900">{lic.name}</h4>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${lic.trustColor} whitespace-nowrap`}>
                    {lic.trust}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{lic.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to verify */}
        <div className="mb-8">
          {/* Section header card */}
          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-emerald-100/50 mb-5">
            <div className="p-4 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <div className="relative flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">カジノの安全性を確認する方法</h3>
                  <p className="text-sm text-white/80">登録前に確認すべき4つのポイント</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {verifyChecklist.map((item, i) => {
              const icons = [Globe, Fingerprint, Eye, CircleDollarSign];
              const Icon = icons[i] ?? Globe;
              return (
                <div key={i} className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5 flex items-start gap-4 hover:shadow-md hover:border-emerald-200 transition-all">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                    {i + 1}
                  </span>
                  <div className="flex items-start gap-2.5">
                    <Icon className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Responsible Gaming Tools */}
        <div className="mb-8">
          {/* Section header card */}
          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-violet-100/50 mb-5">
            <div className="p-4 bg-gradient-to-br from-violet-600 via-purple-700 to-violet-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <div className="relative flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <Scale className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">責任あるギャンブル — 保護ツール</h3>
                  <p className="text-sm text-white/80">ギャンブルは娯楽であり、収入源ではありません</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {responsibleTools.map((tool, i) => {
              const icons = [Wallet, Timer, Ban, UserX];
              const Icon = icons[i] ?? Wallet;
              return (
                <div key={tool.title} className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-violet-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 border border-violet-100">
                      <Icon className="h-4 w-4 text-violet-500" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">{tool.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mistakes to avoid */}
        <div>
          {/* Section header card */}
          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-red-100/50 mb-5">
            <div className="p-4 bg-gradient-to-br from-red-600 via-rose-700 to-red-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <div className="relative flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <FileWarning className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">避けるべきミス</h3>
                  <p className="text-sm text-white/80">よくある失敗を避けましょう</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mistakesToAvoid.map((mistake, i) => {
              const icons = [FileWarning, CircleDollarSign, Ban];
              const Icon = icons[i] ?? FileWarning;
              return (
                <div key={mistake.title} className="rounded-2xl border border-red-100 bg-red-50/30 p-5 hover:shadow-md hover:border-red-200 transition-all">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <h4 className="text-sm font-bold text-red-800">{mistake.title}</h4>
                  </div>
                  <p className="text-sm text-red-700/80 leading-relaxed">{mistake.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
