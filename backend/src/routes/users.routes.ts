/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createUserController } from '../controllers/users.controller'
import ensureDataIsValid from '../middlewares/ensureDataIsValid.middleware'
import { userRequestSchema } from '../schemas/user.schemas'

const userRoutes = Router()

userRoutes.post('', ensureDataIsValid(userRequestSchema), createUserController)

export default userRoutes
