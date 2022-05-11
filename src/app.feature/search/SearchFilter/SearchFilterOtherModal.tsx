import React from 'react';
import styled from 'styled-components';
import ConvenienceFilter from 'app.components/Filter/ConvenienceFilter';
import StoreFilter from 'app.components/Filter/StoreFilter';

const SearchFilterOtherModal = () => {
  return (
    <StyledWrapper>
      <div className='filter-header'>
        <img src="/images/common/close_gray.png" />
        <div className='apply-button'>적용</div>
      </div>
      <div className="filter-body">
        <div className="filter-container">
          <div className="title">장소 종류</div>
          <StoreFilter />
        </div>
        <div className="filter-container">
          <div className="title">편의 사항</div>
          <ConvenienceFilter />
        </div>
        <div className="filter-container">
          <div className ="title">운영 방식</div>
          <div className="kidszone-filter">
            <div className="kidszone-filter__item">
              <img src="/images/search/check.png" alt="" />
              키즈존
              </div>
            <div className="kidszone-filter__item">
              <img src="/images/search/check.png" alt="" />
              일반 식당
              </div>
          </div>
        </div>
      </div>


    </StyledWrapper>
  );
};

export default SearchFilterOtherModal;

const StyledWrapper = styled.div`

  position: fixed;
  bottom: 0;
  background-color: white;
  max-width: 664px;
  width: 100%;
  height: 70%;
  border-top: 1px solid var(--color-gray-300);
  overflow: auto;

  .filter-header {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 664px;
    height: 40px;
    border-bottom: 1px solid var(--color-gray-200);
    padding: 8px;
    background-color: white;

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

  .filter-body {
    padding-top: 40px;
  }

  .title {
    fontsize: 16px;
    color: var(--color-gray-300);
    width: 100%;
    text-align: center;
    padding: 24px 0;
  }

  .filter-container {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-gray-100);
  }

  .kidszone-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10% 0;

    img {
      display: none;
    }

    .kidszone-filter__item {
      cursor: pointer;
      position: relative;
      width: 49%;
      height: 44px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid var(--color-gray-100);
      color: var(--color-gray-100);

      &.true {
        color: var(--color-main);
        border: 2px solid var(--color-main);
        
        img {
          display: block;
          position: absolute;
          top: -6px;
          right: -5px;
          width: 24px;
          height: 18.3px;
        }
      }
    }
  }

  
  
`;
