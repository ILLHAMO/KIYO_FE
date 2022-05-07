import React from 'react';
import styled from 'styled-components';
import SVGwifi from '../../../public/images/convenience/wifi.svg';
import SVGgroup from '../../../public/images/convenience/group.svg';
import SVGpets from '../../../public/images/convenience/pets.svg';
import SVGwc from '../../../public/images/convenience/wc.svg';
import SVGparking from '../../../public/images/convenience/parking.svg';
import SVGdrive from '../../../public/images/convenience/drive.svg';
import SVGcrib from '../../../public/images/convenience/crib.svg';
import SVGdeck from '../../../public/images/convenience/deck.svg';
import SVGchild from '../../../public/images/convenience/child.svg';
import SVGchanging_station from '../../../public/images/convenience/changing_station.svg';
import SVGelec from '../../../public/images/convenience/elec.svg';
import SVGpacking from '../../../public/images/convenience/packing.svg';

const CONVENIENCE_CATEGORY = [

  { src: <SVGwifi /> , title: '와이파이' },
  { src: <SVGgroup /> , title: '단체석' },
  { src: <SVGpets /> , title: '애견동반' },
  { src: <SVGwc /> , title: '화장실' },
  { src: <SVGparking /> , title: '주차가능' },
  { src: <SVGdrive /> , title: '발렛가능' },
  { src: <SVGcrib /> , title: '아기의자' },
  { src: <SVGdeck /> , title: '야외좌석' },
  { src: <SVGchild /> , title: '키즈메뉴' },
  { src: <SVGchanging_station /> , title: '기저귀갈이' },
  { src: <SVGelec /> , title: '콘센트' },
  { src: <SVGpacking /> , title: '포장가능' }
];

const HomeConvenienceFilter = () => {
  return (
    <StyledWrapper>
      <div className='filter-header'>
        <img src="/images/common/close_gray.png" />
        <div className='apply-button'>적용</div>
      </div>
      
      <div className='title'>편의사항</div>
      <div className="filter-wrap true">
        {CONVENIENCE_CATEGORY.map((item, idx) => (
          <div className="filter-item" key={`filter-${idx}`}>
            <div className="item-container">
              <>{item.src}</>
            </div>
            <div className="item-title">{item.title}</div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default HomeConvenienceFilter;

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  max-width: 664px;
  width: 100%;
  border-top: 1px solid var(--color-gray-300);
  
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--color-gray-200);
    padding: 8px;

    img {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }

    .apply-button {
      cursor: pointer;
      width: 56px;
      height: 24px;
      border-radius: 25px;
      background-color: var(--color-main);
      line-height: 24px;
      text-align: center;
      font-size: 12px;
      color: white;
    }
  }

  .title {
    fontsize: 16px;
    color: var(--color-gray-300);
    width: 100%;
    text-align: center;
    padding: 16px 0;
  }

  .filter-wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 0 40px 24px;
    width: 100%;
    
    .filter-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 8px;
      color: var(--color-gray-100);
      width: 25%;
      
      @media only screen and (max-width: 374px) {
        width: 33.3%;
      }
    }
    .item-title {
      word-break: keep-all;
    }
  
    .item-container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;
      font-size: 16px;
      width: 60px;
      height: 60px;
      border-radius: 50px;
      border: 2px solid var(--color-gray-100);
      background-color: white;
    }
  
    svg {
      fill: var(--color-gray-100);
      width: 32px;
      height: 32px;
    }

    &.true {
      .item-title {
        color: var(--color-main);
      }

      .item-container {
        border: 6px double var(--color-main);
      }

      svg {
        fill: var(--color-main);
      }
    }
  }

  `;

