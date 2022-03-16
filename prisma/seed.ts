import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
  await prisma.project.create({
    data: {
      slug: 'test-project',
      title: 'Project 1',
      description: 'This is the first project',
      excerpt: 'This is the first project',
      coverImg: 'https://picsum.photos/200/300',
      tech: ['React', 'Node', 'Express'],
      galleryImg: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      gitHubLink: 'https://github.com',
      liveLink: 'https://www.google.com',
      projectStartDate: new Date(),
      projectEndDate: new Date(),
    },
  });
  await prisma.experience.create({
    data: {
      company: 'Company 1',
      slug: 'company-1',
      jobTitle: 'Job Title 1',
      description: 'This is the first experience',
      excerpt: 'This is the first experience',
      companyLogo: 'https://picsum.photos/200/300',
      workStartDate: new Date(),
      workEndDate: new Date(),
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
