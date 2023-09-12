import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Wrapper>
      <div className="login-div">
        <div className="title">Login</div>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Button type="border" content="로그인" style={{ width: '100%' }} />
        <Button type="fill" content="회원가입" style={{ width: '100%' }} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-width: 1250px; */
  height: calc(100vh - 294px);
  display: flex;
  justify-content: center;
  align-items: center;
  & .login-div {
    position: relative;
    & .title {
      position: absolute;
      font-size: 28px;
      font-weight: bold;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
    }
    /* border: 1px solid #7b7b7b; */
    box-shadow: 0 4px 16px 0 rgba(17, 42, 128, 0.28);
    border-radius: 24px;
    padding: 150px 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export default LoginPage;
