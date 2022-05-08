import React from 'react';
import styled from 'styled-components';
import MyPageStoreHeader from 'app.feature/mypage/store/MyPageStoreHeader';
import MyPageStoreList from 'app.feature/mypage/store/MyPageStoreList';

const PageMyPageReview = () => {
  return (
    <StyledWrapper>
      <MyPageStoreHeader />
      <MyPageStoreList />
    </StyledWrapper>
  );
}

export default PageMyPageReview;

const StyledWrapper = styled.div`
  height: 100vh;
`;