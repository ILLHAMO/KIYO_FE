import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from 'app.components/Header/Header';
import ReviewForm from 'app.feature/review/ReviewForm';
import useQueryFn from 'app.query/useQueryFn';
import PageLoading from 'app.components/Loading/PageLoading';
import { API_REVIEW_UPDATE } from 'app.modules/api/keyFactory';

const PageReviewEdit = () => {
  const router = useRouter();
  const { reviewId } = router.query;

  const { data, isLoading } = useQueryFn([API_REVIEW_UPDATE(reviewId)], {
    cacheTime: 0,
  });

  if (isLoading) return <PageLoading />;
  return (
    <StyledWrapper>
      <Header title="리뷰 수정하기" />
      <ReviewForm
        editInfo={data}
        reviewStore={{
          id: reviewId,
          name: data?.storeName,
          address: data?.address,
          reviewImages: data?.reviewImages,
        }}
      />
    </StyledWrapper>
  );
};

export default PageReviewEdit;

const StyledWrapper = styled.div`
  height: 100vh;
`;
