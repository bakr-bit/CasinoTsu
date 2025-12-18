import type { OfferData } from './types';

export const flush_welcome_offer: OfferData = {
  slug: 'flush-welcome-offer',
  name: "Flush Casino First Deposit Bonus",
  nameJa: "フラッシュカジノの初回入金ボーナス最大2,000ドルをゲット！",

  casinoSlug: "flush",
  offerType: "welcome",

  bonusAmount: "最大$2,000 (200%)",
  wagering: "35倍 (入金額＋ボーナス額)",
  // bonusCode: undefined,
  validity: "30日",

  highlights: [
    "最大$2,000の初回入金ボーナス（最大200%）",
    "賭け条件は35倍（入金額＋ボーナス額）",
    "有効期限は30日間",
    "一度達成したランクが降格しないVIPプログラム",
    "5,000種類以上の豊富なゲームとオリジナルゲーム"
  ],

  meta: {
    title: "フラッシュカジノ初回入金ボーナス | 最大$2,000ゲット！賭け条件35倍で豪華特典",
    description: "フラッシュカジノの初回入金ボーナスは最大$2,000（最大200%）！CasinoTsu限定で豪華特典をゲット。賭け条件35倍、有効期限30日。5,000種以上のゲームと降格なしVIPプログラムも魅力。",
  },
};
