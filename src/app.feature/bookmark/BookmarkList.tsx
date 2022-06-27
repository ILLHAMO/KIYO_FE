import React from 'react';
import styled from 'styled-components';
import StoreCard from 'app.components/StoreCard/StoreCard';

const BookmarkList = () => {
  return (
    <StyledWrapper className="bookmark-list">
      <div className="bookmark-list__title">내가 저장한 장소</div>
      <div className="bookmark-list__list-container">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </StyledWrapper>
  );
};

export default BookmarkList;

const StyledWrapper = styled.div`
  padding: 20px;
  
  .bookmark-list__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: var(--color-black);
    margin-bottom: 12px;
  }

  .bookmark-list__list-container {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
