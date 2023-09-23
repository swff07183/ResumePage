import { useUserState } from '@/features/user';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const IsLoggedIn = () => {
  const { user } = useUserState();

  if (user) return <Navigate to="/" />;

  return <Outlet />;
};

const Wrapper = styled.div``;

export default IsLoggedIn;
