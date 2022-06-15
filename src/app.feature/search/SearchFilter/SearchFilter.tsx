import React from 'react';
import styled from 'styled-components';
import FilterIcon from 'app.components/Filter/FilterIcon';
import FilterLocalButton from 'app.components/Filter/FilterLocalButton';
const SearchFilter = () => {
  return (
    <StyledWrapper className='search-filter'>
			<div className="search-filter__button-container">
				<FilterLocalButton />
				<FilterIcon />
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
