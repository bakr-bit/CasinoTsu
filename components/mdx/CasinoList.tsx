import Link from 'next/link';
import { Star } from 'lucide-react';
import { getResolvedToplist } from '@/content/data/toplists';
import { getAffiliateUrl } from '@/content/data/affiliates';

interface CasinoListItem {
  name: string;
  slug: string;
  bonus?: string;
  highlight?: string;
  rating?: number;
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
 * Render star rating display
 */
function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
      {hasHalfStar && (
        <div className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-gray-300" />
          <div className="absolute overflow-hidden w-2 h-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
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
        rating: entry.casino.rating,
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
      {displayTitle && <h3 className="text-lg font-bold mb-4 text-center">{displayTitle}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              {showRank && (
                <th className="px-3 py-2 text-sm font-semibold text-gray-700 w-12">#</th>
              )}
              <th className="px-3 py-2 text-sm font-semibold text-gray-700">カジノ</th>
              <th className="px-3 py-2 text-sm font-semibold text-gray-700">評価</th>
              <th className="px-3 py-2 text-sm font-semibold text-gray-700">ボーナス</th>
              <th className="px-3 py-2 text-sm font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {displayCasinos.map((casino, index) => (
              <tr key={casino.slug} className={`border-b border-gray-200 hover:bg-gray-50 ${
                  index === 0 ? 'bg-amber-50' :
                  index === 1 ? 'bg-gray-50' :
                  index === 2 ? 'bg-orange-50' :
                  ''
                }`}>
                {showRank && (
                  <td className={`px-3 py-3 text-center font-bold ${
                    index === 0 ? 'text-amber-500' :
                    index === 1 ? 'text-gray-400' :
                    index === 2 ? 'text-amber-700' :
                    'text-[#0019b2]'
                  }`}>
                    {index + 1}
                  </td>
                )}
                <td className="px-3 py-3">
                  <Link
                    href={`/reviews/${casino.slug}`}
                    className="font-bold text-gray-900 hover:text-[#0019b2]"
                  >
                    {casino.name}
                  </Link>
                  {'badge' in casino && casino.badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 rounded">
                      {casino.badge}
                    </span>
                  )}
                </td>
                <td className="px-3 py-3">
                  {'rating' in casino && casino.rating ? (
                    <StarRating rating={casino.rating} />
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-3 py-3 text-sm text-[#0019b2] font-medium">
                  {casino.bonus || '—'}
                </td>
                <td className="px-3 py-3 text-right whitespace-nowrap">
                  <Link
                    href={casino.affiliateUrl || `https://casinotsu.com/go/${casino.slug}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`inline-block px-5 py-2 text-white text-sm font-bold rounded transition-colors ${
                      index === 0 ? 'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 shadow-md' :
                      index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-300 hover:from-gray-500 hover:to-gray-400 shadow-md' :
                      index === 2 ? 'bg-gradient-to-r from-amber-700 to-orange-500 hover:from-amber-800 hover:to-orange-600 shadow-md' :
                      'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    プレイ
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper to get toplist title
function getToplistTitle(id: string): string | undefined {
  const { getToplist } = require('@/content/data/toplists');
  return getToplist(id)?.title;
}
