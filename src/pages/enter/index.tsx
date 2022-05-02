import React from 'react';
import styled from 'styled-components';
import EnterLoginForm from 'app.feature/enter/EnterLoginForm';

const PageEnter = () => {
  return (
    <StyledWrapper>
      <img src="/images/enter/logo.png" alt="logo" className="logo-img" />
      <EnterLoginForm />
    </StyledWrapper>
  );
};

export default PageEnter;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-black);

  .logo-img {
    width: 126px;
    margin-bottom: 112px;
  }
`;
