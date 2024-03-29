import React, { useState } from 'react';
import styled from 'styled-components';
import API from 'app.modules/api';
import ModalConfirm from 'app.components/Modal/ModalConfirm';
import { TypeUserStoreInfo } from 'app.modules/type/type';
import { API_USER_STORE_DELETE } from 'app.modules/api/keyFactory';
import { useQueryClient } from 'react-query';

type TProps = {
  storeInfo: TypeUserStoreInfo;
};

const MyPageStoreCard: React.FC<TProps> = ({ storeInfo }) => {
  const { storeId, name, address, storeImage } = storeInfo;
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteModalVisible = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  const queryClient = useQueryClient();

  const handleDeleteStore = async () => {
    try {
      await API.DELETE({ url: API_USER_STORE_DELETE(storeId) });
      queryClient.removeQueries(API_USER_STORE_DELETE(storeId));
    } catch (err) {}
  };

  return (
    <StyledWrapper className="mypage-store-card">
      <ModalConfirm
        isModalVisible={isDeleteModalVisible}
        handleModalVisible={handleDeleteModalVisible}
        handleConfirm={handleDeleteStore}
      >
        정말 삭제하시겠습니까?
      </ModalConfirm>
      <div className="mypage-store-card__info">
        <div className="mypage-store-card__img">
          <img src={storeImage.imagePath} />
        </div>
        <div className="mypage-store-card__store">
          <div className="mypage-store-card__name">{name}</div>
          <div className="mypage-store-card__address">{address}</div>
        </div>
      </div>
      <div className="mypage-store-card__button">
        <div className="mypage-store-card__watch-button">보기</div>
        <div
          className="mypage-store-card__remove-button"
          onClick={handleDeleteModalVisible}
        >
          삭제
        </div>
      </div>
    </StyledWrapper>
  );
};

export default MyPageStoreCard;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  .mypage-store-card__info {
    display: flex;
    align-items: center;
    justify-content: center;

    .mypage-store-card__img {
      width: 36px;
      min-width: 36px;
      height: 36px;
      min-height: 36px;
      margin-right: 16px;
      background-color: #ffe9ef;
      border-radius: 50%;
      overflow: hidden;
    }

    .mypage-store-card__store {
      .mypage-store-card__name {
        margin-bottom: 4px;
        margin-right: 8px;
      }

      .mypage-store-card__address {
        font-size: 12px;
        color: var(--color-gray-300);
      }
    }
  }

  .mypage-store-card__button {
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

    .mypage-store-card__watch-button {
      border: 1px solid var(--color-gray-300);
      color: var(--color-gray-300);
    }

    .mypage-store-card__remove-button,
    .mypage-store-card__declare-button {
      border: 1px solid var(--color-error);
      color: var(--color-error);
    }
  }
`;
