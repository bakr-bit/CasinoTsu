import type { CasinoData } from './types';

export const eldoah: CasinoData = {
  slug: 'eldoah',
  name: 'Eldoah Casino',
  nameJa: 'エルドアカジノ',
  logo: '/assets/casino/eldoah.png',
  rating: 4.4,

  license: {
    name: 'Anjouan Internet Gaming License Validation',
    jurisdiction: 'アンジュアン',
  },

  operator: 'GLOBAL SYSTEM TECHNOLOGIES INC',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/eldoah',
  },

  features: {
    bonusHeadline: 'CasinoTsu限定 入金不要ボーナス¥3,000（賭け条件1倍）',
    highlights: [
      '上限なしの即時出金対応（銀行出金を除く）',
      '全16社から選べる業界トップクラスの豊富なライブカジノ',
      '24時間365日対応の日本語ライブサポート',
      '賭け条件が全て1倍のシンプルで魅力的なボーナス',
      '降格なしの充実したVIPプログラム'
    ],
    watchouts: [
      'プロバイダー毎にウォレットが分かれている',
      '一部、入出金に手数料が発生する場合がございます',
      'Casino Guruによる安全指数は「非常に低い」と評価されている'
    ],
  },

  payments: ['bank-transfer', 'bitcoin', 'jcb', 'payz', 'ripple', 'sticpay', 'tether', 'mastercard', 'visa', 'jeton', 'jeton-bank', 'mikado-card', 'binance-usd'],

  facts: [
    { label: '名称', value: 'Eldoah Casino' },
    { label: 'ローンチ', value: '2020年' },
    { label: 'ライセンス', value: 'アンジュアン、KGC、コモロ(AOFA)' },
    { label: '運営会社', value: 'GLOBAL SYSTEM TECHNOLOGIES INC' },
    { label: '出金上限額', value: 'なし（銀行振込を除く）' },
    { label: '平均出金時間', value: '即時～15分' },
    { label: '日本語サポート', value: '24時間/365日（ライブチャット・メール）' },
    { label: 'VIPプログラム', value: 'あり（降格なし、16段階）' }
  ],

  meta: {
    title: 'エルドアカジノ（Eldoah Casino）徹底レビュー：入金不要ボーナス・評判【2025年最新版】',
    description:
      'エルドアカジノは、上限なしの即時出金と豊富なライブカジノが魅力のハイローラー向けカジノ。CasinoTsu限定の賭け条件1倍の入金不要ボーナス¥3,000や、充実したVIPプログラムを徹底解説します。',
  },
};
