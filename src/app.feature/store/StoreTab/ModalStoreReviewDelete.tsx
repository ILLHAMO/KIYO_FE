import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

type TProps = {
  isDeleteModalVisible: boolean;
  handleDeleteModalVisible: () => void;
};

const ModalStoreReviewDelete: React.FC<TProps> = ({
  isDeleteModalVisible,
  handleDeleteModalVisible,
}) => {
  const handleConfirmDelete = async () => {
    handleDeleteModalVisible();
  };

  return (
    <StyledWrapper
      centered
      className="modal-store-review-delete"
      show={isDeleteModalVisible}
      size="sm"
      onHide={handleDeleteModalVisible}
    >
      <Modal.Body>
        <div className="modal-store-review-delete__title">
          정말 삭제하시겠습니까?
        </div>
        <div className="modal-store-review-delete__footer">
          <Button
            onClick={handleConfirmDelete}
            className="modal-store-review-delete__button modal-store-review-delete__button--confirm"
          >
            네
          </Button>
          <Button
            variant="light"
            onClick={handleDeleteModalVisible}
            className="modal-store-review-delete__button modal-store-review-delete__button--cancel"
          >
            아니오
          </Button>
        </div>
      </Modal.Body>
    </StyledWrapper>
  );
};

export default ModalStoreReviewDelete;

const StyledWrapper = styled(Modal)`
  .modal-store-review-delete__title {
    margin-bottom: 12px;
  }

  .modal-store-review-delete__footer {
    display: flex;
    justify-content: end;
  }

  .modal-store-review-delete__button {
    &.modal-store-review-delete__button--confirm {
      color: var(--color-white);
      margin-right: 8px;
    }

    &.modal-store-review-delete__button--cancel {
    }
  }
`;
