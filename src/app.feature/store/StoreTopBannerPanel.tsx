import React from 'react';
import styled from 'styled-components';

const StoreTopBannerPanel = () => {
  return (
    <StyledWrapper>
      <div className="name">홍길동네 돼지국밥</div>
      <div className="sub-name">홍길동네 돼지국밥</div>
      <div className="info">
        <div className="food">돼지국밥</div>
        <div className="location">용인시 기흥구</div>
      </div>
      {/*TODO : 로직 집어넣었을 경우 코드 길어지면 파일 분리 필요함*/}
      <div className="func-wrap">
        <div className="func-item">
          <div>
            <img src="/images/store/place_black.png" />
            <div className="text">길찾기</div>
          </div>
        </div>
        <div className="func-item">
          <div>
            <img src="/images/store/call_black.png" />
            <div className="text">전화</div>
          </div>
        </div>
        <div className="func-item">
          <div>
            <img src="/images/store/bookmark_black_off.png" />
            <div className="text">찜</div>
          </div>
        </div>
        <div className="func-item">
          <div>
            <img src="/images/store/share_black.png" />
            <div className="text">공유</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default StoreTopBannerPanel;

const StyledWrapper = styled.div`
  margin: 0 20px;
  width: calc(100% - 40px);
  text-align: center;
  padding: 20px 8px 16px;
  background-color: var(--color-white);
  position: absolute;
  top: 172px;
  border-radius: 15px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.03);

  .name {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .sub-name {
    font-size: 12px;
    margin-bottom: 8px;
  }

  .info {
    font-size: 12px;
    display: flex;
    margin-bottom: 16px;

    .food {
      text-align: center;
      width: 50%;
      color: var(--color-gray-300);
      border-right: 0.5px solid var(--color-gray-300);
    }

    .location {
      text-align: center;
      width: 50%;
      color: var(--color-gray-300);
      border-left: 0.5px solid var(--color-gray-300);
    }
  }

  .func-wrap {
    display: flex;

    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }

    .func-item {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

      }
      
      .text {
        font-size: 12px;
      }
    }
  }
`;
