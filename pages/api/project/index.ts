import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // find all projects
  const projects = await prisma.project.findMany();

  res.json(projects);
}
