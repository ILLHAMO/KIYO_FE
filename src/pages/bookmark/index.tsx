import React, { useRef } from 'react';
import styled from 'styled-components';
import BookmarkList from 'app.feature/bookmark/BookmarkList';
import BookmarkNone from 'app.feature/bookmark/BookmarkNone';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import useQueryBookmarkList from 'app.query/useQueryBookmarkList';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';
import NotLogin from 'app.components/NotLogin/NotLogin';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import PageLoading from 'app.components/Loading/PageLoading';

const PageBookmark = () => {
  const { isLoading, login } = useGetUser();

  if (isLoading) return <PageLoading />;
  if (!login) return <NotLogin />;
  return <Bookmark />;
};

const Bookmark = () => {
  const lastStoreRef = useRef();

  const { data, isFetching, status, fetchNextPage, hasNextPage } =
    useQueryBookmarkList();

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
    <StyledWrapper>
      <BookmarkNone />
    </StyledWrapper>
  ) : (
    <StyledWrapper>
      <BookmarkList bookmarkList={dataset} />
      <NavigationBar />
      <div className="last-item-flag" ref={lastStoreRef} />
    </StyledWrapper>
  );
};

export default PageBookmark;

const StyledWrapper = styled.div`
  height: 100vh;
  padding: 0 20px 64px;
  position: relative;

  .last-item-flag {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 100px;
    background: #000;
  }
`;
