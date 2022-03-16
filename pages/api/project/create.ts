import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { ProjectType } from 'types';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    title,
    description,
    coverImg,
    excerpt,
    gitHubLink,
    liveLink,
    projectEndDate,
    projectStartDate,
    slug,
    tech,
    galleryImg,
  } = <ProjectType>req.body;

  const result = await prisma.project.create({
    data: {
      title,
      description,
      coverImg,
      excerpt,
      gitHubLink,
      liveLink,
      projectEndDate,
      projectStartDate,
      slug,
      tech,
      galleryImg,
    },
  });

  res.json(result);
}
