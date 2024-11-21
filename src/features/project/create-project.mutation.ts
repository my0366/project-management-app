import { useMutation } from '@tanstack/react-query';
import { ProjectRepository } from '../../shared/data/remote/core/ProjectRepository.ts';
import { CreateProjectSchemaType } from '../../pages/create-project/create-proejct.contract.ts';

export const useCreateProjectMutation = () => {
  return useMutation({
    mutationFn: async (request: CreateProjectSchemaType) => {
      const projectRepository = new ProjectRepository();
      return await projectRepository.createProject(request);
    },
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error('로그인 실패:', error.message);
    },
  });
};
