import { Task } from '../Task';
import './tasks.scss';

export function Tasks({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className='tasks'>
      <header className='header-list'>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className='textPurple'>Completed tasks</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className='list'>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  )
}