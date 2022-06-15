import React from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';

const MyPageInquiryMyList = () => {
  return (
    <StyledWrapper className='mypage-inquiry-mylist'>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="title">
              Q.
              어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
            </div>
          </Accordion.Header>
          <Accordion.Body>
            A.
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="title">
              Q.
              어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
            </div>
          </Accordion.Header>
          <Accordion.Body>
            A.
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </StyledWrapper>
  );
};

export default MyPageInquiryMyList;

const StyledWrapper = styled.div`
  .accordion-button {
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
