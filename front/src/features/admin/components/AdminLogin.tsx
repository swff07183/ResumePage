import { postUserLogin } from '@/api/user';
import { Button, Input } from '@/components';
import { IUserLogin } from '@/features/user';
import { useForm } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react';
import styled from 'styled-components';

const AdminLogin = () => {
  const { formData, isError, setIsError, handleInputChange } =
    useForm<IUserLogin>({
      username: 'ivyleaguer',
      password: '',
    });
  const handleSubmit = () => {
    if (formData.password === '') {
      setIsError({ ...isError, password: true });
    } else {
      mutation.mutate(formData);
    }
  };
  const mutation = useMutation({
    mutationFn: (data: IUserLogin) => postUserLogin(data),
    onSuccess: (data) => {
      sessionStorage.setItem('adminToken', data.key);
      window.dispatchEvent(new Event('storage'));
    },
    onError: (e: AxiosError<any>) => {
      setIsError({ ...isError, password: true });
    },
  });
  return (
    <Wrapper>
      <Input
        name="password"
        type="password"
        placeholder="관리자 비밀번호"
        invalid={isError.password}
        onChange={handleInputChange}
      />
      <Button type="fill" content="Login" onClick={handleSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default AdminLogin;
