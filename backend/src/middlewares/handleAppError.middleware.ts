import { type NextFunction, type Request, type Response } from 'express'
import AppError from '../errors/appError'
import { ZodError } from 'zod'

const handleError = (
  error: Error,
  request: Request,
  response: Response,
  _nextFunction: NextFunction
): Response<Error> => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ error: error.message })
  }

  if (error instanceof ZodError) {
    return response.status(400).json({ message: error.flatten().fieldErrors })
  }

  return response.status(500).json({ message: 'Internal Server Error' })
}

export default handleError
