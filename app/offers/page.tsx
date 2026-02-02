import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllOffers } from '@/content/data/offers';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'カジノオファー | CasinoTsu',
  description: '各カジノの限定ボーナス、プロモーション、特別オファーを紹介。',
};

export default async function OffersPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('offers');
  const dataRegistry = getAllOffers();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d: any) => ({
      offerType: d.offerType,
      casinoSlug: d.casinoSlug,
      bonusAmount: d.bonusAmount,
    });

  // Merge MDX frontmatter with registry data
  const enrichedArticles = articles.map(({ slug, frontmatter }) => {
    const data = dataRegistry.find((d: { slug: string }) => d.slug === slug);
    const meta = data ? extractMeta(data) : {};
    return {
      slug,
      title: frontmatter.title || slug,
      description: frontmatter.description,
      lastUpdated: frontmatter.lastUpdated,
      category: 'offers',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'offers');

  return (
    <PillarPageTemplate
      category="offers"
      categoryNameJa="カジノオファー"
      description="各カジノの限定ボーナス、プロモーション、特別オファーを紹介。"
      heroColor="bg-pink-600"
      content={content}
      articles={enrichedArticles}
    />
  );
}
