import React from 'react';
import styled from 'styled-components';

import { LoginForm } from '@/features/user';

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-width: 1250px; */
`;

export default LoginPage;
