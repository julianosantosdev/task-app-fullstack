import { type Repository } from 'typeorm'
import User from '../../entities/user.entity'
import AppDataSource from '../../data-source'
import AppError from '../../errors/appError'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import {
  type ILoginRequest,
  type IToken
} from '../../interfaces/login.interfaces'

const createTokenService = async (
  loginData: ILoginRequest
): Promise<IToken> => {
  const { email, password } = loginData
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User | null = await userRepository.findOne({
    where: {
      email
    }
  })

  const userPassword = user?.password as string

  const passwordMatch = await compare(password, userPassword)

  if (!passwordMatch) {
    throw new AppError('Invalid Credentials', 403)
  }

  const secretKey = process.env.SECRET_KEY as string

  const getToken: string = jwt.sign(
    { username: user?.name as string },
    secretKey,
    {
      expiresIn: '24h',
      subject: user?.id
    }
  )

  return { token: getToken }
}

export default createTokenService
