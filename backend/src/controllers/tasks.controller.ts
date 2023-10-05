import { type Request, type Response } from 'express'
import createTaskService from '../services/task/createTask.service'
import {
  type TTaskRequest,
  type TTaskListResponse,
  type TTaskResponse
} from '../interfaces/tasks.interface'
import listTaskService from '../services/task/listTask.service'
import updateTaskService from '../services/task/updateTask.service'
import deleteTaskService from '../services/task/deleteTask.service'

const createTaskController = async (
  request: Request,
  response: Response
): Promise<Response<TTaskResponse>> => {
  const userId = response.locals.userId
  const taskData = request.body
  const newTask: TTaskResponse = await createTaskService(taskData, userId)
  return response.status(201).json(newTask)
}

const listTaskController = async (
  request: Request,
  response: Response
): Promise<Response<TTaskListResponse>> => {
  const userId = response.locals.userId
  const tasksList: TTaskListResponse = await listTaskService(userId)
  return response.status(200).json(tasksList)
}

const updateTaskController = async (
  request: Request,
  response: Response
): Promise<Response<TTaskResponse>> => {
  const taskId = request.params.taskId
  const taskData: TTaskRequest = request.body
  const updatedTask = await updateTaskService(taskData, taskId)
  return response.status(200).json(updatedTask)
}

const deleteTaskController = async (
  request: Request,
  response: Response
): Promise<Response<void>> => {
  const taskId = request.params.taskId
  await deleteTaskService(taskId)
  return response.status(204).send()
}

export {
  createTaskController,
  listTaskController,
  updateTaskController,
  deleteTaskController
}
