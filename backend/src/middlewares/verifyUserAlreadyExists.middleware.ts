import { type NextFunction, type Request, type Response } from 'express'
import User from '../entities/user.entity'
import { type ILoginRequest } from '../interfaces/login.interfaces'
import AppDataSource from '../data-source'
import AppError from '../errors/appError'

const verifyUserAlreadyExists = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<void> => {
  const userData: ILoginRequest = request.body
  const { email } = userData
  const userRepository = AppDataSource.getRepository(User)

  const findUser: User | null = await userRepository.findOne({
    where: {
      email
    }
  })

  if (findUser !== null) {
    throw new AppError('Can not create new account with email in use!', 409)
  }

  nextFunction()
}

export default verifyUserAlreadyExists
