import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

type TProps = {
  isModalVisible: boolean;
  handleModalVisible: () => void;
  handleConfirm: () => void;
  alert?: boolean;
  confirmText?: string;
  children: React.ReactNode;
};

const ModalConfirm: React.FC<TProps> = ({
  isModalVisible,
  handleModalVisible,
  handleConfirm,
  alert = false,
  confirmText = '네',
  children,
}) => {
  return (
    <StyledWrapper
      centered
      className="modal-confirm"
      show={isModalVisible}
      size="sm"
      onHide={handleModalVisible}
      alert={alert}
      backdrop={alert ? 'static' : true}
    >
      <Modal.Body className='modal-confirm__body'>
        <div className="modal-confirm__title">{children}</div>
        <div className="modal-confirm__footer">
          <Button
            onClick={async () => {
              await handleConfirm();
              handleModalVisible();
            }}
            className="modal-confirm__button modal-confirm__button--confirm"
          >
            {confirmText}
          </Button>
          {!alert && (
            <Button
              variant="light"
              onClick={handleModalVisible}
              className="modal-confirm__button modal-confirm__button--cancel"
            >
              아니오
            </Button>
          )}
        </div>
      </Modal.Body>
    </StyledWrapper>
  );
};

export default ModalConfirm;

const StyledWrapper = styled(Modal)`
  .modal-confirm__title {
    margin-bottom: 12px;
  }

  .modal-confirm__footer {
    display: flex;
    justify-content: end;
  }

  .modal-confirm__button {
    &.modal-confirm__button--confirm {
      color: var(--color-white);
      margin-right: 8px;
    }

    &.modal-confirm__button--cancel {
    }
  }
`;
