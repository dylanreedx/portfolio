import React from 'react';
import Link from 'next/link';

type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <Link href='/admin/projects/create'>
          <a>Create Project</a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
