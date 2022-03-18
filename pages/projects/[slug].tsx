import { fetchProject, useProject } from 'hooks/useProject';
import React from 'react';
import { ProjectType } from 'types';
import api from 'axiosStore';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useQuery } from 'react-query';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import Tech from 'components/Tech';

type Props = {
  project: ProjectType;
  slug: string;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/project');
  const paths = data.map((project: ProjectType) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IParams;
  const project: ProjectType = await fetchProject(slug);
  return { props: { project, slug } };
};

const ProjectDetails = ({ project, slug }: Props) => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const { data } = useQuery<ProjectType, Error>(
    'project',
    () => fetchProject(slug),
    {
      initialData: project,
    }
  );
  const nextImage = () => {
    // @ts-ignore
    if (selectedProject === project.galleryImg.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      setSelectedImage((prev) => (prev + 1) % data.galleryImg.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [data, selectedImage]);

  return (
    <main className='bg-primary-dark-500 min-h-screen lg:p-16 text-primary-dark-100'>
      {data && (
        <>
          {/* project main section */}
          <section className='relative overflow-hidden rounded-2xl z-0 flex'>
            {/* links */}
            <div></div>
            {/* image gradient */}
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary-dark-500 to-transparent z-20'></div>
            {/* project image wrapper */}
            <div className='w-full min-h-[65vh] z-10'>
              <Image
                // @ts-ignore
                src={data.galleryImg[selectedImage]}
                alt={data.title}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center'}
                priority
              />
            </div>
          </section>
          <section className='z-50 px-12 xl:-translate-y-28 flex flex-col gap-4'>
            {/* tech */}
            <div className='grid grid-flow-col gap-4 w-1/3'>
              {data.tech.map((tech: string) => (
                <Tech key={tech} tech={tech} />
              ))}
            </div>
            <h1 className='xl:text-7xl font-bold w-1/2 z-50'>{data.title}</h1>
            <p className='text-primary-dark-300 w-3/4'>{data.excerpt}</p>
          </section>
          <section className='xl:px-52 flex flex-col gap-12'>
            <section className='flex flex-col gap-6'>
              <h2 className='uppercase font-bold xl:text-5xl text-center'>
                About the Project
              </h2>
              <p className='text-primary-dark-300'>{data.description}</p>
            </section>
            <section className='grid place-items-center'>
              <div className='grid xl:grid-flow-col gap-6 w-full'>
                {/* @ts-ignore */}
                {data?.galleryImg.map((img: string) => (
                  <div
                    className='relative w-full h-72 overflow-hidden rounded-xl'
                    key={img}
                  >
                    <Image
                      src={img}
                      alt={data.title}
                      layout={'fill'}
                      objectFit={'cover'}
                      objectPosition={'center'}
                    />
                  </div>
                ))}
              </div>
            </section>
          </section>
        </>
      )}
    </main>
  );
};

export default ProjectDetails;
