import React from 'react';
import { IconList } from './IconList';
export function HeroSection({}) {
  return (
    <section className='text-primary-dark-100 flex lg:flex-row gap-6 py-6 flex-col-reverse justify-between'>
      <div className='flex flex-col gap-6'>
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
