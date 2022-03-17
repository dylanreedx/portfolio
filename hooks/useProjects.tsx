import { useQuery } from 'react-query';
import api from 'axiosStore';
import { ProjectType } from 'types';

const fetchProjects = async () => {
  const { data } = await api.get('/project');
  return data;
};

const useProjects = () => {
  return useQuery<ProjectType[], Error>('projects', fetchProjects);
};

export { fetchProjects, useProjects };
