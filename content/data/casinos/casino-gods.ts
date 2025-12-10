import type { CasinoData } from './types';

export const casino_gods: CasinoData = {
  slug: 'casino-gods',
  name: 'Casino Gods',
  nameJa: 'カジノゴッズ',
  logo: '/assets/casino/casino-gods.png',
  rating: 4.2,

  license: {
    name: 'Malta Gaming Authority (MGA)',
    jurisdiction: 'マルタ',
  },

  operator: 'Genesis Global Limited',
  established: 2019,

  affiliate: {
    url: 'https://casinotsu.com/go/casino-gods',
  },

  features: {
    bonusHeadline: '最大$1,200ボーナス + 220フリースピン',
    highlights: [
      '豊富な決済方法に対応',
      'ゲームバラエティが豊富',
      'ライブカジノウェルカムボーナスあり',
      '毎週10%のキャッシュバックプロモーション',
      '日本語サポートの対応が親切で丁寧'
    ],
    watchouts: [
      '出金処理の遅延報告が多数あった',
      '出金時に2%の手数料がかかる場合があった',
      '賭け条件が40倍と高め'
    ],
  },

  payments: ['visa', 'mastercard', 'jcb', 'payz', 'muchbetter', 'venus-point', 'skrill', 'neteller', 'bank-transfer', 'mifinity'],

  facts: [
    { label: '運営会社', value: 'Genesis Global Limited' },
    { label: '設立年', value: '2019年' },
    { label: 'ライセンス', value: 'MGA, UKGC, SGA' },
    { label: 'ウェルカムボーナス', value: '最大$1,200 + 220フリースピン' },
    { label: '最小入金額', value: '$15' },
    { label: '最小出金額', value: '$15' },
    { label: '日本語サポート', value: 'ライブチャット/メール (17:00-24:00 JST)' },
    { label: '出金時間（Eウォレット）', value: '0〜1時間' }
  ],

  meta: {
    title: 'Casino Gods（カジノゴッズ）レビュー【2024年最新版】',
    description:
      '神話の世界をテーマにしたCasino Gods（カジノゴッズ）を徹底レビュー。最大$1,200ボーナスと豊富な決済方法が魅力。ただし、現在は日本市場およびグローバル市場全体で閉鎖されています。',
  },
};
