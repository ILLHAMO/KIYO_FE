import React, { useEffect } from 'react';
import styled from 'styled-components';
import StoreTabPaneReviewCard from './StoreTabPaneReviewCard';
import Link from 'next/link';

type TProps = {
  storeDetailInfo: any;
  setReviewScroll: (scroll: number) => void;
};

const StoreTabPaneReview: React.FC<TProps> = ({
  storeDetailInfo,
  setReviewScroll,
}) => {
  if (typeof window !== 'undefined')
    window.addEventListener('scroll', () => {
      let scrollLocation = document.getElementById('scroll-review')?.offsetTop; // 현재 스크롤바 위
      setReviewScroll(scrollLocation);
    });

  const { reviewResponses } = storeDetailInfo;

  return (
    <StyledWrapper className="store-tab-pane-review" id="scroll-review">
      <div className="store-tab-pane-review__menu">
        <div>Review</div>
        <Link href="/review">
          <div className="store-tab-pane-review__plus-button">+</div>
        </Link>
      </div>
      <div className="store-tab-pane-review__review-card">
        {!!reviewResponses.length &&
          reviewResponses.map((item) => (
            <StoreTabPaneReviewCard reviewInfo={item} />
          ))}
      </div>
    </StyledWrapper>
  );
};

export default StoreTabPaneReview;

const StyledWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  padding: 20px;

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
