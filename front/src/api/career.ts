import { ICareer } from '@/features/career';
import { BASE_URL, client } from './client';

export const getCareerList = async () => {
  const { data } = await client.get(`${BASE_URL}/career/`);

  return data;
};

export const getCareer = async (id: number) => {
  const { data } = await client.get(`${BASE_URL}/career/${id}`);

  return data;
};

export const postCareer = async (params: ICareer) => {
  const { data } = await client.post(`${BASE_URL}/career/`, params);

  return data;
};

export const putEducation = async (id: number, params: ICareer) => {
  const { data } = await client.put(`${BASE_URL}/education/${id}`, params);

  return data;
};

export const deleteEducation = async (id: number) => {
  const { data } = await client.delete(`${BASE_URL}/education/${id}`);

  return data;
};
