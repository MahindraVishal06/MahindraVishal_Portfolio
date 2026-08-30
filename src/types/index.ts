export interface ContributionGroup {
  subtopic: string;
  bulletPoints: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Professional' | 'Personal' | 'GameJam';
  organization?: string;
  organizationUrl?: string;
  teamSize: number;
  description: string;
  previewVideo: string;
  heroVideo: string;
  youtubeUrl?: string;
  image: string;
  iconLogo?: string;
  screenshots: string[];
  tags: string[];
  role: string;
  duration: string;
  technologies: string[];
  features: string[];
  aboutParagraphs: string[];
  contributions: ContributionGroup[];
  videoOrientation?: 'landscape' | 'portrait';
  mediaOrientation?: 'landscape' | 'portrait' | 'horizontal' | 'vertical';
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}



export interface GameplaySystem {
  id: string;
  title: string;
  shortDesc: string;
  architecture: string;
  keyFeatures: string[];
  codeSnippet: string;
  iconName: string;
  complexity: 'Advanced' | 'Intermediate' | 'Expert';
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'Work' | 'Internship' | 'Certification';
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}
