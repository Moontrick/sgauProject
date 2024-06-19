import axios from 'axios';
import {stringify} from 'qs';

export const baseService = axios.create();


baseService.interceptors.request.use(
  (req) => {
    req.paramsSerializer = (params) => {
      return stringify(params, {arrayFormat: 'repeat'});
    };
    const token = sessionStorage.getItem('token');

    if(token){
      if (req.headers) {
        req.headers.Authorization = `Bearer ${token}`;
      }
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);