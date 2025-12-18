export interface OfferData {
  slug: string;
  name: string;
  nameJa: string;
  casinoSlug: string;
  offerType: 'no-deposit' | 'welcome' | 'exclusive' | 'seasonal' | 'reload';
  bonusAmount?: string;
  wagering?: string;
  bonusCode?: string;
  validity?: string;
  highlights: string[];
  meta: {
    title: string;
    description: string;
  };
}
