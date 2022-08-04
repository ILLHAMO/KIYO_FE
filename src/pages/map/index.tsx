import React from 'react';
import styled from 'styled-components';
import MapHeader from 'app.feature/map/MapHeader';
import MapFloating from 'app.feature/map/MapFloating';

const PageMap = () => {
  return (
    <StyledWrapper>
      <MapHeader />
      <MapFloating />
    </StyledWrapper>
  );
};

export default PageMap;

const StyledWrapper = styled.div`
  height: calc(100vh - 64px);
  position: relative;
`;
