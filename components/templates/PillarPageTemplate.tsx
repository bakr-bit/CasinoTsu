import { ArticleGrid } from '@/components/ui/ArticleGrid';
import { ArticleCardProps } from '@/components/ui/ArticleCard';
import { LastUpdated } from '@/components/ui/LastUpdated';
import { TableOfContents, HeadingInfo } from '@/components/mdx/TableOfContents';

export interface PillarPageProps {
  /** Category slug (e.g., 'slots', 'payment', 'reviews') */
  category: string;
  /** Japanese category name for display */
  categoryNameJa: string;
  /** Category description */
  description: string;
  /** Hero background color (Tailwind class, e.g., 'bg-blue-700') */
  heroColor: string;
  /** Optional hero background image URL */
  heroImage?: string;
  /** MDX content rendered above article listing (optional) */
  content?: React.ReactNode;
  /** List of articles in this category */
  articles: ArticleCardProps[];
  /** Last updated date (ISO format) */
  lastUpdated?: string;
  /** Headings for table of contents */
  headings?: HeadingInfo[];
}

/**
 * Pillar page template for category landing pages
 * Shows hero + MDX content + article grid with Load More
 */
export default function PillarPageTemplate({
  category,
  categoryNameJa,
  description,
  heroColor,
  heroImage,
  content,
  articles,
  lastUpdated,
  headings,
}: PillarPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section
        className={`${heroColor} text-white relative overflow-hidden`}
        style={heroImage ? {
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : undefined}
      >
        {/* Dark overlay for better text readability when image is present */}
        {heroImage && (
          <div className="absolute inset-0 bg-black/50" />
        )}
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categoryNameJa}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-white/70">
            <span>{articles.length}件の記事</span>
            {lastUpdated && (
              <span>
                最終更新日: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* MDX Content section (if provided) */}
      {content && (
        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
              {/* Table of Contents */}
              {headings && headings.length > 0 && (
                <TableOfContents headings={headings} />
              )}
              {content}
            </article>
          </div>
        </section>
      )}

      {/* Article listing section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <ArticleGrid
            articles={articles}
            category={category}
            initialCount={20}
            loadMoreCount={20}
          />
        </div>
      </section>
    </div>
  );
}
