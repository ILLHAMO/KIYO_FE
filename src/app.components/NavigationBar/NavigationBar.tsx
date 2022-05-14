import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavigationBar = () => {
  const router = useRouter();
  const getActiveNumber = (pathname) => {
    if (router.pathname === '/') return 0;
    else if (router.pathname === '/map') return 1;
    else if (router.pathname === '/bookmark') return 3;
    else if (router.pathname === '/mypage') return 4;
    else return 5;
  };

  const [active, setActive] = useState(getActiveNumber(router.pathname));

  useEffect(() => {
    setActive(getActiveNumber(router.pathname));
  }, [router.pathname]);

  if (
    router.pathname !== '/' &&
    router.pathname !== '/map' &&
    router.pathname !== '/bookmark' &&
    router.pathname !== '/mypage'
  )
    return null;

  return (
    <StyledWrapper active={active}>
      <Link href="/">
        <div className={`menu-wrap ${router.pathname === '/'}`}>
          <img
            src={`images/common/home_${
              router.pathname === '/' ? 'green' : 'gray'
            }.png`}
          />
          <div className="title">메인홈</div>
        </div>
      </Link>
      <Link href="/map">
        <div className={`menu-wrap ${router.pathname === '/map'}`}>
          <img
            src={`images/common/map_${
              router.pathname === '/map' ? 'green' : 'gray'
            }.png`}
          />
          <div className="title">지도탐색</div>
        </div>
      </Link>
      <div className="menu-wrap">
        <img src="images/common/add_green.png" className="add-button" />
      </div>
      <div className={`menu-wrap ${router.pathname === '/bookmark'}`}>
        <img src="images/common/bookmark_gray.png" />
        <div className="title">북마크</div>
      </div>
      <Link href="/mypage">
        <div className={`menu-wrap ${router.pathname === '/mypage'}`}>
          <img
            src={`images/common/mypage_${
              router.pathname === '/mypage' ? 'green' : 'gray'
            }.png`}
          />
          <div className="title">내 정보</div>
        </div>
      </Link>
    </StyledWrapper>
  );
};

export default NavigationBar;

const StyledWrapper = styled.div`
  ${({ active }: any) => css`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    max-width: 664px;
    width: 100%;
    height: 64px;
    border-top: 4px solid var(--color-gray-200);
    background-color: white;
    transition: all 200ms;

    &::after {
      transition: all 200ms;
      content: '';
      position: absolute;
      top: -4px;
      left: calc(20% * ${active});
      background-color: var(--color-main);
      height: 4px;
      width: 20%;
    }

    .menu-wrap {
      width: 20%;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.true {
        .title {
          color: var(--color-main);
        }
      }

      img {
        width: 36px;
        height: 36px;
      }

      .add-button {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }

      .title {
        font-size: 12px;
        color: var(--color-gray-200);
      }
    }
  `}
`;
