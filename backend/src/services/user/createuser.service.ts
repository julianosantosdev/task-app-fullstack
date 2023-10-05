import { type Repository } from 'typeorm'
import {
  type TUserResponse,
  type TUserRequest
} from '../../interfaces/users.interfaces'
import User from '../../entities/user.entity'
import AppDataSource from '../../data-source'
import { hash } from 'bcryptjs'
import { userResponseSchema } from '../../schemas/user.schemas'
import AppError from '../../errors/appError'

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const { name, email, password } = userData

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const findUser: User | null = await userRepository.findOne({
    where: {
      email
    }
  })

  if (findUser !== null) {
    throw new AppError('User Already Exists', 409)
  }

  const hashedPassword = await hash(password, 10)

  const newUser: User = userRepository.create({
    name,
    email,
    password: hashedPassword
  })
  await userRepository.save(newUser)

  const parsedUser: TUserResponse = userResponseSchema.parse(newUser)

  return parsedUser
}

export default createUserService
