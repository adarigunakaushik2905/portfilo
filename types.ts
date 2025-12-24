import { LucideIcon } from 'lucide-react';

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  techStack: string[];
  metrics?: string;
}

export interface Achievement {
  title: string;
  year: string;
  icon?: LucideIcon;
}

export interface Leadership {
  role: string;
  organization: string;
  description: string[];
}