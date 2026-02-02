import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllLiveCasino } from '@/content/data/live-casino';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'ライブカジノ | CasinoTsu',
  description: 'ライブバカラ、ライブブラックジャック、ライブルーレットなどを徹底解説。',
};

export default async function LiveCasinoPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('live-casino');
  const dataRegistry = getAllLiveCasino();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d: any) => ({
      gameType: d.gameType,
      providerName: d.providerJa || d.provider,
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
      category: 'live-casino',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'live-casino');

  return (
    <PillarPageTemplate
      category="live-casino"
      categoryNameJa="ライブカジノ"
      description="ライブバカラ、ライブブラックジャック、ライブルーレットなどを徹底解説。"
      heroColor="bg-amber-700"
      heroImage="/headers/live-casino.webp"
      content={content}
      articles={enrichedArticles}
    />
  );
}
