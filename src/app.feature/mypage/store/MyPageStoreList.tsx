import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageStoreCard from './MyPageStoreCard';
import ModalConfirm from 'app.components/Modal/ModalConfirm';
import useQueryFn from 'app.query/useQueryFn';
import { API_USER_STORE } from 'app.modules/api/keyFactory';
import PageLoading from 'app.components/Loading/PageLoading';

const MyPageStoreList = () => {
  const { isLoading, data: storeList } = useQueryFn([API_USER_STORE]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteModalVisible = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  if (isLoading) return <PageLoading />;
  return (
    <StyledWrapper className="mypage-store-list">
      <ModalConfirm
        isModalVisible={isDeleteModalVisible}
        handleModalVisible={handleDeleteModalVisible}
        handleConfirm={() => console.log('삭제하기')}
      >
        정말 삭제하시겠습니까?
      </ModalConfirm>
      {storeList?.map((item, idx) => (
        <MyPageStoreCard
          key={`my-page-store-card-${item.reviewId}`}
          storeInfo={item}
          handleDeleteModalVisible={handleDeleteModalVisible}
        />
      ))}
    </StyledWrapper>
  );
};

export default MyPageStoreList;

const StyledWrapper = styled.div`
  padding: 20px;
`;
