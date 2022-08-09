import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { scoreComment, scoreStatus } from 'app.modules/constant/score';

const MyPageReviewCard = ({ reviewInfo, handleDeleteModalVisible }) => {
  const { address, content, reviewId, score, storeName, updateTime } =
    reviewInfo;

  return (
    <StyledWrapper className="mypage-review-card">
      <div className="mypage-review-card__top">
        <div className="mypage-review-card__user">
          <div className="mypage-review-card__profile"></div>
          <div className="mypage-review-card__store">
            <div className="mypage-review-card__name">{storeName}</div>
            <div className="mypage-review-card__address">{address}</div>
          </div>
        </div>
        <div className="mypage-review-card__method-button">
          <Link href={`/review/${reviewId}`}>
            <div className="mypage-review-card__edit-button">수정</div>
          </Link>
          <div
            className="mypage-review-card__remove-button"
            onClick={handleDeleteModalVisible}
          >
            삭제
          </div>
        </div>
      </div>
      <div className="mypage-review-card">
        <div
          className={`mypage-review-card__title mypage-review-card__title--${scoreStatus[score]}`}
        >
          <img src={`/images/common/${scoreStatus[score]}.png`} />
          {scoreComment[score]}
        </div>
        <div className="mypage-review-card__content">{content}</div>
        {/* TO DO 리뷰 리스트에서 이미지 필요! */}
        <div className="mypage-review-card__date">{updateTime}</div>
      </div>
    </StyledWrapper>
  );
};

export default MyPageReviewCard;

const StyledWrapper = styled.div`
  padding: 8px 0;
  border-bottom: 0.5px solid var(--color-gray-100);

  @media only screen and (max-width: 375px) {
    padding: 16px 0;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
  }

  .mypage-review-card__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    .mypage-review-card__user {
      display: flex;
      align-items: center;
      justify-content: center;

      .mypage-review-card__profile {
        width: 36px;
        height: 36px;
        min-width: 36px;
        min-height: 36px;
        margin-right: 16px;
        background-color: #ffe9ef;
        border-radius: 50%;
      }

      .mypage-review-card__store {
        .mypage-review-card__name {
          margin-bottom: 4px;
          margin-right: 8px;
        }

        .mypage-review-card__address {
          font-size: 12px;
          color: var(--color-gray-300);
        }
      }
    }

    .mypage-review-card__method-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      @media only screen and (max-width: 375px) {
        flex-direction: column;
        justify-content: end;
        gap: 8px;
      }

      div {
        min-width: 40px;
        cursor: pointer;
        border-radius: 10px;
        font-size: 12px;
        line-height: 1;
        padding: 4px 8px;
      }

      .mypage-review-card__edit-button {
        border: 1px solid var(--color-gray-300);
        color: var(--color-gray-300);
      }

      .mypage-review-card__remove-button,
      .mypage-review-card__declare-button {
        border: 1px solid var(--color-error);
        color: var(--color-error);
      }
    }
  }

  .mypage-review-card {
    font-size: 12px;
    line-height: 16px;
    padding-left: 16px;

    .mypage-review-card__title {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }

      &.mypage-review-card__title--revisit {
        color: var(--color-yellow);
      }

      &.mypage-review-card__title--normal {
        color: var(--color-blue);
      }

      &.mypage-review-card__title--novisit {
        color: var(--color-red);
      }
    }

    .mypage-review-card__content {
      margin-bottom: 4px;
    }

    .mypage-review-card__date {
      color: var(--color-gray-300);
      text-align: right;
    }
  }
`;
