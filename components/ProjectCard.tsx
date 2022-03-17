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
    <div className='w-full flex py-12'>
      <div className='flex'>
        <div className='relative lg:w-[85em] h-[30em] overflow-hidden rounded-xl animate-zoom-out'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-l from-primary-dark-500 to-transparent z-10'></div>
          <Image
            src={project.coverImg}
            alt={project.title}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='z-20 py-12 w-full'>
          <div className='-translate-x-52 flex gap-6 items-center animate-slide-in-offset'>
            <NextButton nextProject={nextProject} />
            <h4 className='text-white text-4xl uppercase font-bold w-[20ch] select-none'>
              {project.title}
            </h4>
          </div>
          <div className='text-primary-dark-200 w-[75ch] px-12 pt-20 flex flex-col gap-12 animate-pop-up'>
            <div>
              <ul className='grid grid-flow-col gap-6 w-1/2 py-2'>
                {project.tech.map((tech: string) => (
                  <Tech key={tech} tech={tech} />
                ))}
              </ul>
              <p className='w-full'>{project.excerpt}</p>
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
