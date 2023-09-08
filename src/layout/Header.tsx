import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h3>Resume</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 64px;
  padding: 0 40px;
  position: fixed;
  box-shadow: 0 1px 4px 0 rgba(17, 42, 128, 0.08);
  background-color: rgba(255, 255, 255, 0.95);
  /* border: 1px solid black; */
`;

export default Header;
