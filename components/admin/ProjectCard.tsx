import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProjectType } from 'types';

type Props = {
  project: ProjectType;
  deleteProject: any;
};

const ProjectCard = ({ project, deleteProject }: Props) => {
  return (
    <li
      key={project.id}
      className='p-4 bg-white rounded flex justify-between items-center'
    >
      <div className='flex items-center gap-6'>
        <div className='w-32 h-full overflow-hidden rounded flex-shrink-0'>
          <Image
            src={project.coverImg}
            alt={project.title}
            layout='responsive'
            objectFit='cover'
            width={200}
            height={200}
          />
        </div>
        <div>
          <Link href={`/admin/projects/${project.slug}`}>
            <a className='text-xl font-bold'>{project.title}</a>
          </Link>
          <p>{project.excerpt}</p>
        </div>
      </div>
      <div
        className='cursor-pointer ml-20 mr-4'
        onClick={() => deleteProject.mutate(project.id)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>
      </div>
    </li>
  );
};

export default ProjectCard;
