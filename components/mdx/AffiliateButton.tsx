import Link from 'next/link';
import { getAffiliateUrl, getBonusCode } from '@/content/data/affiliates';

interface AffiliateButtonProps {
  /** Casino slug */
  casino: string;
  /** Button text */
  text?: string;
  /** Button style variant */
  variant?: 'primary' | 'secondary';
  /** Additional CSS classes */
  className?: string;
  /** Show bonus code if available */
  showBonusCode?: boolean;
}

/**
 * Affiliate button component for MDX content
 * Generates tracked affiliate links to casinos
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

  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-colors text-center';
  const variantStyles = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300',
  };

  return (
    <div className="flex flex-col items-center gap-2 my-6">
      <Link
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {text}
      </Link>
      {bonusCode && (
        <span className="text-sm text-gray-600">
          ボーナスコード: <code className="px-2 py-0.5 bg-blue-100 text-[#0019b2] rounded font-mono">{bonusCode}</code>
        </span>
      )}
    </div>
  );
}
