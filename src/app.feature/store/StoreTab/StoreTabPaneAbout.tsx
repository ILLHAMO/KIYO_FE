import React from 'react';
import styled from 'styled-components';
import useQueryFn from 'app.query/useQueryFn';
import IconConvenience from './IconConvenience';
import { API_CONVENIENCE } from 'app.modules/api/keyFactory';
import { TypeStoreDetailInfo } from 'app.modules/type/type';

type TProps = {
  setAboutScroll: (scroll: number) => void;
  storeDetailInfo: TypeStoreDetailInfo;
};

const StoreTabPaneAbout: React.FC<TProps> = ({
  setAboutScroll,
  storeDetailInfo,
}) => {
  if (typeof window !== 'undefined')
    window.addEventListener('scroll', () => {
      let scrollLocation = document.getElementById('scroll-about')?.offsetTop; // 현재 스크롤바 위
      setAboutScroll(scrollLocation);
    });

  const { address, images } = storeDetailInfo;
  const { data: serviceList, isLoading } = useQueryFn([API_CONVENIENCE]);

  return (
    <StyledWrapper className="store-tab-pane-about" id="scroll-about">
      <div className="store-tab-pane-about__title">About</div>
      <div className="store-tab-pane-about__about"></div>
      <div className="divider" />
      <div className="store-info">
        <div className="store-info__title address">Address</div>
        <div className="store-info__content address">{address}</div>
      </div>
      <div className="divider" />
      <div className="store-info">
        <div className="store-info__title store-info__title--photo">Photo</div>
        <div className="store-info__photo-slide">
          {images.map((item, idx) => (
            <div className="store-info__photo-item">
              <img src={item.path} />
            </div>
          ))}
        </div>
      </div>
      <div className="divider" />
      <div className="store-info">
        <div className="store-info__title store-info__title--service">
          Service
        </div>
        <div className="store-info__service-slide">
          {!isLoading &&
            !!serviceList.length &&
            serviceList.map((service, idx) => (
              <div className="store-info__service-item" key={`service-${idx}`}>
                <IconConvenience iconId={service.convenienceId} />
                <div className="store-info__text">
                  {service.convenienceName}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div id="store-tab-menu" />
    </StyledWrapper>
  );
};

export default StoreTabPaneAbout;

const StyledWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 20px;
  border-bottom: 0.5px solid var(--color-gray-100);

  .store-tab-pane-about__title {
    letter-spacing: 0.29em;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .store-tab-pane-about__about {
  }

  .divider {
    width: 100%;
    margin: 16px 0;
    background-color: var(--color-gray-100);
    height: 1px;
  }

  .store-info {
    .store-info__title {
      margin-bottom: 8px;
    }

    .store-info__photo-slide {
      width: 100% + 20px;
      margin: 0 -20px;
      padding: 0 20px;
      display: flex;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      .store-info__photo-item {
        min-width: 80px;
        min-height: 80px;
        max-width: 80px;
        min-height: 80px;
        position: relative;
        overflow: hidden;

        img {
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          min-width: 100%;
          min-height: 100%;
        }
      }
    }

    .store-info__service-slide {
      width: 100% + 20px;
      margin: 0 -20px;
      padding: 0 20px;
      display: flex;
      overflow: auto;
      gap: 16px;

      &::-webkit-scrollbar {
        display: none;
      }

      .store-info__service-item {
        width: 100%;

        .store-info__text {
          line-height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          word-break: keep-all;
          color: var(--color-gray-300);
        }
      }
    }
  }
`;
