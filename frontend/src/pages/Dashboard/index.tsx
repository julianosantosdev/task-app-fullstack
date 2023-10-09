import { useEffect } from 'react';
import api from '../../services/api';
import { ITask } from '../../interfaces/tasks.interfaces';
import DashboardContainer from './styles';
import Board from '../../Components/Dashboard/Board';
import StyledBoard from '../../Components/Dashboard/Board/styles';
import useTask from '../../hooks/useTask';

const DashboardPage = () => {
  const { tasks, setTasks } = useTask();

  useEffect(() => {
    (async () => {
      const tasksResponse = await api.get<ITask[]>('/tasks');
      setTasks(tasksResponse.data);
    })();
  }, []);

  const filterTasks = (tasksList: ITask[], taskStatus: string) => {
    const filteredTasks = tasksList.filter(
      (task) => task.status === taskStatus
    );

    return filteredTasks;
  };

  const todoTasks = filterTasks(tasks, 'To-Do');
  const inProgressTasks = filterTasks(tasks, 'InProgress');
  const inRevisionTasks = filterTasks(tasks, 'InRevision');
  const finishedTasks = filterTasks(tasks, 'Finished');

  return (
    <>
      <DashboardContainer>
        <header>
          <button>New +</button>
        </header>

        <main>
          <StyledBoard>
            <Board taskList={todoTasks}></Board>
          </StyledBoard>

          <StyledBoard>
            <Board taskList={inProgressTasks}></Board>
          </StyledBoard>

          <StyledBoard>
            <Board taskList={inRevisionTasks}></Board>
          </StyledBoard>

          <StyledBoard>
            <Board taskList={finishedTasks}></Board>
          </StyledBoard>
        </main>
      </DashboardContainer>
    </>
  );
};

export default DashboardPage;
