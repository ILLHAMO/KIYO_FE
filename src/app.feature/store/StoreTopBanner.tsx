import React from 'react';
import styled from 'styled-components';
import StoreTopBannerPanel from './StoreTopBannerPanel';

const StoreTopBanner = () => {
  return (
    <StyledWrapper>
      <div className="back-button">
        <img src="/images/store/back_button.png" />
      </div>
      <div className="store-img-wrap"></div>
      <StoreTopBannerPanel />
      <div className="operating-time">
        <div className="title">운영시간</div>
        <div className="time">
          <div>월 ~ 금 12:00 ~ 22:00</div>
          <div>토 12:00 ~ 22:00</div>
          <div>일 12:00 ~ 22:00</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default StoreTopBanner;

const StyledWrapper = styled.div`
  position: relative;
  
  .back-button {
    position: absolute;
    width: 100%;
    top: 0;
    padding: 8px;

    img {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }

  .store-img-wrap {
    width: 100%;
    height: 280px;
    background-color: #ffe9ef;
    margin-bottom: 48px;
  }
  
  .operating-time {
    display: flex;
    padding: 0 20px;      font-size: 12px;
    line-height: 16px;


    .title {
      margin-right: 8px;
    }
  }
`;
