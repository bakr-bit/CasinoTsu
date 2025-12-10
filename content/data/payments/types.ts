/**
 * Payment method data types
 */

export interface PaymentMethodData {
  slug: string;
  name: string;
  nameJa: string;
  logo?: string;
  type: 'crypto' | 'ewallet' | 'bank' | 'card' | 'other';

  // Processing info
  processingTime: {
    deposit: string;
    withdrawal: string;
  };

  // Limits (in JPY or as string for flexibility)
  limits: {
    minDeposit?: string;
    maxDeposit?: string;
    minWithdrawal?: string;
    maxWithdrawal?: string;
  };

  // Fees
  fees: {
    deposit?: string;
    withdrawal?: string;
    note?: string;
  };

  // Features
  features: {
    highlights: string[];
    watchouts?: string[];
    jpySupported: boolean;
    kycRequired: boolean;
  };

  // Casinos that support this payment method
  supportedCasinos: string[];

  // SEO metadata
  meta: {
    title: string;
    description: string;
    lastUpdated: string;
    author: string;
  };
}

export interface PaymentMethodRegistry {
  [slug: string]: PaymentMethodData;
}
