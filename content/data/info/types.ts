export interface InfoData {
  slug: string;
  name: string;
  nameJa: string;
  category: 'license' | 'history' | 'people' | 'legal' | 'industry' | 'trivia';
  highlights: string[];
  relatedTopics?: string[];
  meta: {
    title: string;
    description: string;
  };
}
