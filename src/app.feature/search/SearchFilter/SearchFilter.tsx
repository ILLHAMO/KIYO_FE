import React from 'react';
import styled from 'styled-components';
import FilterIcon from 'app.components/Filter/FilterIcon';
import FilterLocalButton from 'app.components/Filter/FilterLocalButton';

type TProps = {
  otherFilterOnClick: (event) => void;
  localFilterOnClick: (event) => void;
};

const SearchFilter: React.FC<TProps> = ({
  otherFilterOnClick,
  localFilterOnClick,
}) => {
  return (
    <StyledWrapper className="search-filter">
      <div className="search-filter__button-container">
        <div onClick={localFilterOnClick}>
          <FilterLocalButton />
        </div>
        <div onClick={otherFilterOnClick}>
          <FilterIcon />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SearchFilter;

const StyledWrapper = styled.div`
  .search-filter__button-container {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 20px;
  }
`;
