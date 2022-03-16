import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.project.findMany({
    where: {
      slug: req.query.slug as string,
    },
  });

  res.json(result);
}
