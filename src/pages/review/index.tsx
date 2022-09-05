import React from 'react';
import styled from 'styled-components';
import Header from 'app.components/Header/Header';
import ReviewSearch from 'app.feature/review/ReviewSearch';

const PageReview = () => {
  return (
    <StyledWrapper>
      <Header title="리뷰 등록하기" />
      <ReviewSearch />
    </StyledWrapper>
  );
};

export default PageReview;

const StyledWrapper = styled.div`
  height: 100vh;
`;
