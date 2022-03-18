import { useQuery } from 'react-query';
import api from 'axiosStore';
import { ProjectType } from 'types';

const fetchProject = async (slug: string) => {
  const { data } = await api.get(`/project/${slug}`);
  return data;
};

const useProject = (slug: string) => {
  return useQuery<ProjectType, Error>('project', () => fetchProject(slug));
};

export { fetchProject, useProject };
