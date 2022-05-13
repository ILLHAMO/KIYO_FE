import BookmarkList from 'app.feature/bookmark/BookmarkList';
import React from 'react';
import styled from 'styled-components';

const PageBookmark = () => {
  return <StyledWrapper>
    <BookmarkList />
  </StyledWrapper>;
};

export default PageBookmark;

const StyledWrapper = styled.div``;
