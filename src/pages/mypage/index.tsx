import React from 'react';
import styled from 'styled-components';
import MyPageInfo from 'app.feature/mypage/MyPageInfo';
import MyPageList from 'app.feature/mypage/MyPageList';

const PageMyPage = () => {
  return (
    <StyledWrapper>
      <MyPageInfo />
      <MyPageList />
    </StyledWrapper>
  );
};

export default PageMyPage;

const StyledWrapper = styled.div`
  height: 100vh;
`;
