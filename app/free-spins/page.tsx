import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getAllCasinos } from '@/content/data/casinos';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'フリースピン完全ガイド【2025年最新版】| CasinoTsu',
  description: 'オンラインカジノのフリースピンを徹底解説！入金不要ボーナス、賭け条件なしのキャッシュスピン、おすすめカジノランキングまで。2025年最新の無料スピン情報をお届けします。',
};

export default async function FreeSpinsPillarPage() {
  // Get casinos with good bonus offerings sorted by rating
  const casinos = getAllCasinos().sort((a, b) => b.rating - a.rating);

  const { content, frontmatter, headings } = await loadMDX('bonuses', 'free-spins');

  return (
    <PillarPageTemplate
      category="reviews"
      categoryNameJa="フリースピン"
      description="入金不要フリースピン、賭け条件なしキャッシュスピンなど、お得な無料スピンボーナスを完全ガイド。"
      heroColor="bg-pink-600"
      heroImage="/headers/free-spins-header.webp"
      content={content}
      headings={headings}
      lastUpdated={frontmatter.lastUpdated}
      showCasinoList={true}
      casinos={casinos}
      listingTitle="フリースピンがお得なカジノ"
      listingSubtitle="無料スピンボーナスを提供するトップカジノ"
    />
  );
}
