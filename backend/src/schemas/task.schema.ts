import { z } from 'zod'
import { TaskStatus } from '../entities/task.entity'

const taskSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  status: z.nativeEnum(TaskStatus)
})

const taskRequestSchema = taskSchema.omit({ id: true, status: true })
const taskUpdateSchema = taskSchema.omit({ id: true }).partial()
const taskListResponseSchema = z.array(taskSchema)

export {
  taskSchema,
  taskRequestSchema,
  taskUpdateSchema,
  taskListResponseSchema
}
