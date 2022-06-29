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
  }
`;
