import React from 'react';
import './TaskItem.scss';

type TaskItemProps = {
  id: string;
  text: string;
};

export default function TaskItem({ id = '', text = '' }: TaskItemProps) {
  const [completed, setCompleted] = React.useState(false);

  const handlerDelete = () => {
    console.log(`delete ${id}`);
  };

  const handlerCompleted = () => {
    setCompleted(true);
  };

  return (
    <div className="task-time" id={`task-${id}`}>
      <input
        type="checkbox"
        name="task-completed"
        id="task-completed"
        checked={completed}
        onChange={handlerCompleted}
      />
      <span className="task-item__text">{text}</span>
      <button className="task-item__button" onClick={handlerDelete}>
        Delete
      </button>
    </div>
  );
}
