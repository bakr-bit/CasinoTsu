import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getAllCasinos } from '@/content/data/casinos';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'モバイルカジノ＆カジノアプリ完全ガイド【2025年最新版】| CasinoTsu',
  description: 'スマホでオンラインカジノを楽しむための完全ガイド。おすすめカジノアプリ、iPhone・Android対応、インストール方法、安全性、ボーナス情報まで徹底解説。',
};

export default async function MobileCasinoPillarPage() {
  // Get casinos sorted by rating (all have good mobile support)
  const casinos = getAllCasinos().sort((a, b) => b.rating - a.rating);

  const { content, frontmatter, headings } = await loadMDX('pillars', 'mobile-casino');

  return (
    <PillarPageTemplate
      category="reviews"
      categoryNameJa="モバイルカジノ＆カジノアプリ"
      description="スマホで楽しめるオンラインカジノとカジノアプリの完全ガイド。iPhone・Android対応のおすすめカジノを紹介。"
      heroColor="bg-indigo-600"
      heroImage="/headers/mobile-casino-header.webp"
      content={content}
      headings={headings}
      lastUpdated={frontmatter.lastUpdated}
      showCasinoList={true}
      casinos={casinos}
      listingTitle="モバイル対応カジノランキング"
      listingSubtitle="スマホ・タブレットで快適にプレイできるカジノ"
    />
  );
}
