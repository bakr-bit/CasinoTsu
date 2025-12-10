import type { CasinoData } from './types';

export const gohog: CasinoData = {
  slug: 'gohog',
  name: 'Gohog',
  nameJa: 'ゴーホグ',
  logo: '/assets/casino/gohog.png',
  rating: 4.3,

  license: {
    name: 'Curacao eGaming',
    jurisdiction: 'キュラソー',
  },

  operator: 'Dama N.V.',
  established: 2024,

  affiliate: {
    url: 'https://casinotsu.com/go/gohog',
  },

  features: {
    bonusHeadline: '最大¥225,000の豪華ウェルカムボーナス',
    highlights: [
      '4,000種類以上の豊富なゲームラインナップ',
      '完全日本人スタッフによるライブチャットサポート',
      '日本円でのプレイに対応し、日本市場を強く意識',
      '仮想通貨を含む30種類以上の豊富な決済方法'
    ],
    watchouts: [
      'ボーナスの賭け条件が50倍と厳しめ',
      '特定ボーナス利用時、入金額の3倍の賭け条件が付帯',
      'ライブチャットサポートは24時間対応ではない'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'bank-transfer', 'payz', 'mifinity', 'visa', 'mastercard', 'jcb', 'skrill', 'neteller'],

  facts: [
    { label: '運営会社', value: 'Dama N.V.' },
    { label: '設立年', value: '2024年4月' },
    { label: 'ライセンス', value: 'キュラソー (Antillephone)' },
    { label: 'ゲーム総数', value: '4,000種類以上' },
    { label: '日本語サポート', value: 'ライブチャット (15:30～24:00)' },
    { label: '対応通貨', value: '日本円 (JPY), 仮想通貨' },
    { label: '月間出金限度額', value: '¥4,500,000' },
    { label: 'KYC要件', value: '初回出金申請から14日以内' }
  ],

  meta: {
    title: 'ゴーホグ (Gohog) カジノレビュー【2024年最新版】| Dama N.V.運営の超新星',
    description:
      '2024年4月誕生のゴーホグ（Gohog）を徹底レビュー。最大¥225,000ボーナス、4,000種以上のゲーム、完全日本語サポートが魅力。Dama N.V.運営で安全性も高いが、賭け条件には注意が必要。',
  },
};
