import React from 'react';
import styled from 'styled-components';
import EnterSigninNickname from 'app.feature/enter/EnterSigninNickname';

const PageEnterSignin = () => {
  return (
    <StyledWrapper>
      <EnterSigninNickname />
      <div className="signin-button">
        <button>가입완료하기</button>
      </div>
    </StyledWrapper>
  );
};

export default PageEnterSignin;

const StyledWrapper = styled.div`
  padding: 40px 20px;
  height: 100vh;
  position: relative;
  min-height: 500px;

  .signin-button {
    position: absolute;
    bottom: 40px;
    left: 0;
    padding: 0 20px;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      cursor: pointer;
      background-color: var(--color-main);
      font-size: 18px;
      color: var(--color-white);
      border-radius: 25px;
      height: 100%;
      width: 248px;
    }
  }
`;
