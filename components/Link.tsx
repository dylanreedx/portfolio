import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  icon?: string;
};

const Link = (props: Props) => {
  return (
    <div className='flex items-center gap-2 py-2 px-6 bg-primary-dark-900 h-fit rounded-full'>
      {props.children}
    </div>
  );
};

export default Link;
