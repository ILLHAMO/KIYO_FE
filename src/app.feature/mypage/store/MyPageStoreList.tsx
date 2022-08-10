import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageStoreCard from './MyPageStoreCard';
import useQueryFn from 'app.query/useQueryFn';
import { API_USER_STORE } from 'app.modules/api/keyFactory';
import PageLoading from 'app.components/Loading/PageLoading';
import NoneList from 'app.components/NoneList/NoneList';

const MyPageStoreList = () => {
  const { isLoading, data: storeList } = useQueryFn([API_USER_STORE]);

  if (isLoading) return <PageLoading />;
  else if (!storeList.length)
    return (
      <NoneList
        title="내가 등록한 식당이 없습니다."
        button="등록하러 가기"
        link="/register"
      />
    );
  return (
    <StyledWrapper className="mypage-store-list">
      {storeList?.map((item, idx) => (
        <MyPageStoreCard
          key={`my-page-store-card-${item.reviewId}`}
          storeInfo={item}
        />
      ))}
    </StyledWrapper>
  );
};

export default MyPageStoreList;

const StyledWrapper = styled.div`
  padding: 20px;
`;
