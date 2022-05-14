import React from 'react';
import styled from 'styled-components';

const MapFloating = () => {
  return (
    <StyledWrapper>
      <div className="store-img"></div>
      <div className="store-info-wrap">
        <div className="store-info-top">
          <div className="info-wrap">
            <div className="store-name">버거킹 다산지금점</div>
            <div className="store-address">경기도 남양주시</div>
            <div className="user-score">
              <div className="bookmark">
                <img src="/images/common/bookmark_on.png" />
                58
              </div>
              <div className="review">
                <img src="/images/common/revisit.png" />
                32
              </div>
            </div>
          </div>
          <img
            src="/images/common/bookmark_on.png"
            className="bookmark-badge"
          />
        </div>
        <div className="store-info-bottom">
          <img src="/images/common/kidszone_badge.png" />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default MapFloating;

const StyledWrapper = styled.div`
  margin: 0 20px;
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
  background: var(--color-white);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;

  .store-img {
    width: 96px;
    height: 96px;
    min-width: 96px;
    min-height: 96px;
    background: #ffe9ef;
    border-radius: 10px;
    margin-right: 16px;
  }

  .store-info-wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 96px;

    .store-info-top {
      font-size: 16px;
      display: flex;
      justify-content: space-between;

      .bookmark-badge {
        width: 20px;
        height: 20px;
        min-height: 20px;
        min-height: 20px;
      }

      .info-wrap {
        margin-right: 4px;
        .store-name {
          font-size: 16px;
          line-height: 22px;
          word-break: break-all;
        }
        .store-address {
          word-break: break-all;
          font-size: 12px;
          line-height: 16px;
        }

        .user-score {
          display: flex;
          align-items: center;
          font-size: 12px;

          img {
            width: 13px;
            margin-right: 4px;
          }

          .bookmark,
          .review {
            display: flex;
            align-items: center;
          }

          .bookmark {
            margin-right: 8px;
          }
        }
      }
    }

    .store-info-bottom {
      padding: 0;
      width: 100%;

      display: flex;
      justify-content: flex-end;

      img {
        width: 40px;
      }
    }
  }
`;
