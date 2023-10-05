import { type NextFunction, type Request, type Response } from 'express'
import AppDataSource from '../data-source'
import User from '../entities/user.entity'
import AppError from '../errors/appError'

const verifyUserExistsByToken = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Promise<void> => {
  const userIdFromToken: string = response.locals.userId

  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOne({
    where: { id: userIdFromToken }
  })

  if (findUser === null) {
    throw new AppError('User does not exist!')
  }

  nextFunction()
}

export default verifyUserExistsByToken
