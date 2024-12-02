import { useMutation } from '@tanstack/react-query';
import { ProjectRepository } from '../../../shared/data/remote/core/ProjectRepository.ts';

export const useUpdateProjectGoalMutation = (id: string, isDone: boolean) => {
  return useMutation({
    mutationFn: async () => {
      const projectRepository = new ProjectRepository();
      return await projectRepository.updateProjectGoal(id, isDone);
    },
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error('업데이트 실패:', error.message);
    },
  });
};
