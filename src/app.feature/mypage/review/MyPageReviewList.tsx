import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageReviewCard from './MyPageReviewCard';
import ModalConfirm from 'app.components/Modal/ModalConfirm';

const MyPageReviewList = () => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteModalVisible = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  }

  return (
    <StyledWrapper className="mypage-review-list">
      <ModalConfirm
        isModalVisible={isDeleteModalVisible}
        handleModalVisible={handleDeleteModalVisible}
        handleConfirm={() => console.log('삭제하기')}
      >
        정말 삭제하시겠습니까?
      </ModalConfirm>
      <MyPageReviewCard />
      <MyPageReviewCard />
    </StyledWrapper>
  );
};

export default MyPageReviewList;

const StyledWrapper = styled.div`
  padding: 20px;
`;
