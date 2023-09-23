import { ICareerContent, ISkill } from '@/features/extra';
import { BASE_URL, client } from './client';
import { IAward, ISelfIntroduction } from '@/features/extra/types';

export const getSkill = async () => {
  const { data } = await client.get(`${BASE_URL}/skill/`);

  return data;
};

export const postSkill = async (params: ISkill) => {
  const { data } = await client.post(`${BASE_URL}/skill/`, params);

  return data;
};

export const deleteSkill = async (id: number) => {
  const { data } = await client.delete(`${BASE_URL}/skill/${id}`);

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

export const getAward = async () => {
  const { data } = await client.get(`${BASE_URL}/award/`);

  return data;
};

export const postAward = async (params: IAward) => {
  const { data } = await client.post(`${BASE_URL}/award/`, params);

  return data;
};

export const putAward = async (id: number, params: IAward) => {
  const { data } = await client.put(`${BASE_URL}/award/${id}/`, params);

  return data;
};

export const deleteAward = async (id: number) => {
  const { data } = await client.delete(`${BASE_URL}/award/${id}/`);

  return data;
};

export const getExperience = async () => {
  const { data } = await client.get(`${BASE_URL}/experience/`);

  return data;
};

export const postExperience = async (params: IAward) => {
  const { data } = await client.post(`${BASE_URL}/experience/`, params);

  return data;
};

export const putExperience = async (id: number, params: IAward) => {
  const { data } = await client.put(`${BASE_URL}/experience/${id}/`, params);

  return data;
};

export const deleteExperience = async (id: number) => {
  const { data } = await client.delete(`${BASE_URL}/experience/${id}/`);

  return data;
};
