import { z } from 'zod';
import { ProjectStatus } from '../../shared/enum/ProjectStatus.ts';

export type CreateProjectSchemaType = z.infer<typeof CreateProjectSchema>;

export const CreateProjectSchema = z.object({
  title: z.string().min(1, '프로젝트 이름을 입력해주세요.'),
  description: z.string().min(1, '설명을 입력해주세요.'),
  startAt: z.string().min(1, '시작일을 입력해주세요.'),
  status: z.nativeEnum(ProjectStatus).default(ProjectStatus.PENDING),
  value: z.number().min(0, '진행률은 0% 이상이어야 합니다.'),
});
