import { z } from 'zod';

export type CreateProjectGoalSchemaType = z.infer<typeof CreateProjectGoalSchema>;

export const CreateProjectGoalSchema = z.object({
  description: z.string().min(1, '설명을 입력해주세요.'),
  endAt : z.string().min(1, '설명을 입력해주세요.'),
});
