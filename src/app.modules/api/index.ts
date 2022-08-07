import axios from 'axios';
import { qs } from 'app.modules/util/qs';
import { API_AUTH_LOGOUT, API_AUTH_REFRESH } from './keyFactory';

const token =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem('KIYO_TOKEN')
    : null;

export let axiosClient = axios.create({
  baseURL: process.env.KIYO_API_END_POINT,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  async (response) => {
    if (response?.data?.status === 401) {
      if (response?.data?.message === '토큰 기한 만료') {
        const { config } = response;
        const res = await axios.post(
          'https://www.jmsteady.net/auth/refresh',
          {
            expiredToken: localStorage
              ? localStorage.getItem('KIYO_TOKEN')
              : null,
          },
          { withCredentials: true }
        );

        if (res?.data?.data?.token) {
          localStorage.setItem('KIYO_TOKEN', res.data.data.token);
          const finalResponse: any = await axiosClient({
            ...config,
            headers: {
              Authorization: `Bearer ${res.data.data.token}`,
            },
          });

          return finalResponse;
        } else if (res?.data?.message === '재로그인 필요') {
          // 재로그인 필요라는 메시지 받았을 때 로컬스토리지 지우고 로그아웃 시키고 enter페이지 이동
          // await axiosClient({
          //   method: 'DELETE',
          //   url: API_AUTH_LOGOUT,
          //   data: {},
          // });
          // // location.replace('/enter');
        }
      }
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const request: any = async ({ url, method, data = null }) => {
  try {
    const response: any = await axiosClient({
      method,
      url,
      data,
    });

    return response;
  } catch (err) {
    console.error(err.toString());
  }
};

class API {
  async CALL({ method, url, data = null }) {
    return request({ method, url, data });
  }

  GET({ url, ...params }) {
    return this.CALL({
      method: 'GET',
      url: url + qs.stringURL(params.data),
    });
  }

  POST({ url, ...params }) {
    return this.CALL({
      method: 'POST',
      url,
      ...params,
    });
  }

  PUT({ url, ...params }) {
    return this.CALL({
      method: 'PUT',
      url,
      ...params,
    });
  }

  DELETE({ url, ...params }) {
    return this.CALL({
      method: 'DELETE',
      url,
      ...params,
    });
  }
}

export default new API();
