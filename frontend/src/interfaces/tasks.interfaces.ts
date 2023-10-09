import { ReactNode } from 'react';

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
}

export type { ITask, ITaskContextValues, ITaskProviderProps };
