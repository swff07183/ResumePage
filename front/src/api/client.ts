import axios from 'axios';

// export const BASE_URL = 'http://localhost:8000';
export const BASE_URL = '';

export const client = axios.create({
  url: BASE_URL,
});
