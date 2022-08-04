import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Offcanvas } from 'react-bootstrap';
import RegisterModal from 'app.feature/register/RegisterModal';

const NavigationBar = () => {
  const router = useRouter();
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);

  const handleRegisterModalVisible = () => {
    setIsRegisterModalVisible(!isRegisterModalVisible);
  };

  const getActiveNumber = (pathname) => {
    if (router.pathname === '/') return 0;
    else if (router.pathname === '/map') return 1;
    else if (router.pathname === '/bookmark') return 2;
    else if (router.pathname === '/mypage') return 3;
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
    <StyledWrapper active={active} className="navigation-bar">
      <Link href="/">
        <div className={`navigation-bar__menu-wrap ${router.pathname === '/'}`}>
          <img
            className="navigation-bar__menu-icon"
            src={`images/common/home_${
              router.pathname === '/' ? 'green' : 'gray'
            }.png`}
          />
          <div className="navigation-bar__menu-title">메인홈</div>
        </div>
      </Link>
      <Link href="/map">
        <div
          className={`navigation-bar__menu-wrap ${router.pathname === '/map'}`}
        >
          <img
            className="navigation-bar__menu-icon"
            src={`images/common/map_${
              router.pathname === '/map' ? 'green' : 'gray'
            }.png`}
          />
          <div className="navigation-bar__menu-title">지도탐색</div>
        </div>
      </Link>
      <Link href="/bookmark">
        <div
          className={`navigation-bar__menu-wrap ${
            router.pathname === '/bookmark'
          }`}
        >
          <img
            className="navigation-bar__menu-icon"
            src={`images/common/bookmark_${
              router.pathname === '/bookmark' ? 'green' : 'gray'
            }.png`}
          />
          <div className="navigation-bar__menu-title">북마크</div>
        </div>
      </Link>
      <Link href="/mypage">
        <div
          className={`navigation-bar__menu-wrap ${
            router.pathname === '/mypage'
          }`}
        >
          <img
            className="navigation-bar__menu-icon"
            src={`images/common/mypage_${
              router.pathname === '/mypage' ? 'green' : 'gray'
            }.png`}
          />
          <div className="navigation-bar__menu-title">내 정보</div>
        </div>
      </Link>
      <div className="navigation-bar__menu-wrap">
        <img
          onClick={handleRegisterModalVisible}
          src="images/common/plus_green.png"
          className={`navigation-bar__add-button navigation-bar__add-button--${
            isRegisterModalVisible ? 'open' : 'close'
          }`}
        />
      </div>
      <StyledOffcanvas
        backdropClassName="navigation-bar__offcanvas-backdrop"
        show={isRegisterModalVisible}
        onHide={handleRegisterModalVisible}
        placement="bottom"
      >
        <RegisterModal />
      </StyledOffcanvas>
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
    z-index: 1500;

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

    .navigation-bar__menu-wrap {
      position: relative;
      width: 20%;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.true {
        .navigation-bar__menu-title {
          color: var(--color-main);
        }
      }

      .navigation-bar__menu-icon {
        top: -23px;
        position: absolute;
        width: 36px;
        height: 36px;
      }

      .navigation-bar__add-button {
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: transform ease 300ms;

        &.navigation-bar__add-button--open {
          transform: rotate(45deg);
        }
      }

      .navigation-bar__menu-title {
        position: absolute;
        bottom: -25px;

        font-size: 12px;
        color: var(--color-gray-200);
      }
    }
  `}
`;

const StyledOffcanvas = styled(Offcanvas)`
  &.offcanvas-bottom {
    height: auto;
    position: fixed;
    bottom: 64px;
  }

  .navigation-bar__offcanvas-backdrop {
    background-color: red !important;
    height: calc(100vh - 64px) !important;
  }
`;
