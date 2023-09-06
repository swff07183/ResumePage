import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  height: 100vh;
  padding-top: 80px;
`;

export default Layout;
