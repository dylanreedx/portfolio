import React from 'react';
import Link from 'next/link';
import { QueryClient, useMutation, useQuery } from 'react-query';
import api from 'axiosStore';
import { ProjectType } from 'types';
import { useRouter } from 'next/router';
import ProjectCard from 'components/admin/ProjectCard';

type Props = {};

const Projects = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = new QueryClient();
  const fetchProjects = async () => {
    const { data } = await api.get('/project');
    return data;
  };
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery<ProjectType[], Error>(['projects', id], fetchProjects);
  const deleteProject = useMutation(
    (id: string) => {
      return api.delete(`/project/${id}`);
    },
    {
      onSuccess: (id) => queryClient.invalidateQueries(['projects', id]),
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
              <ProjectCard
                key={project.id}
                project={project}
                deleteProject={deleteProject}
              />
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
