import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import userRoutes from './routes/users.routes'
import handleError from './middlewares/handleAppError.middleware'
import loginRoute from './routes/login.routes'
import taskRoute from './routes/tasks.routes'
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(cors())

app.use('/users', userRoutes)
app.use('/login', loginRoute)
app.use('/tasks', taskRoute)
app.use(handleError)

export default app
