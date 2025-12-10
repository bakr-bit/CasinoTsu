import type { CasinoData } from './types';

export const futocasi: CasinoData = {
  slug: 'futocasi',
  name: 'Futocasi',
  nameJa: 'フトカジ',
  logo: '/assets/casino/futocasi.png',
  rating: 3.7,

  license: {
    name: '不明',
    jurisdiction: '不明',
  },

  operator: 'StarfishMedia N.V.',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/futocasi',
  },

  features: {
    bonusHeadline: '最大42,000円＋100フリースピン！',
    highlights: [
      'スロットもテーブルゲームも多く、満足できるゲームバラエティ',
      '仮想通貨も使え、豊富な決済方法',
      'スーパーポイント（コンプポイント）が貯まりやすかった'
    ],
    watchouts: [
      '賭け条件の30倍はやや厳しかった',
      '日本語の利用規約が分かりにくかった',
      '日本語サポートの対応が限定的であった'
    ],
  },

  payments: ['visa', 'mastercard', 'payz', 'vega-wallet', 'bitcoin', 'ethereum', 'usdt', 'bank-transfer'],

  facts: [
    { label: '運営会社', value: 'StarfishMedia N.V.' },
    { label: '設立年', value: '2020年' },
    { label: 'ウェルカムボーナス', value: '最大42,000円＋100FS' },
    { label: 'ボーナス賭け条件', value: '30倍 (入金＋ボーナス)' },
    { label: '最小入金額', value: '1,200円' },
    { label: '推定年間収益', value: '100万ドル以上 (中規模)' },
    { label: '日本語サポート', value: '毎日16時〜26時 (ライブチャット)' }
  ],

  meta: {
    title: 'フトカジ（FUTOCASI）レビュー【2025年最新版】',
    description:
      'フトカジ（FUTOCASI）は斬新なコンセプトが特徴のオンラインカジノでしたが、2025年現在、すでに閉鎖しています。過去のウェルカムボーナス、豊富な決済方法、スーパーポイントシステム、そして安全性に関する懸念事項について解説します。',
  },
};
