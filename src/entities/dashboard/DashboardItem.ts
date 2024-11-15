import {ProjectStatus} from "../../shared/enum/ProjectStatus.ts";

export interface DashboardItem {
    id: number;
    title: string;
    description: string;
    status: ProjectStatus;
    date: string;
    value: number;
}