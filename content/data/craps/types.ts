export interface CrapsData {
  slug: string;
  name: string;
  nameJa: string;
  category: 'overview' | 'rules' | 'strategy' | 'variants';
  highlights: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  relatedTopics?: string[];
  recommendedCasinos: string[];
  meta: {
    title: string;
    description: string;
  };
}
