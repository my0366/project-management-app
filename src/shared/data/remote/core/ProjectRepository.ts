import { IProjectRepository } from './IProjectRepository.ts';
import { supabase } from '../../api.ts';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { CreateProjectSchemaType } from '../../../../features/project/create-project/create-proejct.contract.ts';
import { Project } from '../../../../entities/project.ts';
import { ProjectGoal } from '../../../../entities/project_goal.ts';
import { CreateProjectGoalSchemaType } from '../../../../features/project-goal/create-project-goal/create-project-goal.contract.ts';

export class ProjectRepository implements IProjectRepository {
  async createProject(
    request: CreateProjectSchemaType
  ): Promise<PostgrestSingleResponse<{ id: string }[]>> {
    return supabase
      .from('project')
      .insert([
        {
          title: request.title,
          description: request.description,
          startAt: request.startAt,
          status: request.status,
          value: request.value,
        },
      ])
      .select('id');
  }

  async fetchProject(): Promise<PostgrestSingleResponse<Project[]>> {
    return supabase.from('project').select('*');
  }

  async fetchProjectById(
    id: string
  ): Promise<PostgrestSingleResponse<Project>> {
    return supabase.from('project').select('*').eq('id', id).single();
  }

  async fetchProjectGoal(): Promise<PostgrestSingleResponse<ProjectGoal[]>> {
    return supabase.from('project_goal').select('*');
  }

  async createProjectGoal(
    project_id: string,
    request: CreateProjectGoalSchemaType
  ): Promise<PostgrestSingleResponse<{ id: string }[]>> {
    return supabase
      .from('project_goal')
      .insert([
        {
          project_id: project_id,
          description: request.description,
          endAt: request.endAt,
          isDone: false,
        },
      ])
      .select('*');
  }

  async updateProjectGoal(
    id: string,
    isDone: boolean
  ): Promise<PostgrestSingleResponse<{ id: string }>> {
    return supabase
      .from('project_goal')
      .update([
        {
          isDone: isDone,
        },
      ])
      .eq('id', id)
      .single();
  }
}
