import React, { useRef } from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import useQueryDeclareList from 'app.query/useQueryDeclareList';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';
import PageLoading from 'app.components/Loading/PageLoading';
import NoneList from 'app.components/NoneList/NoneList';

const MyPageDeclareList = () => {
  const lastDeclareRef = useRef();

  const { data, isFetching, status, fetchNextPage, hasNextPage } =
    useQueryDeclareList();

  const isSuccess = status === 'success';

  useIntersectionObserver({
    root: null,
    target: lastDeclareRef,
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

  if (isFetching) return <PageLoading />;
  return isSuccess && !dataset.length ? (
    <StyledWrapper>
      <NoneList title="공지사항이 없습니다." />
    </StyledWrapper>
  ) : (
    <StyledWrapper className="mypage-declare-list">
      <Accordion alwaysOpen>
        {dataset.map((item) => (
          <Accordion.Item eventKey={item.noticeId}>
            <Accordion.Header>
              <img src="/images/declare/declare.png" />
              <div className="mypage-declare-list__declare-title">
                {item.title}
              </div>
            </Accordion.Header>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        ))}
        <div className="last-item-flag" ref={lastDeclareRef} />
      </Accordion>
    </StyledWrapper>
  );
};

export default MyPageDeclareList;

const StyledWrapper = styled.div`
  .accordion-button {
    img {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }
  }

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
