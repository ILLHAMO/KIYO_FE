import React from 'react';
import styled from 'styled-components';
import MyPageReviewList from 'app.feature/mypage/review/MyPageReviewList';
import MyPageReviewHeader from 'app.feature/mypage/review/MyPageReviewHeader';

const PageMyPageReview = () => {
  return <StyledWrapper>
    <MyPageReviewHeader />
    <MyPageReviewList />
  </StyledWrapper>
}

export default PageMyPageReview;

const StyledWrapper = styled.div`
  height: 100vh;
`;