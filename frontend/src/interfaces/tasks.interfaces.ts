import { ReactNode } from 'react';
import { IAddNewTaskData } from '../schemas/taskSchema';

interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface ITaskProviderProps {
  children: ReactNode;
}

interface ITaskContextValues {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  createTask: (taskData: IAddNewTaskData) => Promise<void>;
}

export type { ITask, ITaskContextValues, ITaskProviderProps };
