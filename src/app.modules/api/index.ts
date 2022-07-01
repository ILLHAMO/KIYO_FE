import axios from 'axios';
import { qs } from 'app.modules/util/qs';

const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

let axiosClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true
})

export const request: any = async ({url, method, data = null}) => {
    try {
        const response: any = await axiosClient({
            method,
            url,
            data,
          });

          if (response.data.status === 401) {
            const res = await axiosClient({method: 'GET', url: '/auth/refresh', data: {}});
            localStorage.setItem('token', res.data.data.token);
          }
        return response;
    } catch (err) {
        console.error(err.toString());
    }
}

class API {
    async CALL({ method, url, data = null }) {
      return request({ method, url, data });
    }

    GET({ url, ...params }) {
      console.log('asdf');
      
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
  