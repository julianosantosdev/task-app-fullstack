import { type Repository } from 'typeorm'
import AppDataSource from '../../data-source'
import Task from '../../entities/task.entity'
import AppError from '../../errors/appError'

const deleteTaskService = async (taskId: string): Promise<void> => {
  const taskRepository: Repository<Task> = AppDataSource.getRepository(Task)

  const task: Task | null = await taskRepository.findOneBy({
    id: taskId
  })

  if (task === null) {
    throw new AppError('Task Not Found!', 404)
  }

  await taskRepository.remove(task)
}

export default deleteTaskService
