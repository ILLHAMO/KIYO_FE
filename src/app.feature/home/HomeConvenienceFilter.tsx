import React from 'react';
import styled from 'styled-components';
import FilterConvenience from 'app.components/Filter/FilterConvenience';

const HomeConvenienceFilter = ({
  isConvenienceFilterVisible, handleConvenienceFilterVisible
}) => {
  return (
    <StyledWrapper className="home-convenience-filter" >
      <div className='home-convenience-filter__filter-header'>
        <div onClick={handleConvenienceFilterVisible}>
          <img src="/images/common/close_gray.png" />
        </div>
        <div className='home-convenience-filter__apply-button'>적용</div>
      </div>
      <div className='home-convenience-filter__title'>편의사항</div>
      <div className='home-convenience-filter__filter-container'>
        <FilterConvenience />
      </div> 
    </StyledWrapper>
  );
};

export default HomeConvenienceFilter;

const StyledWrapper = styled.div`
  bottom: 0;
  background-color: white;
  width: 100%;
  border-top: 1px solid var(--color-gray-300);
  overflow: hidden;
  z-index: 99;

  .home-convenience-filter__filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--color-gray-200);
    padding: 8px;

    img {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }

    .home-convenience-filter__apply-button {
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

  .home-convenience-filter__title {
    fontsize: 16px;
    color: var(--color-gray-300);
    width: 100%;
    text-align: center;
    padding: 16px 0;
  }

  .home-convenience-filter__filter-container {
    max-width: 664px;
    margin: 0 auto;

  }
  `;

