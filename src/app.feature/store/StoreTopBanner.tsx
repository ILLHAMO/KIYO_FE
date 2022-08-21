import React from 'react';
import styled from 'styled-components';
import StoreTopBannerPanel from './StoreTopBannerPanel';
import { useRouter } from 'next/router';

const StoreTopBanner = ({ storeDetailInfo }) => {
  const router = useRouter();

  const { time, images } = storeDetailInfo;

  return (
    <StyledWrapper className="store-top-banner">
      <div className="store-top-banner__back-button">
        <img
          src="/images/store/back_button.png"
          onClick={() => router.back()}
        />
      </div>
      <div className="store-top-banner__image">
        {!!images?.length && <img src={images[0].path} />}
      </div>
      <StoreTopBannerPanel storeDetailInfo={storeDetailInfo} />
      <div className="store-top-banner__operating-time">
        <div className="store-top-banner__title">운영시간</div>
        <div className="store-top-banner__time">
          {time.map((item, idx) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default StoreTopBanner;

const StyledWrapper = styled.div`
  position: relative;

  .store-top-banner__back-button {
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

  .store-top-banner__image {
    width: 100%;
    height: 280px;
    background-color: #ffe9ef;
    margin-bottom: 48px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .store-top-banner__operating-time {
    display: flex;
    padding: 0 20px;
    font-size: 12px;
    line-height: 16px;

    .store-top-banner__title {
      margin-right: 8px;
    }
  }
`;
