import type { CasinoData } from './types';

export const gambola_casino: CasinoData = {
  slug: 'gambola-casino',
  name: 'Gambola',
  nameJa: 'ギャンボラ',
  logo: '/assets/casino/gambola-casino.png',
  rating: 4.2,

  license: {
    name: 'Malta Gaming Authority',
    jurisdiction: 'マルタ',
  },

  operator: 'Glitnor Services Limited',
  established: 2019,

  affiliate: {
    url: 'https://casinotsu.com/go/gambola-casino',
  },

  features: {
    bonusHeadline: '最大$1,500ウェルカムボーナス',
    highlights: [
      'ベットするたびにキャッシュとして還元されるリベートシステムが魅力',
      '初回入金後24時間以内に2倍に到達しなかった場合の全額返金保証',
      'プロフェッショナルが構築したシンプルで洗練されたサイトデザイン',
      '毎日16時間、日本語ネイティブサポートが対応',
      '主要なEウォレットや国内銀行送金に対応した決済方法'
    ],
    watchouts: [
      '現在、カジノは完全に閉鎖されており、ご利用いただけません。',
      '提供されていたボーナスオファーが以前に比べて減少した印象',
      'ライブチャットの利用可能時間が限られていた'
    ],
  },

  payments: ['bank-transfer', 'mastercard', 'muchbetter', 'payz', 'tiger-pay', 'vega-wallet', 'visa', 'jcb', 'sticpay'],

  facts: [
    { label: '名称', value: 'Gambola' },
    { label: 'ローンチ', value: '2019年' },
    { label: '運営会社', value: 'Glitnor Services Limited' },
    { label: 'ライセンス', value: 'Malta Gaming Authority' },
    { label: 'ウェルカムボーナス', value: '最大$1,500 (3回入金)' },
    { label: 'リベートシステム', value: 'キャッシュリベート (ベット額の一部が即時還元)' },
    { label: '日本語サポート', value: 'ライブチャット・メール (毎日16時間対応)' },
    { label: 'KYC要件', value: '€2,000まで本人確認不要 (Pay and Playシステム)' }
  ],

  meta: {
    title: 'ギャンボラ（Gambola）オンカジ評価【2025年最新】',
    description:
      'かつてNo.1リベートカジノとして知られたギャンボラ（Gambola）の徹底レビュー。最大$1,500のウェルカムボーナスや、勝敗に関わらず還元されるキャッシュリベートシステムが特徴でした。※現在、サービスは完全に閉鎖されています。',
  },
};
