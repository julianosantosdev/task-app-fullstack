import { type Request, type Response } from 'express'
import type { ILoginRequest, IToken } from '../interfaces/login.interfaces'
import createTokenService from '../services/login/createToken.service'

const loginController = async (
  request: Request,
  response: Response
): Promise<Response<string>> => {
  const loginData: ILoginRequest = request.body
  const loginToken: IToken = await createTokenService(loginData)
  return response.status(200).json(loginToken)
}

export default loginController
