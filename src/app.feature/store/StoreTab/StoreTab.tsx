import React from 'react';
import styled from 'styled-components';
import StoreTabBar from './StoreTabBar';
import StoreTabPane from './StoreTabPane';

const StoreTab = () => {
  return (
    <StyledWrapper className='store-tab'>
      <StoreTabBar />
      <StoreTabPane />
    </StyledWrapper>
  );
};

export default StoreTab;

const StyledWrapper = styled.div`
  padding-bottom: 20px;
`;
