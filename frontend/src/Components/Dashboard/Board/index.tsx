import { ITask } from '../../../interfaces/tasks.interfaces';
import TaskCard from '../Card';

interface BoardProps {
  taskList: ITask[];
}

const Board = ({ taskList }: BoardProps) => {
  const tasks = taskList.map((task) => {
    return <TaskCard key={task.id} task={task} />;
  });

  return tasks;
};

export default Board;
