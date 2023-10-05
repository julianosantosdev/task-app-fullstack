import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import userRoutes from './routes/users.routes'
import handleError from './middlewares/handleAppError.middleware'
import loginRoute from './routes/login.routes'

const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoute)

app.use(handleError)

export default app
