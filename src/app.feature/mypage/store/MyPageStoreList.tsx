import React from 'react';
import styled from 'styled-components';
import MyPageStoreCard from './MyPageStoreCard';

const MyPageStoreList = () => {
  return (
    <StyledWrapper className="mypage-store-list">
     <MyPageStoreCard />
     <MyPageStoreCard />
     <MyPageStoreCard />
    </StyledWrapper>
  );
};

export default MyPageStoreList;

const StyledWrapper = styled.div`
  padding: 20px;

  
`;
