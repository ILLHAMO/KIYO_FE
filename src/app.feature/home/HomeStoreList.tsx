import React from 'react';
import styled from 'styled-components';
import StoreCard from 'app.components/StoreCard/StoreCard';

const HomeStoreList = () => {
  return (
    <StyledWrapper>
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </StyledWrapper>
  );
};

export default HomeStoreList;

const StyledWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
`;
