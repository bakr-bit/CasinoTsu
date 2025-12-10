import type { PaymentMethodData } from './types';

export const point66: PaymentMethodData = {
  slug: 'point66',
  name: 'Point66',
  nameJa: 'ポイント66',
  logo: '/assets/payment/point66.png',
  type: 'ewallet',

  processingTime: {
    deposit: 'サービス終了のため利用不可',
    withdrawal: 'サービス終了のため利用不可',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '¥50,000未満：¥300、¥50,000以上：¥500 (過去情報)',
    withdrawal: '手数料2％＋為替差額、銀行振込手数料一律¥800 (過去情報)',
    note: 'USD換算のポイント購入時に為替差額が発生。現在は利用不可。',
  },

  features: {
    highlights: [
      '2024年現在、サービスが完全に終了しているため利用不可',
      '過去には日本語サポートが充実していた',
      '過去にはコンビニ決済やネットバンキングに対応していた',
      '国内決済の代替手段として利用されていた'
    ],
    watchouts: [
      '2024年現在、サービスが完全に終了しており、新規利用・入出金は一切できない',
      '過去は手数料構造が複雑で、独自レートによる為替差額が発生していた',
      'EZE Walletなど中間口座との連携が必要だった'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'ポイント66（Point66）の入出金ガイド【2024年最新版】サービス終了につき利用不可',
    description: 'かつて人気だったオンラインカジノ決済サービス「ポイント66（Point66）」の過去の特徴と手数料を解説。2024年現在、サービスは完全に終了しており、新規利用・入出金はできません。代替決済方法を紹介。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
