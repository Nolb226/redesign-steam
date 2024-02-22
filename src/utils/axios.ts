import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_STREAM_API || "http://localhost:8080/api/v1/",
  withCredentials: false,
  timeout: 30000,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    let message: string;

    switch (error.response!.status) {
      case 401:
        message = "Invalid credentials";
        break;
      case 403:
        message = "Access forbidden";
        break;
      // case 409:
      // 	message = `Conflict`;
      // 	break;

      default: {
        message =
          error.response && error.response.data
            ? error.response.data.messages[0]
            : error.message || error;
      }
    }

    return Promise.reject(message);
  },
);

export const Axios = {
  axiosGet: (
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return instance.get(endpoint, config);
  },

  axiosPost: (
    endpoint: string,
    body: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return instance.post(endpoint, body, config);
  },

  axiosPut: (
    endpoint: string,
    body: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return instance.put(endpoint, body, config);
  },

  //   axiosDelete: (
  //     endpoint: string,
  //     config?: AxiosRequestConfig
  //   ): Promise<AxiosResponse> => {
  //     return instance.delete(endpoint, {
  //       ...config,
  //       headers: {
  //         Authorization: "Bearer " + authUtils.getSessionToken(),
  //       },
  //     });
  //   },
};
