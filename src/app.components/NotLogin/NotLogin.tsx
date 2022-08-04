import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const NotLogin = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/enter');
  };

  return (
    <StyledWrapper className="not-login">
      <img src="/images/common/tokkis.png" alt="" className="not-login__logo" />
      <button className="not-login__login-button" onClick={handleLogin}>
        로그인하러가기
      </button>
    </StyledWrapper>
  );
};

export default NotLogin;

const StyledWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .not-login__logo {
    width: 60%;
    margin-bottom: 24px;
  }

  .not-login__login-button {
    margin: 0 auto;
    cursor: pointer;
    height: 48px;
    padding: 0 32px;
    line-height: 48px;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    background: var(--color-main);
    color: var(--color-white);
    border-radius: 25px;
  }
`;
