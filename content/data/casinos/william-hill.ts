import type { CasinoData } from './types';

export const william_hill: CasinoData = {
  slug: 'william-hill',
  name: 'William Hill',
  nameJa: 'ウィリアムヒル',
  logo: '/assets/casino/william-hill.png',
  rating: 3.7,

  license: {
    name: 'MGA',
    jurisdiction: 'マルタ',
  },

  operator: 'William Hill Global PLC',
  established: 1934,

  affiliate: {
    url: 'https://casinotsu.com/go/william-hill',
  },

  features: {
    bonusHeadline: '最大$300ウェルカムボーナス（賭け条件25倍）',
    highlights: [
      'スポーツベットも同時に楽しめる',
      '老舗ならではの安心感と信頼性',
      '各セクションで異なるボーナスを獲得可能',
      '業界平均より高いペイアウト率 (96.05%〜97.24%)'
    ],
    watchouts: [
      'サイトの操作性に一部改善の余地あり',
      '利用可能な決済方法が限定的',
      '出金に関する苦情やアカウントロックの報告がある'
    ],
  },

  payments: ['mastercard', 'muchbetter', 'payz'],

  facts: [
    { label: '名称', value: 'William Hill' },
    { label: 'ローンチ', value: '1934年' },
    { label: 'ライセンス', value: 'MGA (マルタゲーミング委員会)' },
    { label: '運営会社', value: 'William Hill Global PLC' },
    { label: 'ゲーム数', value: '約570種類' },
    { label: 'VIPプログラム', value: 'なし' },
    { label: '日本語サポート', value: 'メール、ライブチャット（接続困難な場合あり）' },
    { label: 'ペイアウト率', value: '96.05%〜97.24%' }
  ],

  meta: {
    title: 'William Hill（ウィリアムヒル）カジノレビュー【2024年最新版】',
    description:
      '世界三大ブックメーカーの老舗ウィリアムヒルカジノを徹底レビュー。最大$300のウェルカムボーナス、MGAライセンスの安全性、入出金方法、ゲームの種類、日本語サポートの状況を詳しく解説します。',
  },
};
