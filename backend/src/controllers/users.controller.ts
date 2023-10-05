import { type Request, type Response } from 'express'
import {
  type TUserRequest,
  type TUserResponse
} from '../interfaces/users.interfaces'
import createUserService from '../services/user/createuser.service'

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response<TUserResponse>> => {
  const userData: TUserRequest = request.body
  const createUser: TUserResponse = await createUserService(userData)
  return response.status(201).json(createUser)
}

export { createUserController }
