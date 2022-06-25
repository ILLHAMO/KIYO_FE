import React, { useEffect } from 'react';
import styled from 'styled-components';
import StoreTabPaneReviewCard from './StoreTabPaneReviewCard';
import Link from 'next/link';

type TProps = {
  setReviewScroll: (scroll: number) => void;
};

const StoreTabPaneReview: React.FC<TProps> = ({ setReviewScroll }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReviewScroll(document.getElementById('store-tab-review').offsetTop);
    }
  }, []);

  return (
    <StyledWrapper className="store-tab-pane-review" id="store-tab-review">
      <div className="store-tab-pane-review__menu">
        <div>Review</div>
        <Link href="/review">
          <div className="store-tab-pane-review__plus-button">+</div>
        </Link>
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
