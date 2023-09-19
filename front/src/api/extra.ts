import { ISkill } from '@/features/extra/types';
import { BASE_URL, client } from './client';

export const getSelfIntroduction = async () => {
  const { data } = await client.get(`${BASE_URL}/self-introduction/`);

  return data;
};

export const getSkill = async () => {
  const { data } = await client.get(`${BASE_URL}/skill/`);

  return data;
};

export const postSkill = async (params: ISkill) => {
  const { data } = await client.post(`${BASE_URL}/skill/`, params);

  return data;
};
