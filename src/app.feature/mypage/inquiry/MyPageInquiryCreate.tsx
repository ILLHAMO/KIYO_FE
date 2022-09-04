import React, { useState } from 'react';
import styled from 'styled-components';
import { message } from 'antd';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import ModalConfirm from 'app.components/Modal/ModalConfirm';
import API from 'app.modules/api';
import { API_QNA } from 'app.modules/api/keyFactory';

const MyPageInquiryCreate = () => {
  const [isCreateModalVisible, setIsCreateModalVisible] =
    useState<boolean>(false);

  const router = useRouter();

  const methods = useForm();
  const { handleSubmit, register } = methods;

  const handleCreateModalVisible = () => {
    setIsCreateModalVisible(!isCreateModalVisible);
  };

  const handleConfirmCreate = async (data) => {
    try {
      const response = await API.POST({
        url: API_QNA,
        data,
      });

      if (response.data.status === 200) {
        router.back();
        message.success('문의 등록에 성공했습니다.');
      } else throw response;
    } catch (err) {
      message.error('문의 등록에 실패했습니다.');
    }
  };

  return (
    <StyledWrapper className="mypage-inquiry-create">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleConfirmCreate)}>
          <ModalConfirm
            isModalVisible={isCreateModalVisible}
            handleModalVisible={handleCreateModalVisible}
            handleConfirm={handleSubmit(handleConfirmCreate)}
          >
            해당 문의를 정말 등록하시겠습니까? 문의를 등록한 후에는 수정이나
            삭제가 불가능합니다.
          </ModalConfirm>
          <div className="mypage-inquiry-create__inquiry">
            <textarea
              {...register('content')}
              placeholder="문의 내용을 작성해주세요."
            />
          </div>
          <div
            className="mypage-inquiry-create__create-btn"
            onClick={handleCreateModalVisible}
          >
            문의 등록하기
          </div>
        </form>
      </FormProvider>
    </StyledWrapper>
  );
};

export default MyPageInquiryCreate;

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;

  .mypage-inquiry-create__inquiry {
    height: calc(100% - 88px);
    width: 100%;

    textarea {
      padding: 20px;
      width: 100%;
      height: calc(100vh - 88px);

      &::placeholder {
        color: var(--color-gray-300);
        font-size: 16px;
      }
    }
  }

  .mypage-inquiry-create__create-btn {
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
