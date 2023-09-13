import axios from 'axios';

export const BASE_URL = 'http://localhost:8000/api';
// export const BASE_URL = '';

export const client = axios.create({
  url: BASE_URL,
});

// 요청 인터셉터 추가하기
client.interceptors.request.use(function (config) {
  // 요청이 전달되기 전에 작업 수행
  const token = sessionStorage.getItem('token')
    ? sessionStorage.getItem('token')
    : null;
  if (token) {
    config.headers!.Authorization = `Token ${token}`;
  }

  return config;
});
