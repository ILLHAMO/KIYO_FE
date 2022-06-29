import React from 'react';
import styled from 'styled-components';
import FilterConvenience from 'app.components/Filter/FilterConvenience';
import ButtonSquare from 'app.components/Button/ButtonSquare';
import FilterCategory from 'app.components/Filter/FilterCategory';

const SearchFilterOtherModal = ({
  handleOtherFilterVisibleShow
}) => {
  return (
    <StyledWrapper className='search-filter-other-modal'>
      <div className='search-filter-other-modal__header'>
        <div onClick={handleOtherFilterVisibleShow}>
          <img src="/images/common/close_gray.png" />
        </div>
        <div className='search-filter-other-modal__apply-button'>적용</div>
      </div>
      <div className="search-filter-other-modal__body">
        <div className="search-filter-other-modal__container">
          <div className="search-filter-other-modal__title">장소 종류</div>
          <FilterCategory />
        </div>
        <div className="search-filter-other-modal__container">
          <div className="search-filter-other-modal__title">편의 사항</div>
          <FilterConvenience />
        </div>
        <div className="search-filter-other-modal__container">
          <div className ="search-filter-other-modal__title">운영 방식</div>
          <div className="search-filter-other-modal__kidszone-filter">
            <ButtonSquare name="키즈존" />
            <ButtonSquare name="일반 식당" />
          </div>
          </div>
        </div>
    </StyledWrapper>
  );
};

export default SearchFilterOtherModal;

const StyledWrapper = styled.div`

  bottom: 0;
  background-color: white;
  max-width: 664px;
  width: 100%;
  border-top: 1px solid var(--color-gray-300);
  overflow: auto;

  .search-filter-other-modal__header {
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

    .search-filter-other-modal__apply-button {
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

  .search-filter-other-modal__body {
    padding-top: 40px;
  }

  .search-filter-other-modal__title {
    fontsize: 16px;
    color: var(--color-gray-300);
    width: 100%;
    text-align: center;
    padding: 24px 0;
  }

  .search-filter-other-modal__container {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-gray-100);
  }

  .search-filter-other-modal__kidszone-filter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 0 10% 0;
  }

`;
