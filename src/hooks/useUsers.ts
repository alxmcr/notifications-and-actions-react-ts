import React from 'react';
import { User } from '../@types/appTypes';
import { LoadingStates } from '../utils/constants';
import { ResponseAPI } from '../@types/serviceTypes';
import { bulkMapperUser } from '../utils/mappers-service';

export const useUsers = () => {
  const API = 'https://randomuser.me/api/?results=5';
  const [data, setData] = React.useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = React.useState(LoadingStates.IDLE);
  const [errorUsers, setErrorUsers] = React.useState<Error | null>(null);
  const isCancelledRef = React.useRef<boolean>(true);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadingUsers(LoadingStates.PENDING);
        const response = await fetch(API);

        if (response.status === 200) {
          const dataResponse: ResponseAPI = await response.json();
          setData(bulkMapperUser(dataResponse.results));
          setLoadingUsers(LoadingStates.SUCCESS);
        } else if (response.status === 404) {
          throw new Error(`Error ${response.status}: Not Found`);
        } else {
          throw new Error(`Error ${response.status}`);
        }
      } catch (error) {
        setLoadingUsers(LoadingStates.ERROR);
        if (error instanceof Error) {
          setErrorUsers(error);
        }
      }
    };

    fetchUsers();

    return () => {
      isCancelledRef.current = false;
    };
  }, []);

  return { data, setData, loadingUsers, errorUsers };
};
