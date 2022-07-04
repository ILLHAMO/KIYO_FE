import React, { useRef } from 'react';
import styled from 'styled-components';
import StoreCard from 'app.components/StoreCard/StoreCard';
import useQueryStoreList from 'app.query/useQueryStoreList';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';

const HomeStoreList = () => {
  const lastStoreRef = useRef();

  const { data, isFetching, isSuccess, fetchNextPage, hasNextPage } =
    useQueryStoreList();

  useIntersectionObserver({
    root: null,
    target: lastStoreRef,
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  });

  let dataset = data?.pages
    ? data?.pages.reduce((acc: any, cur: any) => {
        acc.push(...cur.edges);
        return acc;
      }, [])
    : [];

  const SkeletonArray = Array.from(Array(20).keys());

  if (isFetching) dataset = [...dataset, ...SkeletonArray];

  return isSuccess && !dataset.length ? (
    <div>없을 때</div>
  ) : (
    <StyledWrapper className="home-store-list">
      {dataset.map((item, idx) => (
        <StoreCard storeInfo={item} key={`store-card-${idx}`} />
      ))}
      <div className="last-item-flag" ref={lastStoreRef} />
    </StyledWrapper>
  );
};

export default HomeStoreList;

const StyledWrapper = styled.div`
  padding: 0 20px;
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
