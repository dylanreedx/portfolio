import React from 'react';
import { useQuery, QueryClient } from 'react-query';
import { useClientRouter } from 'use-client-router';
import api from 'axiosStore';
import { ProjectType } from 'types';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import InputWrapper from 'components/InputWrapper';
import Router from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema } from 'schema/ProjectSchema';
import { titleToSlug } from 'lib/titleToSlug';
import Image from 'next/image';

const ProjectDetails = () => {
  const router = useClientRouter();
  const { id } = router.query;
  const fetchProject = async (id: string) => {
    const { data } = await api.get(`/project/${id}`);
    return data;
  };
  const {
    data: project,
    isLoading,
    error,
  } = useQuery<ProjectType, Error>(['project', id], () =>
    fetchProject(id as string)
  );
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
    getValues,
  } = useForm<ProjectType>({
    resolver: zodResolver(projectSchema),
    defaultValues: project && project,
    mode: 'onChange',
  });
  const onSubmit = async (data: ProjectType, e: any) => {
    try {
      await api.put(
        `/project/${id}`,
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
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && (
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
          <div className='flex flex-col items-center'>
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
            <div className='w-3/12 p-6'>
              {getValues('coverImg') && (
                <Image
                  src={getValues('coverImg')}
                  alt={'project img'}
                  objectFit='cover'
                  layout='responsive'
                  objectPosition='center'
                  width={100}
                  height={100}
                />
              )}
            </div>
          </div>
          <div className='flex flex-col items-center'>
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
              <div className='flex'>
                {getValues('galleryImg') &&
                  // @ts-ignore
                  getValues('galleryImg').length > 1 &&
                  getValues('galleryImg')?.map((img, idx) => (
                    <div className='w-3/12 p-6' key={idx}>
                      <Image
                        src={img}
                        alt={'project img'}
                        objectFit='cover'
                        layout='responsive'
                        objectPosition='center'
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
              </div>
            </InputWrapper>
          </div>
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
      )}
    </section>
  );
};

export default ProjectDetails;
