import axios from 'axios';
import { URL_DEFAULT } from './consts';


const instance = axios.create({
  baseURL: `${URL_DEFAULT}/api`
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token');
  return config;
});

export default instance;