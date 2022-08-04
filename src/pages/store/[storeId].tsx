import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StoreTopBanner from 'app.feature/store/StoreTopBanner';
import StoreTab from 'app.feature/store/StoreTab/StoreTab';
import { useRouter } from 'next/router';
import useQueryFn from 'app.query/useQueryFn';
import { API_STORE_INFO } from 'app.modules/api/keyFactory';

const PageStore = () => {
  const router = useRouter();
  const { storeId } = router.query;

  const {
    data: storeData,
    isLoading,
    error,
  } = useQueryFn([API_STORE_INFO(storeId)]);

  if (isLoading) return <div>로딩중</div>;
  return (
    <StyledWrapper>
      <StoreTopBanner storeDetailInfo={storeData} />
      <StoreTab />
    </StyledWrapper>
  );
};

export default PageStore;

const StyledWrapper = styled.div`
  height: 100vh;
`;
