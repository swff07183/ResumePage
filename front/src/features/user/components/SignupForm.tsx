import { Button, Input } from '@components';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { postUserSignUp } from '@/api/user';
import { useForm } from '@/hooks';
import { IUserSignup } from '../types';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useUserState } from '../stores/hooks';

export const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { formData, isError, setIsError, handleInputChange } =
    useForm<IUserSignup>({
      username: '',
      password1: '',
      password2: '',
    });
  const { setUser } = useUserState();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: IUserSignup) => postUserSignUp(data),
    onSuccess: (data) => {
      sessionStorage.setItem('token', data.key);
      setUser({ username: formData.username });
      navigate('/');
    },
    onError: (e: AxiosError<IUserSignup>) => {
      const errorData = e.response?.data;
      setErrorMessage(
        errorData?.username?.[0] ||
          errorData?.password1?.[0] ||
          errorData?.password2?.[0] ||
          ''
      );
      setIsError({
        username: !!errorData?.username,
        password1: !!errorData?.password1,
        password2: !!errorData?.password2,
      });
    },
  });

  const handleSubmit = () => {
    setErrorMessage('');
    if (formData.username === '') {
      setIsError((prev: IUserSignup) => ({ ...prev, username: true }));
      setErrorMessage('아이디를 입력하세요.');
    } else if (formData.password1 === '') {
      setIsError((prev: IUserSignup) => ({ ...prev, password1: true }));
      setErrorMessage('비밀번호를 입력하세요.');
    } else if (formData.password2 === '') {
      setIsError((prev: IUserSignup) => ({ ...prev, password2: true }));
      setErrorMessage('비밀번호를 입력하세요.');
    } else if (formData.password1 !== formData.password2) {
      setIsError((prev: IUserSignup) => ({
        ...prev,
        password2: true,
      }));
      setErrorMessage('비밀번호가 일치하지 않습니다.');
    } else {
      mutation.mutate(formData);
    }
  };

  return (
    <Wrapper>
      <div className="register-div">
        <div className="title">Register</div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <Input
          name="username"
          placeholder="아이디"
          onChange={handleInputChange}
          invalid={isError.username}
        />
        <Input
          name="password1"
          type="password"
          placeholder="비밀번호"
          onChange={handleInputChange}
          invalid={isError.password1}
        />
        <Input
          name="password2"
          type="password"
          placeholder="비밀번호 확인"
          onChange={handleInputChange}
          invalid={isError.password2}
        />
        <Button
          type="fill"
          content="회원가입"
          style={{ width: '100%' }}
          onClick={handleSubmit}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 294px);
  display: flex;
  justify-content: center;
  align-items: center;
  & .register-div {
    position: relative;
    & .error {
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      color: #ff0000;
      display: flex;
      justify-content: center;
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
