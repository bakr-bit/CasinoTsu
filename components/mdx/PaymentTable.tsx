import { getPayment } from '@/content/data/payments';
import { Clock, Wallet, Receipt, Settings, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface PaymentTableProps {
  /** Payment method slug to display */
  slug?: string;
  /** Alternative prop name for payment method slug (used by some MDX files) */
  paymentSlug?: string;
  /** Show only specific fields */
  fields?: Array<'processingTime' | 'limits' | 'fees' | 'features'>;
}

/**
 * Payment method info table component for MDX content
 * Displays structured data about a payment method with colorful design
 */
export function PaymentTable({ slug, paymentSlug, fields }: PaymentTableProps) {
  // Support both slug and paymentSlug prop names
  const paymentKey = slug || paymentSlug;
  const payment = paymentKey ? getPayment(paymentKey) : undefined;

  if (!payment) {
    return (
      <div className="my-8 not-prose p-4 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-2xl shadow-lg">
        <div className="flex items-center gap-2">
          <XCircle className="w-5 h-5" />
          <span className="font-bold">Payment method not found: {paymentKey || 'no slug provided'}</span>
        </div>
      </div>
    );
  }

  type FieldType = 'processingTime' | 'limits' | 'fees' | 'features';
  const showField = (field: FieldType) => !fields || fields.includes(field);

  const sections = [
    {
      key: 'processingTime' as const,
      icon: Clock,
      title: '処理時間',
      gradient: 'from-indigo-600 to-indigo-700',
      rows: [
        { label: '入金', value: payment.processingTime.deposit },
        { label: '出金', value: payment.processingTime.withdrawal },
      ],
    },
    {
      key: 'limits' as const,
      icon: Wallet,
      title: '入出金限度額',
      gradient: 'from-violet-500 to-purple-600',
      rows: [
        payment.limits.minDeposit && { label: '最小入金額', value: payment.limits.minDeposit },
        payment.limits.maxDeposit && { label: '最大入金額', value: payment.limits.maxDeposit },
        payment.limits.minWithdrawal && { label: '最小出金額', value: payment.limits.minWithdrawal },
        payment.limits.maxWithdrawal && { label: '最大出金額', value: payment.limits.maxWithdrawal },
      ].filter(Boolean),
    },
    {
      key: 'fees' as const,
      icon: Receipt,
      title: '手数料',
      gradient: 'from-amber-500 to-orange-500',
      rows: [
        payment.fees.deposit && { label: '入金手数料', value: payment.fees.deposit },
        payment.fees.withdrawal && { label: '出金手数料', value: payment.fees.withdrawal },
      ].filter(Boolean),
      note: payment.fees.note,
    },
    {
      key: 'features' as const,
      icon: Settings,
      title: '特徴',
      gradient: 'from-emerald-500 to-green-600',
      rows: [
        {
          label: 'JPY対応',
          value: payment.features.jpySupported,
          isBoolean: true,
        },
        {
          label: '本人確認（KYC）',
          value: payment.features.kycRequired,
          isBoolean: true,
          invertColor: true,
        },
      ],
    },
  ];

  return (
    <div className="my-8 not-prose space-y-4">
      {sections.map((section) => {
        if (!showField(section.key) || section.rows.length === 0) return null;

        const IconComponent = section.icon;

        return (
          <div key={section.key} className="overflow-hidden rounded-2xl shadow-lg">
            {/* Header */}
            <div className={`px-4 py-3 bg-gradient-to-r ${section.gradient} relative`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-white text-sm">{section.title}</h4>
              </div>
            </div>

            {/* Body */}
            <div className="bg-white border-x border-b border-gray-100">
              {section.rows.map((row, index) => {
                if (!row) return null;
                const typedRow = row as { label: string; value: string | boolean; isBoolean?: boolean; invertColor?: boolean };

                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between px-4 py-3 ${
                      index !== section.rows.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <span className="text-gray-600 text-sm">{typedRow.label}</span>
                    {typedRow.isBoolean !== undefined ? (
                      <div className="flex items-center gap-1.5">
                        {typedRow.value ? (
                          <>
                            <CheckCircle className={`w-4 h-4 ${typedRow.invertColor ? 'text-orange-500' : 'text-emerald-500'}`} />
                            <span className={`text-sm font-medium ${typedRow.invertColor ? 'text-orange-600' : 'text-emerald-600'}`}>
                              {typedRow.invertColor ? '必要' : '対応'}
                            </span>
                          </>
                        ) : (
                          <>
                            {typedRow.invertColor ? (
                              <>
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                <span className="text-sm font-medium text-emerald-600">不要の場合あり</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-4 h-4 text-red-500" />
                                <span className="text-sm font-medium text-red-600">非対応</span>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-900 font-medium text-sm">{String(typedRow.value)}</span>
                    )}
                  </div>
                );
              })}
              {section.note && (
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-500 italic">{section.note}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
