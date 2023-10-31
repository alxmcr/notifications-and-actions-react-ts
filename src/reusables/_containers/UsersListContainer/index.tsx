import React from 'react';
import { NavLink } from 'react-router-dom';
import { UsersContext } from '../../../providers/UsersProvider/UsersContext';
import { LoadingStates } from '../../../utils/constants';
import UsersList from '../../_elements/UsersList';
import './UsersListContainer.scss';

export default function UsersListContainer() {
  const { users, loadingUsers, errorUsers } = React.useContext(UsersContext);

  if (loadingUsers === LoadingStates.PENDING) {
    return (
      <section className="users-list-container">
        <p>Loading users...</p>
      </section>
    );
  }

  if (loadingUsers === LoadingStates.ERROR) {
    return (
      <section className="users-list-container">
        <p>{errorUsers?.message}</p>
      </section>
    );
  }

  if (loadingUsers === LoadingStates.SUCCESS) {
    return (
      <section className="users-list-container">
        <UsersList users={users} />
      </section>
    );
  }

  return (
    <section className="users-list-container">
      <p>Error. not identify</p>
      <NavLink to="/">Return to home</NavLink>
    </section>
  );
}
