import { type NextFunction, type Request, type Response } from 'express'
import AppDataSource from '../data-source'
import Task from '../entities/task.entity'

const ensureIsOwner = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<Response | undefined> => {
  const taskRepository = AppDataSource.getRepository(Task)
  const taskId = request.params.taskId
  const userId = response.locals.userId

  const task = await taskRepository.findOne({
    where: { id: taskId },
    relations: { user: true }
  })

  if (task === null) {
    return response.status(404).json({ message: 'Task Not Found!' })
  }

  if (task?.user.id !== userId) {
    return response
      .status(403)
      .json({ message: 'You do not have permission to execute this action!' })
  }

  nextFunction()
}

export default ensureIsOwner
