import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export const getProjects = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const result = await prisma.project.findMany();

  return res.json(result);
};
