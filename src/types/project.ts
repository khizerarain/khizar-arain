export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  coverImage?: string;
  galleryImages: string[];
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  status: string;
  createdAt: string;
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  shortDescription: string;
  coverImage?: string;
  galleryImages?: string[];
  technologies?: string[];
  category: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
  status?: string;
  createdAt: string;
}
