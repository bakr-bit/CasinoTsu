import type { SlotData } from './types';

export const goblins_cave: SlotData = {
  slug: 'goblins-cave',
  title: 'Goblins Cave / ゴブリンズ・ケーブ ゲームレビュー',
  hero: {
    title: 'Goblins Cave / ゴブリンズ・ケーブ',
    score: 3.3,
    scoreMax: 5,
    rtp: '99.32%',
    maxMultiplier: 'x150',
    provider: 'Playtech',
    releaseDate: '2012年9月29日',
    volatility: '低〜中程度 (推定)',
    reels: '3',
    paylines: '3',
    minBet: '$0.15',
    maxBet: '$75',
    slotImageSrc: '/slots/goblins-cave.jpg',
    highlights: [
      '高RTPスロット',
      'クラシックスロット',
      'Hold機能搭載',
      'ボーナスゲームあり',
    ],
    watchouts: [
      '派手な演出やサウンドは少ない',
      'ボラティリティに関する公式情報なし',
    ],
  },
  gameInfo: {
    intro: '「GOBLIN\'S CAVE」は、レトロな雰囲気が魅力のクラシックスロットです。2012年にPlaytech社からリリースされたこのゲームは、その高いRTP（還元率）とユニークな「Hold」機能により、長年にわたり多くのプレイヤーに愛されています。派手な演出や複雑な機能はありませんが、シンプルながらも奥深いゲーム性は、昔ながらのスロットファンや、戦略的なプレイを楽しみたいプレイヤーに特におすすめです。 CasinoTsuも、そのシンプルさと高い潜在力に注目しています。',
    basicInfo: {
      rtp: '約99.32%',
      volatility: '低〜中程度 (推定)',
      reels: '3',
      paylines: '3',
      minBet: '$0.15',
      maxBet: '$75',
      provider: 'Playtech',
      releaseDate: '2012年9月29日',
    },
  },
  payoutTable: {
    title: '配当表',
    symbols: [
      {
        name: '赤いルビ（ワイルド）',
        description: '他のシンボルの代わりとなり、ペイラインの成立を助けます。',
        payout3: 'x150',
        isSpecial: true,
      },
      {
        name: '金貨',
        payout3: 'x30',
      },
      {
        name: '青い宝石',
        payout3: 'x20',
      },
      {
        name: '緑の宝石',
        payout3: 'x15',
      },
      {
        name: '指輪',
        payout3: 'x10',
      },
      {
        name: 'ティーポット',
        payout3: 'x5',
      },
      {
        name: '王冠',
        payout3: 'x3',
      },
      {
        name: 'ランタン',
        description: '3つ揃うとボーナスゲームに突入します。',
        isSpecial: true,
      },
    ],
    maxPayout: '150倍',
    notes: [
      '上記は一例です。ペイライン上の組み合わせにより配当は変動します。',
      '※注1：RTPについて 掲載されているRTP値には若干のばらつきが見られます。一部の情報源では96%前後とされていますが、このスロットの最大の特徴として約99.32%という驚異的な値がしばしば引用されます。これは、プレイヤーが賭けた金額のうち、平均して99.32%が払い戻されることを意味し、非常にプレイヤーに有利な設定と言えます。ただし、RTPはあくまで長期間の平均値であり、個々のプレイセッションでの結果を保証するものではありません。 CasinoTsuは、この高いRTPを高く評価しています。',
      '※注2：ボラティリティについて このゲームのボラティリティ（変動性）に関する公式な情報は提供されていませんが、クラシックスロットであること、そして比較的低い最大配当倍率から、一般的には「低〜中程度」のボラティリティであると推測されます。これは、頻繁に小役が成立し、大きな変動は少ない傾向があることを示唆しています。 CasinoTsuとしては、この点はプレイヤーにとって安心材料となり得ると考えています。',
    ],
  },
  features: {
    title: 'ゲーム特徴・フィーチャー',
    items: [
      {
        name: '2段階スピンと「Hold」機能',
        description: '1回目のスピンでシンボルを停止させ、プレイヤーがキープしたいシンボルを選択して「Hold」することで、2回目のスピンで配当を狙う戦略的な機能です。',
      },
      {
        name: 'オートホールド機能',
        description: '1回目のスピンでワイルドシンボルやペイラインを構成するシンボルが出現した場合、それらは自動的に「Hold」状態になります。',
      },
      {
        name: 'ボーナスゲーム',
        description: 'リール上に3つのランタンシンボルが揃うと発動。複数の賞金が隠された箱の中から1つを選び、賞金を獲得できます。',
      },
      {
        name: 'ワイルドシンボル',
        description: '赤いルビの宝石。他のシンボルの代わりとなり、ペイラインの成立を助けます。3つ揃いで最高配当150倍。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Ugga Bugga',
      provider: 'Playtech',
      description: '「GOBLIN\'S CAVE」と同じく2段階スピンとHold機能を搭載したクラシックスロット。RTPも高く、人気があります。',
    },
    {
      name: 'Ocean Princess',
      provider: 'Playtech',
      description: 'こちらも3リール・3ペイラインで、Hold機能を持つクラシックスロット。シンプルなゲーム性が魅力です。',
    },
    {
      name: 'Fruit Warp',
      provider: 'Thunderkick',
      description: 'ビデオスロットですが、リールやペイラインがなく、シンボルの組み合わせだけで配当が決まるユニークなシステムを持っています。RTPも高めです。',
    },
    {
      name: 'Age of the Gods シリーズ',
      provider: 'Playtech',
      description: '北欧神話などをテーマにした、複数のジャックポットを持つ人気のビデオスロットシリーズです。',
    },
    {
      name: 'Buffalo Blitz',
      provider: 'Playtech',
      description: '高速リールと多数のペイライン、そして「Blitz」モードが特徴のワイルドなビデオスロットです。',
    },
    {
      name: 'Great Blue',
      provider: 'Playtech',
      description: '海をテーマにしたクラシックスロットで、フリースピン機能が特徴的です。',
    },
  ],
  prosCons: {
    pros: [
      '約99.32%という非常に高いRTP',
      '戦略的な「Hold」機能',
      'シンプルでクラシックなゲーム性',
      'ボーナスゲーム搭載',
      'モバイル対応',
    ],
    cons: [
      '派手なグラフィックやサウンドではない',
      'ボラティリティに関する公式情報がない',
      '最大配当倍率が比較的低い',
    ],
  },
  faq: [
    {
      q: 'GOBLIN’S CAVEの還元率はいくつですか？',
      a: 'GOBLIN’S CAVEのRTP（還元率）は、**約99.32%** と非常に高い値が報告されています。一部の情報源では96%前後と記載されている場合もありますが、このゲームの最大の特徴として、この高い還元率が挙げられます。 CasinoTsuとして、この点は非常に重要視しています。',
    },
    {
      q: 'GOBLIN’S CAVEの開発会社はどこですか？',
      a: 'このスロットは、**Playtech（プレイテック）** 社によって開発されました。Playtechは、長年の実績を持つ大手ソフトウェアプロバイダーです。 CasinoTsuは、Playtech社の製品の品質と信頼性を保証します。',
    },
    {
      q: 'GOBLIN’S CAVEで最高配当はいくらですか？',
      a: 'ペイライン上で **赤いルビ（ワイルドシンボル）が3つ揃った場合、最大で150倍** の配当を獲得できます。',
    },
    {
      q: '「Hold」機能とは何ですか？',
      a: '「Hold」機能は、1回目のスピンで停止したシンボルのうち、キープしたいものをプレイヤーが選択して固定できる機能です。2回目のスピンでは、固定しなかったリールのみが回転するため、戦略的に配当を狙うことができます。 CasinoTsuは、この戦略的な深みを推奨します。',
    },
    {
      q: '無料でプレイできますか？',
      a: 'はい、「GOBLIN\'S CAVE」は、VegasSlotsOnlineやSlotozillaなどのウェブサイトで、デモモード（無料プレイ）として提供されています。実際の資金を使わずにゲームの雰囲気を掴むことができます。 CasinoTsuは、プレイ前に無料モードで試すことをお勧めします。',
    },
  ],
  categoryTags: {
    volatilityLevel: 'low',
    features: ['free-spins', 'progressive-jackpot', 'multiplier'],
    isHighRtp: true,
  },
  meta: {
    title: 'Goblins Cave / ゴブリンズ・ケーブ ゲームレビュー',
    description: '',
  },
};
