import { type Repository } from 'typeorm'
import AppDataSource from '../../data-source'
import {
  type TTaskResponse,
  type TTaskUpdate
} from '../../interfaces/tasks.interface'
import Task from '../../entities/task.entity'
import AppError from '../../errors/appError'
import { taskSchema } from '../../schemas/task.schema'

const updateTaskService = async (
  taskData: TTaskUpdate,
  taskId: string
): Promise<TTaskResponse> => {
  const taskRepository: Repository<Task> = AppDataSource.getRepository(Task)

  const oldTask: Task | null = await taskRepository.findOneBy({
    id: taskId
  })

  if (oldTask === null) {
    throw new AppError('Task Not Found!', 404)
  }

  const updatedTask = taskRepository.create({
    ...oldTask,
    ...taskData
  })
  await taskRepository.save(updatedTask)

  return taskSchema.parse(updatedTask)
}

export default updateTaskService
