import type { CasinoData } from './types';

export const cybet: CasinoData = {
  slug: 'cybet',
  name: 'CYBET',
  nameJa: 'CYBET（サイベット）',
  logo: '/assets/casino/cybet.png',
  rating: 3.6,

  license: {
    name: 'Anjouan Internet Gaming License',
    jurisdiction: 'アンジュアン',
  },

  operator: 'Eskimo Adventures Ltd',
  established: 2024,

  affiliate: {
    url: 'https://casinotsu.com/go/cybet',
  },

  features: {
    bonusHeadline: '初回入金最大$500ボーナス＋50フリースピン | 業界トップクラスの20%レーキバック',
    highlights: [
      '9種類の主要仮想通貨に完全対応（法定通貨不可）',
      'RTP99%のProvably Fair対応オリジナルゲームを提供',
      '他カジノのVIPステータスを引き継げる「VIP Transfer」機能',
      'ハウスエッジの20%が還元される高還元率レーキバック'
    ],
    watchouts: [
      'サイト表示言語は基本的に英語のみ（日本語非対応）',
      'ゲーム数が約700種類と他のカジノに比べて少なめ',
      'ライブチャットはAIボットのみで日本語サポートなし'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'ripple', 'solana', 'dogecoin', 'bnb', 'stellar', 'tron'],

  facts: [
    { label: 'ローンチ年', value: '2024年' },
    { label: '運営会社', value: 'Eskimo Adventures Ltd' },
    { label: 'ライセンス', value: 'アンジュアン・ゲーミングライセンス' },
    { label: '対応通貨', value: '仮想通貨のみ（9種類）' },
    { label: 'KYC要件', value: '基本的に不要' },
    { label: 'ゲーム数', value: '約700種類' },
    { label: 'VIPプログラム', value: 'あり（VIP Transfer機能付き）' },
    { label: 'サポート', value: '24時間AIチャットボット（英語）/ メール' }
  ],

  meta: {
    title: 'CYBET（サイベット）の評判・入金方法を解説【2025年最新版】',
    description:
      'CYBET（サイベット）は2024年ローンチの仮想通貨専用カジノ。最大$500ボーナスと業界トップクラスの20%レーキバックが魅力。KYC不要でスピーディーな入出金が可能。VIPステータス移行機能も解説。',
  },
};
