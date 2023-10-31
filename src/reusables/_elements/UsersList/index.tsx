import { User } from '../../../@types/appTypes';
import UserItem from '../UserItem';
import './UsersList.scss';

type UsersListProps = {
  users: User[];
};

export default function UsersList({ users = [] }: UsersListProps) {
  if (users.length === 0) {
    return <p>No users</p>;
  }

  return (
    <ul className="users-list">
      {users.map((user) => {
        const idValue = user.id.value;

        if (idValue !== null) {
          return <UserItem key={idValue} user={user} />;
        }
        return null;
      })}
    </ul>
  );
}
