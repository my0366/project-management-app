import { ProjectStatus } from '../shared/enum/ProjectStatus.ts';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  startAt: string;
  value: number;
  createAt: string;
}
