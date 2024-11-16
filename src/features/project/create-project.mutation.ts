import {useMutation} from "@tanstack/react-query";
import {RequestCreateProject} from "../../shared/data/remote/core/IProjectRepository.ts";
import {ProjectRepository} from "../../shared/data/remote/core/ProjectRepository.ts";

export const useCreateProjectMutation = () => {
    return useMutation({
        mutationFn: async (request: RequestCreateProject) => {
            const projectRepository = new ProjectRepository();
            return await projectRepository.createProject(request);
        },
        onSuccess: (data) => {
            return data;
        },
        onError: (error) => {
            console.error("로그인 실패:", error.message);
        },
    });
};