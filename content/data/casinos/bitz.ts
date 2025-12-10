import type { CasinoData } from './types';

export const bitz: CasinoData = {
  slug: 'bitz',
  name: 'Bitz Casino',
  nameJa: 'ビッツカジノ',
  logo: '/assets/casino/bitz.png',
  rating: 4,

  license: {
    name: 'Anjouan Gaming License',
    jurisdiction: 'アンジュアン',
  },

  operator: 'WinSector N.V.',
  established: 2024,

  affiliate: {
    url: 'https://casinotsu.com/go/bitz',
  },

  features: {
    bonusHeadline: '最大$1,000ウェルカムボーナス (賭け条件29倍)',
    highlights: [
      '本人確認書類の提出が原則不要で匿名性抜群',
      '還元率（RTP）98%以上の独占ゲームを提供',
      '何度でも獲得できる入金不要ボーナスなどプロモが豊富',
      '6,800種類以上の豊富なゲームラインナップ',
      '24時間日本語対応のライブチャットサポート',
    ],
    watchouts: [
      '知名度が低く、口コミや評判が少ない',
      'サイトの日本語に時折不自然な箇所が見られる',
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'polygon', 'usdt'],

  facts: [
    { label: '名称', value: 'Bitz' },
    { label: 'ローンチ', value: '2024年' },
    { label: 'ライセンス', value: 'Anjouan Gaming License' },
    { label: '運営会社', value: 'WinSector N.V.' },
    { label: 'ゲーム数', value: '約6,800種類' },
    { label: 'KYC要件', value: '原則不要（名前と電話番号のみ）' },
    { label: '日本語サポート', value: '24時間ライブチャット' },
    { label: 'VIPプログラム', value: 'あり' },
  ],

  meta: {
    title: 'Bitz Casino（ビッツカジノ）レビュー【2024年最新版】本人確認不要の仮想通貨カジノ',
    description:
      '2024年オープンのビッツカジノ（Bitz）は、本人確認書類不要で匿名性抜群の次世代仮想通貨カジノ。最大$1,000ボーナスやRTP98%の独占ゲーム、豊富なプロモーションを徹底解説。',
  },
};
