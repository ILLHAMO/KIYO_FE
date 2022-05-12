import React from 'react';
import styled from 'styled-components';

const SERVICE_OBJ = [
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

const StoreTabPaneAbout = () => {
  return (
    <StyledWrapper>
      <div className="menu-title">About</div>
      <div className="about">
        생생 정보통에 나왔던 국밥 맛집입니다. 돼지국밥을 시키면 수육을 서비스로
        주는 혜자 맛집입니다.
      </div>
      <div className="divider" />
      <div className="about-info address">
        <div className="title address">Address</div>
        <div className="content address">
          경기도 용인시 기흥구 기흥중앙로 80안길 101
        </div>
      </div>
      <div className="divider" />
      <div className="about-info photo">
        <div className="title photo">Photo</div>
        <div className="photo-slide">
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
        </div>
      </div>
      <div className="divider" />
      <div className="about-info service">
        <div className="title service">Service</div>
        <div className="service-slide">
          {SERVICE_OBJ.map((service, idx) => (
            <div className="service-item" key={`service-${idx}`}>
              <img src={`/images/common/${service.src}.png`} />
              <div className="text">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default StoreTabPaneAbout;

const StyledWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px 20px;
  border-bottom: 0.5px solid var(--color-gray-100);

  .menu-title {
    letter-spacing: 0.29em;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .about {
  }

  .divider {
    width: 100%;
    margin: 16px 0;
    background-color: var(--color-gray-100);
    height: 1px;
  }

  .about-info {
    .title {
      margin-bottom: 8px;
    }

    .photo-slide {
      width: 100% + 20px;
      margin: 0 -20px;
      padding: 0 20px;
      display: flex;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      .photo-item {
        background-color: #ffe9ef;
        min-width: 80px;
        min-height: 80px;
        border: 1px solid black;
      }
    }

    .service-slide {
      width: 100% + 20px;
      margin: 0 -20px;
      padding: 0 20px;
      display: flex;
      overflow: auto;
      gap: 16px;

      &::-webkit-scrollbar {
        display: none;
      }

      .service-item {
        width: 100%;
        
        img {
          width: 40px;
          min-width: 40px;
          min-height: 40px;
        }
        
        .text {
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
