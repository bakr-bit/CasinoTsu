import type { NavItem } from '@/src/types/navigation';

export const mainNavItems: NavItem[] = [
  { label: 'ホーム', href: '/' },
  {
    label: 'カジノレビュー',
    href: '/reviews',
    children: [
      { label: 'カジノレビュー一覧', href: '/reviews' },
      { label: '新着カジノ', href: '/new-casinos' },
    ],
  },
  {
    label: 'ボーナス',
    href: '/bonuses',
    children: [
      { label: 'ボーナス一覧', href: '/bonuses' },
      { label: '入金不要ボーナス', href: '/bonuses/no-deposit' },
      { label: '賭け条件なしボーナス', href: '/bonuses/no-wagering' },
      { label: 'フリースピン', href: '/bonuses/free-spins' },
      { label: 'VIPボーナス', href: '/bonuses/vip' },
    ],
  },
  {
    label: 'スロット',
    href: '/slots',
    children: [
      { label: 'スロット一覧', href: '/slots' },
      { label: 'メガウェイズ', href: '/slots/megaways' },
      { label: '高RTPスロット', href: '/slots/high-rtp' },
      { label: 'ジャックポット', href: '/slots/progressive-jackpot' },
    ],
  },
  {
    label: '決済方法',
    href: '/payment',
    children: [
      { label: '決済方法一覧', href: '/payment' },
      { label: 'ビットコイン', href: '/payment/bitcoin' },
      { label: 'イーサリアム', href: '/payment/ethereum' },
      { label: '銀行振込', href: '/payment/bank-transfer' },
      { label: 'Vega Wallet', href: '/payment/vega-wallet' },
    ],
  },
];

export const footerNavItems: NavItem[] = [
  { label: 'ホーム', href: '/' },
  { label: 'カジノレビュー', href: '/reviews' },
  { label: '新着カジノ', href: '/new-casinos' },
  { label: 'ボーナス一覧', href: '/bonuses' },
  { label: '入金不要ボーナス', href: '/bonuses/no-deposit' },
  { label: '賭け条件なしボーナス', href: '/bonuses/no-wagering' },
  { label: 'スロット', href: '/slots' },
  { label: '決済方法', href: '/payment' },
];
