import React from 'react';
import styled from 'styled-components';
import Header from 'app.components/Header/Header';
import MyPageEdit from 'app.feature/mypage/edit/MyPageEdit';

const PageMyPageEdit = () => {
  return (
    <StyledWrapper>
      <Header title="내 정보 수정" />
      <MyPageEdit />
    </StyledWrapper>
  );
};

export default PageMyPageEdit;

const StyledWrapper = styled.div`
  height: 100vh;
`;
