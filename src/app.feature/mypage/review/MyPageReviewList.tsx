import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageReviewCard from './MyPageReviewCard';
import ModalConfirm from 'app.components/Modal/ModalConfirm';
import useQueryFn from 'app.query/useQueryFn';
import { API_USER_REVIEW } from 'app.modules/api/keyFactory';
import PageLoading from 'app.components/Loading/PageLoading';
import NoneList from 'app.components/NoneList/NoneList';

const MyPageReviewList = () => {
  const { isLoading, data: reviewList } = useQueryFn([API_USER_REVIEW]);

  if (isLoading) return <PageLoading />;
  else if (!reviewList.length)
    return (
      <NoneList
        title="내가 등록한 리뷰가 없습니다."
        button="등록하러 가기"
        link="/review"
      />
    );
  return (
    <StyledWrapper className="mypage-review-list">
      {reviewList?.map((item, idx) => (
        <MyPageReviewCard
          key={`my-page-review-card-${item.reviewId}`}
          reviewInfo={item}
        />
      ))}
    </StyledWrapper>
  );
};

export default MyPageReviewList;

const StyledWrapper = styled.div`
  padding: 20px;
`;
