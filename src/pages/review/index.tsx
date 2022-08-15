import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'app.components/Header/Header';
import ReviewSearch from 'app.feature/review/ReviewSearch';
import ReviewForm from 'app.feature/review/ReviewForm';
import useQuerySearchStore from 'app.query/useQuerySearchStore';

const PageReview = () => {
  const [reviewStore, setReviewStore] = useState(null);

  return (
    <StyledWrapper>
      <Header title="리뷰 등록하기" />
      {!reviewStore ? (
        <ReviewSearch setReviewStore={setReviewStore} />
      ) : (
        <ReviewForm reviewStore={reviewStore} />
      )}
    </StyledWrapper>
  );
};

export default PageReview;

const StyledWrapper = styled.div`
  height: 100vh;
`;
