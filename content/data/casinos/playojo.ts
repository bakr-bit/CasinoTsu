import type { CasinoData } from './types';

export const playojo: CasinoData = {
  slug: 'playojo',
  name: 'PlayOJO',
  nameJa: 'PlayOJO（プレイオジョ）',
  logo: '/assets/casino/playojo.png',
  rating: 4.3,

  license: {
    name: 'Malta Gaming Authority (MGA)',
    jurisdiction: 'マルタ',
  },

  operator: 'Skill On Net Limited',
  established: 2022,

  affiliate: {
    url: 'https://casinotsu.com/go/playojo',
  },

  features: {
    bonusHeadline: '賭け条件なし！初回入金で80回分のキャッシュスピン',
    highlights: [
      'すべてのボーナス・フリースピンに賭け条件なし',
      'OJOプラスによるベットごとのキャッシュバックシステム',
      '電話対応を含む充実した日本語カスタマーサポート',
      'iOS/Android対応の専用モバイルアプリを提供'
    ],
    watchouts: [
      '2025年4月をもって日本市場の新規顧客の受け入れを終了',
      'ウェルカムボーナスはフリースピンのみ（入金ボーナスなし）',
      '一部のプレイヤーから利用規約やサポート対応に関する批判的な意見あり'
    ],
  },

  payments: ['bank-transfer', 'visa', 'mastercard', 'jcb', 'payz', 'vega-wallet', 'tiger-pay', 'bitcoin', 'ethereum'],

  facts: [
    { label: '名称', value: 'PlayOJO（プレイオジョ）' },
    { label: '運営会社', value: 'Skill On Net Limited' },
    { label: '設立年', value: '2022年 (日本語サイトオープン)' },
    { label: 'ライセンス', value: 'Malta Gaming Authority (MGA)' },
    { label: 'ゲーム総数', value: '7,000種類以上' },
    { label: '日本語サポート', value: '電話、ライブチャット、メール、LINE対応' },
    { label: '出金時間', value: '通常0～1日（非大型勝利金は11時間以内目標）' },
    { label: '出金上限', value: '上限なし' }
  ],

  meta: {
    title: 'PlayOJO（プレイオジョ）徹底レビュー＆ボーナス情報【2025年最新版】',
    description:
      '賭け条件なしで人気のPlayOJO（プレイオジョ）を徹底解説。初回入金で80回分のキャッシュスピンが獲得可能！MGAライセンス保有、電話サポートあり。ただし、2025年4月で新規登録受付終了のため注意が必要です。',
  },
};
