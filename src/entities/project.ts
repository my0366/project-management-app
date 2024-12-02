import { ProjectStatus } from '../shared/enum/ProjectStatus.ts';

export interface Project {
  description: string;
  id: string;
  title: string;
  value: number;
  startAt: string;
  created_at: string;
  status: ProjectStatus
}
