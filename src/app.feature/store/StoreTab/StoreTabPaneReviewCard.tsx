import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Image, message } from 'antd';
import { useRouter } from 'next/router';
import ModalConfirm from 'app.components/Modal/ModalConfirm';
import API from 'app.modules/api';
import { scoreStatus } from 'app.modules/constant/score';
import { API_REVIEW } from 'app.modules/api/keyFactory';

type TProps = {
  reviewInfo: any;
};

const StoreTabPaneReviewCard: React.FC<TProps> = ({ reviewInfo }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);

  const {
    id,
    reviewerName,
    reviewerImage,
    score,
    updatedDate,
    currentUserReview,
    content,
    reviewImages,
  } = reviewInfo;

  const router = useRouter();

  const handleDeleteModalVisible = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await API.DELETE({ url: API_REVIEW(id) });
      if (response?.status === 200)
        message.success('해당 리뷰를 삭제했습니다.');
      else throw response;
    } catch (err) {
      message.error('리뷰 삭제에 실패했습니다.');
    }
  };

  const handleReportModalVisible = () => {
    setIsReportModalVisible(!isReportModalVisible);
  };

  return (
    <StyledWrapper className="store-tab-pane-review-card">
      <ModalConfirm
        isModalVisible={isDeleteModalVisible}
        handleModalVisible={handleDeleteModalVisible}
        handleConfirm={handleDeleteConfirm}
      >
        정말 삭제하시겠습니까?
      </ModalConfirm>
      <ModalConfirm
        isModalVisible={isReportModalVisible}
        handleModalVisible={handleReportModalVisible}
        handleConfirm={() => router.push(`/report?reviewId=${id}`)}
      >
        해당 리뷰를 신고하시겠습니까?
      </ModalConfirm>
      <div className="store-tab-pane-review-card__top">
        <div className="store-tab-pane-review-card__user">
          <div className="store-tab-pane-review-card__profile">
            <img src={reviewerImage} alt="profile-image" />
          </div>
          <div className="store-tab-pane-review-card__name">{reviewerName}</div>
        </div>
        <div className="store-tab-pane-review-card__method-button">
          {currentUserReview ? (
            <>
              <Link href={`/review/${id}`}>
                <div className="store-tab-pane-review-card__edit-button">
                  수정
                </div>
              </Link>
              <div
                className="store-tab-pane-review-card__remove-button"
                onClick={handleDeleteModalVisible}
              >
                삭제
              </div>
            </>
          ) : (
            <div
              className="store-tab-pane-review-card__decalre-button"
              onClick={handleReportModalVisible}
            >
              신고
            </div>
          )}
        </div>
      </div>
      <div className="store-tab-pane-review-card__bottom">
        <div
          className={`store-tab-pane-review-card__title store-tab-pane-review-card__title--${scoreStatus[score]}`}
        >
          <img src={`/images/common/${scoreStatus[score]}.png`} />
          평범해요!
        </div>
        <div className="store-tab-pane-review-card__content">{content}</div>
        <div className="store-tab-pane-review-card__photo-slide">
          {reviewImages.map((item) => (
            <Image className="photo-slide-item" src={item.path} key={item.id} />
          ))}
        </div>
        <div className="store-tab-pane-review-card__date">{updatedDate}</div>
      </div>
    </StyledWrapper>
  );
};

export default StoreTabPaneReviewCard;

const StyledWrapper = styled.div`
  padding: 8px 0;
  border-bottom: 0.5px solid var(--color-gray-100);

  &:last-child {
    border-bottom: 0;
  }

  .store-tab-pane-review-card__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    .store-tab-pane-review-card__user {
      display: flex;
      align-items: center;
      justify-content: center;

      .store-tab-pane-review-card__profile {
        width: 36px;
        height: 36px;
        margin-right: 16px;
        background-color: #ffe9ef;
        border-radius: 50%;
        overflow: hidden;
      }

      .store-tab-pane-review-card__name {
      }
    }

    .store-tab-pane-review-card__method-button {
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

      .store-tab-pane-review-card__edit-button {
        border: 1px solid var(--color-gray-300);
        color: var(--color-gray-300);
      }

      .store-tab-pane-review-card__remove-button,
      .store-tab-pane-review-card__decalre-button {
        border: 1px solid var(--color-error);
        color: var(--color-error);
      }
    }
  }

  .store-tab-pane-review-card__bottom {
    font-size: 12px;
    line-height: 16px;
    padding-left: 16px;

    .store-tab-pane-review-card__title {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }

      &.store-tab-pane-review-card__title--revisit {
        color: var(--color-yellow);
      }

      &.store-tab-pane-review-card__title--neutral {
        color: var(--color-blue);
      }

      &.store-tab-pane-review-card__title--novisit {
        color: var(--color-red);
      }
    }

    .store-tab-pane-review-card__content {
      margin-bottom: 8px;
    }

    .store-tab-pane-review-card__photo-slide {
      display: flex;
      overflow: auto;
      margin-bottom: 8px;

      .photo-slide-item {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
    }

    .store-tab-pane-review-card__date {
      color: var(--color-gray-300);
      text-align: right;
    }
  }
`;
