import React from 'react';
import styled from 'styled-components';
import MyPageInquiryMyList from 'app.feature/mypage/inquiry/MyPageInquiryMyList';
import Header from 'app.components/Header/Header';

const PageMyPageInquiryMy = () => {
  return (
    <StyledWrapper>
      <Header title='내가 작성한 문의' />
      <MyPageInquiryMyList />
    </StyledWrapper>
  );
};

export default PageMyPageInquiryMy;

const StyledWrapper = styled.div`
  height: 100vh;
`;
