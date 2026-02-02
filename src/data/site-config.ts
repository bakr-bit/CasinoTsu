import type { SiteConfig } from '@/src/types/navigation';

export const siteConfig: SiteConfig = {
  name: 'CasinoTsu',
  url: 'https://casinotsu.jp',
  description:
    'オンラインカジノの総合情報サイト。カジノレビュー、ボーナス情報、スロット攻略など、日本人プレイヤー向けの信頼できる情報を提供します。',
  locale: 'ja_JP',
  contact: {
    email: 'info@casinotsu.jp',
    phone: '',
    address: '',
  },
  responsibleGaming: {
    hotline: '0570-070-255',
    website: 'https://www.ncpgambling.org/help-treatment/help-by-state/',
    message:
      'ギャンブルは18歳以上の方のみご利用いただけます。責任を持ってプレイしましょう。',
  },
};
