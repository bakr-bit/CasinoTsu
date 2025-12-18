export interface GuideData {
  slug: string;
  name: string;
  nameJa: string;
  category: 'beginner' | 'strategy' | 'poker' | 'casino' | 'bonus' | 'safety' | 'games';
  targetAudience?: 'beginner' | 'intermediate' | 'advanced' | 'all';
  highlights: string[];
  relatedGuides?: string[];
  recommendedCasinos?: string[];
  meta: {
    title: string;
    description: string;
  };
}
