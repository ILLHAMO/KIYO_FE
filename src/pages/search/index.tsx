import React from 'react';
import styled from 'styled-components';
import SearchHeader from 'app.feature/search/SearchHeader';
import SearchRecent from 'app.feature/search/SearchRecent';
import SearchRecommend from 'app.feature/search/SearchRecommend';

const PageSearch = () => {
  return (
    <StyledWrapper>
      <SearchHeader />
      <SearchRecent />
      <SearchRecommend />
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
