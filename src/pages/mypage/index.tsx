import React from 'react';
import styled from 'styled-components';
import MyPageInfo from 'app.feature/mypage/MyPageInfo';
import MyPageList from 'app.feature/mypage/MyPageList';
import useQueryFn from 'app.query/useQueryFn';
import { API_USER_PROFILE } from 'app.modules/api/keyFactory';
import NotLogin from 'app.components/NotLogin/NotLogin';

const PageMyPage = () => {
  const { data: userInfo, isLoading } = useQueryFn([API_USER_PROFILE]);

  if (isLoading) return null;
  if (!userInfo?.nickname) return <NotLogin />;
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
