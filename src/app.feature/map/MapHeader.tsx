import Filter from 'app.components/Filter/Filter';
import React from 'react';
import styled from 'styled-components';

const MapHeader = () => {
  return (
    <StyledWrapper>
      <div className="location-wrap">
        <div>현재 보고 있는 곳은</div>
        <div className="location">
          <span>남양주시</span> 입니다.
        </div>
      </div>
      <div className="filter-wrap">
        <div className="location-select">
          전체 지역
          <img src="/images/map/expand_more_gray.png" />
        </div>
        <Filter />
        <div className="filter"></div>
      </div>
    </StyledWrapper>
  );
};

export default MapHeader;

const StyledWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 16px;

  .location-wrap {
    font-size: 12px;
    line-height: 16px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }

  .filter-wrap {
    display: flex;
    align-items: center;

    .location-select {
      margin-right: 8px;
      font-weight: 400;
      font-size: 12px;
      color: var(--color-gray-300);

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
