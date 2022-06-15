import React from 'react';
import styled from 'styled-components';
import StoreTabPaneReviewCard from './StoreTabPaneReviewCard';

const StoreTabPaneReview = () => {
  return (
    <StyledWrapper className="store-tab-pane-review">
      <div className="store-tab-pane-review__menu">
        <div>Review</div>
        <div className="store-tab-pane-review__plus-button">+</div>
      </div>
      <div className="store-tab-pane-review__review-card">
        <StoreTabPaneReviewCard isWriter={true} />
        <StoreTabPaneReviewCard isWriter={false} />
        <StoreTabPaneReviewCard isWriter={false} />
      </div>
    </StyledWrapper>
  );
};

export default StoreTabPaneReview;

const StyledWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  padding: 16px 20px;

  .store-tab-pane-review__menu {
    letter-spacing: 0.29em;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .store-tab-pane-review__plus-button {
      cursor: pointer;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
    }
  }

  .store-tab-pane-review__review-card {
  }
`;
