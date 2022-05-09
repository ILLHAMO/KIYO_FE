import React from 'react';
import styled from 'styled-components';

const StoreTabPaneReview = () => {
  return (
    <StyledWrapper>
      <div className="menu-title">
        <div>Review</div>
        <div className="plus">+</div>
      </div>
      <div className="review-card-wrap">
        <div className="review-card">
          <div className="card-top">
            <div className="user">
              <div className="profile"></div>
              <div className="name">연지맘</div>
            </div>
            <div className="method-button">
              <div className="edit-button">수정</div>
              <div className="remove-button">삭제</div>
            </div>
          </div>
          <div className="card-bottom">
            <div className="review-title revisit">
              <img src="/images/common/revisit.png" />
              재방문 의사 있어요!
            </div>
            <div className="review-content">
              아이를 가지고 나서 국밥집은 잘 찾지 못했는데 아이들도 잘 먹을 수
              있는 키즈메뉴들도 있고 사장님의 배려도 느껴져서 너무 좋았고
              무엇보다 맛있었습니다!
            </div>
            <div className="review-date">2022-05-03</div>
          </div>
        </div>
        <div className="review-card">
          <div className="card-top">
            <div className="user">
              <div className="profile"></div>
              <div className="name">파워맘</div>
            </div>
            <div className="method-button">
              <div className="declare-button">신고</div>
            </div>
          </div>
          <div className="card-bottom">
            <div className="review-title neutral">
              <img src="/images/common/neutral.png" />
              평범해요!
            </div>
            <div className="review-content">
              매장도 깨끗하고 키즈메뉴도 아이가 잘 먹었습니다!
            </div>
            <div className="review-date">2022-04-09</div>
          </div>
        </div>
        <div className="review-card">
          <div className="card-top">
            <div className="user">
              <div className="profile"></div>
              <div className="name">프로불편러</div>
            </div>
            <div className="method-button">
              <div className="edit-button">수정</div>
              <div className="remove-button">삭제</div>
            </div>
          </div>
          <div className="card-bottom">
            <div className="review-title novisit">
              <img src="/images/common/novisit.png" />
              재방문 의사 없어요!
            </div>
            <div className="review-content">
              키즈메뉴가 있음에도 불구하고 아이들을 데려오기에는 부적절한 식당
              선택이었던 것 같습니다
            </div>
            <div className="review-date">2022-04-05</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default StoreTabPaneReview;

const StyledWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  padding: 16px 20px;

  .menu-title {
    letter-spacing: 0.29em;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .plus {
      cursor: pointer;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
    }
  }

  .review-card-wrap {
    .review-card {
      padding: 8px 0;
      border-bottom: 0.5px solid var(--color-gray-100);

      &:last-child {
        border-bottom: 0;
      }

      .card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;

        .user {
          display: flex;
          align-items: center;
          justify-content: center;

          .profile {
            width: 36px;
            height: 36px;
            margin-right: 16px;
            background-color: #ffe9ef;
            border-radius: 50%;
          }

          .name {
          }
        }

        .method-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;

          div {
            cursor: pointer;
            border-radius: 10px;
            font-size: 12px;
            line-height: 1;
            padding: 4px 8px;
          }

          .edit-button {
            border: 1px solid var(--color-gray-300);
            color: var(--color-gray-300);
          }

          .remove-button,
          .declare-button {
            border: 1px solid var(--color-error);
            color: var(--color-error);
          }
        }
      }

      .card-bottom {
        font-size: 12px;
        line-height: 16px;
        padding-left: 16px;

        .review-title {
          display: flex;
          align-items: center;
          margin-bottom: 8px;

          img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
          }

          &.revisit {
            color: var(--color-yellow);
          }

          &.normal {
            color: var(--color-blue);
          }

          &.novisit {
            color: var(--color-red);
          }
        }
        
        .review-content {
          margin-bottom: 4px;
        }
        
        .review-date {
          color: var(--color-gray-300);
          text-align: right;
        }
      }
    }
  }
`;
