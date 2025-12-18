import type { SlotData } from './types';

export const starburst: SlotData = {
  slug: 'starburst',
  title: 'スターバースト（Starburst）世界で一番人気のスロットレビュー',
  hero: {
    title: 'スターバースト（Starburst）',
    subheading: '世界で一番人気のスロットレビュー',
    description: 'スターバーストは、NETENT（ネットエント）社が開発した、世界中で絶大な人気を誇るオンラインスロットゲームです。そのシンプルながらも洗練されたゲーム性、美しいグラフィック、そして宇宙をテーマにした魅力的な世界観で、多くのプレイヤーを魅了し続けています。フリースピンや複雑なボーナスゲームは搭載されていませんが、その分、初心者からベテランまで誰でも簡単に楽しむことができるのが特徴です。リール全体を覆うワイルドシンボルからの連鎖的な配当獲得を目指す、王道とも言えるスロット体験を提供します。 CasinoTsu 推薦！',
    score: 4.7,
    scoreMax: 5,
    rtp: '96.1%',
    maxMultiplier: 'x500',
    provider: 'NETENT',
    releaseDate: '2013年11月12日',
    volatility: 'Low',
    reels: '5',
    paylines: '10 (左右両方向)',
    minBet: '$0.10',
    maxBet: '$100',
    slotImageSrc: '/slots/starburst.jpg',
    highlights: [
      '左右どちらからでも配当が成立する「両方向ペイライン」を採用。',
      '中央3リール（2, 3, 4）に出現し、リール全体に拡張するワイルドシンボル。',
      'ワイルド出現時に最大3回連続のリスピンが発生。',
    ],
    watchouts: [
      'フリースピンや複雑なボーナスゲームは搭載されていない。',
      '低ボラティリティのため、一撃の爆発力は限定的。',
    ],
  },
  gameInfo: {
    intro: 'スターバーストは、2013年のリリース以来、オンラインカジノの世界で「最も人気のあるスロットの一つ」として不動の地位を築いています。その最大の魅力は、何といっても**シンプルながらも中毒性の高いゲーム性**にあります。複雑なボーナスラウンドやフリースピンがない代わりに、出現するワイルドシンボルがゲームの鍵を握ります。 CasinoTsu も、そのシンプルさの中に隠された奥深さを高く評価しております。',
    basicInfo: {
      rtp: '96.1%',
      volatility: 'Low',
      reels: '5',
      paylines: '10 (左右両方向)',
      minBet: '$0.10',
      maxBet: '$100',
      provider: 'NETENT',
      releaseDate: '2013年11月12日',
    },
  },
  payoutTable: {
    title: 'スターバーストのシンボルとペイライン',
    symbols: [
      {
        name: 'BAR',
        payout5: 'x250',
        payout4: 'x100',
        payout3: 'x50',
      },
      {
        name: '7',
        payout5: 'x120',
        payout4: 'x50',
        payout3: 'x30',
      },
      {
        name: 'ゴールド・スター',
        payout5: 'x60',
        payout4: 'x25',
        payout3: 'x15',
      },
      {
        name: 'パープル・スター',
        payout5: 'x50',
        payout4: 'x20',
        payout3: 'x10',
      },
      {
        name: 'ブルー・スター',
        payout5: 'x40',
        payout4: 'x15',
        payout3: 'x8',
      },
      {
        name: 'レッド・スター',
        payout5: 'x30',
        payout4: 'x12',
        payout3: 'x7',
      },
      {
        name: 'グリーン・スター',
        payout5: 'x25',
        payout4: 'x10',
        payout3: 'x5',
      },
    ],
    maxPayout: 'ベット額の500倍',
    notes: [
      '上記はベット額に対する倍率です。実際の配当は、ベット額とコインバリューによって変動します。',
      'ワイルドシンボルは配当シンボルではありませんが、他のシンボルの代わりとなり、配当成立を助けます。',
    ],
  },
  features: {
    title: 'ゲームの特徴・フィーチャー：スターバーストワイルドとリスピン',
    items: [
      {
        name: 'ワイルドシンボル',
        description: 'リール2、3、4の中央3つのリールにのみ出現します。出現すると、そのリール全体に拡張（スタックワイルド）し、全てのシンボルの代わりとなります。',
      },
      {
        name: 'リスピン機能',
        description: 'ワイルドが出現すると、そのワイルドを固定したまま1回のリスピンが発生します。最大3回連続のリスピンが可能です。',
      },
      {
        name: '両方向ペイライン',
        description: '左右どちらからでも配当が成立するため、実質20ライン分のチャンスがあります。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Gemix',
      provider: 'Play\'n GO',
      description: '宝石がテーマのクラスターペイ型のスロット。',
    },
    {
      name: 'Crystal Rift',
      provider: 'Rabcat',
      description: 'クリスタルがテーマの落下式スロット。',
    },
    {
      name: 'Space Invaders',
      provider: 'Playtech',
      description: 'レトロな宇宙シューティングゲームがモチーフのスロット。',
    },
    {
      name: 'Twin Spin',
      provider: 'NetEnt',
      description: 'リンクスピン機能が特徴のクラシックスロット。',
    },
    {
      name: 'Aloha! Cluster Pays',
      provider: 'NetEnt',
      description: 'クラスターペイ方式を採用したハワイアンテーマのスロット。',
    },
    {
      name: 'Book of Dead',
      provider: 'Play\'n GO',
      description: 'エジプト冒険テーマの、ボーナス機能が特徴的な人気スロット。',
    },
  ],
  prosCons: {
    pros: [
      'シンプルで分かりやすいゲーム性',
      '美しいグラフィックとサウンド',
      '左右両方向からのペイライン成立',
      'ワイルドシンボルによるリスピン機能',
      '低ボラティリティで安定したプレイ',
      '初心者から上級者まで楽しめる',
      'モバイル対応でいつでもどこでもプレイ可能',
    ],
    cons: [
      'フリースピンやボーナスゲームがない',
      '最大配当倍率が比較的低い',
      '人によっては単調に感じる可能性がある',
    ],
  },
  categoryTags: {
    mechanics: ['cluster'],
    volatilityLevel: 'low',
    features: ['free-spins', 'multiplier', 'bonus-round', 're-spins'],
  },
  meta: {
    title: 'スターバースト（Starburst）世界で一番人気のスロットレビュー',
    description: 'スターバーストは、NETENT（ネットエント）社が開発した、世界中で絶大な人気を誇るオンラインスロットゲームです。そのシンプルながらも洗練されたゲーム性、美しいグラフィック、そして宇宙をテーマにした魅力的な世界観で、多くのプレイヤーを魅了し続けています。フリースピンや複雑なボーナスゲームは搭載されていませんが、その分、初心者からベテランまで誰でも簡単に楽しむことができるのが特徴です。リール全体を覆うワイルドシンボルからの連鎖的な配当獲得を目指す、王道とも言えるスロット体験を提供します。 CasinoTsu 推薦！',
  },
};
