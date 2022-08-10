import axiosOriginal, { AxiosRequestConfig } from 'axios';

interface Config {
  api: AxiosRequestConfig;
}

const config: Config = {
  api: {
    baseURL: 'https://registry.npmjs.org/-/v1/',
  },
};

const createApi = (config = {}) => {
  const api = axiosOriginal.create(config);
  api.interceptors.request.use(
    successfulReq => {
      return successfulReq;
    },
    error => {
      console.log('ERROR: ', error);

      throw error;
    },
  );
  return api;
};

export const api = createApi(config.api);
