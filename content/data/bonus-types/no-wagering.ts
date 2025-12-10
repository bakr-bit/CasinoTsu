import type { BonusTypeData } from './types';

export const no_wagering: BonusTypeData = {
  slug: 'no-wagering',
  name: 'No Wagering Bonus',
  nameJa: '出金条件なし（賭け条件なし）のカジノボーナス',
  description: 'ボーナスやフリースピンの勝利金に対して賭け条件が設定されていないため、獲得後すぐに現金として出金できる、初心者にも優しいボーナスです。',

  highlights: [
    '面倒な賭け条件（ロールオーバー）をクリアする必要がない。',
    '勝利金が発生したら、すぐに現金として出金が可能。',
    '無理なハイリスクな賭けを強いられず、気軽にプレイできる。',
    '初心者やライトユーザーにとって最も安心感の高いボーナス形態。'
  ],

  watchouts: [
    'ボーナス勝利金に最大出金額（現金化制限）が設定されている場合がある。',
    '入金不要ボーナス以外では、ボーナス獲得に最低入金額が必要な場合がある。',
    'ボーナスの対象となるゲームやスロットが限定されていることがある。'
  ],

  recommendedCasinos: [
    'casino-secret',
    'parimatch',
    'eldoah-casino',
    'intercasino',
    'konibet'
  ],

  meta: {
    title: '出金条件なしカジノボーナス完全ガイド【2025年最新版】',
    description: '賭け条件なし（出金条件なし）で遊べるオンラインカジノボーナスを徹底解説！2025年最新のおすすめTOP5をランキング形式で紹介。勝利金をすぐに現金化できる神ボーナスを見つけよう。',
  },
};
