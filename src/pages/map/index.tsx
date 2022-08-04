import React from 'react';
import styled from 'styled-components';
import MapHeader from 'app.feature/map/MapHeader';
import MapFloating from 'app.feature/map/MapFloating';
import MapBackground from 'app.feature/map/MapBackground';

const PageMap = () => {
  return (
    <StyledWrapper>
      <MapHeader />
      <MapBackground />
      <MapFloating />
    </StyledWrapper>
  );
};

export default PageMap;

const StyledWrapper = styled.div`
  height: calc(100vh - 64px);
  position: relative;
`;
