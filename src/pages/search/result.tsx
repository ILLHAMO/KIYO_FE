import React, { useState } from 'react';
import styled from 'styled-components';
import SearchHeader from 'app.feature/search/SearchHeader';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import HomeStoreList from 'app.feature/home/HomeStoreList';
import SearchFilter from 'app.feature/search/SearchFilter/SearchFilter';
import SearchFilterOtherModal from 'app.feature/search/SearchFilter/SearchFilterOtherModal';
import SearchFilterLocalModal from 'app.feature/search/SearchFilter/SearchFilterLocalModal';
import { Modal, Offcanvas } from 'react-bootstrap';

const PageSearchResult = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterVisibleShow = () => {
    setIsFilterVisible(true);
  };

  const handleFilterVisibleClose = () => {
    setIsFilterVisible(false);
  };

  return (
    <StyledWrapper>
      <SearchHeader />
			<SearchFilter onClick={handleFilterVisibleShow}/>
			<HomeStoreList />
      <Offcanvas
        show={isFilterVisible}
        onHide={handleFilterVisibleClose}
        placement="bottom"
      >
        <SearchFilterOtherModal  
          isFilterVisible={isFilterVisible} 
          handleFilterVisible={handleFilterVisibleClose}
        />
      </Offcanvas>
      {/* <SearchFilterLocalModal /> */}
    </StyledWrapper>
  );
};

export default PageSearchResult;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

`;
