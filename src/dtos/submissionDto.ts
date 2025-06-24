import {z} from 'zod'


export const SubmissionZodSchema = z.object({
  userId: z.string(),
  problemId: z.string(),
  code: z.string(),
  language: z.string(),
});


export type SubmissionDto = z.infer<typeof SubmissionZodSchema>;