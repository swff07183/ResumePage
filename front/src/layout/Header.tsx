import React from 'react';
import styled from 'styled-components';
import logo from '@assets/img/logo.png';

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 64px;
  padding: 0 40px;
  position: fixed;
  box-shadow: 0 1px 4px 0 rgba(17, 42, 128, 0.08);
  background-color: rgba(255, 255, 255, 0.95);
  /* border: 1px solid black; */
  & img {
    height: 100%;
  }
`;

export default Header;
