import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from 'app.components/Header/Header';
import ReviewForm from 'app.feature/review/ReviewForm';

const PageReviewEdit = () => {
  const router = useRouter();

  const { create } = router.query;

  return (
    <StyledWrapper>
      <Header title="리뷰 수정하기" />
      <ReviewForm />
    </StyledWrapper>
  );
};

export default PageReviewEdit;

const StyledWrapper = styled.div`
  height: 100vh;
`;
