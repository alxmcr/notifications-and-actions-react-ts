import React from 'react';
import { LoadingStates } from '../../utils/constants';
import { UsersContextData } from '../../@types/providerTypes';

const initialUsersContext: UsersContextData = {
  users: [],
  setUsers: () => {},
  loadingUsers: LoadingStates.IDLE,
  errorUsers: null,
};

export const UsersContext = React.createContext(initialUsersContext);
