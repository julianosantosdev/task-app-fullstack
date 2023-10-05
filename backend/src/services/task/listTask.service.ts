import { type Repository } from 'typeorm'
import { type TTaskListResponse } from '../../interfaces/tasks.interface'
import Task from '../../entities/task.entity'
import { taskListResponseSchema } from '../../schemas/task.schema'
import AppDataSource from '../../data-source'

const listTaskService = async (userId: string): Promise<TTaskListResponse> => {
  const taskRepository: Repository<Task> = AppDataSource.getRepository(Task)

  const taskList = await taskRepository.find({
    where: {
      user: {
        id: userId
      }
    }
  })

  return taskListResponseSchema.parse(taskList)
}

export default listTaskService
