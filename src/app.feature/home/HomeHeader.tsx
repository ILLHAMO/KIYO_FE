import React from 'react';
import styled from 'styled-components';

const HomeHeader = () => {
  return (
    <StyledWrapper>
      <img src="/images/home/logo.png" />
      <div className="header-right">
        <div className="location-info">
          in
          <span>남양주시 다산동</span>
        </div>
        <img src='/images/home/search_gray.png' />
      </div>
    </StyledWrapper>
  );
};

export default HomeHeader;

const StyledWrapper = styled.div`
  padding: 0 20px 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;

  img {
    width: 64px;
    height: 30px;
  }

  .header-right {
    display: flex;
    padding-top: 11px;

    .location-info {
      font-size: 16px;
      margin-right: 16px;
      color: var(--color-gray-300);
      
      span{
        margin-left: 8px;
      }
    }
    
    img {
      width: 16px;
      height: 16px;
    }
  }
`;
