import { fetchProjects, useProjects } from 'hooks/useProjects';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { ProjectType } from 'types';
import { ProjectCard } from './ProjectCard';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('projects', fetchProjects);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export function ProjectSection() {
  const { data: projects, isLoading, error } = useProjects();
  const [selectedProject, setSelectedProject] = React.useState<number>(0);

  const nextProject = () => {
    // @ts-ignore
    if (selectedProject === projects.length - 1) {
      setSelectedProject(0);
    } else {
      setSelectedProject(selectedProject + 1);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      setSelectedProject((prev) => (prev + 1) % projects.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [projects, selectedProject]);
  return (
    <section>
      <h2 className='text-primary-dark-100 text-3xl md:text-4xl lg:text-5xl font-bold italic py-12 md:pt-20'>
        WORK
      </h2>
      {isLoading && (
        <div className='grid place-items-center min-h-[20vh]'>
          <div className='loader ease-linear rounded-full border-4 border-t-4 border-primary-dark-400 h-12 w-12 mb-4'></div>
        </div>
      )}
      {error && <p>Error: {error.message}</p>}
      {projects && (
        <ProjectCard
          key={selectedProject}
          project={projects[selectedProject]}
          nextProject={nextProject}
        />
      )}
    </section>
  );
}
