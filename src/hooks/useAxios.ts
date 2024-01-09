import axios, { AxiosRequestHeaders } from 'axios';

type Props = {
  headers?: AxiosRequestHeaders;
};

export function useServiceAxios({ headers }: Props = {}) {
  function instance() {
    const axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: headers ?? {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      proxy: false,
    });

    return axiosInstance;
  }

  return { instance };
}
