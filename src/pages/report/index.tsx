import React from 'react';
import styled from 'styled-components';
import Header from 'app.components/Header/Header';
import ReportCreate from 'app.feature/report/ReportCreate';

const PageReport = () => {
  return (
    <StyledWrapper>
      <Header title='리뷰 신고하기' />
      <ReportCreate />
    </StyledWrapper>
  );
};

export default PageReport;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
