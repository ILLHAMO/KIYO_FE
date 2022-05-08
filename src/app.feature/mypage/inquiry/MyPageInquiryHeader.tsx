import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MyPageInquiryHeader = () => {
  const router = useRouter();

  return (
    <StyledWrapper>
      <img
        src="/images/mypage/back_button_black.png"
        onClick={() => router.back()}
      />
      1:1 문의
    </StyledWrapper>
  );
};

export default MyPageInquiryHeader;

const StyledWrapper = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`;
