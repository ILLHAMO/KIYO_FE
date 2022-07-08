import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { axiosClient } from 'app.modules/api';
import { Alert, message } from 'antd';

const PageOauthRedirect = () => {
  const router = useRouter();

  const { setUserInfo } = useStoreIntoAPP();

  useEffect(() => {
    if (router?.query?.token) {
      setUserInfo({ token: router.query.token });
      console.log(router.query.token);

      axiosClient.defaults.headers[
        'Authorization'
      ] = `Bearer ${router.query.token}`;
      router.push('/');
    } else {
      // TEST
      console.log('로그인 실패!!!');
      message.error('로그인 실패!!!');
    }
  }, []);
};

export default PageOauthRedirect;
