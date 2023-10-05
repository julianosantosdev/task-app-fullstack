import { type NextFunction, type Request, type Response } from 'express'
import { type ZodSchema } from 'zod'

const ensureDataIsValid =
  (schema: ZodSchema) =>
  (request: Request, response: Response, nextFunction: NextFunction) => {
    const validatedData = schema.parse(request.body)
    request.body = validatedData
    nextFunction()
  }

export default ensureDataIsValid
