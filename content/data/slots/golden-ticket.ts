import type { SlotData } from './types';

export const golden_ticket: SlotData = {
  slug: 'golden-ticket',
  title: 'Golden Ticket / ゴールデンチケット・ゲームレビュー',
  hero: {
    title: 'Golden Ticket',
    subheading: 'ゴールデンチケット',
    description: 'プレイヤーを飽きさせない様々な工夫が凝らされています。これは、[Play’n GO](https://casinotsu.com/providers)社が贈る、隠れた名作スロットです！ ✨',
    score: 3.3,
    scoreMax: 5,
    rtp: '96%',
    maxMultiplier: 'x1,000',
    provider: 'Play\'n GO',
    releaseDate: '2014年10月27日',
    volatility: 'ハイ',
    reels: '5x5 グリッド',
    paylines: 'クラスターペイ',
    minBet: '$0.2',
    maxBet: '$40',
    slotImageSrc: '/slots/golden-ticket.jpg',
    highlights: [
      'ユニークなゲームメカニクス',
      'レトロなサーカスをテーマにしたグラフィック',
      '戦略的な要素',
      'クラスターペイシステム',
      '連鎖ウィンとマルチプライヤー',
      'スリリングなボーナスゲーム',
    ],
    watchouts: [
      '高ボラティリティのため、配当の発生頻度が低い場合がある',
      'RTPはカジノによって変動する可能性があるため、プレイ前に確認が必要',
    ],
  },
  gameInfo: {
    intro: 'ゴールデンチケットは、定評のあるゲームプロバイダー[Play’n GO](https://casinotsu.com/providers)が開発した、ユニークなスロットゲームです。伝統的なビデオスロットとは一線を画す、独創的なゲームメカニクスと、レトロなサーカスをテーマにした魅力的なグラフィックで、多くのプレイヤーから支持を得ています。\n\nこのゲームは、単にリールを回転させるだけでなく、戦略的な要素も盛り込まれており、プレイヤーを飽きさせません。落ちものパズルゲームのような感覚でプレイできるため、スロット初心者の方から経験豊富なプレイヤーの方まで、幅広くお楽しみいただけることでしょう。',
    basicInfo: {
      rtp: '94.74% ～ 96.73%',
      volatility: 'ハイ',
      reels: '5x5 グリッド',
      paylines: 'クラスターペイ',
      minBet: '$0.2',
      maxBet: '$40',
      provider: 'Play’n GO',
      releaseDate: '2014年10月27日',
    },
  },
  payoutTable: {
    title: '配当表',
    symbols: [
      {
        name: 'ワイルドシンボル',
        description: '全てのシンボルの代わりとなり、配当成立を補助します。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'ピエロ',
        description: '最高配当シンボル。',
        payout5: '1,000x',
        payout4: '400x',
        payout3: '100x',
      },
      {
        name: '力持ち',
        description: '高配当シンボル。',
        payout5: '500x',
        payout4: '200x',
        payout3: '80x',
      },
      {
        name: 'ジャグラー',
        description: '高配当シンボル。',
        payout5: '300x',
        payout4: '150x',
        payout3: '60x',
      },
      {
        name: '手投げ帽子',
        description: '中配当シンボル。',
        payout5: '200x',
        payout4: '100x',
        payout3: '40x',
      },
      {
        name: 'ヨーヨー',
        description: '中配当シンボル。',
        payout5: '150x',
        payout4: '80x',
        payout3: '30x',
      },
      {
        name: 'ボール',
        description: '低配当シンボル。',
        payout5: '100x',
        payout4: '60x',
        payout3: '20x',
      },
      {
        name: 'トランプ（スペード）',
        description: '低配当シンボル。',
        payout5: '80x',
        payout4: '50x',
        payout3: '15x',
      },
      {
        name: 'トランプ（ハート）',
        description: '低配当シンボル。',
        payout5: '70x',
        payout4: '40x',
        payout3: '10x',
      },
      {
        name: 'トランプ（ダイヤ）',
        description: '低配当シンボル。',
        payout5: '60x',
        payout4: '30x',
        payout3: '8x',
      },
      {
        name: 'トランプ（クラブ）',
        description: '低配当シンボル。',
        payout5: '50x',
        payout4: '20x',
        payout3: '5x',
      },
    ],
    maxPayout: '最大 20,578倍',
    notes: [
      '配当はクラスターペイシステムに基づき、縦横で3つ以上の同シンボルが隣接すると成立します。',
      'ワイルドシンボルは、他の全てのシンボルの代わりとなります。',
      '連鎖ウィンが発生すると、配当シンボルが消滅し、新しいシンボルが落下します。連鎖が続く限り、マルチプライヤーが上昇します。',
      'グリッド全体をクリアすると、ボーナスゲームまたは追加ラウンドに進むチャンスがあります。',
    ],
  },
  features: {
    title: 'ゲームの特徴',
    items: [
      {
        name: 'クラスターペイシステム',
        description: '従来のペイラインではなく、縦横に3つ以上の同シンボルが隣接することで配当が発生します。これにより、より多くの勝利のチャンスが生まれます。',
      },
      {
        name: '連鎖ウィンとマルチプライヤー',
        description: '勝利が発生すると、配当シンボルが消え、新しいシンボルが落下して連鎖が発生します。連鎖が続くたびにマルチプライヤーが上昇し、配当がさらに増加します。',
      },
      {
        name: 'ワイルドシンボル',
        description: 'ワイルドシンボルは、他のシンボルの代わりとなり、配当成立を助けます。',
      },
      {
        name: 'シューティングギャラリー・ボーナスゲーム',
        description: '特定の条件を満たすと、シューティングギャラリーのボーナスゲームが発動します。ここでは、的を狙ってスピンを回し、追加の賞金を獲得するチャンスがあります。',
      },
      {
        name: 'グリッドクリアボーナス',
        description: 'グリッド全体をシンボルで埋め尽くすと、特別なボーナスや追加ラウンドを獲得できます。',
      },
      {
        name: '高ボラティリティ',
        description: '高ボラティリティのため、配当の発生頻度は低い傾向にありますが、一度の勝利で高額配当が期待できます。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Reactoonz',
      href: '/slots/reactoonz-2',
      provider: 'Play\'n GO',
      description: 'Play\'n GOの人気クラスターペイ機種。エイリアンたちがグリッド上で大暴れ！',
    },
    {
      name: 'Moon Princess',
      href: '/slots/moon-princess',
      provider: 'Play\'n GO',
      description: '可愛いプリンセスたちが特徴の落ちもの系スロット。連鎖とマルチプライヤーで高配当を狙おう！',
    },
  ],
  prosCons: {
    pros: [
      'ユニークで革新的なゲームプレイ',
      '魅力的なレトロなサーカス・テーマ',
      '連鎖ウィンと上昇するマルチプライヤーによる高揚感',
      '戦略的な要素とボーナスゲーム',
      'Play\'n GOによる高品質なグラフィックとサウンド',
    ],
    cons: [
      '高ボラティリティのため、頻繁な配当は期待できない',
      'RTPがカジノによって変動する可能性がある',
      '一部のプレイヤーには複雑に感じられる可能性がある',
    ],
  },
  faq: [
    {
      q: 'Golden TicketのRTPはどのくらいですか？',
      a: 'Golden TicketのRTPは、提供するカジノによって異なりますが、一般的には94.74%から96.73%の範囲です。プレイ前にご利用のカジノでご確認ください。',
    },
    {
      q: 'Golden Ticketはどのようなボラティリティですか？',
      a: 'Golden Ticketはハイボラティリティのスロットです。これは、配当の発生頻度は低いものの、一度の勝利で高額配当が期待できることを意味します。',
    },
    {
      q: 'Golden Ticketで最大いくらまで勝てますか？',
      a: '理論上の最大配当倍率は20,578倍ですが、これはグリッド全体をクリアした場合のものです。必ずしもこの倍率での配当を保証するものではありません。',
    },
    {
      q: 'Golden Ticketはどこでプレイできますか？',
      a: 'Golden Ticketは、多くのオンラインカジノでプレイ可能です。CasinoTsuでは、おすすめのカジノリストを提供しています。',
    },
    {
      q: 'Golden Ticketにはフリースピンはありますか？',
      a: 'Golden Ticketには、直接的なフリースピン機能はありませんが、ボーナスゲームや追加ラウンドを獲得するチャンスがあります。',
    },
  ],
  categoryTags: {
    mechanics: ['cluster'],
    features: ['free-spins', 'multiplier'],
  },
  meta: {
    title: 'Golden Ticket / ゴールデンチケット・ゲームレビュー',
    description: 'プレイヤーを飽きさせない様々な工夫が凝らされています。これは、[Play’n GO](https://casinotsu.com/providers)社が贈る、隠れた名作スロットです！ ✨',
  },
};
