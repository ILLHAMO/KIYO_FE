import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from 'app.components/Header/Header';
import ReviewSearch from 'app.feature/review/ReviewSearch';
import ReviewForm from 'app.feature/review/ReviewForm';

const PageReview = () => {
  const [storeId, setStoreId] = useState(1);

  return (
    <StyledWrapper>
      <Header title="리뷰 등록하기" />
      {!storeId ? <ReviewSearch /> : <ReviewForm storeId={storeId} />}
    </StyledWrapper>
  );
};

export default PageReview;

const StyledWrapper = styled.div`
  height: 100vh;
`;
