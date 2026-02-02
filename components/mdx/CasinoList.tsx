import Link from 'next/link';
import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import { getResolvedToplist } from '@/content/data/toplists';
import { getAffiliateUrl } from '@/content/data/affiliates';

interface CasinoListItem {
  name: string;
  slug: string;
  bonus?: string;
  highlight?: string;
  rating?: number;
  logo?: string;
  license?: string;
  badge?: string;
  affiliateUrl?: string;
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
 * Uses the same colorful design as CasinoListingSection
 */
export function CasinoList({
  toplistId,
  casinos: manualCasinos,
  title,
  limit = 10,
  showRank = true,
}: CasinoListProps) {
  // Try to load from toplist if ID provided
  const resolvedToplist = toplistId ? getResolvedToplist(toplistId, limit) : undefined;

  // Use resolved toplist or fall back to manual casinos
  const displayCasinos: CasinoListItem[] = resolvedToplist
    ? resolvedToplist.map((entry) => ({
        name: entry.casino.nameJa || entry.casino.name,
        slug: entry.casino.slug,
        bonus: entry.headline,
        highlight: entry.description || entry.casino.features?.highlights?.[0],
        affiliateUrl: getAffiliateUrl(entry.casino.slug, 'comparison'),
        badge: entry.badge,
        rating: entry.casino.rating,
        logo: entry.casino.logo,
        license: entry.casino.license?.jurisdiction,
      }))
    : manualCasinos?.map((casino) => ({
        ...casino,
        affiliateUrl: casino.affiliateUrl || getAffiliateUrl(casino.slug, 'comparison'),
      })) || [];

  // Get title from toplist if not provided
  const displayTitle =
    title || (toplistId && resolvedToplist ? getToplistTitle(toplistId) : undefined);

  if (!displayCasinos || displayCasinos.length === 0) {
    return null;
  }

  const rowColors: Record<number, string> = {
    1: 'bg-gradient-to-r from-amber-50 via-indigo-50 to-amber-50',
    2: 'bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50',
    3: 'bg-gradient-to-r from-amber-50/50 via-indigo-50/50 to-amber-50/50',
  };

  const rankColors: Record<number, string> = {
    1: 'bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-lg shadow-indigo-500/30',
    2: 'bg-gradient-to-br from-slate-500 to-slate-600 shadow-lg shadow-slate-500/30',
    3: 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30',
  };

  const ctaColors: Record<number, string> = {
    1: 'from-indigo-600 to-indigo-700 shadow-indigo-500/30 hover:shadow-indigo-500/50',
    2: 'from-violet-500 to-purple-500 shadow-violet-500/30 hover:shadow-violet-500/50',
    3: 'from-amber-500 to-orange-500 shadow-amber-500/30 hover:shadow-amber-500/50',
  };

  return (
    <div className="my-8 not-prose">
      {displayTitle && (
        <div className="mb-6 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-3 mx-auto" />
          <h3 className="text-xl font-bold text-gray-900">{displayTitle}</h3>
        </div>
      )}

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border-0 shadow-xl shadow-slate-200/50">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              {showRank && (
                <th className="px-4 py-3 text-[11px] font-bold text-white/80 uppercase tracking-wider w-12">#</th>
              )}
              <th className="px-4 py-3 text-[11px] font-bold text-white/80 uppercase tracking-wider">カジノ</th>
              <th className="px-4 py-3 text-[11px] font-bold text-white/80 uppercase tracking-wider">ボーナス</th>
              <th className="px-4 py-3 text-[11px] font-bold text-white/80 uppercase tracking-wider w-24">ライセンス</th>
              <th className="px-4 py-3 text-[11px] font-bold text-white/80 uppercase tracking-wider w-20 text-center">評価</th>
              <th className="px-4 py-3 w-28" />
            </tr>
          </thead>
          <tbody>
            {displayCasinos.map((casino, index) => {
              const rank = index + 1;
              const isTop3 = rank <= 3;

              return (
                <tr
                  key={casino.slug}
                  className={`border-b border-gray-100 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:z-10 relative ${
                    isTop3 ? rowColors[rank] : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  {showRank && (
                    <td className="px-4 py-3">
                      <div className="relative">
                        <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-sm font-black text-white ${
                          isTop3 ? rankColors[rank] : 'bg-gray-300'
                        }`}>
                          {rank}
                        </span>
                        {rank === 1 && (
                          <span className="absolute -top-1 -right-1 text-[10px]">👑</span>
                        )}
                      </div>
                    </td>
                  )}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {casino.logo && (
                        <div className={`relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-md ${
                          isTop3 ? 'ring-2 ring-indigo-200' : 'border border-gray-100'
                        }`}>
                          <Image
                            src={casino.logo}
                            alt={casino.name}
                            fill
                            className="object-contain p-1"
                            sizes="40px"
                          />
                        </div>
                      )}
                      <div>
                        <Link
                          href={`/reviews/${casino.slug}`}
                          className={`text-sm font-bold hover:text-indigo-600 transition-colors ${
                            rank === 1 ? 'text-indigo-700' : 'text-gray-900'
                          }`}
                        >
                          {casino.name}
                        </Link>
                        {casino.badge && (
                          <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                            rank === 1 ? 'bg-indigo-100 text-indigo-700' : rank === 2 ? 'bg-slate-100 text-slate-700' : rank === 3 ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {casino.badge}
                          </span>
                        )}
                        {casino.highlight && (
                          <p className="text-[11px] text-gray-500 mt-0.5 truncate max-w-[200px]">
                            {casino.highlight}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${
                      isTop3 ? 'bg-gradient-to-r from-indigo-100 to-blue-100' : 'bg-gray-50'
                    }`}>
                      <span className={`text-sm font-bold ${isTop3 ? 'text-indigo-700' : 'text-gray-700'}`}>
                        {casino.bonus || 'ウェルカムボーナス'}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {casino.license && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase bg-blue-100 text-blue-700">
                        {casino.license}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {casino.rating && (
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${
                        casino.rating >= 4.5 ? 'bg-gradient-to-r from-amber-100 to-yellow-100' : 'bg-gray-50'
                      }`}>
                        <Star className={`h-4 w-4 ${casino.rating >= 4.5 ? 'text-amber-500' : 'text-gray-400'} fill-current`} />
                        <span className={`text-sm font-black ${casino.rating >= 4.5 ? 'text-amber-700' : 'text-gray-700'}`}>
                          {(casino.rating * 2).toFixed(1)}
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <a
                      href={casino.affiliateUrl || `https://casinotsu.com/go/${casino.slug}`}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`group inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r ${
                        isTop3 ? ctaColors[rank] : 'from-gray-700 to-gray-800 shadow-gray-500/20 hover:shadow-gray-500/40'
                      } shadow-lg`}
                    >
                      プレイ
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {displayCasinos.map((casino, index) => {
          const rank = index + 1;
          const isTop3 = rank <= 3;

          return (
            <div
              key={casino.slug}
              className={`relative rounded-2xl overflow-hidden shadow-lg ${
                isTop3 ? 'ring-2 ring-indigo-200' : ''
              }`}
            >
              {/* Header with gradient */}
              <div className={`px-4 py-3 ${
                rank === 1 ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800' :
                rank === 2 ? 'bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800' :
                rank === 3 ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600' :
                'bg-gradient-to-r from-gray-700 to-gray-800'
              } relative`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    {showRank && (
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white font-black text-sm">
                        {rank}
                      </span>
                    )}
                    {casino.logo && (
                      <div className="h-10 w-10 rounded-lg bg-white overflow-hidden">
                        <Image
                          src={casino.logo}
                          alt={casino.name}
                          width={40}
                          height={40}
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <span className="font-bold text-white text-sm">{casino.name}</span>
                      {casino.badge && (
                        <span className="ml-2 px-2 py-0.5 text-[9px] font-bold bg-white/20 text-white rounded-full">
                          {casino.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  {casino.rating && (
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                      <Star className="h-3.5 w-3.5 text-amber-300 fill-current" />
                      <span className="text-white font-bold text-xs">{(casino.rating * 2).toFixed(1)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="bg-white p-4">
                <div className="text-sm text-indigo-700 font-semibold mb-3">
                  {casino.bonus || 'ウェルカムボーナス'}
                </div>
                <a
                  href={casino.affiliateUrl || `https://casinotsu.com/go/${casino.slug}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-all bg-gradient-to-r ${
                    isTop3 ? ctaColors[rank] : 'from-gray-700 to-gray-800'
                  } shadow-lg hover:scale-[1.02]`}
                >
                  今すぐプレイ
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-gray-400 text-center mt-4">
        * すべてのボーナスには利用規約が適用されます。18歳以上限定。
      </p>
    </div>
  );
}

// Helper to get toplist title
function getToplistTitle(id: string): string | undefined {
  const { getToplist } = require('@/content/data/toplists');
  return getToplist(id)?.title;
}
