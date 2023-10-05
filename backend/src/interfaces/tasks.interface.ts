import { type z } from 'zod'
import {
  type taskListResponseSchema,
  type taskRequestSchema,
  type taskSchema
} from '../schemas/task.schema'
import { type DeepPartial } from 'typeorm'

type TTask = z.infer<typeof taskSchema>
type TTaskRequest = z.infer<typeof taskRequestSchema>
type TTaskResponse = z.infer<typeof taskSchema>
type TTaskUpdate = DeepPartial<TTaskRequest>
type TTaskListResponse = z.infer<typeof taskListResponseSchema>

export type {
  TTask,
  TTaskRequest,
  TTaskResponse,
  TTaskUpdate,
  TTaskListResponse
}
