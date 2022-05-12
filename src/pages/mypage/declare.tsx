import React from 'react';
import styled from 'styled-components';
import Header from 'app.components/Header/Header';
import MyPageDeclareList from 'app.feature/mypage/declare/MyPageDeclareList';

const PageMyPageDeclare = () => {
  return (
    <StyledWrapper>
      <Header title="공지사항" />
      <MyPageDeclareList />
    </StyledWrapper>
  );
};

export default PageMyPageDeclare;

const StyledWrapper = styled.div`
  height: 100vh;
`;
