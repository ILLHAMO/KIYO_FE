import React from 'react';
import styled from 'styled-components';
import Header from 'app.components/Header/Header';
import MyPageEdit from 'app.feature/mypage/edit/MyPageEdit';
import useQueryFn from 'app.query/useQueryFn';
import { API_USER_PROFILE } from 'app.modules/api/keyFactory';

const PageMyPageEdit = () => {
  const { data: userInfo, isLoading } = useQueryFn([API_USER_PROFILE]);

  if (isLoading) return null;
  return (
    <StyledWrapper>
      <Header title="내 정보 수정" />
      <MyPageEdit userInfo={userInfo} />
    </StyledWrapper>
  );
};

export default PageMyPageEdit;

const StyledWrapper = styled.div`
  height: 100vh;
`;
