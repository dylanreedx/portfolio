import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

// delete selected project
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get project id from url
  const projectId = req.query.id;
  if (!projectId) {
    res.status(400).json({ message: 'id is required' });
    return;
  }
  if (req.method === 'DELETE') {
    handleDELETE(projectId as string, res);
  }
  if (req.method === 'GET') {
    handleGET(projectId as string, res);
  }
  if (req.method === 'PUT') {
    handlePUT(projectId as string, req, res);
  }
}

async function handleGET(projectSlug: string, res: NextApiResponse) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        slug: projectSlug,
      },
    });
    res.setPreviewData({});
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function handleDELETE(projectId: string, res: NextApiResponse) {
  try {
    const project = await prisma.project.delete({
      where: {
        id: projectId,
      },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function handlePUT(
  projectId: string,
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const project = await prisma.project.update({
      where: {
        slug: projectId,
      },
      data: {
        title: req.body.title,
        description: req.body.description,
        coverImg: req.body.coverImg,
        excerpt: req.body.excerpt,
        gitHubLink: req.body.gitHubLink,
        liveLink: req.body.liveLink,
        projectEndDate: req.body.projectEndDate,
        projectStartDate: req.body.projectStartDate,
        slug: req.body.slug,
        tech: req.body.tech,
        galleryImg: req.body.galleryImg,
      },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
