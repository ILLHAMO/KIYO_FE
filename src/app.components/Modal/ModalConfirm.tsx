import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

type TProps = {
  isModalVisible: boolean;
  handleModalVisible: () => void;
  handleConfirm: () => void;
  children: React.ReactNode;
};

const ModalConfirm: React.FC<TProps> = ({
  isModalVisible,
  handleModalVisible,
  handleConfirm,
  children,
}) => {
  return (
    <StyledWrapper
      centered
      className="modal-store-review-delete"
      show={isModalVisible}
      size="sm"
      onHide={handleModalVisible}
    >
      <Modal.Body>
        <div className="modal-store-review-delete__title">{children}</div>
        <div className="modal-store-review-delete__footer">
          <Button
            onClick={async () => {
              await handleConfirm();
              handleModalVisible();
            }}
            className="modal-store-review-delete__button modal-store-review-delete__button--confirm"
          >
            네
          </Button>
          <Button
            variant="light"
            onClick={handleModalVisible}
            className="modal-store-review-delete__button modal-store-review-delete__button--cancel"
          >
            아니오
          </Button>
        </div>
      </Modal.Body>
    </StyledWrapper>
  );
};

export default ModalConfirm;

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
