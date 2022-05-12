import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

type TProps = {
  title: React.ReactNode;
};

const Header: React.FC<TProps> = ({ title }) => {
  const router = useRouter();

  return (
    <StyledWrapper>
      <img
        src="/images/mypage/back_button_black.png"
        onClick={() => router.back()}
      />
      {title}
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`;
