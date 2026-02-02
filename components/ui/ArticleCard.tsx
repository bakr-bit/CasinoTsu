import Link from 'next/link';

export interface ArticleMeta {
  // Common fields
  rating?: number;
  score?: number;

  // Slots
  provider?: string;
  rtp?: string;
  volatility?: string;

  // Reviews
  bonusHeadline?: string;

  // Payment
  type?: string;
  jpySupported?: boolean;

  // Providers
  gameCount?: number;
  gameTypes?: string[];

  // Poker/Roulette
  difficulty?: string;
  category?: string;
  wheelType?: string;
  houseEdge?: string;

  // Live Casino
  gameType?: string;

  // Crash Games
  maxMultiplier?: string;

  // Game Shows
  providerName?: string;
}

export interface ArticleCardProps {
  slug: string;
  title: string;
  description?: string;
  lastUpdated?: string;
  category: string;
  meta?: ArticleMeta;
  imageUrl?: string;
}

// Category-specific gradient colors
const categoryGradients: Record<string, string> = {
  slots: 'from-indigo-600 via-indigo-700 to-indigo-800',
  reviews: 'from-violet-600 via-purple-700 to-violet-800',
  bonuses: 'from-amber-600 via-orange-600 to-amber-700',
  payment: 'from-emerald-600 via-teal-700 to-emerald-800',
  providers: 'from-sky-600 via-blue-700 to-sky-800',
  poker: 'from-red-600 via-rose-700 to-red-800',
  roulette: 'from-green-600 via-emerald-700 to-green-800',
  'live-casino': 'from-red-600 via-rose-700 to-red-800',
  'crash-games': 'from-violet-600 via-purple-700 to-violet-800',
  'game-shows': 'from-amber-600 via-orange-600 to-amber-700',
  baccarat: 'from-red-600 via-rose-700 to-red-800',
  blackjack: 'from-green-600 via-emerald-700 to-green-800',
};

const defaultGradient = 'from-indigo-600 via-indigo-700 to-indigo-800';

/**
 * Reusable article card component for pillar page listings
 */
export function ArticleCard({
  slug,
  title,
  description,
  lastUpdated,
  category,
  meta = {},
  imageUrl,
}: ArticleCardProps) {
  const href = `/${category}/${slug}`;
  const gradient = categoryGradients[category] || defaultGradient;

  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl border-0 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
      {/* Header with gradient and shine - or image */}
      {imageUrl ? (
        <div className="aspect-video bg-gray-100 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Gradient overlay on image */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-40 group-hover:opacity-30 transition-opacity`} />
        </div>
      ) : (
        <div className={`h-2 bg-gradient-to-r ${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
        </div>
      )}

      <div className="p-4">
        {/* Meta badges */}
        <div className="flex flex-wrap gap-2 mb-2">
          <MetaBadges category={category} meta={meta} />
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-1">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{description}</p>
        )}

        {/* Last updated */}
        {lastUpdated && (
          <p className="text-xs text-gray-400">
            更新: {formatDate(lastUpdated)}
          </p>
        )}
      </div>
    </Link>
  );
}

/**
 * Category-specific meta badge rendering
 */
function MetaBadges({ category, meta }: { category: string; meta: ArticleMeta }) {
  const badges: React.ReactNode[] = [];

  // Rating/Score badge (common)
  if (meta.rating !== undefined) {
    badges.push(
      <Badge key="rating" variant="gold">
        {'★'.repeat(Math.round(meta.rating))} {meta.rating.toFixed(1)}
      </Badge>
    );
  } else if (meta.score !== undefined) {
    badges.push(
      <Badge key="score" variant="gold">
        {meta.score}/10
      </Badge>
    );
  }

  // Category-specific badges
  switch (category) {
    case 'slots':
      if (meta.provider) {
        badges.push(<Badge key="provider" variant="blue">{meta.provider}</Badge>);
      }
      if (meta.rtp) {
        badges.push(<Badge key="rtp" variant="green">RTP: {meta.rtp}</Badge>);
      }
      if (meta.volatility) {
        badges.push(<Badge key="volatility" variant="purple">{meta.volatility}</Badge>);
      }
      break;

    case 'reviews':
      if (meta.bonusHeadline) {
        badges.push(<Badge key="bonus" variant="green">{meta.bonusHeadline}</Badge>);
      }
      break;

    case 'payment':
      if (meta.type) {
        badges.push(<Badge key="type" variant="blue">{getPaymentTypeLabel(meta.type)}</Badge>);
      }
      if (meta.jpySupported) {
        badges.push(<Badge key="jpy" variant="green">JPY対応</Badge>);
      }
      break;

    case 'providers':
      if (meta.gameCount) {
        badges.push(<Badge key="games" variant="blue">{meta.gameCount}+ ゲーム</Badge>);
      }
      if (meta.gameTypes && meta.gameTypes.length > 0) {
        badges.push(<Badge key="types" variant="purple">{meta.gameTypes[0]}</Badge>);
      }
      break;

    case 'poker':
    case 'roulette':
      if (meta.category) {
        badges.push(<Badge key="cat" variant="blue">{getCategoryLabel(meta.category)}</Badge>);
      }
      if (meta.difficulty) {
        badges.push(<Badge key="diff" variant="purple">{getDifficultyLabel(meta.difficulty)}</Badge>);
      }
      if (meta.wheelType) {
        badges.push(<Badge key="wheel" variant="green">{meta.wheelType}</Badge>);
      }
      if (meta.houseEdge) {
        badges.push(<Badge key="edge" variant="gray">控除率: {meta.houseEdge}</Badge>);
      }
      break;

    case 'live-casino':
      if (meta.gameType) {
        badges.push(<Badge key="gameType" variant="blue">{meta.gameType}</Badge>);
      }
      if (meta.providerName) {
        badges.push(<Badge key="provider" variant="purple">{meta.providerName}</Badge>);
      }
      break;

    case 'crash-games':
      if (meta.maxMultiplier) {
        badges.push(<Badge key="mult" variant="green">最大: {meta.maxMultiplier}</Badge>);
      }
      if (meta.providerName) {
        badges.push(<Badge key="provider" variant="blue">{meta.providerName}</Badge>);
      }
      break;

    case 'game-shows':
      if (meta.providerName) {
        badges.push(<Badge key="provider" variant="blue">{meta.providerName}</Badge>);
      }
      if (meta.category) {
        badges.push(<Badge key="cat" variant="purple">{meta.category}</Badge>);
      }
      break;

    case 'bonuses':
      if (meta.type) {
        badges.push(<Badge key="type" variant="green">{meta.type}</Badge>);
      }
      break;
  }

  return <>{badges}</>;
}

type BadgeVariant = 'blue' | 'green' | 'purple' | 'gold' | 'gray' | 'indigo';

function Badge({
  children,
  variant = 'gray',
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
}) {
  const variantClasses: Record<BadgeVariant, string> = {
    blue: 'bg-sky-100 text-sky-700 border border-sky-200',
    green: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    purple: 'bg-violet-100 text-violet-700 border border-violet-200',
    gold: 'bg-amber-100 text-amber-700 border border-amber-200',
    gray: 'bg-gray-100 text-gray-600 border border-gray-200',
    indigo: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
  };

  return (
    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-lg ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function getPaymentTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    crypto: '仮想通貨',
    ewallet: '電子ウォレット',
    bank: '銀行振込',
    card: 'クレジットカード',
    other: 'その他',
  };
  return labels[type] || type;
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    variant: 'バリアント',
    strategy: '戦略',
    rules: 'ルール',
    guide: 'ガイド',
  };
  return labels[category] || category;
}

function getDifficultyLabel(difficulty: string): string {
  const labels: Record<string, string> = {
    beginner: '初心者向け',
    intermediate: '中級者向け',
    advanced: '上級者向け',
  };
  return labels[difficulty] || difficulty;
}
