import React from 'react';
import { useUserForm } from '../stores/hooks';
import UserForm from './UserForm';
import UserInfo from './UserInfo';

const User = () => {
  const { isUserFormOpen } = useUserForm();

  return isUserFormOpen ? <UserForm /> : <UserInfo />;
};

export default User;
