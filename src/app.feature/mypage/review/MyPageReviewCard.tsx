import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useQueryClient } from 'react-query';
import API from 'app.modules/api';
import ModalConfirm from 'app.components/Modal/ModalConfirm';
import { scoreComment, scoreStatus } from 'app.modules/constant/score';
import { API_REVIEW, API_USER_REVIEW } from 'app.modules/api/keyFactory';
import { message } from 'antd';

const MyPageReviewCard = ({ reviewInfo }) => {
  const {
    address,
    content,
    reviewId,
    score,
    storeName,
    updateTime,
    storeImage,
  } = reviewInfo;

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const queryClient = useQueryClient();

  const handleDeleteModalVisible = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  const handleDeleteReview = async () => {
    try {
      const response = await API.DELETE({ url: API_REVIEW(reviewId) });
      queryClient.resetQueries(API_USER_REVIEW);
      if (response.data === 'delete success')
        message.success('리뷰 삭제에 성공했습니다.');
      else throw response;
      // TO DO 데이터에 그냥 delete success 만 내려오는데 이거 수정 필요할지?
      console.log(response);
    } catch (err) {
      message.error('리뷰 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <StyledWrapper className="mypage-review-card">
      <ModalConfirm
        isModalVisible={isDeleteModalVisible}
        handleModalVisible={handleDeleteModalVisible}
        handleConfirm={handleDeleteReview}
      >
        정말 삭제하시겠습니까?
      </ModalConfirm>

      <div className="mypage-review-card__top">
        <div className="mypage-review-card__user">
          <div className="mypage-review-card__profile">
            <img src={storeImage.imagePath} alt="store-image" />
          </div>
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
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
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
