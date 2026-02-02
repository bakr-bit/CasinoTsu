import type { Metadata } from 'next';
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Rampart_One } from 'next/font/google';
import './globals.css';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  variable: '--font-zen-kaku',
  display: 'swap',
  weight: ['400', '500', '700', '900'],
});

const rampartOne = Rampart_One({
  subsets: ['latin'],
  variable: '--font-rampart',
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'CasinoTsu - オンラインカジノガイド',
  description: 'オンラインカジノの総合情報サイト。カジノレビュー、ボーナス情報、スロット攻略など。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenKaku.variable} ${rampartOne.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
