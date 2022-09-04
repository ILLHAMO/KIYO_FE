import React from 'react';
import styled from 'styled-components';
import { Skeleton } from 'antd';
import StoreCard from 'app.components/StoreCard/StoreCard';
import { TypeStoreInfo } from 'app.modules/type/type';

type TProps = {
  bookmarkList: Array<number | TypeStoreInfo>;
};

const BookmarkList: React.FC<TProps> = ({ bookmarkList }) => {
  return (
    <StyledWrapper className="bookmark-list">
      <div className="bookmark-list__title">내가 저장한 장소</div>
      <div className="bookmark-list__list-container">
        {bookmarkList.map((item, idx) =>
          typeof item === 'number' ? (
            <Skeleton key={`bookmark-list-skeleton-${idx}`} />
          ) : (
            <StoreCard storeInfo={item} key={`bookmark-list-${idx}`} />
          )
        )}
      </div>
    </StyledWrapper>
  );
};

export default BookmarkList;

const StyledWrapper = styled.div`
  padding: 20px 0 84px;

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
