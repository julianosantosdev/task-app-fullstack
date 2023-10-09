import { useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';

const useTask = () => {
  const taskContext = useContext(TaskContext);
  return taskContext;
};

export default useTask;
