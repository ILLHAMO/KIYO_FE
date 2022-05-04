import React from 'react';
import styled from 'styled-components';
import StoreTabBar from './StoreTabBar';
import StoreTabPane from './StoreTabPane';

const StoreTab = () => {
  return (
    <StyledWrapper>
      <StoreTabBar />
      <StoreTabPane />
    </StyledWrapper>
  );
};

export default StoreTab;

const StyledWrapper = styled.div`
  padding-bottom: 20px;
`;
