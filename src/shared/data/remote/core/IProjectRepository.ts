import { ProjectStatus } from '../../../enum/ProjectStatus.ts';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { Project } from '../../../../entities/project.ts';

import { CreateProjectGoalSchemaType } from '../../../../features/project-goal/create-project-goal/create-project-goal.contract.ts';

export interface RequestCreateProject {
  title: string;
  description: string;
  status: ProjectStatus;
  startAt: string;
  value: number;
}

export abstract class IProjectRepository {
  abstract createProject(
    request: RequestCreateProject
  ): Promise<PostgrestSingleResponse<{ id: string }[]>>;

  abstract fetchProject(): Promise<PostgrestSingleResponse<Project[]>>;

  abstract fetchProjectById(
    id: string
  ): Promise<PostgrestSingleResponse<Project>>;

  abstract createProjectGoal(
    project_id: string,
    request: CreateProjectGoalSchemaType
  ): Promise<PostgrestSingleResponse<{ id: string }[]>>;

  abstract updateProjectGoal(
    id: string,
    isDone: boolean
  ): Promise<PostgrestSingleResponse<{ id: string }>>;
}
