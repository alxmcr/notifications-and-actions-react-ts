import { UsersContextData } from '../../@types/providerTypes';
import { useUsers } from '../../hooks/useUsers';
import { UsersContext } from './UsersContext';

type UsersProviderProps = {
  children: React.ReactNode;
};

export default function UsersProvider({ children }: UsersProviderProps) {
  const { data, setData, loadingUsers, errorUsers } = useUsers();

  const value: UsersContextData = {
    users: data,
    setUsers: setData,
    loadingUsers,
    errorUsers,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}
