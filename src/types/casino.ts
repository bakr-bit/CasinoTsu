export type LicenseType =
  | 'Curacao'
  | 'Malta (MGA)'
  | 'Gibraltar'
  | 'Anjouan'
  | 'Costa Rica'
  | 'Kahnawake'
  | 'Isle of Man'
  | 'UK (UKGC)'
  | 'N/A';

export interface CasinoRatings {
  security: number;       // セキュリティ
  gameSelection: number;  // ゲーム品揃え
  bonuses: number;        // ボーナス
  paymentMethods: number; // 入出金方法
  userExperience: number; // ユーザー体験
  license: number;        // ライセンス
}

export interface Casino {
  slug: string;
  name: string;
  nameJa: string;
  logo: string;
  bonusTitle: string;
  bonusPercentage: number;
  bonusMaxAmount: number;
  bonusCurrency: string;
  freeSpins: number;
  wageringRequirement: number;
  overallRating: number;
  ratings: CasinoRatings;
  features: string[];
  pros: string[];
  cons: string[];
  license: LicenseType;
  paymentMethods: string[];
  providers: string[];
  affiliateUrl: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
}

// Re-export existing CasinoData for compatibility
export type { CasinoData } from '@/content/data/casinos/types';
