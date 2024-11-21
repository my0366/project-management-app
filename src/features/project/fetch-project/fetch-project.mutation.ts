import { useQuery } from '@tanstack/react-query';
import {ProjectRepository} from "../../../shared/data/remote/core/ProjectRepository.ts";

export const useFetchProjectQuery = () => {
  const projectRepository = new ProjectRepository();
  return useQuery({
    queryKey: ['fetchProject'],
    queryFn: () => projectRepository.fetchProject(),
  });
};
