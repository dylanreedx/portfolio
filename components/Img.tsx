import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

const Img = ({ src, alt, priority = false }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout='fill'
      objectFit='cover'
      objectPosition='center'
      priority={priority}
    />
  );
};

export default Img;
