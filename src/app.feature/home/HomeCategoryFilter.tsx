import React, { useState } from 'react';
import styled from 'styled-components';
import FilterIcon from 'app.components/Filter/FilterIcon';

const STORE_CATEGORY = [
  { src: 'cafe', title: '카페' },
  { src: 'korean', title: '한식' },
  { src: 'japanese', title: '일식' },
  { src: 'chinese', title: '중식' },
  { src: 'western', title: '양식' },
  { src: 'asian', title: '아시안' },
  { src: 'vegan', title: '비건' },
  { src: 'bar', title: '주점' },
];

const HomeCategoryFilter = () => {
  return (
    <StyledWrapper className="home-store-filter">
      <div className="home-store-filter__top">
        <div className="home-store-filter__title">어디로 가시겠어요?</div>
        <FilterIcon />
      </div>
      <div className="home-store-filter__category">
        {STORE_CATEGORY.map((item, idx) => (
          <div className="category-item" key={`category-${idx}`}>
            <div className="category-item__img">
              <img src={`/images/sample/category_${item.src}.png`} />
            </div>
            {item.title}
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default HomeCategoryFilter;

const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;

  .home-store-filter__top {
    padding: 0 8px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .home-store-filter__title {
      font-size: 16px;
    }
  }

  .home-store-filter__category {
    display: flex;
    padding: 0 20px;
    gap: 24px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    .category-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .category-item__img {
        border-radius: 50%;
        background-color: #ffe9ef;
        width: 60px;
        height: 60px;
        margin-bottom: 8px;
        overflow: hidden;
        object-fit: cover;
      }
    }
  }
`;
