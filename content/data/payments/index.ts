/**
 * Payment Method Data Registry
 * Central hub for all payment method data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:payments-index
 */

import type { PaymentMethodData, PaymentMethodRegistry } from './types';

// Import individual payment data
import { astropay } from './astropay';
import { bankTransfer } from './bank-transfer';
import { bitcoin } from './bitcoin';
import { bitflyer } from './bitflyer';
import { crypto } from './crypto';
import { ethereum } from './ethereum';
import { ezeebill } from './ezeebill';
import { iwallet } from './iwallet';
import { jPay } from './j-pay';
import { japaneseYenCasinos } from './japanese-yen-casinos';
import { jcb } from './jcb';
import { mastercard } from './mastercard';
import { matchpay } from './matchpay';
import { muchbetter } from './muchbetter';
import { payment } from './payment';
import { paypal } from './paypal';
import { paypay } from './paypay';
import { point66 } from './point66';
import { slashPayment } from './slash-payment';
import { slash } from './slash';
import { sticpay } from './sticpay';
import { sumopay } from './sumopay';
import { tigerPay } from './tiger-pay';
import { usdt } from './usdt';
import { vegaWallet } from './vega-wallet';
import { venuspoint } from './venuspoint';
import { visa } from './visa';

// Re-export types
export type { PaymentMethodData, PaymentMethodRegistry } from './types';

/**
 * Registry of all payment methods indexed by slug
 */
export const paymentsRegistry: PaymentMethodRegistry = {
  astropay: astropay,
  'bank-transfer': bankTransfer,
  bitcoin: bitcoin,
  bitflyer: bitflyer,
  crypto: crypto,
  ethereum: ethereum,
  ezeebill: ezeebill,
  iwallet: iwallet,
  'j-pay': jPay,
  'japanese-yen-casinos': japaneseYenCasinos,
  jcb: jcb,
  mastercard: mastercard,
  matchpay: matchpay,
  muchbetter: muchbetter,
  payment: payment,
  paypal: paypal,
  paypay: paypay,
  point66: point66,
  'slash-payment': slashPayment,
  slash: slash,
  sticpay: sticpay,
  sumopay: sumopay,
  'tiger-pay': tigerPay,
  usdt: usdt,
  'vega-wallet': vegaWallet,
  venuspoint: venuspoint,
  visa: visa,
};

/**
 * Get a single payment method by slug
 */
export function getPayment(slug: string): PaymentMethodData | undefined {
  return paymentsRegistry[slug];
}

/**
 * Get all payment methods as an array
 */
export function getAllPayments(): PaymentMethodData[] {
  return Object.values(paymentsRegistry);
}

/**
 * Get all payment method slugs
 */
export function getPaymentSlugs(): string[] {
  return Object.keys(paymentsRegistry);
}

/**
 * Get payment methods by type
 */
export function getPaymentsByType(type: PaymentMethodData['type']): PaymentMethodData[] {
  return getAllPayments().filter((payment) => payment.type === type);
}

/**
 * Get payment methods that support JPY
 */
export function getJPYPayments(): PaymentMethodData[] {
  return getAllPayments().filter((payment) => payment.features.jpySupported);
}

/**
 * Get payment methods that don't require KYC
 */
export function getNoKYCPayments(): PaymentMethodData[] {
  return getAllPayments().filter((payment) => !payment.features.kycRequired);
}
