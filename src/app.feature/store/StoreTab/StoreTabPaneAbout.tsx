import React, { useEffect } from 'react';
import styled from 'styled-components';

const SERVICE_OBJ = [
  // 위에서부터 인덱스 1 줘서 이미지 파일 수정
  { src: 'wifi', title: '와이파이' },
  { src: 'group', title: '단체석' },
  { src: 'pets', title: '애견동반' },
  { src: 'wc', title: '화장실' },
  { src: 'parking', title: '주차가능' },
  { src: 'drive', title: '발렛가능' },
  { src: 'crib', title: '아기의자' },
  { src: 'deck', title: '야외좌석' },
  { src: 'child', title: '키즈메뉴' },
  { src: 'changing_station', title: '기저귀갈이' },
  { src: 'elec', title: '콘센트' },
  { src: 'packing', title: '포장가능' },
];

type TProps = {
  setAboutScroll: (scroll: number) => void;
  storeDetailInfo: any;
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

  const { address, images, convenienceIds } = storeDetailInfo;

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
          {/* 편의사항 API로 가져오는거 수정 후 변경 필요  */}
          {SERVICE_OBJ.map((service, idx) => (
            <div className="store-info__service-item" key={`service-${idx}`}>
              <img src={`/images/common/${service.src}.png`} />
              <div className="store-info__text">{service.title}</div>
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

        img {
          width: 40px;
          min-width: 40px;
          min-height: 40px;
        }

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
