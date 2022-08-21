import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from 'app.components/Header/Header';
import ReviewForm from 'app.feature/review/ReviewForm';

const PageReviewEdit = () => {
  const router = useRouter();

  return (
    <StyledWrapper>
      <Header title="리뷰 등록하기" />
      <ReviewForm
        reviewStore={{
          ...router.query,
        }}
      />
    </StyledWrapper>
  );
};

export default PageReviewEdit;

const StyledWrapper = styled.div`
  height: 100vh;
`;
