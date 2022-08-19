import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import SearchHeader from 'app.feature/search/SearchHeader';
import SearchRecent from 'app.feature/search/SearchRecent';
import SearchRecommend from 'app.feature/search/SearchRecommend';
import SearchSearching from 'app.feature/search/SearchSearching';
import useQuerySearchStore from 'app.query/useQuerySearchStore';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';

const PageSearch = () => {
  const lastStoreRef = useRef();

  const [keyword, setKeyword] = useState(null);

  const queryData = useQuerySearchStore(keyword);

  const { data, isFetching, status, fetchNextPage, hasNextPage } = queryData;

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
  // const { data, isFetching, status, fetchNextPage, hasNextPage } = queryData;

  return (
    <StyledWrapper>
      <SearchHeader keyword={keyword} setKeyword={setKeyword} />
      <SearchRecent />
      <SearchRecommend />
      {/* <SearchSearching lastStoreRef={lastStoreRef} dataset={dataset} /> */}
    </StyledWrapper>
  );
};

export default PageSearch;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
