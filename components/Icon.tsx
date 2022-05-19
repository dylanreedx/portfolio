import Image from 'next/image';
import React from 'react';

type Props = {
  size?: string;
  icon?: string;
  link?: string;
};

const Icon = (props: Props) => {
  return (
    <div
      className={`relative w-${props.size} h-${props.size} hover:scale-110 rounded-full duration-200 cursor-pointer`}
    >
      <a href={props.link ? props.link : ''} target='_blank' rel='noreferrer'>
        <Image
          src={`/${props.icon}.svg`}
          alt='github'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </a>
    </div>
  );
};

export default Icon;
