import React, { useState } from 'react';
import styled from 'styled-components';
import API from 'app.modules/api';
import { API_STORE_SEARCH } from 'app.modules/api/keyFactory';

const ReviewSearch = () => {
  const [keyword, setKeyword] = useState(null);

  const handleSearchStore = async (event) => {
    try {
      console.log(event.target.value);
      const response = await API.GET({
        url: API_STORE_SEARCH,
        data: {
          keyword: event.target.value,
          pageable: {
            page: 0,
            size: 1,
          },
          storeSearchCond: {
            categoryIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            convenienceIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          },
        },
      });
    } catch (err) {}
  };

  return (
    <StyledWrapper className="review-search">
      <div className="review-search__input">
        <img src="/images/review/search_gray.png" />
        <input placeholder="식당을 검색해주세요" onChange={handleSearchStore} />
      </div>
      <div className="review-search__result">
        <div className="review-search__result-item">
          <div className="review-search__store-image"></div>
          <div className="review-search__store-info">
            <div className="review-search__name">홍길동네 돼지국밥</div>
            <div className="review-search__address">용인시 기흥구</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ReviewSearch;

const StyledWrapper = styled.div`
  padding: 20px;

  .review-search__input {
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

  .review-search__result {
    .review-search__result-item {
      display: flex;
      align-items: center;
      padding: 8px;
      border-bottom: 0.5px solid var(--color-gray-100);

      &:last-child {
        border-bottom: none;
      }

      .review-search__store-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #ffe9ef;
        margin-right: 8px;
      }

      .review-search__store-info {
        .review-search__name {
          line-height: 23px;
        }

        .review-search__address {
          line-height: 17px;
          font-size: 12px;
          color: var(--color-gray-300);
        }
      }
    }
  }
`;
