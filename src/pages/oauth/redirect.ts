import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { axiosClient } from 'app.modules/api';
import { message } from 'antd';

const PageOauthRedirect = () => {
  const router = useRouter();
  const { setUserInfo } = useStoreIntoAPP();

  useEffect(() => {
    if (!(typeof window === 'undefined')) {
      const url = new URL(window.location.href);
      const urlParams = url.searchParams;

      setUserInfo({ token: urlParams.get('token') });
      localStorage.setItem('KIYO_TOKEN', urlParams.get('token'));
      axiosClient.defaults.headers['Authorization'] = `Bearer ${urlParams.get(
        'token'
      )}`;

      if (urlParams.get('nickname')) document.location.href('/');
    } else {
      console.log('로그인 실패!!!');
      message.error('로그인 실패!!!');
    }
  }, []);
};

export default PageOauthRedirect;
