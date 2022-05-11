import React from 'react';
import styled from 'styled-components';
import SearchHeader from 'app.feature/search/SearchHeader';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import HomeStoreList from 'app.feature/home/HomeStoreList';
import SearchFilter from 'app.feature/search/SearchFilter/SearchFilter';
import SearchFilterOtherModal from 'app.feature/search/SearchFilter/SearchFilterOtherModal';

const PageSearchResult = () => {
  return (
    <StyledWrapper>
      <SearchHeader />
			<SearchFilter />
			<HomeStoreList />
			<NavigationBar />
			{/* <SearchFilterOtherModal /> */}
    </StyledWrapper>
  );
};

export default PageSearchResult;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

`;
