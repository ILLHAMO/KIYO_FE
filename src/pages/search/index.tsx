import React from 'react';
import styled from 'styled-components';
import SearchHeader from 'app.feature/search/SearchHeader';
import SearchRecent from 'app.feature/search/SearchRecent';
import SearchRecommend from 'app.feature/search/SearchRecommend';
import SearchSearching from 'app.feature/search/SearchSearching';

const PageSearch = () => {
  return (
    <StyledWrapper>
      <SearchHeader />
      <SearchRecent />
      <SearchRecommend />
      {/* <SearchSearching /> */}
    </StyledWrapper>
  );
};

export default PageSearch;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

`;
