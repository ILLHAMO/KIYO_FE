import React from 'react';
import styled from 'styled-components';

const MyPageInquiryCreate = () => {
  return <StyledWrapper>
    <div className='inquiry-wrap'>
      <textarea placeholder='문의 내용을 작성해주세요.'/>
    </div>
    <div className='create-button'>문의 등록하기</div>
  </StyledWrapper>
}

export default MyPageInquiryCreate;

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  
  .inquiry-wrap {
    height: calc(100% - 88px);
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
  
  .create-button {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-main);
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
  }
`;