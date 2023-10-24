import { BASE_URL, adminClient } from './client';

export const getSubmit = async () => {
  const { data } = await adminClient.get(`${BASE_URL}/submit/`);

  return data;
};

export const getUserPreview = async (userId: number) => {
  const { data } = await adminClient.get(`${BASE_URL}/preview/${userId}/`);

  return data;
};
