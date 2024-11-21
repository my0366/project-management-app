import { IProjectRepository } from './IProjectRepository.ts';
import { supabase } from '../../api.ts';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { CreateProjectSchemaType } from '../../../../features/project/create-project/create-proejct.contract.ts';

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

  async fetchProject(): Promise<
    PostgrestSingleResponse<
      {
        id: string;
        title: string;
        description: string;
        status: string;
        startAt: string;
        value: number;
        created_at: string;
      }[]
    >
  > {
    return supabase.from('project').select('*');
  }

  async fetchProjectById(id: string): Promise<
    PostgrestSingleResponse<{
      id: string;
      title: string;
      description: string;
      status: string;
      startAt: string;
      value: number;
      created_at: string;
    }>
  > {
    return supabase.from('project').select('*').eq('id', id).single();
  }
}
