import axios from 'axios';
import { qs } from 'app.modules/util/qs';

export let axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer null`,
  },
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  async (response) => {
    if (response?.data?.status === 401) {
      const { config } = response;

      const res = await axiosClient({
        method: 'GET',
        url: '/auth/refresh',
        data: {},
      });

      if (res?.data?.data?.token) {
        localStorage.setItem('token', res.data.data.token);
        axiosClient.defaults.headers[
          'Authorization'
        ] = `Bearer ${res.data.data.token}`;

        const finalResponse: any = await axiosClient({
          ...config,
          headers: {
            Authorization: `Bearer ${res.data.data.token}`,
          },
        });

        return finalResponse;
      } else {
        await axiosClient({
          method: 'DELETE',
          url: '/auth/logout',
          data: {},
        });
        location.replace('/enter');
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
