import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from 'app.components/Header/Header';

const PageMyPageInquiry = () => {
  return (
    <StyledWrapper className='page-mypage-inquiry'>
      <Header title="1:1 문의" />
      <Link href="/mypage/inquiry/my">
        <div className="page-mypage-inquiry__list-item">내가 작성한 문의</div>
      </Link>
      <Link href="/mypage/inquiry/create">
        <div className="page-mypage-inquiry__list-item">문의하기</div>
      </Link>
    </StyledWrapper>
  );
};

export default PageMyPageInquiry;

const StyledWrapper = styled.div`
  height: 100vh;

  .page-mypage-inquiry__list-item {
    width: 100%;
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
    border-bottom: 0.5px solid var(--color-gray-100);

    &:last-child {
      border-bottom: none;
    }
  }
`;
