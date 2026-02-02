import Link from 'next/link';
import { ExternalLink, Gift } from 'lucide-react';
import { getAffiliateUrl, getBonusCode } from '@/content/data/affiliates';

interface AffiliateButtonProps {
  /** Casino slug */
  casino: string;
  /** Button text */
  text?: string;
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'gold';
  /** Additional CSS classes */
  className?: string;
  /** Show bonus code if available */
  showBonusCode?: boolean;
}

/**
 * Affiliate button component for MDX content
 * Generates tracked affiliate links to casinos with colorful gradient styling
 */
export function AffiliateButton({
  casino,
  text = '今すぐプレイ',
  variant = 'primary',
  className = '',
  showBonusCode = false,
}: AffiliateButtonProps) {
  // Get affiliate URL from centralized registry
  const affiliateUrl = getAffiliateUrl(casino, 'default');
  const bonusCode = showBonusCode ? getBonusCode(casino) : undefined;

  const variantStyles = {
    primary: 'from-indigo-600 to-indigo-700 shadow-indigo-500/30 hover:shadow-indigo-500/50',
    secondary: 'from-slate-700 to-slate-800 shadow-slate-500/30 hover:shadow-slate-500/50',
    gold: 'from-amber-500 to-orange-500 shadow-amber-500/30 hover:shadow-amber-500/50',
  };

  return (
    <div className="my-8 not-prose">
      <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 rounded-2xl border border-slate-200/50 shadow-lg">
        <Link
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r ${variantStyles[variant]} shadow-lg overflow-hidden ${className}`}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse" />
          <span className="relative z-10">{text}</span>
          <ExternalLink className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        {bonusCode && (
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-indigo-100 shadow-sm">
            <Gift className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-gray-600">ボーナスコード:</span>
            <code className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 rounded-lg font-mono font-bold text-sm">
              {bonusCode}
            </code>
          </div>
        )}
      </div>
    </div>
  );
}
