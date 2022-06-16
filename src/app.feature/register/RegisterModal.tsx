import React from 'react';
import styled from 'styled-components';

const RegisterModal = () => {
  return (
    <StyledWrapper className='register-modal'>
      <div className="register-modal__register-button">
        <img src="/images/register/pencil.png" alt="" />
         리뷰 작성하기
      </div>
      <div className="register-modal__register-button">
        <img src="/images/register/store.png" alt="" />
        장소 등록하기
      </div>
      <div className="register-modal__register-button">
        <img src="/images/register/send.png" alt="" />
        1:1 문의하기
      </div>
      <div className="register-modal__close-button">
        <img src="/images/register/close.png" alt="" />
      </div>
    </StyledWrapper>
  );
};

export default RegisterModal;

const StyledWrapper = styled.div`
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 344px;
  background-color: var(--color-main);
  border-radius: 30px;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 38px 0;

  .register-modal__register-button {
    color: white;
    font-size: 18px;
    margin-bottom: 24px;
    
    img {
      margin-right: 24px;
    }
  }

  img {
    width: 30px;
    height: 30px;
  }

  .register-modal__close-button {
    cursor: pointer;
    position: absolute;
    width: 30px;
    height: 30px;
    left: 122px;
    top: 298px;
  }

`;
