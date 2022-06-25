import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type TProps = {
  aboutScroll: number;
  menuScroll: number;
  reviewScroll: number;
};

const StoreTabBar: React.FC<TProps> = ({
  aboutScroll,
  menuScroll,
  reviewScroll,
}) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = (scroll) => {
    window.scrollTo(0, scroll - 44);
  };

  if (typeof window !== 'undefined')
    window.addEventListener('scroll', () => {
      let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위
      setScroll(scrollLocation);
    });

  return (
    <StyledWrapper className="store-tab-bar">
      <a
        className={`store-tab-bar__tab-item store-tab-bar__tab-item--${
          scroll < menuScroll - 44 ? 'on' : 'off'
        }`}
        href="#store-tab-about"
        // onClick={() => handleScroll(aboutScroll)}
      >
        <span>About</span>
      </a>
      <a
        className={`store-tab-bar__tab-item store-tab-bar__tab-item--${
          scroll >= menuScroll - 44 && scroll < reviewScroll - 44 ? 'on' : 'off'
        }`}
        href="#store-tab-menu"
      >
        <span>Menu</span>
      </a>
      <a
        className={`store-tab-bar__tab-item store-tab-bar__tab-item--${
          scroll >= reviewScroll - 44 ? 'on' : 'off'
        }`}
        href="#store-tab-review"
      >
        <span>Review</span>
      </a>
    </StyledWrapper>
  );
};

export default StoreTabBar;

const StyledWrapper = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  padding: 16px 20px 0;
  background-color: var(--color-white);
  z-index: 2;

  a{
    text-decoration: none;
    color: var(--color-black);
  }
  .store-tab-bar__tab-item {
    cursor: pointer;
    width: calc(100% / 3);
    text-align: center;
    padding: 0 0 4px;

    &.store-tab-bar__tab-item--on {
      span {
        border-bottom: 1px solid var(--color-black);
      }
    }

    span {
      padding: 0 4px;
    }
  }
`;
