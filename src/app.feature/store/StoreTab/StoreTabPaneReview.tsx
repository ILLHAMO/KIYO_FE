import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StoreTabPaneReviewCard from './StoreTabPaneReviewCard';
import { TypeStoreDetailInfo } from 'app.modules/type/type';

type TProps = {
  storeDetailInfo: TypeStoreDetailInfo;
  setReviewScroll: (scroll: number) => void;
};

const StoreTabPaneReview: React.FC<TProps> = ({
  storeDetailInfo,
  setReviewScroll,
}) => {
  const router = useRouter();
  const { storeId } = router.query;

  if (typeof window !== 'undefined')
    window.addEventListener('scroll', () => {
      let scrollLocation = document.getElementById('scroll-review')?.offsetTop; // 현재 스크롤바 위
      setReviewScroll(scrollLocation);
    });

  const { reviewResponses, name, address } = storeDetailInfo;

  return (
    <StyledWrapper className="store-tab-pane-review" id="scroll-review">
      <div className="store-tab-pane-review__menu">
        <div>Review</div>
        <Link
          href={`/review/create?id=${storeId}&name=${name}&address=${address}`}
        >
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
