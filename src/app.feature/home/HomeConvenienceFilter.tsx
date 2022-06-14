import React from 'react';
import styled from 'styled-components';
import FilterConvenience from 'app.components/Filter/FilteConvenience';

const HomeConvenienceFilter = () => {
  return (
    <StyledWrapper className='home-convenience-filter'>
      <div className='home-convenience-filter__filter-header'>
        <img src="/images/common/close_gray.png" />
        <div className='home-convenience-filter__apply-button'>적용</div>
      </div>
      <div className='home-convenience-filter__title'>편의사항</div>
      <FilterConvenience />
    </StyledWrapper>
  );
};

export default HomeConvenienceFilter;

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  max-width: 664px;
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
  `;
