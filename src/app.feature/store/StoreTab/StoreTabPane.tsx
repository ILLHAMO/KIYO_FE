import React from 'react';
import styled from 'styled-components';
import StoreTabPaneAbout from './StoreTabPaneAbout';
import StoreTabPaneMenu from './StoreTabPaneMenu';
import StoreTabPaneReview from './StoreTabPaneReview';

type TProps = {
  setAboutScroll: (scroll: number) => void;
  setMenuScroll: (scroll: number) => void;
  setReviewScroll: (scroll: number) => void;
};

const StoreTabPane: React.FC<TProps> = ({
  setAboutScroll,
  setMenuScroll,
  setReviewScroll,
}) => {
  return (
    <StyledWrapper className="store-tab-pane">
      <StoreTabPaneAbout setAboutScroll={setAboutScroll} />
      <StoreTabPaneMenu setMenuScroll={setMenuScroll} />
      <StoreTabPaneReview setReviewScroll={setReviewScroll} />
    </StyledWrapper>
  );
};

export default StoreTabPane;

const StyledWrapper = styled.div``;
