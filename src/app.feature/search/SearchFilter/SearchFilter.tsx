import React from 'react';
import styled from 'styled-components';
import Filter from 'app.components/Filter/Filter';
import FilterLocalButton from 'app.components/Filter/FilterLocalButton';
const SearchFilter = () => {
  return (
    <StyledWrapper className='search-filter'>
			<div className="search-filter__button-container">
				<FilterLocalButton />
				<Filter />
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
