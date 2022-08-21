import React, { useRef } from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import useQueryInquiryList from 'app.query/useQueryInquiryList';
import PageLoading from 'app.components/Loading/PageLoading';
import NoneList from 'app.components/NoneList/NoneList';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';

const MyPageInquiryMyList = () => {
  const lastInquiryRef = useRef();

  const { data, isFetching, status, fetchNextPage, hasNextPage } =
    useQueryInquiryList();

  const isSuccess = status === 'success';

  useIntersectionObserver({
    root: null,
    target: lastInquiryRef,
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
    <StyledWrapper className="mypage-inquiry-mylist">
      <Accordion alwaysOpen>
        {dataset?.map((item) => (
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="title">{item.content}</div>
            </Accordion.Header>
            <Accordion.Body>
              {item?.answer ?? '아직 대답이 등록되지 않았습니다.'}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <div className="last-item-flag" ref={lastInquiryRef} />
    </StyledWrapper>
  );
};

export default MyPageInquiryMyList;

const StyledWrapper = styled.div`
  .accordion-button {
    .title {
      margin-right: 8px;
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
