import type { CasinoData } from './types';

export const bombastic: CasinoData = {
  slug: 'bombastic',
  name: 'Bombastic',
  nameJa: 'ボンバスティック',
  logo: '/assets/casino/bombastic.png',
  rating: 3.8,

  license: {
    name: 'Gaming Curacao',
    jurisdiction: 'キュラソー',
  },

  operator: 'BetMax Entertain N.V.',
  established: 2024,

  affiliate: {
    url: 'https://casinotsu.com/go/bombastic',
  },

  features: {
    bonusHeadline: '最大30,000USDTウェルカムボーナス＋フリースピン150回',
    highlights: [
      '最大30,000 USDTの超高額ウェルカムボーナスを提供',
      'CasinoTsu限定！入金不要フリースピン50回がもらえる',
      'ビットコイン、イーサリアムなど9種類の仮想通貨に対応',
      '出金手数料無料で、高速出金が可能',
      'AIチャットボットによる24時間365日のサポート体制'
    ],
    watchouts: [
      'ライセンス情報が「申請中」とされており、運営の透明性に懸念が残る',
      'ウェルカムボーナスの賭け条件が40倍とやや高めに設定されている',
      'サイトの日本語表現に不自然な箇所や、未完成なページが見受けられる'
    ],
  },

  payments: ['bitcoin', 'bitcoin-cash', 'ethereum', 'litecoin', 'ripple', 'tether', 'tron', 'cardano', 'binance-coin', 'dogecoin', 'visa', 'mastercard'],

  facts: [
    { label: '名称', value: 'ボンバスティック (Bombastic)' },
    { label: '運営会社', value: 'BetMax Entertain N.V.' },
    { label: '設立年', value: '2024年' },
    { label: 'ライセンス', value: 'Gaming Curacao (申請中との情報あり)' },
    { label: 'ゲーム数', value: '3,500種類以上' },
    { label: '入出金方法', value: '仮想通貨9種、クレジットカード（Onramper経由）' },
    { label: '日本語サポート', value: 'AIチャットボットによる24時間対応' },
    { label: '出金速度', value: '0～24時間（高速）' }
  ],

  meta: {
    title: 'ボンバスティック（Bombastic）徹底レビュー【2024年最新版】｜最大30,000USDTボーナス',
    description:
      'ボンバスティック（Bombastic）は、最大30,000 USDTの破格のウェルカムボーナスが魅力の仮想通貨カジノ。ライセンス情報、入出金方法、ゲームラインナップ、安全性について徹底解説します。',
  },
};
