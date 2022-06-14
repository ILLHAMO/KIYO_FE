import React from 'react';
import styled from 'styled-components';

const StoreCard = () => {
  return (
    <StyledWrapper className="store-card">
      <div className="store-card__image-container">
        <div className="store-card__image">
          <img src='/images/sample/food_img.png' />
        </div>
        <div className="store-card__bookmark">
          <img
            src="/images/common/bookmark_on.png"
            className="store-card__bookmark-btn store-card__bookmark-btn--on"
          />
          {/*<img*/}
          {/*  src="/images/common/bookmark_off.png"*/}
          {/*  className="store-card__bookmark-btn store-card__bookmark-btn--off"*/}
          {/*/>*/}
        </div>
        <div className="store-card__kidszone">
          <img src="/images/common/kidszone_badge.png" />
        </div>
      </div>
      <div className="store-card__info-container">
        <div className="store-card__info">
          <div className="store-card__location">남양주시 다산동</div>
          <div className="store-card__name">
            이름이 길다면이름이 길다면이름이 길다면이름이 길다면이름이
            길다면이름이 길다면이름이 길다면
          </div>
        </div>
        <div className="store-card__user-score">
          <div className="store-card__bookmark">
            <img src="/images/common/bookmark_on.png" />
            58
          </div>
          <div className="store-card__review">
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

  .store-card__image-container {
    position: relative;

    .store-card__image {
      width: 100%;
      padding: 50%;
      position: relative;
      overflow: hidden;
      
      img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        border-radius: 10px;
      }
    }

    .store-card__bookmark {
      position: absolute;
      top: 8px;
      right: 8px;

      img {
        width: 20px;
      }
    }

    .store-card__kidszone {
      position: absolute;
      bottom: 4px;
      right: 4px;

      img {
        width: 52px;
      }
    }
  }

  .store-card__info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4px;

    .store-card__info {
      margin-right: 8px;

      .store-card__location {
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

      .store-card__name {
        font-size: 16px;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
      }
    }

    .store-card__user-score {
      font-size: 12px;

      .store-card__bookmark {
        margin-bottom: 4px;
      }

      .store-card__bookmark,
      .store-card__review {
        display: flex;
        align-items: center;

        img {
          width: 12px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
  }
`;
