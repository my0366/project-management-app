import {ProjectRepository} from "../../../shared/data/remote/core/ProjectRepository.ts";
import {useQuery} from "@tanstack/react-query";

export const useFetchProjectGoalQuery = () => {
    const projectRepository = new ProjectRepository();
    return useQuery({
        queryKey: ['fetchProjectGoal'],
        queryFn: () => projectRepository.fetchProjectGoal(),
    });
};