export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  keyFeatures: string[];
  deliverables: string[];
  applications: string[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  sector: string;
  client: string;
  location: string;
  completionYear: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  impact: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials?: string;
  department?: string;
  focusArea?: string;
  bio?: string;
  description?: string;
  image: string;
  specialties?: string[];
  responsibilities?: string[];
}
