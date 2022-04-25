import React from 'react';
import styled from 'styled-components';

const EnterLogo = () => {
  return (
    <StyledWrapper>
      <img src="/images/enter/logo.png" alt="logo" className="logo-img" />
      <div className="login-wrap">
        <div className="text">SNS 아이디로 로그인하기</div>
        <div className="login-method">
          <div className="method kakao">
            <img src="/images/enter/kakao.png" alt="kakao" />
          </div>
          <div className="method google">
            <img src="/images/enter/google.png" alt="google" />
          </div>
          <div className="method naver">
            <img src="/images/enter/naver.png" alt="naver" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default EnterLogo;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo-img {
    width: 126px;
    margin-bottom: 112px;
  }

  .login-wrap {
    .text {
      margin-bottom: 8px;
      font-size: 16px;
      color: var(--color-white);
    }

    .login-method {
      display: flex;
      gap: 16px;

      .method {
        width: 46px;
        height: 46px;
        border-radius: 50%;

        &.kakao {
          background-color: #fef01b;
        }

        &.google {
          background-color: var(--color-white);
        }

        &.naver {
          background-color: #1ec800;
        }
      }
    }
  }
`;
