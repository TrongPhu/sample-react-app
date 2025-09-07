import Axios from "axios";
import localStorageService from "../services/localStorageService";
import { API_URL } from "../const/path";

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: API_URL || process.env.BE_URL,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorageService.getLocalStorage("token");
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const logout = () => {
  localStorageService.clearLocalStorage();
  window.location.href = "/";
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: any) => {
    const originalConfig = error.config;

    if (error.response?.status !== 401) {
      return Promise.reject(error?.response?.data);
    }
    const refreshToken = localStorageService.getLocalStorage("refreshToken");

    if (refreshToken === undefined) {
      return false;
    }

    Axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
    return Axios.post(`${process.env.NEXT_PUBLIC_ENV_DOMAIN}/auth/refresh`)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          localStorageService.setLocalStorage("token", data.access_token);
          localStorageService.setLocalStorage(
            "refreshToken",
            data.refresh_token
          );
          originalConfig.headers.Authorization = `Bearer ${data.access_token}`;
          return axiosInstance(originalConfig);
        }
        logout();
        return Promise.reject(error);
      })
      .catch(() => {
        logout();
        return Promise.reject(error);
      });
  }
);

export const sendGet = (url: string, params?: any) =>
  axiosInstance.get(url, { params }).then((res) => res?.data);

export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance
    .post(url, params, { params: queryParams })
    .then((res) => res?.data);

export const sendPut = (url: string, params?: any) =>
  axiosInstance.put(url, params).then((res) => res?.data);

export const sendPatch = (url: string, params?: any) =>
  axiosInstance.patch(url, params).then((res) => res?.data);

export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { data: params }).then((res) => res?.data);

export const sendPostS3 = (url: string, params?: any) => {
  Axios.defaults.headers.common.Authorization = undefined;
  return Axios.post(url, params).then((res) => res?.data);
};

export const sendPostDRM = (url: string, params?: any) => {
  Axios.defaults.headers.common.Authorization = undefined;
  return Axios.post(url, params, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => res?.data);
};
