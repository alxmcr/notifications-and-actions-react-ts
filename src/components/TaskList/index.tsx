import TaskItem from '../TaskItem';
import './TaskList.scss';

export default function TaskList() {
  return (
    <div className="task-list">
      <TaskItem key="task-001" id="task-001" text="Do homework" />
      <TaskItem key="task-002" id="task-002" text="Watch TV" />
    </div>
  );
}
