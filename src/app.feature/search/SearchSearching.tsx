import React from 'react';
import styled from 'styled-components';

const SearchSearching = ({ lastStoreRef, dataset }) => {
  return (
    <StyledWrapper>
      {dataset.map((item) => (
        <div className="recomend-item-container">
          <img src="/images/search/search.png" alt="" />
          <div className="recomend-item-title">망고 케이크</div>
        </div>
      ))}

      <div className="last-item-flag" ref={lastStoreRef} />
    </StyledWrapper>
  );
};

export default SearchSearching;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 0;
  position: relative;
  background-color: white;

  display: flex;
  flex-direction: column;

  .recomend-item-container {
    padding: 0 24px;
    height: 48px;
    display: flex;
    align-items: center;
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 16px;
  }

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
