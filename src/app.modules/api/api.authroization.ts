import axios from "axios"

export const authorizationAPI = async () => {
    try {
        // const userInfo = await axios.get('유저 정보 가져오는 API');

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