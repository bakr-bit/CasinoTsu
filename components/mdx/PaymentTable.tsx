import { getPayment } from '@/content/data/payments';

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
 * Displays structured data about a payment method
 */
export function PaymentTable({ slug, paymentSlug, fields }: PaymentTableProps) {
  // Support both slug and paymentSlug prop names
  const paymentKey = slug || paymentSlug;
  const payment = paymentKey ? getPayment(paymentKey) : undefined;

  if (!payment) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-lg">
        Payment method not found: {paymentKey || 'no slug provided'}
      </div>
    );
  }

  type FieldType = 'processingTime' | 'limits' | 'fees' | 'features';
  const showField = (field: FieldType) => !fields || fields.includes(field);

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <tbody>
          {/* Processing Time */}
          {showField('processingTime') && (
            <>
              <tr className="bg-gray-50">
                <td colSpan={2} className="px-4 py-2 font-bold text-gray-700">
                  処理時間
                </td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 text-gray-600 w-1/3">入金</td>
                <td className="px-4 py-2">{payment.processingTime.deposit}</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 text-gray-600">出金</td>
                <td className="px-4 py-2">{payment.processingTime.withdrawal}</td>
              </tr>
            </>
          )}

          {/* Limits */}
          {showField('limits') && (
            <>
              <tr className="bg-gray-50 border-t border-gray-200">
                <td colSpan={2} className="px-4 py-2 font-bold text-gray-700">
                  入出金限度額
                </td>
              </tr>
              {payment.limits.minDeposit && (
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2 text-gray-600">最小入金額</td>
                  <td className="px-4 py-2">{payment.limits.minDeposit}</td>
                </tr>
              )}
              {payment.limits.maxDeposit && (
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2 text-gray-600">最大入金額</td>
                  <td className="px-4 py-2">{payment.limits.maxDeposit}</td>
                </tr>
              )}
              {payment.limits.minWithdrawal && (
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2 text-gray-600">最小出金額</td>
                  <td className="px-4 py-2">{payment.limits.minWithdrawal}</td>
                </tr>
              )}
              {payment.limits.maxWithdrawal && (
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2 text-gray-600">最大出金額</td>
                  <td className="px-4 py-2">{payment.limits.maxWithdrawal}</td>
                </tr>
              )}
            </>
          )}

          {/* Fees */}
          {showField('fees') && (
            <>
              <tr className="bg-gray-50 border-t border-gray-200">
                <td colSpan={2} className="px-4 py-2 font-bold text-gray-700">
                  手数料
                </td>
              </tr>
              {payment.fees.deposit && (
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2 text-gray-600">入金手数料</td>
                  <td className="px-4 py-2">{payment.fees.deposit}</td>
                </tr>
              )}
              {payment.fees.withdrawal && (
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2 text-gray-600">出金手数料</td>
                  <td className="px-4 py-2">{payment.fees.withdrawal}</td>
                </tr>
              )}
              {payment.fees.note && (
                <tr className="border-t border-gray-100">
                  <td colSpan={2} className="px-4 py-2 text-gray-500 text-xs italic">
                    {payment.fees.note}
                  </td>
                </tr>
              )}
            </>
          )}

          {/* Features */}
          {showField('features') && (
            <>
              <tr className="bg-gray-50 border-t border-gray-200">
                <td colSpan={2} className="px-4 py-2 font-bold text-gray-700">
                  特徴
                </td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 text-gray-600">JPY対応</td>
                <td className="px-4 py-2">
                  {payment.features.jpySupported ? (
                    <span className="text-green-600">対応</span>
                  ) : (
                    <span className="text-red-600">非対応</span>
                  )}
                </td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-2 text-gray-600">本人確認（KYC）</td>
                <td className="px-4 py-2">
                  {payment.features.kycRequired ? (
                    <span className="text-orange-600">必要</span>
                  ) : (
                    <span className="text-green-600">不要の場合あり</span>
                  )}
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
