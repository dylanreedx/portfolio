import { useProjects } from 'hooks/useProjects';
import React from 'react';
import { ProjectType } from 'types';
import { ProjectCard } from './ProjectCard';
export function ProjectSection({}) {
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
      {isLoading && <p>Loading...</p>}
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
