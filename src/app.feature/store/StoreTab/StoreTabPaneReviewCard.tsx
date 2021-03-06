import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ModalConfirm from 'app.components/Modal/ModalConfirm';
import { useRouter } from 'next/router';

type TProps = {
  isWriter: boolean;
};

const StoreTabPaneReviewCard: React.FC<TProps> = ({ isWriter = true }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);

  const router = useRouter();

  const handleDeleteModalVisible = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  const handleReportModalVisible = () => {
    setIsReportModalVisible(!isReportModalVisible);
  };

  return (
    <StyledWrapper className="store-tab-pane-review-card">
      <ModalConfirm
        isModalVisible={isDeleteModalVisible}
        handleModalVisible={handleDeleteModalVisible}
        handleConfirm={() => console.log('삭제하기')}
      >
        정말 삭제하시겠습니까?
      </ModalConfirm>
      <ModalConfirm
        isModalVisible={isReportModalVisible}
        handleModalVisible={handleReportModalVisible}
        handleConfirm={() => router.push('/report')}
      >
        해당 리뷰를 신고하시겠습니까?
      </ModalConfirm>
      <div className="store-tab-pane-review-card__top">
        <div className="store-tab-pane-review-card__user">
          <div className="store-tab-pane-review-card__profile"></div>
          <div className="store-tab-pane-review-card__name">파워맘</div>
        </div>
        <div className="store-tab-pane-review-card__method-button">
          {isWriter ? (
            <>
              <Link href={`/review/1`}>
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
        <div className="store-tab-pane-review-card__title store-tab-pane-review-card__title--neutral">
          <img src="/images/common/neutral.png" />
          {/*<img src='/images/common/novisit.png' />*/}
          {/*<img src='/images/common/revisit.png' />*/}
          평범해요!
        </div>
        <div className="store-tab-pane-review-card__content">
          매장도 깨끗하고 키즈메뉴도 아이가 잘 먹었습니다!
        </div>
        <div className="store-tab-pane-review-card__date">2022-04-09</div>
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
      margin-bottom: 4px;
    }

    .store-tab-pane-review-card__date {
      color: var(--color-gray-300);
      text-align: right;
    }
  }
`;
