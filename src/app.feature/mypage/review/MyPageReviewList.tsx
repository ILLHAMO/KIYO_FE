import React from 'react';
import styled from 'styled-components';

const MyPageReviewList = () => {
  return (
    <StyledWrapper>
      <div className="review-card">
        <div className="card-top">
          <div className="user">
            <div className="profile"></div>
            <div className="store">
              <div className='name'>홍길동네 돼지 국밥</div>
              <div className='address'>용인시 기흥구</div>
            </div>
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
            있는 키즈메뉴들도 있고 사장님의 배려도 느껴져서 너무 좋았고 무엇보다
            맛있었습니다!
          </div>
          <div className="review-date">2022-05-03</div>
        </div>
      </div>
      <div className="review-card">
        <div className="card-top">
          <div className="user">
            <div className="profile"></div>
            <div className="store">
              <div className='name'>홍길동네 돼지 국밥</div>
              <div className='address'>용인시 기흥구</div>
            </div>
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
            있는 키즈메뉴들도 있고 사장님의 배려도 느껴져서 너무 좋았고 무엇보다
            맛있었습니다!
          </div>
          <div className="review-date">2022-05-03</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default MyPageReviewList;

const StyledWrapper = styled.div`
  padding: 20px;
  
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

        .store {
          .name {
            margin-bottom: 4px;
          }
          
          .address {
            font-size: 12px;
            color: var(--color-gray-300);
          }
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
`;
