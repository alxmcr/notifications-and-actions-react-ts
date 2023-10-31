import React from 'react';
import { User } from '../../../@types/appTypes';
import { UsersContext } from '../../../providers/UsersProvider/UsersContext';
import './UserItem.scss';

type UserItemProps = {
  user: User;
};

export default function UserItem({ user }: UserItemProps) {
  const { setUsers } = React.useContext(UsersContext);
  const [completed, setCompleted] = React.useState(false);

  const handlerDelete = (userIdToDelete = '') => {
    console.log(`delete ${userIdToDelete}`);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id.value !== userIdToDelete),
    );
  };

  const handlerCompleted = (userId = '') => {
    console.log(`completed ${userId}`);

    setCompleted(!completed);
  };

  return (
    <li className="user-item" id={user.id.value}>
      <input
        type="checkbox"
        name="task-completed"
        id="task-completed"
        checked={completed}
        onChange={() => handlerCompleted(user.id.value)}
      />
      <span className="task-item__text">{user.name.first}</span>
      <button
        className="task-item__button"
        onClick={() => handlerDelete(user.id.value)}
      >
        Delete
      </button>
    </li>
  );
}
