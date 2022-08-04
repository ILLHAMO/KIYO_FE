import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const EnterSigninNickname = () => {
  const { register } = useFormContext();

  const ErrorAlert = () => {
    return (
      <div className="enter-sign-nickname__alert enter-sign-nickname__alert--error">
        <img src="/images/enter/error_outline.png" />
        사용할 수 없는 닉네임입니다.
      </div>
    );
  };

  const SuccessAlert = () => {
    return (
      <div className="enter-sign-nickname__alert enter-sign-nickname__alert--success">
        <img src="/images/enter/check_circle.png" />
        사용 가능한 닉네임입니다.
      </div>
    );
  };

  return (
    <StyledWrapper className="enter-sign-nickname">
      <div className="enter-sign-nickname__label">닉네임을 입력해주세요.</div>
      <input className="enter-sign-nickname__input" {...register('nickname')} />
    </StyledWrapper>
  );
};

export default EnterSigninNickname;

const StyledWrapper = styled.div`
  .enter-sign-nickname__label {
    color: var(--color-gray-300);
    font-size: 16px;
    margin-bottom: 8px;
  }

  .enter-sign-nickname__input {
    caret-color: var(--color-main);
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: 8px;
  }

  .enter-sign-nickname__alert {
    font-size: 12px;
    height: 24px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    color: var(--color-white);
    border-radius: 6px;

    img {
      width: 18px;
      margin-right: 12px;
    }

    &.enter-sign-nickname__alert--success {
      background-color: var(--color-success);
    }

    &.enter-sign-nickname__alert--error {
      background-color: var(--color-error);
    }
  }
`;
