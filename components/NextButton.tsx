import React from 'react';

type Props = {
  nextProject: any;
};

const NextButton = ({ nextProject }: Props) => {
  return (
    <svg
      onClick={() => nextProject()}
      xmlns='http://www.w3.org/2000/svg'
      className='h-12 w-12 lg:h-16 lg:w-16 p-[0.3em] -rotate-90 lg:rotate-0 stroke-white hover:stroke-black hover:bg-primary-dark-100 duration-200 cursor-pointer rounded-full border-2 delay-200 z-50'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
    </svg>
  );
};

export default NextButton;
