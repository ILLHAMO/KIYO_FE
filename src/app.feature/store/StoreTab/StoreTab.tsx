import React, { useState } from 'react';
import styled from 'styled-components';
import StoreTabBar from './StoreTabBar';
import StoreTabPane from './StoreTabPane';

const StoreTab = () => {
  const [aboutScroll, setAboutScroll] = useState(0);
  const [menuScroll, setMenuScroll] = useState(0);
  const [reviewScroll, setReviewScroll] = useState(0);

  return (
    <StyledWrapper className="store-tab">
      <StoreTabBar
        aboutScroll={aboutScroll}
        menuScroll={menuScroll}
        reviewScroll={reviewScroll}
      />
      <StoreTabPane
        setAboutScroll={setAboutScroll}
        setMenuScroll={setMenuScroll}
        setReviewScroll={setReviewScroll}
      />
    </StyledWrapper>
  );
};

export default StoreTab;

const StyledWrapper = styled.div`
  padding-bottom: 20px;
`;
