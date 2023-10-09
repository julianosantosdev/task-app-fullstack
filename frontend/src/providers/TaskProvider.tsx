import { createContext, useState } from 'react';
import {
  ITask,
  ITaskContextValues,
  ITaskProviderProps,
} from '../interfaces/tasks.interfaces';

const TaskContext = createContext({} as ITaskContextValues);

const TaskProvider = ({ children }: ITaskProviderProps) => {
  const [tasks, setTasks] = useState([] as ITask[]);
  
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
