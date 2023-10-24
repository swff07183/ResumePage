import { IUserInfo, IUserLogin, IUserSignup } from '@/features/user';
import { BASE_URL, client } from './client';

export const postUserSignUp = async (params: IUserSignup) => {
  const { data } = await client.post(`${BASE_URL}/user/signup/`, params);

  return data;
};

export const postUserLogin = async (params: IUserLogin) => {
  const { data } = await client.post(`${BASE_URL}/user/login/`, params);

  return data;
};

export const getUser = async () => {
  const { data } = await client.get(`${BASE_URL}/user/user/`);

  return data;
};

export const getUserInfo = async () => {
  const { data } = await client.get(`${BASE_URL}/userInfo/`);

  return data;
};

export const postUserInfo = async (params: IUserInfo) => {
  const { data } = await client.post(`${BASE_URL}/userInfo/`, params);

  return data;
};

export const postUserInfoType = async (params: { userType: string }) => {
  const { data } = await client.post(`${BASE_URL}/userInfo/`, params);

  return data;
};

export const postSubmit = async () => {
  const { data } = await client.post(`${BASE_URL}/submit/`);

  return data;
};
