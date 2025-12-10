import Link from 'next/link';
import { getResolvedToplist } from '@/content/data/toplists';
import { getAffiliateUrl } from '@/content/data/affiliates';

interface CasinoListItem {
  name: string;
  slug: string;
  bonus?: string;
  highlight?: string;
}

interface CasinoListProps {
  /** Toplist ID to load casinos from */
  toplistId?: string;
  /** Manual list of casinos (used if toplistId not provided) */
  casinos?: CasinoListItem[];
  /** Title for the list (overrides toplist title) */
  title?: string;
  /** Maximum number of casinos to show */
  limit?: number;
  /** Show rank numbers */
  showRank?: boolean;
}

/**
 * Casino list component for MDX content
 * Can load from a toplist ID or accept manual casino data
 */
export function CasinoList({
  toplistId,
  casinos: manualCasinos,
  title,
  limit,
  showRank = true,
}: CasinoListProps) {
  // Try to load from toplist if ID provided
  const resolvedToplist = toplistId ? getResolvedToplist(toplistId, limit) : undefined;

  // Use resolved toplist or fall back to manual casinos
  const displayCasinos = resolvedToplist
    ? resolvedToplist.map((entry) => ({
        name: entry.casino.nameJa || entry.casino.name,
        slug: entry.casino.slug,
        bonus: entry.headline,
        highlight: entry.description,
        affiliateUrl: getAffiliateUrl(entry.casino.slug, 'comparison'),
        badge: entry.badge,
      }))
    : manualCasinos?.map((casino) => ({
        ...casino,
        affiliateUrl: getAffiliateUrl(casino.slug, 'comparison'),
      }));

  // Get title from toplist if not provided
  const displayTitle =
    title || (toplistId && resolvedToplist ? getResolvedToplist(toplistId)?.[0] && getToplistTitle(toplistId) : undefined);

  if (!displayCasinos || displayCasinos.length === 0) {
    return null;
  }

  return (
    <div className="my-6">
      {displayTitle && <h3 className="text-lg font-bold mb-4">{displayTitle}</h3>}
      <div className="space-y-3">
        {displayCasinos.map((casino, index) => (
          <div
            key={casino.slug}
            className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors"
          >
            {showRank && (
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-emerald-600 text-white rounded-full font-bold text-sm">
                {index + 1}
              </div>
            )}
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <Link
                  href={`/reviews/${casino.slug}`}
                  className="font-bold text-gray-900 hover:text-emerald-600"
                >
                  {casino.name}
                </Link>
                {'badge' in casino && casino.badge && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 rounded">
                    {casino.badge}
                  </span>
                )}
              </div>
              {casino.bonus && (
                <p className="text-sm text-emerald-600 font-medium">{casino.bonus}</p>
              )}
              {casino.highlight && (
                <p className="text-sm text-gray-500">{casino.highlight}</p>
              )}
            </div>
            <Link
              href={casino.affiliateUrl || `https://casinotsu.com/go/${casino.slug}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-shrink-0 px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded hover:bg-emerald-700 transition-colors"
            >
              プレイ
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper to get toplist title
function getToplistTitle(id: string): string | undefined {
  const { getToplist } = require('@/content/data/toplists');
  return getToplist(id)?.title;
}
