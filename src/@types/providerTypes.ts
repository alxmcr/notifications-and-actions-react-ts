import { User } from './appTypes';

export type UsersContextData = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  loadingUsers: string;
  errorUsers: Error | null;
};
