/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import loginController from '../controllers/login.controller'
import ensureUserExists from '../middlewares/ensureUserExists.middleware'

const loginRoute = Router()

loginRoute.post('', ensureUserExists, loginController)

export default loginRoute
