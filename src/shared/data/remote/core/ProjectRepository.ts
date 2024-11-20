import {IProjectRepository, RequestCreateProject} from "./IProjectRepository.ts";
import {ProjectStatus} from "../../../enum/ProjectStatus.ts";
import {supabase} from "../../api.ts";
import {PostgrestSingleResponse} from "@supabase/supabase-js";

export class ProjectRepository implements IProjectRepository {
    async createProject(request: RequestCreateProject): Promise<PostgrestSingleResponse<{ id: string }[]>> {
        return supabase.from('project')
            .insert([
                {
                    title: request.title,
                    description: request.description,
                    startAt: request.startAt,
                    status: ProjectStatus.PENDING,
                    value: request.value
                }
            ])
            .select('id');
    }

    async fetchProject(): Promise<PostgrestSingleResponse<{
        id: string,
        title: string,
        description: string,
        status: string,
        startAt: string,
        value: number,
        created_at: string
    }[]>> {
        return supabase.from('project')
            .select('*')

    }


}