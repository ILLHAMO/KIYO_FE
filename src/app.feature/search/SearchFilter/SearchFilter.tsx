import React from 'react';
import styled from 'styled-components';
import SearchFilterLocalButton from 'app.feature/search/SearchFilter/SearchFilterLocalButton';
import Filter from 'app.components/Filter/Filter';

const SearchFilter = () => {
  return (
    <StyledWrapper>
			<div className="button-container">
				<SearchFilterLocalButton />
				<Filter />
			</div>

    </StyledWrapper>
  );
};

export default SearchFilter;

const StyledWrapper = styled.div`
	.button-container {
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px 0 20px;
	}

`;
