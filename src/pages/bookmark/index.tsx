import React from 'react';
import styled from 'styled-components';
import BookmarkList from 'app.feature/bookmark/BookmarkList';
import BookmarkNone from 'app.feature/bookmark/BookmarkNone';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';

const PageBookmark = () => {
  return (
    <StyledWrapper>
      <BookmarkList />
      {/*<BookmarkNone />*/}
      <NavigationBar />
    </StyledWrapper>
  );
};

export default PageBookmark;

const StyledWrapper = styled.div`
  height: 100vh;
`;
