import axios from 'axios';

const BASE_URL = "http://localhost:3000";

const API_NAMESPACE = '/api/v1';

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

