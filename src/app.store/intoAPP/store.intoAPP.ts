import create from "zustand";
import { authorizationAPI } from "app.modules/api/api.authroization";

export const useStoreIntoAPP = create<any>((set) => ({
    getUser: {
        login: false,
        info: null,
        accessToken: null,
        isLoading: true,
    },

    requestAuthUser: async (): Promise<any> => {
        const result = await authorizationAPI();
        console.log('result');
        
        set((state) => ({
            ...state,
            getUser: {
                ...state.getUser,
                ...result,
                isLoading: false
            }
        }))
    },

    setUserInfo: (data) => {
        set((state) => ({
            ...state,
            getUser: {
                ...data
            }
        }))
    }
}))

export const useGetUser = () => {
    return useStoreIntoAPP((state) => state.getUser);
}