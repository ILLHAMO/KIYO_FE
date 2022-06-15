import React from 'react';
import styled from 'styled-components';
import FilterLocalButton from 'app.components/Filter/FilterLocalButton';
import FilterIcon from 'app.components/Filter/FilterIcon';

const MapHeader = () => {
  return (
    <StyledWrapper className='map-header'>
      <div className="map-header__location-wrap">
        <div>현재 보고 있는 곳은</div>
        <div className="map-header__location">
          <span>남양주시</span> 입니다.
        </div>
      </div>
      <div className="map-header__filter-wrap">
        <FilterLocalButton />
        <FilterIcon />
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

  .map-header__location-wrap {
    font-size: 12px;
    line-height: 16px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }

  .map-header__filter-wrap {
    display: flex;
    align-items: center;
    
    .filter-local-button {
      margin-right: 8px;
    }
  }
`;
