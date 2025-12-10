import type { CasinoData } from './types';

export const netbet: CasinoData = {
  slug: 'netbet',
  name: 'NetBet',
  nameJa: 'ネットベット',
  logo: '/assets/casino/netbet.png',
  rating: 4.2,

  license: {
    name: 'Malta Gaming Authority(MGA)',
    jurisdiction: 'マルタ',
  },

  operator: 'NetBet Enterprises Ltd',
  established: 2014,

  affiliate: {
    url: 'https://casinotsu.com/go/netbet',
  },

  features: {
    bonusHeadline: '最大$500ウェルカムボーナス (賭け条件40倍)',
    highlights: [
      '毎日・毎月開催される豊富なキャンペーン',
      'スポーツブックや宝くじゲームなどのその他ゲームも充実',
      'プレイヤーズクラブでポイントが貯められ、レベルアップ特典あり',
      'EvolutionやPragmatic Playによるライブカジノを提供'
    ],
    watchouts: [
      'ボーナス規約が複雑で、上級者向けと感じられる場合がある',
      '日本に特化したキャンペーンが少なめ',
      'ライブチャットのサポートが繋がりにくい時がある'
    ],
  },

  payments: ['bank-transfer', 'jcb', 'mastercard', 'muchbetter', 'payz', 'venus-point', 'visa'],

  facts: [
    { label: '名称', value: 'NetBet' },
    { label: 'ローンチ', value: '2014年' },
    { label: 'ライセンス', value: 'Malta Gaming Authority (マルタ)' },
    { label: '運営会社', value: 'NetBet Enterprises Ltd' },
    { label: 'ウェルカムボーナス', value: '最大$500 (賭け条件40倍)' },
    { label: 'ゲーム数', value: '450～2,000タイトル' },
    { label: '日本語サポート', value: 'ライブチャット (17:00～24:00) & メール' },
    { label: '決済方法', value: 'クレカ、電子決済、銀行送金' }
  ],

  meta: {
    title: 'NetBet（ネットベット）カジノレビュー｜最大$500ボーナスと豊富なキャンペーン【2024年最新版】',
    description:
      'NetBet（ネットベット）は2001年設立の老舗カジノ。MGAライセンス保有で信頼性が高く、最大$500のウェルカムボーナスを提供。スポーツベットや宝くじも楽しめる。豊富な日替わり・月間キャンペーンが魅力です。',
  },
};
