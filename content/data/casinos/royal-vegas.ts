import type { CasinoData } from './types';

export const royal_vegas: CasinoData = {
  slug: 'royal-vegas',
  name: 'Royal Vegas',
  nameJa: 'ロイヤルベガス',
  logo: '/assets/casino/royal-vegas.png',
  rating: 3.4,

  license: {
    name: 'Malta Gaming Authority',
    jurisdiction: 'マルタ',
  },

  operator: 'Baytree (Alderney) Limited / Digimedia Ltd',
  established: 2000,

  affiliate: {
    url: 'https://casinotsu.com/go/royal-vegas',
  },

  features: {
    bonusHeadline: '最大$1,200ウェルカムボーナス (賭け条件70倍)',
    highlights: [
      '合計$1,200を獲得可能なウェルカムボーナス。',
      '信頼の巨大カジノグループ「フォーチュンラウンジ」による運営。',
      'eCOGRA認定により公正なプレイを保証。',
      '500種類以上のゲームを提供（ログイン後は1000種類以上）。'
    ],
    watchouts: [
      'Trustpilotの評価が「Poor」（2.7/5）と低い。',
      '出金遅延や複雑な本人確認プロセスに関する苦情あり。',
      'ボーナスの賭け条件が70倍と高め。'
    ],
  },

  payments: ['bank-transfer', 'bitcoin', 'ethereum', 'jcb', 'litecoin', 'mastercard', 'muchbetter', 'payz', 'ripple', 'visa', 'usdt', 'usdc'],

  facts: [
    { label: '名称', value: 'Royal Vegas' },
    { label: 'ローンチ年', value: '2000年' },
    { label: '運営会社', value: 'Baytree (Alderney) Limited / Digimedia Ltd' },
    { label: 'ライセンス', value: 'MGA, KGC, AGCC, AGCO' },
    { label: 'ゲーム提供数', value: '500種類以上 (ログイン後1000種類以上)' },
    { label: '日本語サポート', value: 'チャット/電話/メール/Skype/WhatsApp/iMessage (時間限定)' },
    { label: '最低入金額', value: '$10' },
    { label: '出金速度', value: '最短4時間以内（条件あり）' }
  ],

  meta: {
    title: 'Royal Vegas（ロイヤルベガス）レビュー【2024年最新版】',
    description:
      '信頼のフォーチュンラウンジグループが運営していたロイヤルベガスを徹底レビュー。最大$1,200ボーナスや豊富なゲームが魅力でしたが、2024年春に日本市場から撤退しました。',
  },
};
