import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from 'components/Input';
import { ProjectType } from 'types';
import api from 'axiosStore';

type Props = {};

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
});

const Create = (props: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ProjectType>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      description: '',
      coverImg: '',
      galleryImg: [],
      gitHubLink: '',
      liveLink: '',
      projectStartDate: new Date(),
      projectEndDate: new Date(),
    },
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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-200 flex-col flex gap-2 p-12'
      >
        <Controller
          name='title'
          render={({ field }) => (
            <input className='p-4' placeholder='Title' {...field} />
          )}
          control={control}
        />
        <Controller
          name='slug'
          render={({ field }) => (
            <input className='p-4' placeholder='Slug' {...field} />
          )}
          control={control}
        />
        <Controller
          name='excerpt'
          render={({ field }) => (
            <input className='p-4' placeholder='Excerpt' {...field} />
          )}
          control={control}
        />
        <Controller
          name='description'
          render={({ field }) => (
            <input
              className='p-4'
              placeholder='Project Description'
              {...field}
            />
          )}
          control={control}
        />
        <Controller
          name='coverImg'
          render={({ field }) => (
            <input className='p-4' placeholder='Cover Image' {...field} />
          )}
          control={control}
        />
        <Controller
          render={({ field, fieldState }) => (
            <input
              className='p-4'
              placeholder='Image Gallery'
              {...field}
              onChange={(e) => field.onChange(e.target.value.split(','))}
            />
          )}
          name='galleryImg'
          control={control}
        />
        <Controller
          name='gitHubLink'
          render={({ field }) => (
            <input className='p-4' placeholder='GitHub Link' {...field} />
          )}
          control={control}
        />
        <Controller
          name='liveLink'
          render={({ field }) => (
            <input className='p-4' placeholder='Live Link' {...field} />
          )}
          control={control}
        />
        {errors.projectEndDate && <p>{errors.projectEndDate.message}</p>}
        <Controller
          name='projectStartDate'
          render={({ field }) => (
            // @ts-ignore
            <input type='date' className='p-4' {...field} />
          )}
          control={control}
        />
        {errors.projectEndDate && <p>{errors.projectEndDate.message}</p>}
        <Controller
          name='projectEndDate'
          render={({ field }) => (
            // @ts-ignore
            <input type='date' className='p-4' {...field} />
          )}
          control={control}
        />
        <input
          type='submit'
          value={'Create'}
          className='bg-white cursor-pointer'
        />
      </form>
    </section>
  );
};

export default Create;
