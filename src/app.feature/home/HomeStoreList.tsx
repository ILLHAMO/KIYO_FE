import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import StoreCard from 'app.components/StoreCard/StoreCard';
import useQueryStoreList from 'app.query/useQueryStoreList';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';
import API from 'app.modules/api';
import { API_STORES } from 'app.modules/api/keyFactory';
import { QueryClient, useQueryClient } from 'react-query';

const HomeStoreList = ({ filter }) => {
  const lastStoreRef = useRef();

  console.log(filter);

  const { data, isFetching, status, fetchNextPage, hasNextPage } =
    useQueryStoreList(filter);

  const queryClient = useQueryClient();

  const isSuccess = status === 'success';

  const requestData = async () => {
    const dataset = await API.GET({
      url: API_STORES,
      data: {
        size: 6,
        categoryIds: [1, 2],
        convenienceIds: [1, 2],
      },
    });

    console.log(dataset);
  };

  useEffect(() => {
    requestData();
    // queryClient.resetQueries(API_STORES);
  }, [filter]);

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
