import { ChangeEvent } from 'react';
import api from '../../../services/api';
import StyledTaskCard from './styles';
import { ITask } from '../../../interfaces/tasks.interfaces';
import useTask from '../../../hooks/useTask';

interface ITaskCardProps {
  task: ITask;
}

const TaskCard = ({ task }: ITaskCardProps) => {
  const { setTasks } = useTask();

  const updateTaskStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = { status: event.target.value };
    const statusResponse = await api.patch(`/tasks/${task.id}`, newStatus);
    setTasks((previousTasks) =>
      previousTasks.map((previousTask) =>
        task.id === previousTask.id ? statusResponse.data : previousTask
      )
    );
    console.log(statusResponse);
  };

  return (
    <StyledTaskCard key={task.id}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <select onChange={updateTaskStatus} defaultValue={task.status}>
        <option value='To-Do'>To-Do</option>
        <option value='InProgress'>In Progress</option>
        <option value='InRevision'>In Revision</option>
        <option value='Finished'>Finished</option>
      </select>
    </StyledTaskCard>
  );
};

export default TaskCard;
