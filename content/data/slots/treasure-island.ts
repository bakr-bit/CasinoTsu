import type { SlotData } from './types';

export const treasure_island: SlotData = {
  slug: 'treasure-island',
  title: 'Treasure Island／トレジャーアイランド',
  hero: {
    title: 'Treasure Island',
    subheading: 'トレジャーアイランド',
    description: 'CasinoTsu 推薦！ Quickspin 社の高RTPスロット「Treasure Island／トレジャーアイランド」が登場！早速 CasinoTsu でチェックしましょう。',
    score: 3.4,
    scoreMax: 5,
    rtp: '97.06%',
    maxMultiplier: 'x1,785',
    provider: 'Quickspin',
    releaseDate: '2013年11月 または 2015年10月',
    volatility: 'Low to Low-Medium',
    reels: '5',
    paylines: '40',
    minBet: '$0.5',
    maxBet: '$100',
    slotImageSrc: '/slots/treasure-island.jpg',
    highlights: [
      '高RTPスロット',
      '海賊と宝探しのテーマ',
      '多彩なボーナスフィーチャー',
      'モバイル対応',
    ],
    watchouts: [
      '一部情報源でリリース日や最大配当倍率に差異あり',
      'ベースゲームのペイテーブルが低いとの意見あり',
    ],
  },
  gameInfo: {
    intro: '「Treasure Island（トレジャーアイランド）」は、Quickspin 社が開発した、海賊と宝探しをテーマにしたスロットゲームです。コミカルでカラフルなグラフィックと、冒険心をかき立てるサウンドは、プレイヤーを失われた財宝へと誘います。\nこのゲームは、 **高いRTP（還元率）** を誇り、ボラティリティは低～中程度とされています。これは、比較的安定したゲームプレイを期待でき、ボーナス購入や賭け条件の達成を目指すプレイヤーにとっても、扱いやすい特性と言えるでしょう。',
    basicInfo: {
      rtp: '97.07% (一部情報源では97.1%)',
      volatility: 'Low to Low-Medium',
      reels: '5',
      paylines: '40',
      minBet: '$0.5',
      maxBet: '$100',
      provider: 'Quickspin',
      releaseDate: '2013年11月 または 2015年10月',
    },
  },
  payoutTable: {
    title: 'ペイアウト・配当表',
    symbols: [
      {
        name: 'ワイルド (宝箱)',
        description: 'ボーナススキャッターと樽ワイルドを除く、他のすべてのシンボルの代わりとなります。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'ワイルド (樽)',
        description: '2つ以上出現すると、「海賊の攻撃」フィーチャーが発動します。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'ボーナススキャッター',
        description: 'リール上に3つ以上出現すると、ボーナスゲーム（フリースピン、宝探し、または即時配当）が選択できます。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: '海賊船長',
        description: '高配当シンボル',
        payout5: 'x10',
        payout4: 'x3',
        payout3: 'x1',
      },
      {
        name: '海賊 (男)',
        description: '高配当シンボル',
        payout5: 'x7.5',
        payout4: 'x2.5',
        payout3: 'x0.75',
      },
      {
        name: '海賊 (女)',
        description: '高配当シンボル',
        payout5: 'x5',
        payout4: 'x2',
        payout3: 'x0.5',
      },
      {
        name: '海賊 (指輪)',
        description: '中配当シンボル',
        payout5: 'x4',
        payout4: 'x1.5',
        payout3: 'x0.4',
      },
      {
        name: 'A',
        description: '低配当シンボル',
        payout5: 'x3',
        payout4: 'x1',
        payout3: 'x0.3',
      },
      {
        name: 'K',
        description: '低配当シンボル',
        payout5: 'x2.5',
        payout4: 'x0.75',
        payout3: 'x0.25',
      },
      {
        name: 'Q',
        description: '低配当シンボル',
        payout5: 'x2',
        payout4: 'x0.5',
        payout3: 'x0.2',
      },
      {
        name: 'J',
        description: '低配当シンボル',
        payout5: 'x1.5',
        payout4: 'x0.4',
        payout3: 'x0.15',
      },
      {
        name: '10',
        description: '低配当シンボル',
        payout5: 'x1',
        payout4: 'x0.3',
        payout3: 'x0.1',
      },
    ],
    maxPayout: 'x1,785',
    notes: [
      '配当はベット額によって変動します。',
      'フリースピン中は、より高配当のシンボルが出現する可能性があります。',
      '情報源により、最大配当倍率に差異があります（x1,844、またはワイルド20個出現時にx400）。',
    ],
  },
  features: {
    title: 'ゲーム特徴・フィーチャー',
    items: [
      {
        name: 'ワイルドシンボル',
        description: '宝箱ワイルドと樽ワイルドの2種類が存在。樽ワイルドは「海賊の攻撃」フィーチャーをトリガーし、追加のワイルドを生成します。スタック形式でも出現します。',
      },
      {
        name: '海賊の攻撃 (ワイルドフィーチャー)',
        description: 'ベースゲーム中に2つ以上の樽ワイルドが出現すると発動。ランダムに樽ワイルドに砲弾が命中し、追加のワイルドシンボルに変化します。',
      },
      {
        name: 'ボーナスゲーム',
        description: 'リール上に3つ以上のボーナススキャッターが出現すると、フリースピン、宝探し、または即時配当を選択できます。',
      },
      {
        name: 'フリースピン',
        description: '「アイランドポップゲーム」で獲得できるフリースピン数と有効化されるフィーチャーが決まります。フリースピン中は、ロック樽ワイルド、エクストラワイルド、スーパーワイルドが出現します。',
      },
      {
        name: '宝探し',
        description: '宝の地図から2つの場所を選択し、配当や宝箱を獲得するミニゲームです。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Book of Dead',
      href: '/slots/book-of-dead',
      provider: 'Play\'n GO',
      description: '冒険と古代遺跡をテーマにした、非常に人気のあるスロット。',
    },
  ],
  prosCons: {
    pros: [
      '高RTP (97.06%)',
      '低～中程度のボラティリティで安定したプレイが可能',
      '多彩なボーナスフィーチャー（海賊の攻撃、フリースピン、宝探し）',
      'モバイルデバイスでスムーズにプレイ可能',
      '海賊と宝探しの楽しいテーマ',
    ],
    cons: [
      '一部情報源でリリース日や最大配当倍率に差異あり',
      'ベースゲームのペイテーブルが低いとの意見あり',
      'ボーナスゲームの配当が期待外れになる場合がある',
    ],
  },
  faq: [
    {
      q: '「Treasure Island」のRTP（還元率）はどれくらいですか？',
      a: '「Treasure Island」のRTPは **97.06%** です。一部情報源では97.07%や97.1%と記載されている場合もありますが、CasinoTsu が確認したところ、この数値が最も一般的です。',
    },
    {
      q: '「Treasure Island」はどのくらいの頻度で当たりが出ますか？（ボラティリティについて）',
      a: 'このスロットのボラティリティは **Low to Low-Medium（低～中程度）** とされています。これは、頻繁に小さな当たりが出やすい傾向があることを示唆していますが、大きな配当を得るにはボーナスフィーチャーなどのトリガーが必要になる場合もあります。',
    },
    {
      q: '「Treasure Island」で最大いくらまで勝てますか？',
      a: '最大配当倍率は **x1,785** です。CasinoTsu は、この数値の正確性を確認しております。ただし、情報源によっては x1,844 や、特定の条件下で x400 といった数値が報告されている場合もあります。',
    },
    {
      q: '「Treasure Island」で利用できるベット額の範囲は？',
      a: 'ベット額は **$0.5から$100** まで設定可能です。',
    },
    {
      q: '「Treasure Island」はどのデバイスでプレイできますか？',
      a: '「Treasure Island」は HTML5 技術で作られているため、 **PC、スマートフォン、タブレット** など、ほとんどのデバイスでプレイ可能です。',
    },
  ],
  meta: {
    title: 'Treasure Island／トレジャーアイランド',
    description: 'CasinoTsu 推薦！ Quickspin 社の高RTPスロット「Treasure Island／トレジャーアイランド」が登場！早速 CasinoTsu でチェックしましょう。',
  },
};
