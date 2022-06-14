import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HomeHeader = () => {
  return (
    <StyledWrapper className="home-header">
      <img src="/images/home/logo.png" className="home-header__logo" />
      <div className="home-header__right">
        <div className="home_header__location">
          in
          <span>남양주시 다산동</span>
        </div>
        <Link href="/search">
          <img
            src="/images/home/search_gray.png"
            className="home_header__search"
          />
        </Link>
      </div>
    </StyledWrapper>
  );
};

export default HomeHeader;

const StyledWrapper = styled.div`
  padding: 0 20px 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;

  .home-header__logo {
    width: 64px;
    height: 30px;
  }

  .home-header__right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 11px;

    .home_header__location {
      font-size: 16px;
      margin-right: 16px;
      color: var(--color-gray-300);

      span {
        margin-left: 8px;
      }
    }

    .home_header__search {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }
`;
