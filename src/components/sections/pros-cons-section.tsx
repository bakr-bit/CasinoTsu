import { Check, X } from 'lucide-react';
import { prosConsData } from '@/src/data/content';

export function ProsConsSection() {
  return (
    <section id="pros-cons" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-indigo-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            メリットとデメリット
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            オンラインカジノの長所と短所を理解しましょう。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Pros */}
          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-emerald-100/50 hover:shadow-xl hover:shadow-emerald-200/50 transition-all">
            {/* Header with gradient and shine */}
            <div className="p-4 bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <h3 className="relative text-lg font-bold text-white flex items-center gap-2">
                <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                  <Check className="h-5 w-5" />
                </span>
                メリット
              </h3>
            </div>
            {/* Body */}
            <div className="p-6">
              <ul className="space-y-3">
                {prosConsData.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-gray-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cons */}
          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-red-100/50 hover:shadow-xl hover:shadow-red-200/50 transition-all">
            {/* Header with gradient and shine */}
            <div className="p-4 bg-gradient-to-br from-red-600 via-rose-700 to-red-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <h3 className="relative text-lg font-bold text-white flex items-center gap-2">
                <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                  <X className="h-5 w-5" />
                </span>
                デメリット
              </h3>
            </div>
            {/* Body */}
            <div className="p-6">
              <ul className="space-y-3">
                {prosConsData.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                      <X className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-gray-700">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
