import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageStoreCard from './MyPageStoreCard';
import ModalConfirm from 'app.components/Modal/ModalConfirm';

const MyPageStoreList = () => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteModalVisible = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  return (
    <StyledWrapper className="mypage-store-list">
      <ModalConfirm
        isModalVisible={isDeleteModalVisible}
        handleModalVisible={handleDeleteModalVisible}
        handleConfirm={() => console.log('삭제하기')}
      >
        정말 삭제하시겠습니까?
      </ModalConfirm>
      <MyPageStoreCard handleDeleteModalVisible={handleDeleteModalVisible}/>
      <MyPageStoreCard handleDeleteModalVisible={handleDeleteModalVisible}/>
      <MyPageStoreCard handleDeleteModalVisible={handleDeleteModalVisible}/>
      <MyPageStoreCard handleDeleteModalVisible={handleDeleteModalVisible}/>
    </StyledWrapper>
  );
};

export default MyPageStoreList;

const StyledWrapper = styled.div`
  padding: 20px;
`;
