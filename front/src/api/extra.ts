import { ICareerContent, ISkill } from '@/features/extra';
import { BASE_URL, client } from './client';
import { ISelfIntroduction } from '@/features/extra/types';

export const getSkill = async () => {
  const { data } = await client.get(`${BASE_URL}/skill/`);

  return data;
};

export const postSkill = async (params: ISkill) => {
  const { data } = await client.post(`${BASE_URL}/skill/`, params);

  return data;
};

export const getCareerContent = async () => {
  const { data } = await client.get(`${BASE_URL}/career-content/`);

  return data;
};

export const postCareerContent = async (params: ICareerContent) => {
  const { data } = await client.post(`${BASE_URL}/career-content/`, params);

  return data;
};

export const deleteCareerContent = async () => {
  const { data } = await client.delete(`${BASE_URL}/career-content/`);

  return data;
};

export const getSelfIntroduction = async () => {
  const { data } = await client.get(`${BASE_URL}/self-introduction/`);

  return data;
};

export const postSelfIntroduction = async (params: ISelfIntroduction) => {
  const { data } = await client.post(`${BASE_URL}/self-introduction/`, params);

  return data;
};

export const deleteSelfIntroduction = async () => {
  const { data } = await client.delete(`${BASE_URL}/self-introduction/`);

  return data;
};
