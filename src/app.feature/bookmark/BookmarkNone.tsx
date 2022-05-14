import React from 'react';
import styled from 'styled-components';

const BookmarkNone = () => {
  return (
    <StyledWrapper>
      <div className='none-text'>북마크한 키즈존이 없습니다.</div>
      <div className='add-button'>북마크하러 가기</div>
    </StyledWrapper>
  );
};

export default BookmarkNone;

const StyledWrapper = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .none-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 20px;
  }
  
  .add-button {
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
