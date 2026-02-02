import type { Metadata } from 'next';
import { loadMDX } from '@/lib/mdx';
import { getAllCasinos } from '@/content/data/casinos';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: '新しいオンラインカジノ【2025年最新版】| CasinoTsu',
  description: '2025年最新、新しいオンラインカジノの完全ガイド。KodaBet、Koi Fortuneなど話題の新規カジノ情報から、業界トレンド、メリット・デメリットまでCasinoTsuが徹底解説！',
};

export default async function NewCasinosPillarPage() {
  // Get all casinos and sort by established year (newest first)
  const casinos = getAllCasinos()
    .filter((casino) => casino.established >= 2023)
    .sort((a, b) => b.established - a.established);

  const { content, frontmatter, headings } = await loadMDX('pillars', 'new-casinos');

  return (
    <PillarPageTemplate
      category="reviews"
      categoryNameJa="新しいオンラインカジノ"
      description="2025年にオープンした最新カジノから、リニューアルした人気サイトまで、注目の新規オンラインカジノを紹介。"
      heroColor="bg-emerald-600"
      heroImage="/headers/new-casinos-header.webp"
      content={content}
      headings={headings}
      lastUpdated={frontmatter.lastUpdated}
      showCasinoList={true}
      casinos={casinos}
      listingTitle="最新カジノランキング"
      listingSubtitle="2023年以降にオープンした新しいカジノ"
    />
  );
}
