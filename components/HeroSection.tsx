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
          Bringing Ideas to Life: A Full-Stack Software Engineer Who Loves
          <span className='text-primary-500 animate-to-italic inline-block skew-x-[-20deg]'>
            learning
          </span>
          and solving Problems with a{' '}
          <div className='text-primary-500 animate-to-italic inline-block skew-x-[-20deg]'>
            smile
          </div>
          .
        </h1>
        <p className='lg:w-[72ch] text-primary-dark-300'>
          Hi, I&apos;m a highly motivated and adaptable software engineer with
          experience in developing and implementing software solutions for
          various organizations. I have a passion for using technology to create
          innovative and impactful products that improve people&apos;s lives.
        </p>
      </div>
      <IconList />
    </section>
  );
}
