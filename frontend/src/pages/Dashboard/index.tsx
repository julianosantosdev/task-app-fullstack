import { useEffect } from 'react';
import api from '../../services/api';
import { ITask } from '../../interfaces/tasks.interfaces';
import DashboardContainer from './styles';
import Board from '../../Components/Dashboard/Board';
import StyledBoard from '../../Components/Dashboard/Board/styles';
import useTask from '../../hooks/useTask';
import ModalAddTask from '../../Components/Modal/ModalAddTask';
import useModal from '../../hooks/useModal';
import Modal from '../../Components/Modal';

const DashboardPage = () => {
  const { tasks, setTasks } = useTask();
  const { handleShowModal, toggleModal } = useModal();

  useEffect(() => {
    (async () => {
      const tasksResponse = await api.get<ITask[]>('/tasks');
      setTasks(tasksResponse.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {handleShowModal && <Modal children={<ModalAddTask />} />}

      <DashboardContainer>
        <header>
          <h1>MY TO-DO LIST</h1>
          <button onClick={() => toggleModal()}>+ TO-DO</button>
        </header>

        <main>
          <StyledBoard>
            <Board taskList={todoTasks} boardTitle='TO-DO'></Board>
          </StyledBoard>

          <StyledBoard>
            <Board taskList={inProgressTasks} boardTitle='IN PROGRESS'></Board>
          </StyledBoard>

          <StyledBoard>
            <Board taskList={inRevisionTasks} boardTitle='IN REVISION'></Board>
          </StyledBoard>

          <StyledBoard>
            <Board taskList={finishedTasks} boardTitle='FINISHED'></Board>
          </StyledBoard>
        </main>
      </DashboardContainer>
    </>
  );
};

export default DashboardPage;
