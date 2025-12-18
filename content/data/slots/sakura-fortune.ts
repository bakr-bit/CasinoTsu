import type { SlotData } from './types';

export const sakura_fortune: SlotData = {
  slug: 'sakura-fortune',
  title: 'サクラフォーチューン（Sakura Fortune）スロットレビュー｜最新情報をお届け',
  hero: {
    title: 'サクラフォーチューン（Sakura Fortune）',
    subheading: '美しきヒロインと共に富を掴む、Quickspin社の傑作スロット',
    description: 'Quickspin社が2017年にリリースした「サクラフォーチューン」は、美しいグラフィックと魅力的なフィーチャーで多くのプレイヤーを魅了し続けています。初めて「Achievement Engine」が搭載された記念すべき作品でもあります。',
    score: 4.4,
    scoreMax: 5,
    rtp: '96.58% - 96.61%',
    maxMultiplier: '1,087',
    provider: 'Quickspin',
    releaseDate: '2017年4月',
    volatility: '中〜高',
    reels: '5',
    paylines: '40',
    minBet: '$0.10',
    maxBet: '$200',
    slotImageSrc: '/slots/sakura-fortune.jpg',
  },
  gameInfo: {
    intro: '「サクラフォーチューン（Sakura Fortune）」は、高い評価を得ているプロバイダー Quickspin が、2017年4月に世に送り出したスロットゲームです。このゲームは、美しきヒロイン「サクラ」が、邪悪な力に立ち向かい、富を掴むための壮大な旅を描いています。特筆すべきは、Quickspin社が開発した画期的なシステム「Achievement Engine」が初めて搭載された作品であるという点です。',
    basicInfo: {
      rtp: '96.58% - 96.61%',
      volatility: '中〜高',
      reels: '5',
      paylines: '40',
      minBet: '$0.10',
      maxBet: '$200',
      provider: 'Quickspin',
      releaseDate: '2017年4月',
    },
  },
  payoutTable: {
    title: 'サクラフォーチューン｜シンボルと配当',
    symbols: [
      {
        name: 'プリンセスワイルド',
        description: '2～4列目に停止し、スキャッター以外の全シンボルの代わりとなる。リール全体に拡大する「ナッジ」機能あり。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'スキャッター',
        description: '左端から3つ以上停止でフリースピン突入。ワイルドもスキャッターの代わりになる。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'サクラ',
        description: '高配当シンボル',
        payout5: '10',
        payout4: '4',
        payout3: '2',
      },
      {
        name: '王',
        description: '高配当シンボル',
        payout5: '5',
        payout4: '2',
        payout3: '1',
      },
      {
        name: '王女',
        description: '高配当シンボル',
        payout5: '4',
        payout4: '1.5',
        payout3: '0.8',
      },
      {
        name: '緑の宝石',
        description: '高配当シンボル',
        payout5: '3',
        payout4: '1.2',
        payout3: '0.6',
      },
      {
        name: '青い宝石',
        description: '高配当シンボル',
        payout5: '2.5',
        payout4: '1',
        payout3: '0.5',
      },
      {
        name: 'A',
        description: '低配当シンボル',
        payout5: '2',
        payout4: '0.8',
        payout3: '0.4',
      },
      {
        name: 'K',
        description: '低配当シンボル',
        payout5: '1.5',
        payout4: '0.6',
        payout3: '0.3',
      },
      {
        name: 'Q',
        description: '低配当シンボル',
        payout5: '1',
        payout4: '0.4',
        payout3: '0.2',
      },
      {
        name: 'J',
        description: '低配当シンボル',
        payout5: '0.8',
        payout4: '0.3',
        payout3: '0.1',
      },
    ],
    maxPayout: 'x1,087',
    notes: [
      '配当はベット額$1あたりで表示されています。',
      'ワイルドシンボルはスキャッターシンボルの代わりにもなります。',
      'フリースピン中はワイルドシンボルが出現しやすく、拡大して固定されることがあります。',
    ],
  },
  features: {
    title: 'ゲーム特徴・フィーチャー',
    items: [
      {
        name: 'ナッジ（Nudge）',
        description: 'ワイルドシンボル（サクラ）がリールの一部表示された際に、リール全体に拡大する機能。',
      },
      {
        name: 'リスピン（Respin）',
        description: '拡大したワイルドシンボルが出現した場合、追加で2回のリスピンが付与される。拡大ワイルドは固定される。',
      },
      {
        name: 'フリースピン（Free Spins）',
        description: 'スキャッターシンボル（またはワイルド）が3つ以上停止で突入。ワイルドが出現しやすく、拡大して固定される。追加フリースピンの可能性あり。',
      },
      {
        name: 'Achievement Engine',
        description: 'Quickspin社独自のシステムで、ゲームプレイ中にトークンを獲得し、ボーナス機能と交換可能。',
      },
      {
        name: 'Mystery Nudge Feature',
        description: '予期せぬタイミングでワイルドシンボルが拡大し、配当獲得のチャンスを高める機能。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Sakura Fortune 2',
      provider: 'Quickspin',
      description: '「サクラフォーチューン」の待望の続編。さらに進化したグラフィックとフィーチャーで、新たな体験を提供します。',
    },
    {
      name: 'Moon Princess',
      provider: 'Play\'n GO',
      description: '日本の美少女アニメ風キャラクターが登場する人気スロット。連鎖によるマルチプライヤーが特徴です。',
    },
    {
      name: 'Hanzo\'s Dojo',
      provider: 'Yggdrasil Gaming',
      description: '侍をテーマにしたスロット。ミニゲームやフリースピンで勝利を目指します。',
    },
  ],
  prosCons: {
    pros: [
      '美しい和風のデザインと高品質なグラフィック',
      'ワイルドシンボルによるナッジ、リスピン、フリースピン機能が魅力的',
      'フリースピン中のワイルド固定による高配当の可能性',
      'Quickspin社の革新的な「Achievement Engine」搭載',
      'モバイルデバイスでの快適なプレイに対応',
    ],
    cons: [
      '最大配当倍率が他の高ボラティリティスロットと比較して控えめ',
      'ボラティリティが中〜高のため、初心者にはやや荒い変動を感じる可能性も',
    ],
  },
  faq: [
    {
      q: 'サクラフォーチューンのRTP（還元率）はいくつですか？',
      a: 'RTPは96.58%〜96.61%です。ただし、カジノによって若干変動する場合があります。',
    },
    {
      q: 'サクラフォーチューンはどこでプレイできますか？',
      a: 'Casitabi、Vulkan Vegas、Mystino、Eldoah Casino、InterCasino、Joy Casinoなどのオンラインカジノでプレイ可能です。CasinoTsuでは、これらのカジノで利用できる限定ボーナスも紹介しています。',
    },
    {
      q: 'サクラフォーチューンの最大配当倍率は？',
      a: '最大配当倍率は約x1,087です。',
    },
    {
      q: 'フリースピンはどのように獲得できますか？',
      a: '左端のリールから順に、スキャッターシンボル（またはワイルドシンボル）が3つ以上出現することで獲得できます。',
    },
    {
      q: 'ワイルドシンボルはどのような効果がありますか？',
      a: 'プリンセスワイルドは、スキャッター以外のシンボルの代わりとなり、リール全体に拡大する「ナッジ」機能があります。また、フリースピン中は拡大したワイルドが固定されます。',
    },
  ],
  categoryTags: {
    mechanics: ['expanding-wilds'],
    volatilityLevel: 'high',
    themes: ['japanese', 'asian'],
    features: ['free-spins', 'multiplier', 're-spins'],
    isHighRtp: true,
  },
  meta: {
    title: 'サクラフォーチューン（Sakura Fortune）スロットレビュー｜最新情報をお届け',
    description: 'Quickspin社が2017年にリリースした「サクラフォーチューン」は、美しいグラフィックと魅力的なフィーチャーで多くのプレイヤーを魅了し続けています。初めて「Achievement Engine」が搭載された記念すべき作品でもあります。',
  },
};
