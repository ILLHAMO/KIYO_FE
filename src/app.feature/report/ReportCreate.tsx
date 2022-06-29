import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert, Toast } from 'react-bootstrap';
import { message } from 'antd';
import { useRouter } from 'next/router';
import ModalConfirm from 'app.components/Modal/ModalConfirm';

const ReportCreate = () => {
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);

  const router = useRouter();

  const handleReportModalVisible = () => {
    setIsReportModalVisible(!isReportModalVisible);
  };

  const handleConfirmReport = async () => {
    router.back();
  };

  return (
    <StyledWrapper className="report-create">
      <ModalConfirm
        isModalVisible={isReportModalVisible}
        handleModalVisible={() =>
          setIsReportModalVisible(!isReportModalVisible)
        }
        handleConfirm={handleConfirmReport}
        alert={true}
        confirmText="알겠습니다"
      >
        해당 신고 내용을 운영진에게 전달하였습니다.
        작성하신 내용을 바탕으로 리뷰 검토 후,
        커뮤니티 가이드에 따라 처리하도록 하겠습니다.
        감사합니다.
      </ModalConfirm>
      <div className="report-create__report">
        <textarea placeholder="신고 내용을 작성해주세요." />
      </div>
      <div
        className="report-create__create-btn"
        onClick={handleReportModalVisible}
      >
        리뷰 신고하기
      </div>
    </StyledWrapper>
  );
};

export default ReportCreate;

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;

  .alert {
    width: calc(100% - 40px);
    margin: 0 20px;
    top: 20px;
    max-width: 624px;
    position: fixed;
  }

  .report-create__report {
    height: calc(100% - 48px);
    width: 100%;

    textarea {
      padding: 20px;
      width: 100%;
      height: 100%;

      &::placeholder {
        color: var(--color-gray-300);
        font-size: 16px;
      }
    }
  }

  .report-create__create-btn {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    max-width: 664px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-main);
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
  }
`;
