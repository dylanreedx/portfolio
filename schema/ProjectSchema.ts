import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  description: z.string(),
  coverImg: z.string(),
  galleryImg: z.string().array(),
  gitHubLink: z.string(),
  liveLink: z.string().optional(),
  projectStartDate: z.any().optional(),
  projectEndDate: z.any().optional(),
  tech: z.string().array(),
});
