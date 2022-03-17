import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  size?: string;
  icon?: string;
  link: string;
};

const Icon = (props: Props) => {
  return (
    <div
      className={`relative w-${props.size} h-${props.size} hover:scale-110 rounded-full duration-200 cursor-pointer`}
    >
      <Link href={props.link}>
        <a>
          <Image
            src={`/${props.icon}.svg`}
            alt='github'
            layout='fill'
            width={100}
            height={100}
            objectFit='cover'
            objectPosition='center'
          />
        </a>
      </Link>
    </div>
  );
};

export default Icon;
