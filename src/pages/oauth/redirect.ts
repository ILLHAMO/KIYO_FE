import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { axiosClient } from 'app.modules/api';
import { Alert, message } from 'antd';

const PageOauthRedirect = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);

  const { setUserInfo } = useStoreIntoAPP();

  console.log('token:::::::::');
  console.log('token:::::::::', token);

  useEffect(() => {
    if (!(typeof window === 'undefined')) {
      const url = new URL(window.location.href);
      const urlParams = url.searchParams;

      setToken(urlParams.get('token'));

      setUserInfo({ token: urlParams.get('token') });
      axiosClient.defaults.headers['Authorization'] = `Bearer ${urlParams.get(
        'token'
      )}`;
      router.push('/');
    } else {
      // TEST
      console.log('로그인 실패!!!');
      message.error('로그인 실패!!!');
    }
  }, []);
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { query } = context;

//   return {
//     props: {
//       token: query.token,
//     },
//   };
// };

export default PageOauthRedirect;
