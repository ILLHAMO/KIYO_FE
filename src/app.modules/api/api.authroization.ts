import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";
import API from 'app.modules/api';

export const authorizationAPI = async () => {
    try {
        // const userInfo = await API.GET({url: '/auth/refresh', data: {}});

        return {
            login: true,
            // ...userInfo,
            info: {
                name: '워쩌고'
            },
            accessToken: '123123'
        }
    } catch (err) {
        console.log('err', err);
        
        return {
            login: false,
        }
    }

}