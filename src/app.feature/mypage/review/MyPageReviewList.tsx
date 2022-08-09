import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageReviewCard from './MyPageReviewCard';
import ModalConfirm from 'app.components/Modal/ModalConfirm';
import useQueryFn from 'app.query/useQueryFn';
import { API_USER_REVIEW } from 'app.modules/api/keyFactory';
import PageLoading from 'app.components/Loading/PageLoading';

const MyPageReviewList = () => {
  const { isLoading, data: reviewList } = useQueryFn([API_USER_REVIEW]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteModalVisible = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  if (isLoading) return <PageLoading />;
  return (
    <StyledWrapper className="mypage-review-list">
      <ModalConfirm
        isModalVisible={isDeleteModalVisible}
        handleModalVisible={handleDeleteModalVisible}
        handleConfirm={() => console.log('삭제하기')}
      >
        정말 삭제하시겠습니까?
      </ModalConfirm>
      {reviewList?.map((item, idx) => (
        <MyPageReviewCard
          key={`my-page-review-card-${item.reviewId}`}
          reviewInfo={item}
          handleDeleteModalVisible={handleDeleteModalVisible}
        />
      ))}
    </StyledWrapper>
  );
};

export default MyPageReviewList;

const StyledWrapper = styled.div`
  padding: 20px;
`;
