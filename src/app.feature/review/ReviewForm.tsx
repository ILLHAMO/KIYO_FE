import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const ReviewForm = () => {
  return (
    <StyledWrapper>
      <div className="store-name">홍길동네 돼지국밥</div>
      <div className="store-address">용인시 기흥구</div>
      <div className="review-score">
        <div className="score-item">
          <img src="/images/common/revisit.png" />
          <div className="title yellow">
            재방문 의사
            <br />
            있어요!
          </div>
        </div>
        <div className="score-item">
          <img src="/images/common/neutral.png" />
          <div className="title blue">괜찮아요!</div>
        </div>
        <div className="score-item">
          <img src="/images/common/novisit.png" />
          <div className="title red">
            재방문 의사
            <br />
            없어요!
          </div>
        </div>
      </div>
      <textarea placeholder="사실과 다르거나 비방목적의 글을 작성할 경우 처벌을 받을 수 있습니다." />
      <div className="review-photo-wrap">
        <div className="title">사진 추가하기</div>
        <div className="review-photo-slide">
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
          <div className="photo-item"></div>
        </div>
        <div className="review-warn">
          <li>
            리뷰에 업로드해주신 사진은 키요의 식당 상세페이지에서 사용될 수
            있습니다.
          </li>
          <li>사진은 10개까지 등록하실 수 있습니다.</li>
        </div>
      </div>
      <div className="review-check">
        <Form.Check
          type="checkbox"
          id="review-check"
          label="직접 방문한 경험과 사실을 기반으로 작성한 리뷰입니다."
        />
      </div>
      <div className='create-button'>리뷰 등록하기</div>
    </StyledWrapper>
  );
};

export default ReviewForm;

const StyledWrapper = styled.div`
  padding: 20px;

  .store-name {
    line-height: 26px;
  }

  .store-address {
    line-height: 17px;
    font-size: 12px;
    color: var(--color-gray-300);
    margin-bottom: 12px;
  }

  .review-score {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .score-item {
      width: calc(100% / 3);
      text-align: center;

      img {
        width: 60px;
        height: 60px;
      }

      .title {
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        line-height: 17px;

        &.yellow {
          color: var(--color-yellow);
        }

        &.blue {
          color: var(--color-blue);
        }

        &.red {
          color: var(--color-red);
        }
      }
    }
  }

  textarea {
    padding: 8px;
    width: 100%;
    height: 120px;
    background: var(--color-white);
    border: 1px solid var(--color-gray-300);
    margin-bottom: 20px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--color-gray-300);
    }
  }

  .review-photo-wrap {
    margin-bottom: 32px;

    .title {
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 23px;
    }

    .review-photo-slide {
      display: flex;
      align-items: center;
      overflow: auto;
      margin: 0 -20px 8px;
      padding: 0 20px;

      .photo-item {
        min-width: 80px;
        border: 1px solid var(--color-black);
        border-right: none;
        width: 80px;
        height: 80px;
        background: #ffe9ef;

        &:last-child {
          border-right: 1px solid var(--color-black);
        }
      }
    }

    .review-warn {
      font-size: 12px;
      line-height: 17px;
      color: var(--color-gray-300);
    }
  }

  .review-check {
    margin-bottom: 32px;

    .form-check {
      display: flex;
      align-items: center;
      label {
        font-size: 12px;
        line-height: 26px;
      }
    }

    input {
      margin-right: 8px;
      border-color: var(--color-main);

      &::focus {
        border-color: var(--color-main);
        box-shadow: none;
        outline: none;
      }
      &:checked {
        background-color: var(--color-main);
      }
    }
  }
  
  .create-button {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-main);
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
  }
`;
