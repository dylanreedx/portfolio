import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ProjectType } from 'types';
import api from 'axiosStore';
import InputWrapper from 'components/InputWrapper';
import Link from 'next/link';
import Router from 'next/router';
import { titleToSlug } from 'lib/titleToSlug';

const projectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  description: z.string(),
  coverImg: z.string(),
  galleryImg: z.string().array(),
  gitHubLink: z.string(),
  liveLink: z.string().optional(),
  projectStartDate: z.any().optional(),
  projectEndDate: z.any().optional(),
  tech: z.string().array(),
});

const Create = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
    getValues,
  } = useForm<ProjectType>({
    resolver: zodResolver(projectSchema),
    mode: 'onChange',
  });
  const onSubmit = async (data: ProjectType, e: any) => {
    try {
      await api.post(
        '/project/create',
        {
          ...data,
          projectStartDate: new Date(data.projectStartDate),
          projectEndDate: new Date(data.projectEndDate),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      reset();
      await Router.push('/admin/projects');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-100 flex-col flex gap-2 p-12'
      >
        <div className='flex w-full gap-4'>
          <InputWrapper
            error={errors.title && errors.title.message}
            label='Project Title'
          >
            <Controller
              name='title'
              render={({ field }) => (
                <input
                  placeholder='Title'
                  className='p-6'
                  {...field}
                  onChange={(e) => {
                    setValue('title', e.target.value);
                    setValue('slug', titleToSlug(getValues('title')));
                  }}
                />
              )}
              control={control}
            />
          </InputWrapper>
          <InputWrapper
            error={errors.slug && errors.slug.message}
            label='Project Slug'
          >
            <Controller
              name='slug'
              render={({ field }) => (
                <input className='p-6' placeholder='Slug' {...field} />
              )}
              control={control}
            />
          </InputWrapper>
        </div>
        <InputWrapper
          error={errors.excerpt && errors.excerpt.message}
          label='Project Excerpt'
        >
          <Controller
            name='excerpt'
            render={({ field }) => (
              <input className='p-6' placeholder='Excerpt' {...field} />
            )}
            control={control}
          />
        </InputWrapper>
        <InputWrapper
          error={errors.slug && errors.slug.message}
          label='Project Description'
        >
          <Controller
            name='description'
            render={({ field }) => (
              <textarea
                rows={6}
                className='p-6'
                placeholder='Project Description'
                {...field}
              />
            )}
            control={control}
          />
        </InputWrapper>
        <InputWrapper
          error={errors.tech && errors.tech[0].message}
          label='Project Tech'
        >
          <Controller
            name='tech'
            render={({ field }) => (
              <input
                className='p-6'
                placeholder='Tech'
                {...field}
                onChange={(e) => field.onChange(e.target.value.split(','))}
              />
            )}
            control={control}
          />
        </InputWrapper>
        <InputWrapper
          error={errors.coverImg && errors.coverImg.message}
          label='Project Cover Image'
        >
          <Controller
            name='coverImg'
            render={({ field }) => (
              <input className='p-6' placeholder='Cover Image' {...field} />
            )}
            control={control}
          />
        </InputWrapper>
        <InputWrapper
          error={errors.galleryImg && errors.galleryImg[0].message}
          label='Project Image Gallery'
        >
          <Controller
            render={({ field, fieldState }) => (
              <input
                className='p-6'
                placeholder='Image Gallery'
                {...field}
                onChange={(e) => field.onChange(e.target.value.split(','))}
              />
            )}
            name='galleryImg'
            control={control}
          />
        </InputWrapper>
        <div className='flex gap-4'>
          <InputWrapper
            error={errors.gitHubLink && errors.gitHubLink.message}
            label='Project GitHub Link'
          >
            <Controller
              name='gitHubLink'
              render={({ field }) => (
                <input className='p-6' placeholder='GitHub Link' {...field} />
              )}
              control={control}
            />
          </InputWrapper>
          <InputWrapper
            error={errors.liveLink && errors.liveLink.message}
            label='Project Deployed Link'
          >
            <Controller
              name='liveLink'
              render={({ field }) => (
                <input className='p-6' placeholder='Live Link' {...field} />
              )}
              control={control}
            />
          </InputWrapper>
        </div>
        <div className='flex gap-4'>
          <InputWrapper
            error={errors.projectStartDate && errors.projectStartDate.message}
            label='Project Start Date'
          >
            {errors.projectEndDate && <p>{errors.projectEndDate.message}</p>}
            <Controller
              name='projectStartDate'
              render={({ field }) => (
                // @ts-ignore
                <input className='p-6' type='date' {...field} />
              )}
              control={control}
            />
          </InputWrapper>
          <InputWrapper
            error={errors.projectEndDate && errors.projectEndDate.message}
            label='Project End Date'
          >
            <Controller
              name='projectEndDate'
              render={({ field }) => (
                // @ts-ignore
                <input className='p-6' type='date' {...field} />
              )}
              control={control}
            />
          </InputWrapper>
        </div>
        <div className='flex items-center mt-5'>
          <input
            type='submit'
            value={'Create'}
            className='cursor-pointer p-6 bg-blue-500 text-white rounded flex-1'
          />
          <Link href='/admin/projects'>
            <a className='px-32 py-6'>Cancel</a>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Create;
