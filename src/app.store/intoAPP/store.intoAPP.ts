import create from 'zustand';
import API from 'app.modules/api';
import { API_USER_PROFILE } from 'app.modules/api/keyFactory';

const initialUserState = {
  login: false,
  info: null,
  token: null,
  isLoading: true,
};

export const useStoreIntoAPP: any = create((set) => ({
  getUser: { ...initialUserState },

  requestAuthUser: async (): Promise<any> => {
    try {
      const response = await API.GET({
        url: API_USER_PROFILE,
      });

      if (response.data.status === 401) {
        set((state) => ({
          ...state,
          getUser: {
            ...initialUserState,
            isLoading: false,
          },
        }));
      } else {
        set((state) => ({
          ...state,
          getUser: {
            // TO DO
            // 받아온 유저 정보 넣어주기
            ...state.getUser,
            login: true,
            isLoading: false,
          },
        }));
      }
    } catch (err) {
      console.log(err);
      set((state) => ({
        ...state,
        getUser: {
          ...initialUserState,
          isLoading: false,
        },
      }));
    }
  },

  setUserInfo: (data) => {
    set((state) => ({
      ...state,
      getUser: {
        ...state.getUser,
        ...data,
      },
    }));
  },
}));

export const useGetUser = () => {
  return useStoreIntoAPP((state) => state.getUser);
};
