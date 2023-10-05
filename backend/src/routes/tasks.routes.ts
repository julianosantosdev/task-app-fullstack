/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  createTaskController,
  deleteTaskController,
  listTaskController,
  updateTaskController
} from '../controllers/tasks.controller'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import verifyUserExistsByToken from '../middlewares/verifyUserExistsByToken.middleware'
import ensureDataIsValid from '../middlewares/ensureDataIsValid.middleware'
import { taskRequestSchema, taskUpdateSchema } from '../schemas/task.schema'
import ensureIsOwner from '../middlewares/ensureIsOwner.middleware'

const taskRoute = Router()

taskRoute.post(
  '',
  ensureAuthMiddleware,
  verifyUserExistsByToken,
  ensureDataIsValid(taskRequestSchema),
  createTaskController
)

taskRoute.get(
  '',
  ensureAuthMiddleware,
  verifyUserExistsByToken,
  listTaskController
)

taskRoute.patch(
  '/:taskId',
  ensureAuthMiddleware,
  verifyUserExistsByToken,
  ensureDataIsValid(taskUpdateSchema),
  ensureIsOwner,
  updateTaskController
)

taskRoute.delete(
  '/:taskId',
  ensureAuthMiddleware,
  verifyUserExistsByToken,
  ensureIsOwner,
  deleteTaskController
)

export default taskRoute
