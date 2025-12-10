import type { CasinoData } from './types';

export const pokerstars: CasinoData = {
  slug: 'pokerstars',
  name: 'PokerStars',
  nameJa: 'ポーカースターズ',
  logo: '/assets/casino/pokerstars.png',
  rating: 4,

  license: {
    name: 'MGAライセンス',
    jurisdiction: 'マルタ',
  },

  operator: 'Flutter Entertainment plc',
  established: 2001,

  affiliate: {
    url: 'https://casinotsu.com/go/pokerstars',
  },

  features: {
    bonusHeadline: '初回から3回目入金まで最大$600ボーナス',
    highlights: [
      '世界最大規模を誇るオンラインポーカーサイト',
      '圧倒的なゲーム数とトーナメントの開催数',
      'スロットやライブカジノ、スポーツブックまで多彩なゲームを提供',
      'MGAライセンスを取得しており信頼性が高い'
    ],
    watchouts: [
      '日本語によるカスタマーサポートの不在',
      '仮想通貨による入出金には対応していない',
      'モバイル版では機能が限定される傾向がある'
    ],
  },

  payments: ['visa', 'mastercard', 'payz', 'muchbetter', 'webmoney', 'paypal', 'skrill', 'bank-transfer'],

  facts: [
    { label: '名称', value: 'PokerStars' },
    { label: '設立年', value: '2001年' },
    { label: 'ライセンス', value: 'MGAライセンス (マルタ)' },
    { label: '運営会社', value: 'Flutter Entertainment plc' },
    { label: '日本語サポート', value: 'なし (メール・ライブチャットは英語対応)' },
    { label: '監査機関', value: 'GLI (Gaming Laboratories International) による監査済み' },
    { label: '対応ゲーム', value: 'ポーカー、カジノゲーム、スポーツベット' },
    { label: 'ウェルカムボーナス', value: '最大$600 (ボーナスコード: STARS600)' }
  ],

  meta: {
    title: 'PokerStars（ポーカースターズ）レビュー｜世界最大級のポーカーサイト【2025年最新版】',
    description:
      'オンラインポーカー界の絶対王者、ポーカースターズを徹底レビュー！最大$600ボーナスや豊富なトーナメント、独占カジノゲームの魅力、入出金方法、信頼性を解説します。',
  },
};
