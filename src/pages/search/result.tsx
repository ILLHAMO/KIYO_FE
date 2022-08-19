import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Offcanvas } from 'react-bootstrap';
import { useRouter } from 'next/router';
import SearchHeader from 'app.feature/search/SearchHeader';
import SearchFilter from 'app.feature/search/SearchFilter/SearchFilter';
import SearchFilterOtherModal from 'app.feature/search/SearchFilter/SearchFilterOtherModal';
import SearchFilterLocalModal from 'app.feature/search/SearchFilter/SearchFilterLocalModal';
import useQuerySearchStore from 'app.query/useQuerySearchStore';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';
import SearchStoreList from 'app.feature/search/SearchStoreList';

const PageSearchResult = () => {
  const lastStoreRef = useRef();
  const router = useRouter();
  const { keyword } = router.query;

  const [isOtherFilterVisible, setIsOtherFilterVisible] = useState(false);
  const [isLocalFilterVisible, setIsLocalFilterVisible] = useState(false);

  const handleOtherFilterVisibleShow = () => {
    setIsOtherFilterVisible(!isOtherFilterVisible);
  };
  const handleLocalFilterVisibleShow = () => {
    setIsLocalFilterVisible(!isLocalFilterVisible);
  };

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

  return (
    <StyledWrapper>
      <SearchHeader />
      <SearchFilter
        otherFilterOnClick={handleOtherFilterVisibleShow}
        localFilterOnClick={handleLocalFilterVisibleShow}
      />
      <SearchStoreList
        isSuccess={isSuccess}
        dataset={dataset}
        lastStoreRef={lastStoreRef}
      />
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
