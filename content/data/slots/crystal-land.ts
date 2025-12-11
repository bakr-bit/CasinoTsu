import type { SlotData } from './types';

export const crystal_land: SlotData = {
  slug: 'crystal-land',
  title: 'Crystal Land',
  hero: {
    title: 'Crystal Land',
    subheading: 'クリスタルランド',
    description: 'Playson社がリリースした、フィーチャー満載のスロット「クリスタルランド（Crystal Land）」をご紹介いたします。ボーナスを集めて新レベルに到達し、賞金を獲得していく、やりがいのあるゲームです。',
    score: 2.5,
    scoreMax: 5,
    rtp: '95.2%',
    maxMultiplier: '5,000x',
    provider: 'Playson',
    releaseDate: '2018年1月',
    volatility: '中高～高',
    reels: '7',
    paylines: 'クラスターペイ',
    minBet: '0.10',
    maxBet: '100',
    slotImageSrc: '/slots/crystal-land.jpg',
    highlights: [
      'クラスターペイシステム',
      'レベルシステム',
      'ブロック解除でボーナスラウンドへ',
    ],
    watchouts: [
      '中高～高ボラティリティのため、大きな勝利には運と忍耐が必要',
    ],
  },
  gameInfo: {
    intro: 'Playson/プレイソン社よりリリースされた、シンプルながらもユニークなゲーム性を持つスロット「Crystal Land（クリスタルランド）」をご紹介いたします。\n\nカラフルでシンプルな宝石が特徴的なこのゲームは、スマートフォンで人気のパズルゲーム「キャンディークラッシュ」に似たゲーム性を持っており、多くのプレイヤーに親しみやすいでしょう。CasinoTsuが、この実力派スロットゲームを詳しくご紹介いたします。',
    basicInfo: {
      rtp: '95.2%',
      volatility: '中高～高',
      reels: '7リール×7行',
      paylines: '5つ以上のシンボルが縦横に隣接して揃ったら配当ゲット（クラスターペイシステム）',
      minBet: '0.10ドル',
      maxBet: '100.00ドル',
      provider: 'Playson',
      releaseDate: '2018年1月',
    },
  },
  payoutTable: {
    title: '配当表',
    symbols: [
      {
        name: 'ワイルドシンボル',
        description: 'すべてのシンボルの代わりとなり、配当成立をサポートします。',
        isSpecial: true,
      },
      {
        name: 'ルビーワイルドシンボル',
        description: 'ワイルドシンボルと同様に、あらゆるシンボルの代わりになります。6つ以上のシンボルが揃った際に、そのシンボルがワイルドシンボルに変化することで生成されます。ルビーワイルドシンボルが消滅すると、「爆弾シンボル」に変化します。',
        isSpecial: true,
      },
      {
        name: '爆弾シンボル',
        description: '新しいシンボルが落ちてきても勝利パターンが形成されない場合、爆弾シンボルが爆発し、周囲のシンボルを巻き込んで消滅させます。これにより、新たな勝利のチャンスを生み出します。',
        isSpecial: true,
      },
      {
        name: '宝石',
        payout5: 'x1',
        payout4: 'x0.8',
        payout3: 'x0.5',
      },
      {
        name: '宝石',
        payout5: 'x0.8',
        payout4: 'x0.6',
        payout3: 'x0.4',
      },
      {
        name: '宝石',
        payout5: 'x0.6',
        payout4: 'x0.4',
        payout3: 'x0.3',
      },
      {
        name: '宝石',
        payout5: 'x0.5',
        payout4: 'x0.3',
        payout3: 'x0.2',
      },
      {
        name: '宝石',
        payout5: 'x0.4',
        payout4: 'x0.2',
        payout3: 'x0.1',
      },
      {
        name: '宝石',
        payout5: 'x0.3',
        payout4: 'x0.1',
        payout3: 'x0.05',
      },
    ],
    maxPayout: '500,000枚',
    notes: [
      '$1ベットあたりのペイアウトです。',
    ],
  },
  features: {
    title: 'ゲームの特徴',
    items: [
      {
        name: 'クラスターペイシステム',
        description: '5つ以上の同じシンボルが縦または横に隣接して揃うことで配当が発生するシステム。',
      },
      {
        name: 'カスケードウィン（連鎖）',
        description: '配当が発生して揃ったシンボルは消滅し、新しいシンボルが落ちてくることで、一度のスピンで複数回の勝利が発生する可能性がある。',
      },
      {
        name: 'ブロック解除とボーナスラウンド',
        description: 'フィールドの一部は「ブロック」されており、シンボルを揃えて消すことで解除できる。すべてのブロックを解除すると、ボーナスラウンドへ突入。',
      },
      {
        name: 'ワイルドシンボル',
        description: 'すべてのシンボルの代わりとなり、配当成立をサポートする。',
      },
      {
        name: 'ルビーワイルドシンボル',
        description: 'ワイルドシンボルと同様に機能し、消滅すると爆弾シンボルに変化する。',
      },
      {
        name: '爆弾シンボル',
        description: '配当が形成されない場合に爆発し、周囲のシンボルを消滅させる。',
      },
      {
        name: 'ボーナスラウンド',
        description: 'カラーリングポーションと全爆弾シンボルが登場。宝箱を開けてスターを獲得し、勝利金乗数を増加させる。',
      },
      {
        name: 'レベルシステム',
        description: 'シンボルを消してゲージを満たすとレベルアップ。レベルごとに異なるボーナスフィーチャーがアンロックされる。',
      },
    ],
  },
  faq: [
    {
      q: 'Crystal Landのレベルはいくつまでありますか？',
      a: 'レベルは6まであります。シンボルが消えていく度に、レベルがあがっていきます。レベルアップにより、キャッシュやマルチプライヤーなどのボーナスを獲得できます。',
    },
    {
      q: 'Crystal Landで遊べるカジノはどこですか？',
      a: 'ReSpin、Golden Panda、Betgoat、1win、Miki、WSM Casino、Bitz、Katsuwin、Sushi Casino、Betpanda、Parimatch、Bets.io、Duelbits、Sportsbet.io、Winz、Lucky Block、Flush Casino、Roobet、Casino Sky、Mega Dice、Fresh Casino、Cosmoswin、BC.Game、Stake、K8、OhMySpins、Tedbet、BetRebels、Conquestador、Cloudbet、Livecasino.io、Lucky Bull、Gamdom、Energy Casino、Casino Me、Bons.com、Mystino、Empire777、Pinnacle、Casinoin、WinUnique、BitStarz、Joy Casino、Casino Secret、Bitcasino.io、Casino-X、Casitabi、Eldoah Casinoなど、多くのオンラインカジノでプレイ可能です。CasinoTsuが推薦するカジノで、ぜひお楽しみください。',
    },
  ],
  meta: {
    title: 'Crystal Land',
    description: 'Playson社がリリースした、フィーチャー満載のスロット「クリスタルランド（Crystal Land）」をご紹介いたします。ボーナスを集めて新レベルに到達し、賞金を獲得していく、やりがいのあるゲームです。',
  },
};
