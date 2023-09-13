import React from 'react';
import styled from 'styled-components';

import { SignupForm } from '@/features/user';

const RegisterPage = () => {
  return (
    <Wrapper>
      <SignupForm />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default RegisterPage;
