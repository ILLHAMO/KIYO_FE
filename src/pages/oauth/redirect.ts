import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { axiosClient } from 'app.modules/api';
import { Alert, message } from 'antd';

const PageOauthRedirect = ({ token }) => {
  const router = useRouter();
  const { setUserInfo } = useStoreIntoAPP();

  console.log('token:::::::::', token);

  useEffect(() => {
    if (token) {
      setUserInfo({ token });
      axiosClient.defaults.headers['Authorization'] = `Bearer ${token}`;
      router.push('/');
    } else {
      // TEST
      console.log('로그인 실패!!!');
      message.error('로그인 실패!!!');
    }
  }, []);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      token: query.token,
    },
  };
};

export default PageOauthRedirect;
