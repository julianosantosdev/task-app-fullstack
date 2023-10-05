import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

interface IErrorMsg {
  message: string
}

const ensureAuthMiddleware = (
  request: Request,
  response: Response,
  nextFunction: NextFunction
): Response<IErrorMsg> | undefined => {
  const token = request.headers.authorization

  if (token === null || token === undefined) {
    return response.status(401).json({ message: 'Invalid Credentials!' })
  }
  const splittedToken = token.split(' ')[1]

  jwt.verify(
    splittedToken,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error !== null) {
        return response.status(401).json({ message: 'Invalid Token!' })
      }
      response.locals.userId = decoded.sub
    }
  )

  nextFunction()
}

export default ensureAuthMiddleware
