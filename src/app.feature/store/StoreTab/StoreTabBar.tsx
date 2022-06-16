import React from 'react';
import styled from 'styled-components';

const StoreTabBar = () => {
  return (
    <StyledWrapper className='store-tab-bar'>
      <div className="store-tab-bar__tab-item store-tab-bar__tab-item--on">
        <span>About</span>
      </div>
      <div className="store-tab-bar__tab-item">
        <span>Menu</span>
      </div>
      <div className="store-tab-bar__tab-item">
        <span>Review</span>
      </div>
    </StyledWrapper>
  );
};

export default StoreTabBar;

const StyledWrapper = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  padding: 16px 20px 0;
  background-color: var(--color-white);
  
  .store-tab-bar__tab-item {
    cursor: pointer;
    width: calc(100% / 3);
    text-align: center;
    padding: 0 0 4px;

    &.store-tab-bar__tab-item--on {
      span {
        border-bottom: 1px solid var(--color-black);
      }
    }

    span {
      padding: 0 4px;
    }
  }
`;
