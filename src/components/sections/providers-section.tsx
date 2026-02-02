import Image from 'next/image';
import { gameProviders } from '@/src/data/content';

const providerGradients = [
  'from-indigo-600 via-indigo-700 to-indigo-800',
  'from-blue-600 via-blue-700 to-blue-800',
  'from-sky-600 via-sky-700 to-sky-800',
  'from-cyan-600 via-cyan-700 to-cyan-800',
  'from-slate-600 via-slate-700 to-slate-800',
  'from-indigo-500 via-blue-600 to-indigo-700',
];

export function ProvidersSection() {
  return (
    <section id="providers" className="py-14 lg:py-20 bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-blue-400 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            ゲームプロバイダー
          </h2>
          <p className="text-base text-blue-200/80 mt-2 max-w-2xl mx-auto">
            Pragmatic Play、Evolution、NetEnt、Play&apos;n GOなど、世界トップクラスのゲーム開発会社。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gameProviders.map((provider, index) => (
            <div
              key={provider.slug}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/10 transition-all group"
            >
              {/* Header with gradient and shine */}
              <div className={`p-4 bg-gradient-to-br ${providerGradients[index % providerGradients.length]} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                <div className="relative flex items-center gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform overflow-hidden p-1.5">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{provider.name}</h3>
                    <p className="text-sm text-white/80">
                      {provider.headquarters} &middot; {provider.foundedYear}年 &middot;{' '}
                      {provider.totalGames}+ ゲーム
                    </p>
                  </div>
                </div>
              </div>
              {/* Body */}
              <div className="p-5">
                <p className="text-sm text-blue-100/70 mb-4 leading-relaxed">
                  {provider.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {provider.popularGames.map((game) => (
                    <span
                      key={game}
                      className="text-sm text-blue-200 bg-white/5 border border-white/10 rounded-lg px-3 py-1"
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
