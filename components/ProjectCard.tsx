import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProjectType } from 'types';
import NextButton from './NextButton';
import Tech from './Tech';

interface Props {
  project: ProjectType;
  nextProject: () => void;
}

export function ProjectCard({ project, nextProject }: Props) {
  return (
    <div className='w-full flex flex-col lg:flex-col lg:py-12'>
      <div className='flex flex-col xl:flex-row'>
        <div className='relative w-full h-52 md:h-72 xl:w-[85em] xl:h-[30em] overflow-hidden rounded-xl animate-pop-up xl:animate-zoom-out'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t xl:bg-gradient-to-l from-primary-dark-500 to-transparent z-10'></div>
          <Image
            src={project.coverImg}
            alt={project.title}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='z-20 lg:py-12 w-full'>
          <div className='-translate-y-24 lg:-translate-y-32 xl:-translate-y-0 xl:-translate-x-52 flex flex-col xl:flex-row gap-2 xl:gap-6 items-start xl:items-center animate-slide-up-mobile-offset lg:animate-slide-in-offset-lg xl:animate-slide-in-offset'>
            <NextButton nextProject={nextProject} />
            <h4 className='text-white text-3xl md:text-4xl lg:text-5xl md:w-1/2 uppercase font-bold lg:w-[20ch] select-none'>
              {project.title}
            </h4>
          </div>
          <div className='text-primary-dark-200 lg:w-[75ch] xl:px-12 xl:pt-20 flex flex-col gap-12 animate-slide-in lg:animate-pop-up -mt-12 md:-mt-14 xl:-mt-6'>
            <div>
              <ul className='grid grid-flow-col gap-6 w-1/2 py-2'>
                {project.tech.map((tech: string) => (
                  <Tech key={tech} tech={tech} />
                ))}
              </ul>
              <p className='w-full lg:text-xl'>{project.excerpt}</p>
            </div>
            <Link href={`/projects/${project.slug}`}>
              <a className='bg-primary-500 py-4 px-6 rounded max-w-fit'>
                View Project
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
