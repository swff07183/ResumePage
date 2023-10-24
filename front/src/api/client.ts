import axios from 'axios';

// export const BASE_URL = 'http://localhost:8000/api';
export const BASE_URL = 'https://ivyleaguer-resume.site/api';

export const client = axios.create({
  url: BASE_URL,
});

export const adminClient = axios.create({
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

// 관리자 계정 인터셉터
adminClient.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('adminToken')
    ? sessionStorage.getItem('adminToken')
    : null;
  if (token) {
    config.headers!.Authorization = `Token ${token}`;
  }

  return config;
});
