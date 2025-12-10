import type { CasinoData } from './types';

export const big_wins: CasinoData = {
  slug: 'big-wins',
  name: 'Big Wins',
  nameJa: 'ビッグウィン',
  logo: '/assets/casino/big-wins.png',
  rating: 4.2,

  license: {
    name: 'CIL (Curacao Interactive Licensing)',
    jurisdiction: 'キュラソー',
  },

  operator: 'EastPoint Operations B.V.',
  established: 2022,

  affiliate: {
    url: 'https://casinotsu.com/go/big-wins',
  },

  features: {
    bonusHeadline: '初回から3回目入金で合計最大3 BTCまたは50万円ボーナス＋賭け条件なしFS145回',
    highlights: [
      '最大3 BTCまたは50万円の豪華ウェルカムボーナスを提供',
      'フリースピンからの勝利金に賭け条件なし（0x）',
      '入金分の資金でもボーナスの賭け条件が消化される仕様',
      '4,000種類以上の豊富なスロットゲームを提供',
      'ネイティブスタッフによる日本語サポートが充実'
    ],
    watchouts: [
      '現在、日本市場から撤退しており新規登録不可',
      'ライセンスの有効性や検証に問題があった可能性が報告されている',
      '出金遅延やアカウント凍結など、プレイヤーからの深刻な苦情が報告されている'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'bank-transfer', 'vega-wallet', 'visa', 'mastercard'],

  facts: [
    { label: '運営会社', value: 'EastPoint Operations B.V.' },
    { label: 'ライセンス', value: 'CIL (キュラソー)' },
    { label: '設立年', value: '2021年〜2023年頃（情報錯綜あり）' },
    { label: 'ゲーム総数', value: '4,000種類以上' },
    { label: '対応通貨', value: '日本円、仮想通貨12種類' },
    { label: '日本語サポート', value: 'ライブチャット (17:00〜翌03:00)' },
    { label: 'KYC要件', value: '出金前に個人情報登録が必須' }
  ],

  meta: {
    title: 'Big Wins（ビッグウィン）カジノレビュー｜最大3BTCボーナスと安全性【2024年最新版】',
    description:
      'ビッグウィン（Big Wins）カジノの安全性、最大3BTCの豪華ウェルカムボーナス、賭け条件なしフリースピン、入出金方法、日本語サポート体制を徹底解説します。4,000種類以上のゲームと使いやすいサイトデザインが魅力でした。ただし、現在日本市場からは撤退しています。',
  },
};
