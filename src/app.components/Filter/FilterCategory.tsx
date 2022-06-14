import React from 'react';
import styled from 'styled-components';

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

const StoreFilter = () => {
  return (
    <StyledWrapper>
      <div className="filter-wrap">
        {STORE_CATEGORY.map((item, idx) => (
          <div className="filter-item" key={`category-${idx}`}>
            <div className="item-container">{item}</div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default StoreFilter;

const StyledWrapper = styled.div`
  .filter-wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 0 40px 0px;
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
      font-size: 16px;
      width: 60px;
      height: 60px;
      border-radius: 50px;
      border: 2px solid var(--color-gray-100);
      background-color: white;
    }
  
    .filter-item.true {
      color: var(--color-main);

      .item-container {
        border: 6px double var(--color-main);
      }
    }

  }

  `;

