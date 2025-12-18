import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllCraps } from '@/content/data/craps';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'クラップス | CasinoTsu',
  description: 'クラップスのルール、戦略、ベッティングオプションを徹底解説。',
};

export default async function CrapsPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('craps');
  const dataRegistry = getAllCraps();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      category: d.category,
      difficulty: d.difficulty,
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
      category: 'craps',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content, frontmatter, headings } = await loadMDX('pillars', 'craps');

  return (
    <PillarPageTemplate
      category="craps"
      categoryNameJa="クラップス"
      description="クラップスのルール、戦略、ベッティングオプションを徹底解説。"
      heroColor="bg-orange-700"
      content={content}
      articles={enrichedArticles}
      lastUpdated={frontmatter.lastUpdated}
      headings={headings}
    />
  );
}
