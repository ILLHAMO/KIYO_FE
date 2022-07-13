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
  const [isOtherFilterVisible, setIsOtherFilterVisible] = useState(false);
  const [isLocalFilterVisible, setIsLocalFilterVisible] = useState(false);

  const handleOtherFilterVisibleShow = () => {
    setIsOtherFilterVisible(!isOtherFilterVisible);
  };
  const handleLocalFilterVisibleShow = () => {
    setIsLocalFilterVisible(!isLocalFilterVisible);
  };

  return (
    <StyledWrapper>
      <SearchHeader />
      <SearchFilter
        otherFilterOnClick={handleOtherFilterVisibleShow}
        localFilterOnClick={handleLocalFilterVisibleShow}
      />
      <HomeStoreList />
      <StyledOtherOffcanvas
        className="other-modal"
        show={isOtherFilterVisible}
        onHide={handleOtherFilterVisibleShow}
        placement="bottom"
      >
        <SearchFilterOtherModal
          handleOtherFilterVisibleShow={handleOtherFilterVisibleShow}
        />
      </StyledOtherOffcanvas>
      <StyledLocalOffcanvas
        className="local-modal"
        show={isLocalFilterVisible}
        onHide={handleLocalFilterVisibleShow}
        placement="bottom"
      >
        <SearchFilterLocalModal
          handleLocalFilterVisibleShow={handleLocalFilterVisibleShow}
        />
      </StyledLocalOffcanvas>
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

const StyledOtherOffcanvas = styled(Offcanvas)`
  &.offcanvas-bottom {
    height: 70%;
  }
`;

const StyledLocalOffcanvas = styled(Offcanvas)`
  &.offcanvas-bottom {
    height: 50%;
  }
`;
