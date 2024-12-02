import { useMutation } from '@tanstack/react-query';
import { ProjectRepository } from '../../../shared/data/remote/core/ProjectRepository.ts';
import { CreateProjectGoalSchemaType } from './create-project-goal.contract.ts';

export const useCreateProjectGoalMutation = (id: string) => {
  return useMutation({
    mutationFn: async (request: CreateProjectGoalSchemaType) => {
      const projectRepository = new ProjectRepository();
      return await projectRepository.createProjectGoal(id, request);
    },
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error('로그인 실패:', error.message);
    },
  });
};
