import React from 'react';
import Link from 'next/link';
import { QueryClient, useMutation, useQuery } from 'react-query';
import api from 'axiosStore';
import { ProjectType } from 'types';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {};

const Projects = (props: Props) => {
  const router = useRouter();
  const client = new QueryClient();
  const fetchProjects = async () => {
    const { data } = await api.get('/project');
    return data;
  };
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery<ProjectType[], Error>('projects', fetchProjects);
  const deleteProject = useMutation(
    (id: string) => {
      return api.delete(`/project/${id}`);
    },
    {
      onSuccess: () => client.invalidateQueries('projects'),
    }
  );

  React.useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('token') !==
        process.env.NEXT_PUBLIC_ADMIN_ACCESS_TOKEN
    ) {
      router.push('/');
    }
  });

  return typeof window !== 'undefined' &&
    localStorage.getItem('token') ===
      process.env.NEXT_PUBLIC_ADMIN_ACCESS_TOKEN ? (
    <main>
      <header className='flex justify-between items-center p-6'>
        <h1 className='text-4xl'>Projects</h1>
        <div>
          <Link href='/admin/projects/create'>
            <a>Create Project</a>
          </Link>
        </div>
      </header>
      <section className='bg-gray-100 w-full p-6 min-h-screen'>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {projects && (
          <ul className='flex flex-col gap-6 '>
            {projects.map((project: ProjectType) => (
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
            ))}
          </ul>
        )}
      </section>
    </main>
  ) : (
    <p>Unauthorized</p>
  );
};

export default Projects;
