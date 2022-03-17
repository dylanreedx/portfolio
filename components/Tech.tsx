import React from 'react';

type Props = {
  tech: React.ReactNode;
};

const Tech = ({ tech }: Props) => {
  return (
    <div
      className={`rounded-full py-2 px-4 w-full whitespace-nowrap text-xs bg-primary-dark-700 text-center animate-slide-down z-10`}
    >
      {tech}
    </div>
  );
};

export default Tech;
