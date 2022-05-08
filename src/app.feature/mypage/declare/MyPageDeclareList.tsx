import React from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';

const MyPageDeclareList = () => {
  return (
    <StyledWrapper>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img src="/images/declare/declare.png" />
            <div className="title">v 1.0.2 업데이트 수정 관련 공지입니다.</div>
          </Accordion.Header>
          <Accordion.Body>
            업데이트된 버전의 수정사항은 아래와 같습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img src="/images/declare/declare.png" />
            <div className="title">
              v 1.0.1 업데이트 수정 관련 공지가 맞을까요 아닐까요?
            </div>
          </Accordion.Header>
          <Accordion.Body>
            업데이트된 버전의 수정사항은 아래와 같습니다.
          </Accordion.Body>
        </Accordion.Item>
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
    .title {
      margin-right: 8px;
    }

    background-color: var(--color-gray-100);

    &:focus {
      box-shadow: none;
    }

    &::after {
      width: 24px;
      height: 24px;
      background-size: 24px;
      background-image: url('/images/mypage/expand_less.png');
    }

    &:not(.collapsed) {
      background-color: var(--color-gray-100);
      color: var(--color-black);

      &::after {
        width: 24px;
        height: 24px;
        background-size: 24px;
        background-image: url('/images/mypage/expand_more.png');
      }
    }

    &.collapsed {
      background-color: var(--color-white);

      &::after {
        width: 24px;
        height: 24px;
        background-size: 24px;
        background-image: url('/images/mypage/expand_more.png');
      }

      .title {
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
      }
    }
  }
`;
