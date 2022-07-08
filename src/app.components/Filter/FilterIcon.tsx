import React from 'react';
import styled from 'styled-components';
import SVGfilter from '../../../public/images/common/filter.svg';

const FilterIcon = () => {
  return (
    <StyledWrapper>
      <div className="filter-container">
        <SVGfilter width="16" height="16" />
        <div>필터</div>
      </div>
    </StyledWrapper>
  );
};

export default FilterIcon;

const StyledWrapper = styled.div`
  .filter-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid var(--color-gray-300);
    font-size: 12px;
    color: var(--color-gray-300);

    svg {
      fill: var(--color-gray-300);
    }

    &.true {
      border: 1px solid var(--color-main);
      color: var(--color-main);

      svg {
        fill: var(--color-main);
      }
    }
  }
`;
