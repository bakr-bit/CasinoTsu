import type { SlotData } from './types';

export const sweet_bonanza: SlotData = {
  slug: 'sweet-bonanza',
  title: 'Sweet Bonanza／スウィート・ボナンザ｜オンラインスロット攻略',
  hero: {
    title: 'Sweet Bonanza／スウィート・ボナンザ',
    subheading: 'Pragmatic Play',
    description: 'キャンディーとフルーツがテーマの落ち物（クラスターペイ）型ビデオスロット。最大21,175倍の配当倍率と強力なマルチプライヤー機能で爆発的な勝利の可能性を秘めています。',
    score: 4.3,
    scoreMax: 5,
    rtp: '96.49%',
    maxMultiplier: 'x21,175',
    provider: 'Pragmatic Play',
    releaseDate: '2019年6月25日',
    volatility: '中～高',
    reels: '6',
    paylines: 'クラスターペイ',
    minBet: '$0.20',
    maxBet: '$100',
    slotImageSrc: '/slots/sweet-bonanza.png',
    highlights: [
      'クラスターペイシステム',
      '強力なマルチプライヤー機能',
      'フリースピン購入機能',
      'アンテベット機能',
    ],
    watchouts: [
      'ボラティリティが高めなので、資金管理に注意が必要です。',
    ],
  },
  gameInfo: {
    intro: 'Pragmatic Play社が開発したスウィート・ボナンザは、その魅力的なゲーム性から多くのカジノで人気を集めています。CasinoTsu では、正確な情報をお伝えするため、このスロットの基本的な情報を詳細にまとめました。',
    basicInfo: {
      rtp: '96.48% (通常時) / 96.51% (アンテベット有効時)',
      volatility: '中～高（High）',
      reels: '6リール',
      paylines: 'クラスターペイ（キャッシュ・アラウンド）方式。画面上のどこかに同じシンボルが8個以上出現すると配当成立。',
      minBet: '$0.20 / €0.20',
      maxBet: '$100 / €125',
      provider: 'Pragmatic Play',
      releaseDate: '2019年6月25日',
    },
  },
  payoutTable: {
    title: 'スウィート・ボナンザのシンボルとペイアウト',
    symbols: [
      {
        name: '赤いハートのキャンディー',
        description: '高配当シンボル',
        payout5: '12個以上でベット額の40倍',
        payout4: '-',
        payout3: '-',
      },
      {
        name: '紫の四角キャンディー',
        description: '高配当シンボル',
        payout5: '12個以上でベット額の25倍',
        payout4: '-',
        payout3: '-',
      },
      {
        name: '緑の六角形キャンディー',
        description: '高配当シンボル',
        payout5: '12個以上でベット額の20倍',
        payout4: '-',
        payout3: '-',
      },
      {
        name: '青い丸キャンディー',
        description: '高配当シンボル',
        payout5: '12個以上でベット額の15倍',
        payout4: '-',
        payout3: '-',
      },
      {
        name: 'リンゴ',
        description: '低配当シンボル',
        payout5: '12個以上でベット額の10倍',
        payout4: '-',
        payout3: '-',
      },
      {
        name: 'プラム',
        description: '低配当シンボル',
        payout5: '12個以上でベット額の8倍',
        payout4: '-',
        payout3: '-',
      },
      {
        name: 'スイカ',
        description: '低配当シンボル',
        payout5: '12個以上でベット額の5倍',
        payout4: '-',
        payout3: '-',
      },
      {
        name: 'バナナ',
        description: '低配当シンボル',
        payout5: '12個以上でベット額の2倍',
        payout4: '-',
        payout3: '-',
      },
      {
        name: 'ペロペロキャンディー',
        description: 'スキャッターシンボル',
        payout5: '4つ以上で10回のフリースピン獲得',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'マルチプライヤーシンボル（チョコボール風）',
        description: 'フリースピンラウンド中のみ出現。2倍〜100倍（または1000倍）の倍率を適用。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
    ],
    maxPayout: 'ベット額の21,175倍',
    notes: [
      'ワイルドシンボルとジャックポットシンボルはありません。',
      'クラスターペイシステムのため、ペイラインはありません。',
    ],
  },
  features: {
    title: 'スウィート・ボナンザのゲームフィーチャー',
    items: [
      {
        name: 'フリースピン',
        description: 'スキャッターシンボル（ペロペロキャンディー）が4つ以上出現すると10回のフリースピンを獲得。フリースピン中にスキャッターが3つ以上出現すると追加スピン獲得可能。',
      },
      {
        name: 'マルチプライヤー',
        description: 'フリースピンラウンド中にマルチプライヤーシンボル（ボム）が出現し、勝利時に倍率が適用される。倍率は2倍から最大100倍（または1000倍）。',
      },
      {
        name: '機能倍増チャンス（アンテベット機能）',
        description: 'ベット額が25%増加する代わりに、フリースピンの出現確率が2倍になる。RTPもわずかに上昇。',
      },
      {
        name: 'フリースピン購入機能',
        description: 'ベット額の100倍を支払うことで、直接フリースピンラウンドに突入できる。',
      },
      {
        name: 'タンブル（落下）機能',
        description: '配当成立後、勝利シンボルが消滅し、新しいシンボルが落下してくる。連続して配当が発生する可能性がある。',
      },
      {
        name: 'クラスターペイ',
        description: 'ペイラインがなく、画面上のどこかに同じシンボルが8個以上出現すると配当成立。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Bonanza',
      href: '/slots/bonanza',
      provider: 'Big Time Gaming',
      description: 'メガウェイズ™️システム搭載の元祖人気スロット。',
    },
    {
      name: 'Big Bass Bonanza',
      href: '/slots/big-bass-bonanza',
      provider: 'Reel Kingdom',
      description: '釣りテーマの人気シリーズ。',
    },
    {
      name: 'Halloween Bonanza',
      href: '/slots/halloween-bonanza',
      provider: 'BGaming',
      description: '季節感あふれるスロット。',
    },
  ],
  prosCons: {
    pros: [
      '最大21,175倍という高い配当倍率',
      'クラスターペイシステムとタンブル機能による連続勝利の可能性',
      '強力なマルチプライヤー機能（ボム）',
      'フリースピン購入機能とアンテベット機能による戦略の幅',
      'ポップでカラフルな魅力的なグラフィックとサウンド',
    ],
    cons: [
      'ボラティリティが高いため、資金管理に注意が必要',
      'フリースピンの自力出現確率が低い場合がある',
    ],
  },
  faq: [
    {
      q: 'スウィート・ボナンザのマルチプライヤーシンボルはベースゲームでも獲得できますか？',
      a: 'マルチプライヤーシンボル（ボム）は、フリースピンラウンド中のみに出現する特別なフィーチャーです。ベースゲーム中には出現しません。',
    },
    {
      q: 'フリースピン中にスキャッターを獲得したら、追加スピンはもらえますか？',
      a: 'はい、フリースピン中にスキャッターシンボル（ペロペロキャンディー）が3つ以上出現すると、追加で5回のフリースピンを獲得できます。これは、ゲームをより長く楽しむための重要な要素です。',
    },
  ],
  meta: {
    title: 'Sweet Bonanza／スウィート・ボナンザ｜オンラインスロット攻略',
    description: 'キャンディーとフルーツがテーマの落ち物（クラスターペイ）型ビデオスロット。最大21,175倍の配当倍率と強力なマルチプライヤー機能で爆発的な勝利の可能性を秘めています。',
  },
};
