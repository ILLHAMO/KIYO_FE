import React from 'react';
import styled from 'styled-components';

const EnterSigninNickname = () => {
  const ErrorAlert = () => {
    return (
      <div className="alert error">
        <img src="/images/enter/error_outline.png" />
        사용할 수 없는 닉네임입니다.
      </div>
    );
  };

  const SuccessAlert = () => {
    return (
      <div className="alert success">
        <img src="/images/enter/check_circle.png" />
        사용 가능한 닉네임입니다.
      </div>
    );
  };

  return (
    <StyledWrapper>
      <div className="nickname-label">닉네임을 입력해주세요.</div>
      <input className="nickname-input" />
    </StyledWrapper>
  );
};

export default EnterSigninNickname;

const StyledWrapper = styled.div`
  .nickname-label {
    color: var(--color-gray-300);
    font-size: 16px;
    margin-bottom: 8px;
  }

  .nickname-input {
    caret-color: var(--color-main);
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: 8px;
  }

  .alert {
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

    &.success {
      background-color: var(--color-success);
    }

    &.error {
      background-color: var(--color-error);
    }
  }
`;
