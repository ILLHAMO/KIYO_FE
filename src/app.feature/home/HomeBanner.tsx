import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';

const HomeBanner = () => {
  return (
    <StyledWrapper className="home-banner">
      <Carousel autoplay>
        <img
          src="images/sample/home_banner_1.png"
          className="home-banner__image"
        />
        <img
          src="images/sample/home_banner_2.png"
          className="home-banner__image"
        />
        <img
          src="images/sample/home_banner_3.png"
          className="home-banner__image"
        />
      </Carousel>
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
