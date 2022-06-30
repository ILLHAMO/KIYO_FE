import axios from 'axios';
import { qs } from 'app.modules/util/qs';

let axiosClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Application: `Bearer `
    }
})

export const request: any = async ({url, method, data = null}) => {
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
}

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
  