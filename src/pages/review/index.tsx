import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from 'app.components/Header/Header';
import ReviewSearch from 'app.feature/review/ReviewSearch';
import ReviewForm from 'app.feature/review/ReviewForm';

const PageReview = () => {
  const router = useRouter();

  const { create } = router.query;

  return (
    <StyledWrapper>
      <Header title="리뷰 등록하기" />
      {/*<ReviewSearch />*/}
      <ReviewForm />
    </StyledWrapper>
  );
};

export default PageReview;

const StyledWrapper = styled.div`
  height: 100vh;
`;
