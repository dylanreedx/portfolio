import { fetchProject } from 'hooks/useProject';
import React from 'react';
import { ProjectType } from 'types';
import { useQuery } from 'react-query';
import { ParsedUrlQuery } from 'querystring';
import Tech from 'components/Tech';
import Img from 'components/Img';
import Icon from 'components/Icon';
import Link from 'next/link';
import { useClientRouter } from 'use-client-router';

const ProjectDetails = () => {
  const router = useClientRouter();
  const { slug } = router.query;
  const [selectedImage, setSelectedImage] = React.useState(0);
  const {
    data: project,
    isLoading,
    error,
  } = useQuery<ProjectType, Error>(['project', slug], () =>
    fetchProject(slug as string)
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      setSelectedImage((prev) => (prev + 1) % project.galleryImg.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [project, selectedImage]);

  return (
    <main className='bg-primary-dark-500 min-h-screen p-6 md:p-12 lg:p-16 3xl:px-[72em] text-primary-dark-100'>
      <Link href={'/'}>
        <a className='flex items-center mb-6 mt-2 w-fit bg-primary-dark-600 rounded-full py-2 px-8 h-fit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 animate-bounce-horizontal'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={4}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
          <span className='font-bold'>Back</span>
        </a>
      </Link>
      {isLoading && (
        <div className='grid place-items-center min-h-[20vh]'>
          <div className='loader ease-linear rounded-full border-4 border-t-4 border-primary-dark-400 h-12 w-12 mb-4'></div>
        </div>
      )}
      {error && (
        <div className='grid place-items-center min-h-[20vh]'>
          <div className='text-center text-primary-dark-100'>
            <h1 className='text-4xl font-bold'>Error: {error.message}</h1>
            <p className='text-lg'>
              Sorry, we couldn&apos;t find the project you were looking for.
            </p>
          </div>
        </div>
      )}
      {project && !error && (
        <>
          {/* project main section */}
          <section className='relative overflow-hidden rounded-2xl flex w-full z-0'>
            {/* links */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-6 z-50 w-full p-2 md:p-6 absolute top-5 left-5 animate-pop-up'>
              {project.liveLink && (
                <div className='flex flex-0 items-center gap-2 py-2 px-6 bg-primary-dark-900 hover:bg-primary-dark-500 ease-in-out duration-200 h-fit rounded-full w-fit'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 stroke-primary-dark-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                    />
                  </svg>
                  <a
                    target={'_blank'}
                    rel='noopener noreferrer'
                    href={project.liveLink}
                    className='text-xs whitespace-nowrap'
                  >
                    View Project
                  </a>
                </div>
              )}
              <div className='flex items-center gap-2 py-2 px-6 bg-primary-dark-900 hover:bg-primary-dark-500 h-fit rounded-full w-fit'>
                <Icon icon='GitHub' size='4' />
                <a
                  target={'_blank'}
                  rel='noopener noreferrer'
                  href={project.gitHubLink}
                  className='text-xs whitespace-nowrap'
                >
                  View Code
                </a>
              </div>
            </div>
            {/* image gradient */}
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary-dark-500 to-transparent z-20'></div>
            {/* project image wrapper */}
            <div className='min-w-full min-h-[40vh] xl:min-h-[65vh] z-10 animate-pop-up flex-1'>
              <Img
                // @ts-ignore
                src={project.galleryImg[selectedImage]}
                alt={project.title}
                priority
              />
            </div>
          </section>
          <section className='z-50 px-6 xl:px-12 -translate-y-16 lg:-translate-y-28 flex flex-col gap-4 animate-slide-up-mobile-offset-details lg:animate-slide-up-offset'>
            {/* tech */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 md:w-1/2 xl:w-1/3 order-3 md:order-1'>
              {project?.tech.map((tech: string) => (
                <Tech key={tech} tech={tech} />
              ))}
            </div>
            <h1 className='text-4xl md:text-5xl xl:text-7xl font-bold w-full md:w-3/4 xl:w-1/2 z-50 order-1 md:order-2'>
              {project.title}
            </h1>
            <p className='text-primary-dark-300 lg:w-3/4 order-2 md:order-3'>
              {project.excerpt}
            </p>
          </section>
          <section className='xl:px-52 flex flex-col gap-12'>
            <section className='flex flex-col gap-6'>
              <h2 className='uppercase font-bold text-4xl xl:text-5xl text-center'>
                About the Project
              </h2>
              <p className='text-primary-dark-300'>{project.description}</p>
            </section>
            <section className='grid place-items-center'>
              <div className='grid xl:grid-flow-col gap-6 w-full'>
                {/* @ts-ignore */}
                {project?.galleryImg.map((img: string, idx: number) => (
                  <div
                    className='relative w-full h-72 overflow-hidden rounded-xl'
                    key={idx}
                  >
                    <Img src={img} alt={project.title} />
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
