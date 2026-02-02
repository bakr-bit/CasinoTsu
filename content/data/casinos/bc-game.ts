import type { CasinoData } from './types';

export const bc_game: CasinoData = {
  slug: 'bc-game',
  name: 'BC.Game',
  nameJa: 'BCGAME（BCゲーム）',
  logo: '/assets/casino/bcgame.png',
  rating: 4,

  license: {
    name: 'Anjouan Gaming License',
    jurisdiction: 'アンジュアン',
  },

  operator: 'Twocent Technology Limited',
  established: 2017,

  affiliate: {
    url: 'https://casinotsu.com/go/bc-game',
  },

  features: {
    bonusHeadline: '圧巻のゲーム数＆最大$1,600の初回入金ボーナス！',
    highlights: [
      '約120種類の仮想通貨が利用可能で業界トップクラス',
      'ゲーム総数7,500種類以上、オリジナルゲームも豊富',
      '最大$1,600の初回入金ボーナスと豪華なプロモーション',
      'スポーツベットも楽しめるハイブリッド型カジノ',
      'ブロックチェーン技術を活用したProvably Fairシステム導入'
    ],
    watchouts: [
      'サイトの一部が英語表記で不便な箇所がある',
      '電子マネー決済がVega walletのみ',
      '日本語サポートの返答に時間がかかる場合や自動翻訳対応が気になる'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'litecoin', 'ripple', 'dogecoin', 'bank-transfer'],

  facts: [
    { label: '名称', value: 'BC.Game' },
    { label: 'ローンチ', value: '2017年' },
    { label: 'ライセンス', value: 'アンジュアン・ゲーミングライセンス' },
    { label: '運営会社', value: 'Twocent Technology Limited' },
    { label: 'ゲーム総数', value: '7,500種類以上' },
    { label: '対応仮想通貨数', value: '約120種類' },
    { label: 'VIPプログラム', value: '招待制（全5ランク、70段階）' },
    { label: 'KYC要件', value: '基本KYC不要（匿名プレイ推奨）' }
  ],

  meta: {
    title: 'BCGAME（BCゲーム）カジノ評価！入金不要ボーナス＆登録方法【2024年最新版】',
    description:
      'BCGAME（BCゲーム）は2017年設立の仮想通貨特化型カジノ。約120種類の仮想通貨に対応し、7,500種類以上のゲームを提供。最大$1,600の初回入金ボーナスや入金不要フリースピン60回など豪華特典を徹底解説します。',
  },
};
