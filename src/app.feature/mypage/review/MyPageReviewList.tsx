import React from 'react';
import styled from 'styled-components';
import MyPageReviewCard from './MyPageReviewCard';

const MyPageReviewList = () => {
  return (
    <StyledWrapper className="mypage-review-list">
      <MyPageReviewCard />
      <MyPageReviewCard />
    </StyledWrapper>
  );
};

export default MyPageReviewList;

const StyledWrapper = styled.div`
  padding: 20px;
`;
