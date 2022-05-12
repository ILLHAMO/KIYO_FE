import React from 'react';
import styled from 'styled-components';

const ReviewSearch = () => {
  return (
    <StyledWrapper>
      <div className="search-input-wrap">
        <img src="/images/review/search_gray.png" />
        <input placeholder="식당을 검색해주세요" />
      </div>
      <div className="search-result-wrap">
        <div className="search-result-item">
          <div className="store-img"></div>
          <div className="store-info">
            <div className="name">홍길동네 돼지국밥</div>
            <div className="address">용인시 기흥구</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ReviewSearch;

const StyledWrapper = styled.div`
  padding: 20px;

  .search-input-wrap {
    position: relative;
    height: 40px;
    width: 100%;
    margin-bottom: 12px;

    img {
      width: 18px;
      height: 18px;
      top: 11px;
      left: 8px;
      position: absolute;
    }

    input {
      height: 40px;
      width: 100%;
      border-bottom: 0.5px solid var(--color-gray-300);
      padding-left: 40px;

      &::placeholder {
        color: var(--color-gray-300);
        font-size: 16px;
      }
    }
  }

  .search-result-wrap {
    .search-result-item {
      display: flex;
      align-items: center;
      padding: 8px;
      border-bottom: 0.5px solid var(--color-gray-100);

      &:last-child {
        border-bottom: none;
      }

      .store-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #ffe9ef;
        margin-right: 8px;
      }

      .store-info {
        .name {
          line-height: 23px;
        }

        .address {
          line-height: 17px;
          font-size: 12px;
          color: var(--color-gray-300);
        }
      }
    }
  }
`;
