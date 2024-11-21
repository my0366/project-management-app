import { IProjectRepository } from './IProjectRepository.ts';
import { supabase } from '../../api.ts';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { CreateProjectSchemaType } from '../../../../pages/create-project/create-proejct.contract.ts';

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
}
