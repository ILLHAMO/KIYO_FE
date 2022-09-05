import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import StoreTopBanner from 'app.feature/store/StoreTopBanner';
import StoreTab from 'app.feature/store/StoreTab/StoreTab';
import useQueryFn from 'app.query/useQueryFn';
import { API_STORE_INFO } from 'app.modules/api/keyFactory';
import PageLoading from 'app.components/Loading/PageLoading';

const PageStore = () => {
  const router = useRouter();
  const { storeId } = router.query;

  const {
    data: storeData,
    isLoading,
    error,
  } = useQueryFn([API_STORE_INFO(storeId)], { cacheTime: 0 });

  if (isLoading) return <PageLoading />;
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
