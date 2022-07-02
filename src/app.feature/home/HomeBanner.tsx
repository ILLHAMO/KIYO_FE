import React from 'react';
import styled from 'styled-components';

const HomeBanner = () => {
  return (
    <StyledWrapper className="home-banner">
      <img src="images/sample/home_banner.png" className="home-banner__image" />
    </StyledWrapper>
  );
};

export default HomeBanner;

const StyledWrapper = styled.div`
  margin: 8px auto 12px;
  width: calc(100% - 16px);
  height: 100%;
  background-color: #ffe9ef;
  border-radius: 10px;

  .home-banner__image {
    border-radius: 10px;
  }
`;
