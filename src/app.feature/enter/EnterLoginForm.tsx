import React from 'react';
import styled from 'styled-components';

const EnterLoginForm = () => {
  return (
    <StyledWrapper className='enter-login-form'>
      <div className="enter-login-form__text">SNS 아이디로 로그인하기</div>
      <div className="enter-login-form__login-method">
        <div className="enter-login-form__method enter-login-form__method--kakao">
          <img src="/images/enter/kakao.png" alt="kakao" />
        </div>
        <div className="enter-login-form__method enter-login-form__method--google">
          <img src="/images/enter/google.png" alt="google" />
        </div>
        <div className="enter-login-form__method enter-login-form__method--naver">
          <img src="/images/enter/naver.png" alt="naver" />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default EnterLoginForm;

const StyledWrapper = styled.div`
  .enter-login-form__text {
    margin-bottom: 8px;
    font-size: 16px;
    color: var(--color-white);
  }

  .enter-login-form__login-method {
    display: flex;
    gap: 16px;

    .enter-login-form__method {
      width: 46px;
      height: 46px;
      border-radius: 50%;

      &.enter-login-form__method--kakao {
        background-color: #fef01b;
      }

      &.enter-login-form__method--google {
        background-color: var(--color-white);
      }

      &.enter-login-form__method--naver {
        background-color: #1ec800;
      }
    }
  }
`;
