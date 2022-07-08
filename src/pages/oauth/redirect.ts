import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { axiosClient } from 'app.modules/api';
import { Alert, message } from 'antd';

const PageOauthRedirect = () => {
  const router = useRouter();
  const { setUserInfo } = useStoreIntoAPP();

  console.log('token:::::::::', router.query.token);

  useEffect(() => {
    if (router.isReady) {
      setUserInfo({ query: router.query.token });
      axiosClient.defaults.headers[
        'Authorization'
      ] = `Bearer ${router.query.token}`;
      router.push('/');
    } else {
      // TEST
      console.log('로그인 실패!!!');
      message.error('로그인 실패!!!');
    }
  }, [router.isReady]);
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
