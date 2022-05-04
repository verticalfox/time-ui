import axios from 'axios';
import { AUTH_TOKEN_STORAGE_KEY } from './constant';

const BASE_URL = "http://localhost:3000";

const API_NAMESPACE = '/api/v1';

const USER_TOKEN = localStorage.getItem('_time_k_');

const DEFAULT_CONFIG = {
  url: '',
  headers: {},
  data: {},
};

const http = (method = 'get', userConfig = {}) => {
  const { url, headers, data } = {
    ...DEFAULT_CONFIG,
    ...userConfig,
  };
  const paramsKey = method === 'get' ? 'params' : 'data';


  return axios({
    method,
    url: `${BASE_URL}/${API_NAMESPACE}/${url}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': USER_TOKEN,
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
    [paramsKey]: data,
  })
};

export const getRequest = config => http('get', config);

export const postRequest = config => http('post', config);

export const putRequest = config => http('put', config);

export const patchRequest = config => http('patch', config);

export const deleteRequest = config => http('delete', config);

