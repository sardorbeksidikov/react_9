import './task.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>;

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className='task'>
      <button className='checkContainer' onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? "textCompleted" : ""}>
        {task.title}
      </p>

      <button className='deleteButton' onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
        
      </button>
    </div>
  )
}