import axios from 'axios';
import {getEnvironmentApi} from '../constant/Environment';

export const create = () => {
  const api = axios.create({
    baseURL: getEnvironmentApi(),
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 15000,
  });

  const getRequest = url => api.get(url);
  const postRequest = (url, params) => api.post(url, params);
  const patchRequest = (url, params) => api.patch(url, params);
  const deleteRequest = url => api.delete(url);

  return {
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest,
  };
};
