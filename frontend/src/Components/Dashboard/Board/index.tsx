import { ITask } from '../../../interfaces/tasks.interfaces';
import TaskCard from '../Card';

interface BoardProps {
  taskList: ITask[];
  boardTitle: string;
}

const Board = ({ taskList, boardTitle }: BoardProps) => {
  const tasks = taskList.map((task) => {
    return <TaskCard key={task.id} task={task} />;
  });

  return (
    <>
      <h1>{boardTitle}</h1>
      {tasks}
    </>
  );
};

export default Board;
