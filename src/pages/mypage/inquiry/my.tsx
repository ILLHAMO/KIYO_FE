import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MyPageInquiryMyHeader from 'app.feature/mypage/inquiry/my/MyPageInquiryMyHeader';
import MyPageInquiryMyList from 'app.feature/mypage/inquiry/my/MyPageInquiryMyList';

const PageMyPageInquiryMy = () => {
  return (
    <StyledWrapper>
      <MyPageInquiryMyHeader />
      <MyPageInquiryMyList />
    </StyledWrapper>
  );
};

export default PageMyPageInquiryMy;

const StyledWrapper = styled.div`
  height: 100vh;

  .list-item {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 0.5px solid var(--color-gray-100);

    &:last-child {
      border-bottom: none;
    }
  }
`;
