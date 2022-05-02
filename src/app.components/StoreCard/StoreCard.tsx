import React from 'react';
import styled from 'styled-components';

const StoreCard = () => {
  return (
    <StyledWrapper>
      <div className="store-img-wrap">
        <div className="store-img" />
        <div className="bookmark">
          <img src="/images/common/bookmark_on.png" />
          {/*<img src='/images/common/bookmark_off.png' />*/}
        </div>
        <div className="kidszone">
          <img src="/images/common/kidszone_badge.png" />
        </div>
      </div>
      <div className="store-info-wrap">
        <div className="store-info">
          <div className="location">남양주시 다산동</div>
          <div className="name">
            이름이 길다면이름이 길다면이름이 길다면이름이 길다면이름이
            길다면이름이 길다면이름이 길다면
          </div>
        </div>
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
    </StyledWrapper>
  );
};

export default StoreCard;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;

  .store-img-wrap {
    position: relative;

    .store-img {
      width: 100%;
      padding: 50%;
      background-color: #ffe9ef;
      border-radius: 10px;
    }

    .bookmark {
      position: absolute;
      top: 8px;
      right: 8px;

      img {
        width: 20px;
      }
    }

    .kidszone {
      position: absolute;
      bottom: 4px;
      right: 4px;
      
      img {
        width: 52px;
      }
    }
  }

  .store-info-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4px;

    .store-info {
      margin-right: 8px;
      .location {
        margin-bottom: 4px;
        font-size: 12px;
        color: var(--color-gray-300);
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
      }

      .name {
        font-size: 16px;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
      }
    }

    .user-score {
      font-size: 12px;

      .bookmark {
        margin-bottom: 4px;
      }

      .bookmark,
      .review {
        display: flex;

        img {
          width: 12px;
          margin-right: 4px;
        }
      }
    }
  }
`;
