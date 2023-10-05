import { type Repository } from 'typeorm'
import {
  type TTaskRequest,
  type TTaskResponse
} from '../../interfaces/tasks.interface'
import User from '../../entities/user.entity'
import AppDataSource from '../../data-source'
import Task from '../../entities/task.entity'
import { taskSchema } from '../../schemas/task.schema'

const createTaskService = async (
  taskData: TTaskRequest,
  userId: string
): Promise<TTaskResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)
  const taskRepository: Repository<Task> = AppDataSource.getRepository(Task)

  const user = await userRepository.findOne({
    where: {
      id: userId
    }
  })

  const newTask = taskRepository.create({
    ...taskData,
    user: user as User
  })

  await taskRepository.save(newTask)

  return taskSchema.parse(newTask)
}

export default createTaskService
