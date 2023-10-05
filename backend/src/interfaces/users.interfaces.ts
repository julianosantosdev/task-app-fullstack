import { type z } from 'zod'
import {
  type userRequestSchema,
  type userResponseSchema,
  type userSchema
} from '../schemas/user.schemas'

type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userRequestSchema>
type TUserResponse = z.infer<typeof userResponseSchema>

export type { TUser, TUserRequest, TUserResponse }
