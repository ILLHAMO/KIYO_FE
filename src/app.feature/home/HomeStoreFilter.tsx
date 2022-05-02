import React from 'react';
import styled from 'styled-components';
import Filter from 'app.components/Filter/Filter';

const STORE_CATEGORY = [
  '카페',
  '한식',
  '일식',
  '중식',
  '양식',
  '아시안',
  '비건',
  '주점',
];

const HomeStoreFilter = () => {
  return (
    <StyledWrapper>
      <div className="filter-top">
        <div className="title">어디로 가시겠어요?</div>
        <Filter />
      </div>
      <div className="category-wrap">
        {STORE_CATEGORY.map((item, idx) => (
          <div className="category-item" key={`category-${idx}`}>
            <div className="category-img" />
            {item}
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default HomeStoreFilter;

const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  
  .filter-top {
    padding: 0 8px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    title {
      font-size: 16px;
    }
  }

  .category-wrap {
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

      .category-img {
        border-radius: 50%;
        background-color: #ffe9ef;
        width: 60px;
        height: 60px;
        margin-bottom: 8px;
      }
    }
  }
`;
