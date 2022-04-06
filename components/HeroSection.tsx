import React, { useRef } from 'react';
import { IconList } from './IconList';
export function HeroSection({}) {
  const header = useRef<HTMLDivElement>(null);

  const THRESHOLD = 5;

  function handleHover(e: any) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    /* @ts-ignore */
    header.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1) scale(1.0125)`;
  }

  function resetStyles(e: any) {
    /* @ts-ignore */
    header.current.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }

  return (
    <section className='text-primary-dark-100 flex lg:flex-row gap-6 py-6 flex-col-reverse justify-between'>
      <div
        className='flex flex-col gap-6 duration-500 ease-in-out animate-slide-down'
        ref={header}
        onMouseMove={handleHover}
        onMouseLeave={resetStyles}
      >
        <h1 className='uppercase font-bold text-3xl lg:text-6xl lg:w-[21ch]'>
          i’m dylan reed, a canadian
          <span className='text-primary-500 animate-to-italic inline-block skew-x-[-20deg]'>
            software engineer
          </span>
          . passion to learn and critical to provide a
          <div className='text-primary-500 animate-to-italic inline-block skew-x-[-20deg]'>
            great ux
          </div>
          .
        </h1>
        <p className='lg:w-[72ch] text-primary-dark-300'>
          Hi, my name is Dylan, and I am looking to advance myself further with
          both experience and into the industry. I have a deep passion to create
          and learn with modern technologies such as a few examples, TypeScript,
          React, NodeJS, GraphQL and other tooling that provides great DX while
          providing amazing UX as well.
        </p>
      </div>
      <IconList />
    </section>
  );
}
