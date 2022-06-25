import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import HomeHeader from 'app.feature/home/HomeHeader';
import HomeBanner from 'app.feature/home/HomeBanner';
import HomeCategoryFilter from 'app.feature/home/HomeCategoryFilter';
import HomeStoreList from 'app.feature/home/HomeStoreList';
import HomeConvenienceFilter from 'app.feature/home/HomeConvenienceFilter';
import RegisterModal from 'app.feature/register/RegisterModal';

const PageHome = () => {
  const [isConvenienceFilterVisible, setIsConvenienceFilterVisible] = useState(false);

  const handleConvenienceFilterVisible = () => {
    setIsConvenienceFilterVisible(!isConvenienceFilterVisible);
    console.log("클릭됨");
  };

  return (
    <StyledWrapper>
      <HomeHeader />
      <HomeBanner />
      <HomeCategoryFilter onClick={handleConvenienceFilterVisible}/>
      <HomeStoreList />
      <HomeConvenienceFilter 
        isConvenienceFilterVisible={isConvenienceFilterVisible} 
        handleConvenienceFilterVisible={handleConvenienceFilterVisible}
      />
      {/* <RegisterModal />*/}
    </StyledWrapper>
  );
};

export default PageHome;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 80px;

  .home-convenience-filter.false{
    display: none;
  }
  .home-convenience-filter.true {
    display: block;
  }
`;
