import React from 'react';
import toast from 'react-hot-toast';
import { User } from '../../../@types/appTypes';
import { UsersContext } from '../../../providers/UsersProvider/UsersContext';
import './UserItem.scss';

type UserItemProps = {
  user: User;
};

export default function UserItem({ user }: UserItemProps) {
  const { setUsers } = React.useContext(UsersContext);
  const [completed, setCompleted] = React.useState(false);

  const handlerDelete = (userId = '') => {
    console.log('🚀 ~ file: index.tsx:16 ~ handlerDelete ~ userId:', userId);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id.value !== userId),
    );
    toast((t) => (
      <div>
        <span>User {userId} deleted!</span>
        <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
      </div>
    ));
  };

  const handlerCompleted = (userId = '') => {
    console.log('🚀 ~ file: index.tsx:24 ~ handlerCompleted ~ userId:', userId);
    setCompleted(true);

    toast(
      (t) => (
        <div>
          <span>User {userId} checked!</span>
          <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
        </div>
      ),
      {
        icon: '👏',
      },
    );
  };

  return (
    <li className="user-item" id={user.id.value}>
      <input
        type="checkbox"
        name="task-completed"
        id="task-completed"
        checked={completed}
        disabled={completed}
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
