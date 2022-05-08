import React from 'react';
import styled from 'styled-components';
import Header from 'app.components/Header/Header';
import MyPageInquiryCreate from 'app.feature/mypage/inquiry/MyPageInquiryCreate';

const PageMyPageInquiryCreate = () => {
  return (
    <StyledWrapper>
      <Header title='문의 작성하기' />
      <MyPageInquiryCreate />
    </StyledWrapper>
  );
};

export default PageMyPageInquiryCreate;

const StyledWrapper = styled.div`
  height: 100vh;
`;
