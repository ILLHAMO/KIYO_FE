import React from 'react';
import styled from 'styled-components';
import MyPageInfo from 'app.feature/mypage/MyPageInfo';
import MyPageList from 'app.feature/mypage/MyPageList';
import NotLogin from 'app.components/NotLogin/NotLogin';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import PageLoading from 'app.components/Loading/PageLoading';

const PageMyPage = () => {
  const { isLoading, login, info: userInfo } = useGetUser();

  if (isLoading) return <PageLoading />;
  if (!login) return <NotLogin />;
  return (
    <StyledWrapper>
      <MyPageInfo userInfo={userInfo} />
      <MyPageList />
    </StyledWrapper>
  );
};

export default PageMyPage;

const StyledWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;
