import React from 'react';
import styled from 'styled-components';
import StoreTabPaneAbout from './StoreTabPaneAbout';
import StoreTabPaneMenu from './StoreTabPaneMenu';
import StoreTabPaneReview from './StoreTabPaneReview';

const StoreTabPane = () => {
  return (
    <StyledWrapper>
      <StoreTabPaneAbout />
      <StoreTabPaneMenu />
      <StoreTabPaneReview />
    </StyledWrapper>
  );
};

export default StoreTabPane;

const StyledWrapper = styled.div``;
