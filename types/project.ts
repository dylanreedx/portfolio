export interface ProjectType {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  coverImg: string;
  galleryImg?: string[];
  tech: string[];
  gitHubLink: string;
  liveLink: string;
  projectStartDate: Date;
  projectEndDate: Date;
}
