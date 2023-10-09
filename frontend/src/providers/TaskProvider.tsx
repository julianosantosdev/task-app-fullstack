import { createContext, useState } from 'react';
import {
  ITask,
  ITaskContextValues,
  ITaskProviderProps,
} from '../interfaces/tasks.interfaces';
import api from '../services/api';
import { IAddNewTaskData } from '../schemas/taskSchema';
import useModal from '../hooks/useModal';

const TaskContext = createContext({} as ITaskContextValues);

const TaskProvider = ({ children }: ITaskProviderProps) => {
  const [tasks, setTasks] = useState([] as ITask[]);
  const { toggleModal } = useModal();

  const createTask = async (taskData: IAddNewTaskData) => {
    try {
      const newTaskResponse = await api.post('/tasks', taskData);
      setTasks((previousTasks) => [newTaskResponse.data, ...previousTasks]);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
