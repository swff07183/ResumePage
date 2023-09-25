import React, { useState } from 'react';
import styled from 'styled-components';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { IUserLogin } from '../types';
import { postUserLogin } from '@/api/user';
import { useUserState } from '../stores/hooks';
import { useMutation } from '@tanstack/react-query';
import { useForm } from '@/hooks';
import { Button, Input } from '@/components';

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { formData, isError, setIsError, handleInputChange } =
    useForm<IUserLogin>({
      username: '',
      password: '',
    });
  const { setUser } = useUserState();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: IUserLogin) => postUserLogin(data),
    onSuccess: (data) => {
      sessionStorage.setItem('token', data.key);
      setUser({ username: formData.username });
      navigate('/');
    },
    onError: (e: AxiosError<any>) => {
      const errorData = e.response?.data;
      setErrorMessage(errorData?.['non_field_errors']?.[0] || '로그인 실패');
      setIsError({
        username: true,
        password: true,
      });
    },
  });

  const handleSubmit = () => {
    setErrorMessage('');
    if (formData.username === '') {
      setIsError((prev) => ({ ...prev, username: true }));
      setErrorMessage('아이디를 입력하세요.');
    } else if (formData.password === '') {
      setIsError((prev) => ({ ...prev, password: true }));
      setErrorMessage('비밀번호를 입력하세요.');
    } else {
      mutation.mutate(formData);
    }
  };

  return (
    <Wrapper>
      <div className="login-div">
        <div className="title">Login</div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <Input
          name="username"
          placeholder="아이디"
          invalid={isError.username}
          onChange={handleInputChange}
        />
        <Input
          name="password"
          placeholder="비밀번호"
          type="password"
          invalid={isError.password}
          onChange={handleInputChange}
        />
        <Button
          type="border"
          content="로그인"
          style={{ width: '100%' }}
          onClick={handleSubmit}
        />
        <Button
          type="fill"
          content="회원가입"
          style={{ width: '100%' }}
          onClick={() => navigate('/signup')}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 294px);
  display: flex;
  justify-content: center;
  align-items: center;
  & .login-div {
    position: relative;
    & .error {
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      color: #ff0000;
      display: flex;
      justify-content: center;
      font-size: 13px;
    }
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
