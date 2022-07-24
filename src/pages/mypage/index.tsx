import React from 'react';
import styled from 'styled-components';
import MyPageInfo from 'app.feature/mypage/MyPageInfo';
import MyPageList from 'app.feature/mypage/MyPageList';
import useQueryFn from 'app.query/useQueryFn';
import { API_USER_PROFILE } from 'app.modules/api/keyFactory';

const PageMyPage = () => {
  const { data: userInfo, isLoading } = useQueryFn([API_USER_PROFILE]);

  if (isLoading) return null;
  return (
    <StyledWrapper>
      <MyPageInfo userInfo={userInfo} />
      <MyPageList />
    </StyledWrapper>
  );
};

export default PageMyPage;

const StyledWrapper = styled.div`
  height: 100vh;
`;
