import React from 'react';
import styled from 'styled-components';
import RegisterForm from 'app.feature/register/RegisterForm';
import Header from 'app.components/Header/Header';

const PageRegister = () => {
  return (
    <StyledWrapper>
			<Header title="장소 등록하기" />
      <RegisterForm />
    </StyledWrapper>
  );
};

export default PageRegister;

const StyledWrapper = styled.div`

`;
