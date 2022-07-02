import React from 'react';
import styled from 'styled-components';
import Header from 'app.components/Header/Header';
import MyPageSettingsList from 'app.feature/mypage/settings/MyPageSettingsList';

const PageMyPageSettings = () => {
  return (
    <StyledWrapper>
      <Header title="설정" />
      <MyPageSettingsList />
    </StyledWrapper>
  );
};

export default PageMyPageSettings;

const StyledWrapper = styled.div`
  height: 100vh;
`;
