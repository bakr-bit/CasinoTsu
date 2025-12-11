import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllCrashGames } from '@/content/data/crash-games';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'クラッシュゲーム | CasinoTsu',
  description: 'Aviator、Spaceman、JetXなど人気クラッシュゲームのルールと攻略法。',
};

export default async function CrashGamesPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('crash-games');
  const dataRegistry = getAllCrashGames();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      maxMultiplier: d.maxMultiplier,
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
      category: 'crash-games',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'crash-games');

  return (
    <PillarPageTemplate
      category="crash-games"
      categoryNameJa="クラッシュゲーム"
      description="Aviator、Spaceman、JetXなど人気クラッシュゲームのルールと攻略法。"
      heroGradient="from-cyan-600 to-sky-700"
      content={content}
      articles={enrichedArticles}
    />
  );
}
