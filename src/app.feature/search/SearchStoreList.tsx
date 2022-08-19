import React, { useRef } from 'react';
import styled from 'styled-components';
import StoreCard from 'app.components/StoreCard/StoreCard';
import useQueryStoreList from 'app.query/useQueryStoreList';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';

const SearchStoreList = ({ lastStoreRef, isSuccess, dataset }) => {
  return isSuccess && !dataset.length ? (
    <StyledWrapper>없을 때</StyledWrapper>
  ) : (
    <StyledWrapper className="home-store-list">
      {dataset.map((item, idx) => (
        <StoreCard
          storeInfo={{ ...item, images: [item.storeImage] }}
          key={`store-card-${idx}`}
        />
      ))}
      <div className="last-item-flag" ref={lastStoreRef} />
    </StyledWrapper>
  );
};

export default SearchStoreList;

const StyledWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
  position: relative;

  .last-item-flag {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 100px;
    // visibility: hidden;
    background: #000;
  }
`;
