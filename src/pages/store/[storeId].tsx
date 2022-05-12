import React from 'react';
import styled from 'styled-components';
import StoreTopBanner from 'app.feature/store/StoreTopBanner';
import StoreTab from 'app.feature/store/StoreTab/StoreTab';

const PageStore = () => {
  return (
    <StyledWrapper>
      <StoreTopBanner />
      <StoreTab />
    </StyledWrapper>
  );
};

export default PageStore;

const StyledWrapper = styled.div`
  height: 100vh;
`;
