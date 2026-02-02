import { siteConfig } from '@/src/data/site-config';
import { AlertTriangle, Phone, ExternalLink, ShieldCheck } from 'lucide-react';

interface ResponsibleGamingSectionProps {
  className?: string;
}

export function ResponsibleGamingSection({ className = '' }: ResponsibleGamingSectionProps) {
  return (
    <section className={`py-12 lg:py-16 bg-white relative overflow-hidden ${className}`}>
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <ShieldCheck className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            責任あるギャンブル
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {siteConfig.responsibleGaming.message}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Warning box */}
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">重要な注意事項</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• ギャンブルは18歳以上の方のみご利用いただけます</li>
                  <li>• 負けても許容できる範囲でプレイしましょう</li>
                  <li>• ギャンブルは娯楽であり、収入源ではありません</li>
                  <li>• 問題を感じたら、すぐに専門家に相談してください</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Help resources */}
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">相談窓口</h3>
                <p className="text-gray-600 text-sm mb-4">
                  ギャンブル依存症でお困りの方は、以下の窓口にご相談ください。
                </p>
                <div className="space-y-3">
                  <a
                    href="https://www.ncpgambling.org/help-treatment/help-by-state/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    ギャンブル依存症対策
                  </a>
                  <a
                    href="https://www.gamcare.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    GamCare (国際)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Age verification badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-red-100 border border-red-200 rounded-full px-6 py-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white text-sm font-bold">
              18+
            </span>
            <span className="text-sm text-red-700">
              18歳未満の方のご利用は禁止されています
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
