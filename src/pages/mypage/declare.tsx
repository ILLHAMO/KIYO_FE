import React from 'react';
import styled from 'styled-components';
import MyPageStoreHeader from 'app.feature/mypage/store/MyPageStoreHeader';
import MyPageStoreList from 'app.feature/mypage/store/MyPageStoreList';
import Header from 'app.components/Header/Header';
import MyPageDeclareList from 'app.feature/mypage/declare/MyPageDeclareList';

const PageMyPageReview = () => {
  return (
    <StyledWrapper>
      <Header title="공지사항" />
      <MyPageDeclareList />
    </StyledWrapper>
  );
};

export default PageMyPageReview;

const StyledWrapper = styled.div`
  height: 100vh;
`;
