import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllSlots } from '@/content/data/slots';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'スロット | CasinoTsu',
  description: 'オンラインスロットの完全ガイド。RTP、ボラティリティ、プロバイダー情報など。',
};

export default async function SlotsPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('slots');
  const dataRegistry = getAllSlots();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      provider: d.hero?.provider,
      rtp: d.hero?.rtp,
      volatility: d.hero?.volatility,
      score: d.hero?.score,
      slotImageSrc: d.hero?.slotImageSrc,
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
      category: 'slots',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'slots');

  return (
    <PillarPageTemplate
      category="slots"
      categoryNameJa="スロット"
      description="オンラインスロットの完全ガイド。RTP、ボラティリティ、プロバイダー情報など。"
      heroGradient="from-blue-600 to-indigo-800"
      content={content}
      articles={enrichedArticles}
    />
  );
}
