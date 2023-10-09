import { z } from 'zod';

const addTaskSchema = z.object({
  title: z.string().min(3, 'Title must have more than 3 characters'),
  description: z.string().min(1, 'Must have a description'),
});

type IAddNewTaskData = z.infer<typeof addTaskSchema>;

export default addTaskSchema;
export type { IAddNewTaskData };
