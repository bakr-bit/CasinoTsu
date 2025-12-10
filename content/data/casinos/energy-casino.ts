import type { CasinoData } from './types';

export const energy_casino: CasinoData = {
  slug: 'energy-casino',
  name: 'Energy Casino',
  nameJa: 'エナジーカジノ',
  logo: '/assets/casino/energy-casino.png',
  rating: 4.2,

  license: {
    name: 'Malta Gaming Authority (MGA)',
    jurisdiction: 'マルタ',
  },

  operator: 'Probe Investments LTD.',
  established: 2013,

  affiliate: {
    url: 'https://casinotsu.com/go/energy-casino',
  },

  features: {
    bonusHeadline: '最大$200初回入金ボーナス (賭け条件25倍) + 限定フリースピン30回',
    highlights: [
      '信頼性の高いMGA/UKGCライセンスを保有し、安全性が高い',
      '最大$200の初回入金ボーナスと、賭け条件なしのライブカジノキャッシュバック',
      '3,950種類以上のスロットを含む豊富なゲームラインナップ',
      '毎週2回利用可能なリロードボーナスや、賭け条件なしで交換できるエナジーポイント'
    ],
    watchouts: [
      '日本語サポートはメールのみで、ライブチャットは英語対応',
      '一部の人気プロバイダー（Golden Heroなど）のゲームがない',
      '海外レビューで出金遅延やアカウント関連の苦情が報告されている'
    ],
  },

  payments: ['vega-wallet', 'sticpay', 'muchbetter', 'payz', 'bank-transfer', 'credit-card', 'jeton', 'paypal'],

  facts: [
    { label: '名称', value: 'エナジーカジノ (Energy Casino)' },
    { label: '運営会社', value: 'Probe Investments LTD.' },
    { label: '設立年', value: '2013年 (日本市場参入は2021年)' },
    { label: 'ライセンス', value: 'MGA (マルタゲーミングオーソリティ)' },
    { label: 'ゲーム総数', value: '3,950種類以上' },
    { label: '日本語サポート', value: 'メールのみ (平日 16:00〜翌 7:00)' },
    { label: '入出金方法', value: 'Eウォレット、銀行送金、クレジットカードなど' },
    { label: '仮想通貨対応', value: '非対応' }
  ],

  meta: {
    title: 'エナジーカジノ（Energy Casino）レビュー【2025年最新版】',
    description:
      'エナジーカジノ（Energy Casino）は、MGA/UKGCライセンスを持つ信頼性の高いカジノです。最大$200の初回入金ボーナスに加え、賭け条件なしのライブカジノキャッシュバックを提供。3,950種類以上の豊富なゲームと、毎週利用可能なリロードボーナスが魅力です。日本語サポートはメールのみですが、総合的なバランスに優れています。',
  },
};
