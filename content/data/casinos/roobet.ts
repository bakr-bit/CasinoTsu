import type { CasinoData } from './types';

export const roobet: CasinoData = {
  slug: 'roobet',
  name: 'Roobet',
  nameJa: 'RooBet（ルーベットカジノ）',
  logo: '/assets/casino/roobet.png',
  rating: 4,

  license: {
    name: 'Curaçao Gaming Authority',
    jurisdiction: 'キュラソー',
  },

  operator: 'Raw Entertainment B.V.',
  established: 2018,

  affiliate: {
    url: 'https://casinotsu.com/go/roobet',
  },

  features: {
    bonusHeadline: '新規登録から7日間、スロット純損失額の20%を最大$200までキャッシュバック（賭け条件なし）',
    highlights: [
      '世界的著名人や名門サッカークラブとの公式パートナーシップ',
      'スポーツベットに強みを持つ仮想通貨特化型カジノ',
      '独自の「リワード」プログラム（レーキバックなど）をご用意',
      '豊富なゲーム数に加え、ユニークなオリジナルゲームも多数提供',
      '2025年「Best Crypt Casino賞」受賞の実力派'
    ],
    watchouts: [
      'ウェルカムオファーはキャッシュバック形式で、初回入金ボーナスではない',
      '法定通貨での出金オプションが限られている'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'solana', 'usdt', 'payz', 'vega-wallet', 'tiger-pay'],

  facts: [
    { label: '名称', value: 'Roobet' },
    { label: 'ローンチ', value: '2018年' },
    { label: 'ライセンス', value: 'キュラソー Gaming Authority' },
    { label: '運営会社', value: 'Raw Entertainment B.V.' },
    { label: '対応通貨', value: '仮想通貨10種類、電子ウォレット、クレジットカード' },
    { label: 'サポート', value: '24時間ライブチャット・メール（自動翻訳）' },
    { label: '出金限度額', value: '無制限' },
    { label: '本人確認（KYC）', value: 'レベル1認証が必須' }
  ],

  meta: {
    title: 'RooBet（ルーベットカジノ）の評判とボーナス徹底解説【2025年最新版】',
    description:
      '世界的著名人がアンバサダーを務める仮想通貨特化型カジノ、RooBet（ルーベット）を徹底レビュー。最大$200キャッシュバックや豊富なオリジナルゲーム、スポーツベットの魅力、入出金方法、安全性について詳しく解説します。',
  },
};
