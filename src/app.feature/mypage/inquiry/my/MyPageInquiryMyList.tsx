import React from 'react';
import styled from 'styled-components';

const MyPageInquiryMyList = () => {
  return (
    <StyledWrapper>
      <div className="inquiry-list-wrap">
        <div className="inquiry-list">
          <div className="title">
            Q.
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
          </div>
          <img src="/images/mypage/expand_more.png" />
        </div>
        <div className='inquiry-content'>
          A. 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
        </div>
      </div>
      <div className="inquiry-list-wrap">
        <div className="inquiry-list">
          <div className="title">
            Q.
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
          </div>
          <img src="/images/mypage/expand_less.png" />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default MyPageInquiryMyList;

const StyledWrapper = styled.div`
  .inquiry-list-wrap {
    border-bottom: 0.5px solid var(--color-gray-100);
    padding: 0 20px;

    &:last-child {
      border-bottom: 0;
    }
  }

  .inquiry-list {
    line-height: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-all;
      margin-right: 8px;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
  
  .inquiry-content {
    line-height: 24px;
    color: var(--color-gray-300);
    margin-bottom: 16px;
  }
`;
