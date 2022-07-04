import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { axiosClient } from 'app.modules/api';

const PageOauthRedirect = () => {
  const router = useRouter();

  const { setUserInfo } = useStoreIntoAPP();

  useEffect(() => {
    setUserInfo({ token: router.query.token });
    axiosClient.defaults.headers[
      'Authorization'
    ] = `Bearer ${router.query.token}`;
    router.push('/');
  }, []);
};

export default PageOauthRedirect;
