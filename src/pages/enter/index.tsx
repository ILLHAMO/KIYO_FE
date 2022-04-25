import EnterLogo from 'app.feature/enter/EnterLogo';
import React from 'react';
import styled from 'styled-components';

const PageEnter = () => {
  return (
    <StyledWrapper>
      <EnterLogo />
    </StyledWrapper>
  );
};

export default PageEnter;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-black);
`;
