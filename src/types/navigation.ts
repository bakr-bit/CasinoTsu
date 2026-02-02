export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  locale: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  responsibleGaming: {
    hotline: string;
    website: string;
    message: string;
  };
}

export interface EvaluationCriterion {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  checkpoints: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Author {
  slug: string;
  name: string;
  photo: string;
  role: string;
  bio: string;
  experienceYears: number;
  specializations: string[];
}
