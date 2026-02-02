// Editorial content for homepage article
// Target keyword: "オンラインカジノ おすすめ 2026"

export const authorInfo = {
  name: 'CasinoTsu編集部',
  role: 'オンラインカジノ専門家',
  bio: '8年以上のiGaming業界経験を持つ独立した分析チーム。ランキングに掲載する前に、各オペレーターを実際にテストしています。',
  lastUpdated: '2026年1月27日',
  updateCadence: '毎月更新（ボーナス・決済）、四半期更新（ライセンス・UX）',
};

export const introContent = {
  heading: 'オンラインカジノ完全ガイド：ゲーム＆ボーナス 2026',
  paragraphs: [
    '50以上のオンラインカジノを実際にテストし、ライセンス、ボーナス、決済方法、ゲーム数、サポートを基準にトップ20を厳選しました。',
    'ランキングは毎月更新され、商業パートナーシップによって支援されています。安全基準を満たすオペレーターのみを推奨しています。',
  ],
};

export const tocItems = [
  { id: 'top-casinos', label: 'トップ20' },
  { id: 'reviews', label: 'レビュー' },
  { id: 'categories', label: 'カテゴリー' },
  { id: 'methodology', label: '評価基準' },
  { id: 'bonuses', label: 'ボーナス' },
  { id: 'payments', label: '決済方法' },
  { id: 'games', label: 'ゲーム' },
  { id: 'providers', label: 'プロバイダー' },
  { id: 'mobile', label: 'モバイル' },
  { id: 'pros-cons', label: 'メリット・デメリット' },
  { id: 'safety', label: '安全性' },
  { id: 'faq', label: 'よくある質問' },
];

export const categoryPicks = [
  {
    id: 'fast-withdrawals',
    title: '出金が早い',
    description: '最速の出金を誇るカジノ（仮想通貨即時、電子決済24時間）',
    casinoSlugs: ['stake', 'bc-game', 'bitcasino-io'],
  },
  {
    id: 'live-casino',
    title: 'ライブカジノ',
    description: 'Evolution、Pragmatic Playなど充実したライブテーブル',
    casinoSlugs: ['eldoah', 'konibet', 'vera-john'],
  },
  {
    id: 'crypto-casino',
    title: '仮想通貨対応',
    description: 'BTC、ETH、USDT対応の匿名性の高いカジノ',
    casinoSlugs: ['stake', 'bc-game', 'bitcasino-io'],
  },
  {
    id: 'low-wagering',
    title: '低賭け条件',
    description: 'ボーナスを現金化しやすい低い賭け条件のカジノ',
    casinoSlugs: ['casino-secret', 'konibet', 'bons'],
  },
  {
    id: 'mobile',
    title: 'モバイル対応',
    description: '最適化されたアプリとモバイルサイト',
    casinoSlugs: ['vera-john', 'casitabi', 'mystino'],
  },
];

export const bonusDetails = [
  {
    slug: 'welcome-bonus',
    title: 'ウェルカムボーナス',
    content:
      'ウェルカムボーナスは登録・初回入金時に受け取れる最初のオファーです。通常、入金額の100%〜500%がボーナスとして追加され、フリースピンも付与されます。例えば100%最大5万円のボーナスなら、1万円入金で2万円でプレイ可能。賭け条件はx25〜x45が一般的で、x35のボーナス1万円なら35万円のベットが必要です。',
  },
  {
    slug: 'no-deposit',
    title: '入金不要ボーナス',
    content:
      '入金不要ボーナスは、入金なしでカジノを試せるオファーです。アカウント作成だけで2,000〜10,000円、または50〜300回のフリースピンがもらえます。賭け条件は高め（x40〜x60）で最大出金額に制限がありますが、リスクなしでカジノの品質を確認できます。',
  },
  {
    slug: 'free-spins',
    title: 'フリースピン',
    content:
      'フリースピンは対象スロットで無料で回せるボーナスです。ウェルカムボーナスの一部として、または定期プロモーションで獲得できます。フリースピンからの勝利金には通常x20〜x40の賭け条件があり、特定のスロットに限定されることもあります。',
  },
  {
    slug: 'cashback',
    title: 'キャッシュバック',
    content:
      'キャッシュバックは損失の一部（2%〜50%）が毎日、毎週、または毎月還元されるボーナスです。賭け条件が非常に低い（x1〜x10）か、条件なしのため、最も「クリーン」なボーナスタイプです。長期的にプレイするアクティブなプレイヤーに最適です。',
  },
  {
    slug: 'vip-program',
    title: 'VIPプログラム',
    content:
      'VIPプログラムはロイヤルプレイヤーへの特典です。レベルが上がるにつれて、より高いキャッシュバック、専属マネージャー、優先出金、限定ボーナス、イベント招待などの特典が増えていきます。',
  },
];

export const methodologyWeights = [
  { criterion: 'ライセンス・信頼性', weight: 30, icon: 'badge-check' },
  { criterion: '決済方法', weight: 25, icon: 'credit-card' },
  { criterion: 'ゲームカタログ', weight: 20, icon: 'gamepad-2' },
  { criterion: 'ボーナス', weight: 15, icon: 'gift' },
  { criterion: 'UX・サポート', weight: 10, icon: 'monitor-smartphone' },
];

export const prosConsData = {
  pros: [
    '豊富なボーナス（100%〜500%＋フリースピン）',
    '24時間365日、どのデバイスからもアクセス可能',
    'トッププロバイダーの数千のゲーム',
    '仮想通貨を含む多様な決済方法',
    '高速出金（仮想通貨即時、電子決済24〜48時間）',
    '多くのオペレーターでKYC不要',
  ],
  cons: [
    'ギャンブル依存のリスク — 制限を設定',
    '自己管理と資金管理が必要',
    '一部のカジノは高い賭け条件（x45以上）',
    'KYC確認で初回出金が遅れる可能性',
  ],
};

export const mobileCasinoData = [
  {
    option: 'iOSアプリ',
    icon: 'apple',
    howItWorks: 'App Storeから直接ダウンロード。一部のカジノはiPhone・iPad用の最適化されたネイティブアプリを提供しています。',
    pros: ['スムーズで安定した体験', 'プロモーションのプッシュ通知', 'Touch ID / Face IDで認証'],
    cons: ['利用可能なカジノが限定的', 'Appleの審査に依存したアップデート'],
  },
  {
    option: 'Androidアプリ',
    icon: 'android',
    howItWorks: 'Google Play Storeまたはカジノサイトから直接APKファイルをダウンロード。iOSより柔軟性が高いです。',
    pros: ['最大限の柔軟性（Play Store + APK）', '完全な機能', 'ホーム画面ウィジェット'],
    cons: ['APKの手動インストール', 'セキュリティ設定の変更が必要な場合あり'],
  },
  {
    option: 'モバイルブラウザ（PWA）',
    icon: 'browser',
    howItWorks: '最も人気のオプション。ブラウザから直接カジノサイトにアクセス。すべてのカジノはHTML5に完全最適化されています。',
    pros: ['ダウンロード不要、即座にアクセス', 'どのデバイスでも動作', '常に最新バージョン'],
    cons: ['プッシュ通知なし（ほとんど）', 'インターネット接続品質に依存'],
  },
];

export const faqItems = [
  {
    question: 'オンラインカジノは日本で合法ですか？',
    answer: '日本国内でのオンラインカジノの利用については、法的にグレーゾーンとされています。海外でライセンスを取得した合法的なオンラインカジノを利用する場合、日本の法律で明確に禁止されているわけではありませんが、自己責任でのプレイとなります。',
  },
  {
    question: 'おすすめのオンラインカジノはどこですか？',
    answer: '当サイトでは、ライセンス、セキュリティ、ゲーム数、ボーナス、決済方法、カスタマーサポートなど複数の基準で評価した上位20のカジノをランキング形式で紹介しています。ご自身のプレイスタイルに合ったカジノをお選びください。',
  },
  {
    question: 'ボーナスの賭け条件とは何ですか？',
    answer: '賭け条件（出金条件）とは、ボーナスを現金として出金するために必要なベット総額のことです。例えば、1万円のボーナスにx30の賭け条件がある場合、30万円分のベットが必要になります。',
  },
  {
    question: '入金・出金方法は何がありますか？',
    answer: 'クレジットカード（VISA、Mastercard、JCB）、電子決済（Payz、VegaWallet、MuchBetter）、仮想通貨（BTC、ETH、USDT）、銀行振込など、カジノによって対応方法が異なります。日本円（JPY）対応のカジノを選ぶと為替手数料を節約できます。',
  },
  {
    question: '出金にはどのくらい時間がかかりますか？',
    answer: '仮想通貨は通常即時〜数時間、電子決済は24〜48時間、銀行振込は3〜5営業日が目安です。初回出金時はKYC（本人確認）が必要な場合があり、追加で時間がかかることがあります。',
  },
  {
    question: 'カジノゲームで勝つコツはありますか？',
    answer: 'バンクロール管理が最も重要です。予算を決め、負けても問題ない金額でプレイしましょう。RTP（還元率）の高いゲームを選び、ボーナスを活用し、勝っているときに止めることを心がけてください。ギャンブルは娯楽として楽しみ、決して借金をしてプレイしないでください。',
  },
];

// Casino mini reviews for top 5
export const casinoReviews: Record<string, { tagline: string; platform: string; bonuses: string; payments: string; bonusValidity: string }> = {
  bons: {
    tagline: '日本人プレイヤーに最適化された総合カジノ',
    platform: '5,000以上のスロットとライブゲーム。Pragmatic Play、Evolution、NetEntなど一流プロバイダーを網羅。スポーツベットも充実しており、JリーグやNPBにも賭けられます。',
    bonuses: 'ウェルカムボーナス最大40万円＋200回フリースピン。入金不要ボーナス$45も提供。毎週のキャッシュバックとリロードボーナスで継続的にお得。',
    payments: '仮想通貨（BTC、ETH、LTC）、銀行振込、Payz、VegaWallet対応。仮想通貨は即時出金、銀行振込は1-3営業日。本人確認は初回出金時のみ。',
    bonusValidity: '30日間',
  },
  mystino: {
    tagline: 'シンプルで使いやすい日本語カジノ',
    platform: '2,000以上のゲーム。特にスロットの品揃えが充実。日本語サポートは24時間対応でレスポンスが早いと評判。モバイル最適化も優秀。',
    bonuses: '初回入金ボーナス最大15万円。入金不要ボーナス$10あり。賭け条件x20と業界最低レベル。出金しやすいボーナス設計が魅力。',
    payments: '銀行振込、Payz、VegaWallet、仮想通貨対応。出金は通常24時間以内。KYC不要で即出金可能な場合も。',
    bonusValidity: '7日間',
  },
  yuugado: {
    tagline: 'VIPプログラムが充実したハイローラー向け',
    platform: '3,000以上のゲーム。ライブカジノに特に力を入れており、日本語対応テーブルも多数。専用アプリでスムーズなモバイルプレイが可能。',
    bonuses: 'ウェルカムボーナス最大10万円＋100回フリースピン。VIPプログラムで最大50%キャッシュバック。毎日の限定ボーナスも充実。',
    payments: '銀行振込、クレジットカード、Payz、仮想通貨対応。VIPは優先出金で最速30分。一般会員も24-48時間で出金完了。',
    bonusValidity: '14日間',
  },
  'queen-casino': {
    tagline: 'ライブカジノの王様',
    platform: '業界最大級のライブカジノセクション。Evolution、Pragmatic Play Live、Ezugiなど複数のスタジオから配信。バカラ、ルーレット、ブラックジャックのテーブル数は200以上。',
    bonuses: 'ウェルカムボーナス最大15万円。ライブカジノ専用の10%キャッシュバックは毎日付与。VIPはさらに高率のリベートを獲得可能。',
    payments: '銀行振込、クレジットカード、仮想通貨、電子決済に幅広く対応。出金は通常24時間以内。大口出金も問題なく処理。',
    bonusValidity: '30日間',
  },
  'vera-john': {
    tagline: '10年以上の実績を持つ老舗カジノ',
    platform: '1,500以上のゲーム。NetEnt、Microgaming、Play\'n GOなど老舗プロバイダーが中心。安定した動作と信頼性の高いプラットフォーム。',
    bonuses: '初回入金ボーナス最大10万円。スピンクレジット（フリースピン相当）が定期的に付与。賭け条件x20で出金しやすい。',
    payments: '銀行振込、クレジットカード（VISA、Mastercard、JCB）、Payz対応。出金は24-72時間。長年の運営で信頼性は抜群。',
    bonusValidity: '30日間',
  },
};

// Payment methods data
export const paymentMethods = [
  {
    slug: 'bitcoin',
    name: 'ビットコイン (BTC)',
    type: 'both',
    depositTime: '即時',
    withdrawalTime: '即時〜1時間',
    minDeposit: 1000,
    minWithdrawal: 1000,
    fees: '無料',
    currencies: ['BTC', 'JPY'],
    description: '最も普及している仮想通貨。匿名性が高く、手数料無料で即時処理。',
  },
  {
    slug: 'ethereum',
    name: 'イーサリアム (ETH)',
    type: 'both',
    depositTime: '即時',
    withdrawalTime: '即時〜30分',
    minDeposit: 1000,
    minWithdrawal: 1000,
    fees: '無料',
    currencies: ['ETH', 'JPY'],
    description: 'ビットコインに次ぐ人気の仮想通貨。高速処理とスマートコントラクト対応。',
  },
  {
    slug: 'bank-transfer',
    name: '銀行振込',
    type: 'both',
    depositTime: '即時〜1時間',
    withdrawalTime: '1-3営業日',
    minDeposit: 1000,
    minWithdrawal: 5000,
    fees: '無料',
    currencies: ['JPY'],
    description: '日本の銀行口座から直接入出金。安心感がありますが処理に時間がかかる。',
  },
  {
    slug: 'payz',
    name: 'Payz（旧ecoPayz）',
    type: 'both',
    depositTime: '即時',
    withdrawalTime: '24-48時間',
    minDeposit: 1000,
    minWithdrawal: 2000,
    fees: '無料',
    currencies: ['JPY', 'USD', 'EUR'],
    description: 'オンラインカジノで最も利用される電子決済。複数通貨対応で便利。',
  },
  {
    slug: 'vega-wallet',
    name: 'VegaWallet',
    type: 'both',
    depositTime: '即時',
    withdrawalTime: '24時間',
    minDeposit: 1000,
    minWithdrawal: 1000,
    fees: '無料',
    currencies: ['JPY'],
    description: '日本円専用の電子決済。ポイント還元があり、カジノプレイヤーに人気。',
  },
  {
    slug: 'credit-card',
    name: 'クレジットカード',
    type: 'deposit',
    depositTime: '即時',
    withdrawalTime: 'N/A',
    minDeposit: 1000,
    minWithdrawal: 0,
    fees: '無料',
    currencies: ['JPY', 'USD'],
    description: 'VISA、Mastercard、JCB対応。入金のみで出金は別方法が必要。',
  },
];

// Deposit checklist
export const depositChecklist = [
  'カジノのライセンスを確認する（フッターで確認）',
  'SSL暗号化（https://）を確認',
  'ボーナス条件を読んでから入金',
  '最初は少額（1万円以下）でテスト',
  '入出金制限を事前に設定',
];

// KYC content
export const kycContent = {
  heading: 'KYC（本人確認）について',
  intro: '初回出金時に本人確認が必要な場合があります。以下の書類を準備しておくと、スムーズに処理が進みます。',
  documents: [
    { name: '身分証明書', description: '運転免許証、パスポート、マイナンバーカードなど' },
    { name: '住所証明', description: '公共料金の請求書、住民票（3ヶ月以内発行）' },
    { name: '決済方法の証明', description: 'クレジットカードの表面、電子決済のスクリーンショット' },
  ],
  processingTime: '通常24-48時間',
};

// Game categories
export const gameCategories = [
  {
    category: 'slots',
    name: 'オンラインスロット',
    count: 5000,
    description: 'ビデオスロット、メガウェイズ、ジャックポットなど多彩なスロット。RTPは94%〜98%が一般的。',
    popularGames: ['Sweet Bonanza', 'Gates of Olympus', 'Starlight Princess', 'Moon Princess'],
  },
  {
    category: 'live-casino',
    name: 'ライブカジノ',
    count: 500,
    description: 'リアルディーラーとリアルタイムでプレイ。バカラ、ブラックジャック、ルーレット、ゲームショーなど。',
    popularGames: ['Lightning Roulette', 'Crazy Time', 'Speed Baccarat', 'Blackjack VIP'],
  },
  {
    category: 'table-games',
    name: 'テーブルゲーム',
    count: 200,
    description: 'RNG（乱数生成器）によるデジタルテーブルゲーム。自分のペースでプレイ可能。',
    popularGames: ['European Roulette', 'Blackjack', 'Baccarat', 'Casino Hold\'em'],
  },
  {
    category: 'crash-games',
    name: 'クラッシュゲーム',
    count: 50,
    description: '倍率が上がり続けるグラフを見て、クラッシュする前にキャッシュアウト。Provably Fair対応。',
    popularGames: ['Aviator', 'Spaceman', 'JetX', 'Crash'],
  },
  {
    category: 'game-shows',
    name: 'ゲームショー',
    count: 30,
    description: 'テレビ番組のようなエンターテインメント性の高いライブゲーム。巨額のマルチプライヤーが魅力。',
    popularGames: ['Crazy Time', 'Monopoly Live', 'Dream Catcher', 'Lightning Dice'],
  },
];

// Slot guide content
export const slotGuideContent = {
  heading: 'スロット選びのポイント',
  paragraphs: [
    'RTP（還元率）が96%以上のスロットを選ぶと長期的に有利です。ボラティリティ（変動性）が高いスロットは大当たりの可能性がありますが、資金の減りも早いので注意。',
    'フリースピン購入機能があるスロット（Gates of Olympus、Sweet Bonanzaなど）は、ボーナス消化に便利ですが、一度に大きな資金を失うリスクもあります。',
  ],
};

// Game providers
export const gameProviders = [
  {
    slug: 'pragmatic-play',
    name: 'Pragmatic Play',
    logo: '/assets/providers/pragmatic-play.svg',
    headquarters: 'マルタ',
    foundedYear: 2015,
    totalGames: 300,
    description: '日本で最も人気のあるプロバイダー。Sweet Bonanza、Gates of Olympus、Starlightシリーズで有名。ライブカジノも高品質。',
    popularGames: ['Sweet Bonanza', 'Gates of Olympus', 'Starlight Princess'],
  },
  {
    slug: 'evolution',
    name: 'Evolution Gaming',
    logo: '/assets/providers/evolution.svg',
    headquarters: 'ラトビア',
    foundedYear: 2006,
    totalGames: 200,
    description: 'ライブカジノの世界的リーダー。Crazy Time、Lightning Rouletteなど革新的なゲームショーで業界をリード。',
    popularGames: ['Crazy Time', 'Lightning Roulette', 'Monopoly Live'],
  },
  {
    slug: 'netent',
    name: 'NetEnt',
    logo: '/assets/providers/netent.svg',
    headquarters: 'スウェーデン',
    foundedYear: 1996,
    totalGames: 250,
    description: 'オンラインスロットのパイオニア。Starburst、Gonzo\'s Quest、Dead or Aliveシリーズは今も人気。',
    popularGames: ['Starburst', 'Gonzo\'s Quest', 'Dead or Alive 2'],
  },
  {
    slug: 'playn-go',
    name: 'Play\'n GO',
    logo: '/assets/providers/playn-go.svg',
    headquarters: 'スウェーデン',
    foundedYear: 2005,
    totalGames: 200,
    description: 'Moon Princessで日本市場を席巻。アニメ風のグラフィックと革新的な機能で人気。',
    popularGames: ['Moon Princess', 'Reactoonz', 'Book of Dead'],
  },
  {
    slug: 'push-gaming',
    name: 'Push Gaming',
    logo: '/assets/providers/push-gaming.svg',
    headquarters: 'イギリス',
    foundedYear: 2010,
    totalGames: 50,
    description: '高ボラティリティスロットの名手。Jammin\' Jars、Razor Sharkなど爆発力のあるゲームが人気。',
    popularGames: ['Jammin\' Jars', 'Razor Shark', 'Big Bamboo'],
  },
  {
    slug: 'hacksaw',
    name: 'Hacksaw Gaming',
    logo: '/assets/providers/hacksaw.svg',
    headquarters: 'マルタ',
    foundedYear: 2018,
    totalGames: 100,
    description: '最大50,000倍以上の配当が可能な超高ボラティリティスロットで急成長。スクラッチカードも人気。',
    popularGames: ['Wanted Dead or a Wild', 'Chaos Crew', 'Hop\'n\'Pop'],
  },
];

// License data for safety section
export const licenseData = [
  {
    name: 'キュラソー (eGaming)',
    description: '国際オンラインカジノで最も一般的なライセンス。基本的な規制を提供し、ほとんどのカジノがこのライセンスで運営。',
    trust: '標準',
    trustColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    name: 'マルタ (MGA)',
    description: '業界で最も厳格で尊重されるライセンス。プレイヤー保護、財務監査、フェアゲームの高い基準を要求。',
    trust: '非常に高い',
    trustColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    name: 'ジブラルタル',
    description: '厳格な規制と Gibraltar Gambling Commission の監督。大手の信頼できるオペレーターが使用。',
    trust: '非常に高い',
    trustColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    name: 'ライセンスなし / KYC不要',
    description: '一部の仮想通貨カジノは従来のライセンスなしで運営。Provably Fairに依存。リスクが高いため要注意。',
    trust: 'リスク高',
    trustColor: 'text-red-600 bg-red-50 border-red-200',
  },
];

// Safety verification checklist
export const verifyChecklist = [
  { text: 'フッターでライセンス番号と発行機関を確認' },
  { text: 'SSL証明書（https://）とeCOGRA、iTech Labs等の監査認証を確認' },
  { text: 'Casino Guru、AskGamblersでレビューをチェック' },
  { text: '小額（1万円以下）でテスト入金してから大きな金額を入れる' },
];

// Responsible gaming tools
export const responsibleTools = [
  {
    title: '入金制限',
    description: '日次、週次、月次で入金上限を設定。設定はアカウント設定で変更可能。',
  },
  {
    title: '損失制限・時間制限',
    description: 'セッション時間や損失額にアラートまたは制限を設定。予算管理に効果的。',
  },
  {
    title: '自己排除',
    description: '一時的（24時間、7日、30日）または永久的にアカウントをブロック。選択期間中は取り消し不可。',
  },
  {
    title: 'クーリングオフ期間',
    description: '1-6ヶ月の自主休止。アカウントは削除されず、期間終了後に復帰可能。',
  },
];

// Mistakes to avoid
export const mistakesToAvoid = [
  {
    title: '虚偽の登録情報',
    description: '偽の情報で登録するとKYC確認に失敗し、出金できなくなります。アカウント永久停止のリスクも。',
  },
  {
    title: '賭け条件の無視',
    description: 'ボーナスを受け取る前に条件を確認。x40の条件で1万円ボーナスなら40万円分のベットが必要。',
  },
  {
    title: '制限なしでプレイ',
    description: 'プレイ開始前に必ず入金・損失制限を設定。制限なしでは予算オーバーのリスクが大幅に上昇。',
  },
];
