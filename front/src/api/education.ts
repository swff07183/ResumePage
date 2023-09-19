import { IEducation } from '@/features/education/types/IEducation';
import { BASE_URL, client } from './client';

export const getEducation = async () => {
  const { data } = await client.get(`${BASE_URL}/education/`);

  return data;
};

export const postEducation = async (params: IEducation) => {
  const { data } = await client.post(`${BASE_URL}/education/`, params);

  return data;
};

export const putEducation = async (params: IEducation) => {
  const { data } = await client.put(`${BASE_URL}/education/`, params);

  return data;
};

export const deleteEducation = async () => {
  const { data } = await client.delete(`${BASE_URL}/education/`);

  return data;
};
