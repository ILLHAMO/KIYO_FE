import React from 'react';
import styled from 'styled-components';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import HomeHeader from 'app.feature/home/HomeHeader';
import HomeBanner from 'app.feature/home/HomeBanner';
import HomeStoreFilter from 'app.feature/home/HomeStoreFilter';
import HomeStoreList from 'app.feature/home/HomeStoreList';
import HomeConvenienceFilter from 'app.feature/home/ HomeConvenienceFilter';
import RegisterModal from 'app.feature/register/RegisterModal';

const PageHome = () => {
  return (
    <StyledWrapper>
      <HomeHeader />
      <HomeBanner />
      <HomeStoreFilter />
      <HomeStoreList />
      <NavigationBar />
      {/* <HomeConvenienceFilter /> */}
      {/* <RegisterModal /> */}
    </StyledWrapper>
  );
};

export default PageHome;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 80px;
`;
