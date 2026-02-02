import Image from 'next/image';
import {
  ShieldCheck,
  FileCheck,
  Clock,
  ArrowDownToLine,
  ArrowUpFromLine,
  Zap,
  Wallet,
} from 'lucide-react';
import { paymentMethods, depositChecklist, kycContent } from '@/src/data/content';

const methodLogos: Record<string, { logo: string; gradient: string }> = {
  bitcoin: { logo: '/payment-logos/card_bitcoin.svg', gradient: 'from-orange-500 via-amber-600 to-orange-700' },
  ethereum: { logo: '/payment-logos/card_ethereum.svg', gradient: 'from-violet-600 via-purple-700 to-violet-800' },
  'bank-transfer': { logo: '/payment-logos/card_bank-transfer.svg', gradient: 'from-blue-600 via-blue-700 to-indigo-800' },
  payz: { logo: '/payment-logos/card_paypal.svg', gradient: 'from-emerald-600 via-teal-700 to-emerald-800' },
  'vega-wallet': { logo: '/payment-logos/card_apple-pay.svg', gradient: 'from-pink-600 via-rose-700 to-pink-800' },
  'credit-card': { logo: '/payment-logos/card_visa.svg', gradient: 'from-sky-600 via-cyan-700 to-sky-800' },
  visa: { logo: '/payment-logos/card_visa.svg', gradient: 'from-blue-600 via-blue-700 to-indigo-800' },
  mastercard: { logo: '/payment-logos/card_mastercard.svg', gradient: 'from-red-600 via-orange-600 to-yellow-500' },
  jcb: { logo: '/payment-logos/card_jcb.svg', gradient: 'from-blue-700 via-green-600 to-red-600' },
  'american-express': { logo: '/payment-logos/card_american-express.svg', gradient: 'from-blue-600 via-blue-700 to-blue-800' },
  'apple-pay': { logo: '/payment-logos/card_apple-pay.svg', gradient: 'from-gray-700 via-gray-800 to-gray-900' },
  'google-pay': { logo: '/payment-logos/card_google-pay.svg', gradient: 'from-blue-500 via-green-500 to-yellow-500' },
};

const defaultMethod = { logo: '', gradient: 'from-gray-600 via-gray-700 to-gray-800' };

function formatJPY(amount: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PaymentMethodsSection() {
  return (
    <section id="payments" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-indigo-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            入金・出金方法
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            仮想通貨、電子決済、銀行振込など、各決済方法の処理時間と手数料を比較。
          </p>
        </div>

        {/* Payment method cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {paymentMethods.map((m) => {
            const { logo, gradient } = methodLogos[m.slug] ?? defaultMethod;
            const isDeposit = m.type === 'both' || m.type === 'deposit';
            const isWithdrawal = m.type === 'both';

            return (
              <div
                key={m.slug}
                className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all group"
              >
                {/* Header with gradient and shine */}
                <div className={`p-4 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform overflow-hidden p-1.5">
                      {logo ? (
                        <Image src={logo} alt={m.name} width={32} height={32} className="h-full w-full object-contain" />
                      ) : (
                        <Wallet className="h-5 w-5 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{m.name}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {isDeposit && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-white/20 border border-white/30 rounded px-1.5 py-0.5 uppercase">
                            <ArrowDownToLine className="h-2.5 w-2.5" />
                            入金
                          </span>
                        )}
                        {isWithdrawal && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-white/20 border border-white/30 rounded px-1.5 py-0.5 uppercase">
                            <ArrowUpFromLine className="h-2.5 w-2.5" />
                            出金
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {isDeposit && (
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Zap className="h-3 w-3 text-emerald-500" />
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">入金</span>
                      </div>
                      <p className="text-sm font-bold text-gray-900">{m.depositTime}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        最低 {formatJPY(m.minDeposit)}
                      </p>
                    </div>
                  )}
                  {isWithdrawal && m.minWithdrawal > 0 ? (
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Clock className="h-3 w-3 text-violet-500" />
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">出金</span>
                      </div>
                      <p className="text-sm font-bold text-gray-900">{m.withdrawalTime}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        最低 {formatJPY(m.minWithdrawal)}
                      </p>
                    </div>
                  ) : !isWithdrawal ? (
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">出金</span>
                      </div>
                      <p className="text-sm font-bold text-gray-400">N/A</p>
                      <p className="text-[11px] text-gray-300 mt-0.5">入金のみ</p>
                    </div>
                  ) : null}
                </div>

                {/* Footer: fees + currencies */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className={`text-xs font-semibold ${m.fees === '無料' ? 'text-emerald-600' : 'text-gray-500'}`}>
                    {m.fees === '無料' ? '手数料無料' : m.fees}
                  </span>
                  <div className="flex gap-1">
                    {m.currencies.map((c) => (
                      <span key={c} className="text-[10px] text-gray-400 bg-gray-50 border border-gray-100 rounded px-1.5 py-0.5">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed mt-3">{m.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checklist + KYC */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-emerald-100/50 hover:shadow-xl hover:shadow-emerald-200/50 transition-all">
            {/* Header */}
            <div className="p-4 bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <div className="relative flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <FileCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white">
                  初回入金前チェックリスト
                </h3>
              </div>
            </div>
            {/* Body */}
            <div className="p-6">
              <ul className="space-y-2.5">
                {depositChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all">
            {/* Header */}
            <div className="p-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <div className="relative flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {kycContent.heading}
                </h3>
              </div>
            </div>
            {/* Body */}
            <div className="p-6">
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{kycContent.intro}</p>
              <ul className="space-y-2.5">
                {kycContent.documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>
                      <span className="font-semibold text-gray-700">{doc.name}</span>
                      {' — '}
                      {doc.description}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">
                  処理時間: {kycContent.processingTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
