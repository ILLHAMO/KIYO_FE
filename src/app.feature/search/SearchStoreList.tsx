import React, { useRef } from 'react';
import styled from 'styled-components';
import StoreCard from 'app.components/StoreCard/StoreCard';
import useQuerySearchStore from 'app.query/useQuerySearchStore';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';

type TProps = {
  keyword: string[] | string;
  filter: {
    categoryIds: number[];
    convenienceIds: number[];
  };
};

const SearchStoreList: React.FC<TProps> = ({ keyword, filter }) => {
  const lastStoreRef = useRef();
  const { data, isFetching, status, fetchNextPage, hasNextPage } =
    useQuerySearchStore(keyword, filter);

  const isSuccess = status === 'success';

  useIntersectionObserver({
    root: null,
    target: lastStoreRef,
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  });

  let dataset = data?.pages
    ? data?.pages.reduce((acc: any, cur: any) => {
        if (cur?.edges) {
          acc.push(...cur?.edges);
        }
        return acc;
      }, [])
    : [];

  const SkeletonArray = Array.from(Array(20).keys());

  if (isFetching) dataset = [...dataset, ...SkeletonArray];

  if (isSuccess && isFetching) {
    dataset = [...dataset, ...SkeletonArray];
  }

  return isSuccess && !dataset.length ? (
    <StyledWrapper>없을 때</StyledWrapper>
  ) : (
    <StyledWrapper className="home-store-list">
      {dataset.map((item, idx) => (
        <StoreCard
          storeInfo={{
            ...item,
            images: [{ path: item?.storeImage?.imagePath }],
          }}
          key={`store-card-${idx}`}
        />
      ))}
      <div className="last-item-flag" ref={lastStoreRef} />
    </StyledWrapper>
  );
};

export default SearchStoreList;

const StyledWrapper = styled.div`
  padding: 0 20px 20px;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
  position: relative;

  .last-item-flag {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 100px;
    // visibility: hidden;
    background: #000;
  }
`;
