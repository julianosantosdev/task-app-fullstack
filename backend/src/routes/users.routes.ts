/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createUserController } from '../controllers/users.controller'
import ensureDataIsValid from '../middlewares/ensureDataIsValid.middleware'
import { userRequestSchema } from '../schemas/user.schemas'
import verifyUserAlreadyExists from '../middlewares/verifyUserAlreadyExists.middleware'

const userRoutes = Router()

userRoutes.post(
  '',
  ensureDataIsValid(userRequestSchema),
  verifyUserAlreadyExists,
  createUserController
)

export default userRoutes
