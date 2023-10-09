import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import addTaskSchema, { IAddNewTaskData } from '../../../schemas/taskSchema';
import useTask from '../../../hooks/useTask';

const ModalAddTask = () => {
  const { register, handleSubmit } = useForm<IAddNewTaskData>({
    resolver: zodResolver(addTaskSchema),
  });

  const { createTask } = useTask();

  return (
    <form onSubmit={handleSubmit(createTask)}>
      <fieldset>
        <label htmlFor='taskTitle'>Title</label>
        <input id='taskTitle' type='text' {...register('title')} />
      </fieldset>

      <fieldset>
        <label htmlFor='taskDescription'>Description</label>
        <input id='taskDescription' type='text' {...register('description')} />
      </fieldset>
      <button>Add Task</button>
    </form>
  );
};

export default ModalAddTask;
