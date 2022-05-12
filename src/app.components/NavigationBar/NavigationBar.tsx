import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const router = useRouter();

  return (
    <StyledWrapper active={0}>
      <div className={`menu-wrap ${router.pathname === '/'}`}>
        <img
          src={`images/common/home_${
            router.pathname === '/' ? 'green' : 'gray'
          }.png`}
        />
        <div className="title">메인홈</div>
      </div>
      <div className="menu-wrap">
        <img src="images/common/map_gray.png" />
        <div className="title">지도탐색</div>
      </div>
      <div className="menu-wrap">
        <img src="images/common/add_green.png" className="add-button" />
      </div>
      <div className="menu-wrap">
        <img src="images/common/bookmark_gray.png" />
        <div className="title">북마크</div>
      </div>
      <div className="menu-wrap">
        <img src="images/common/mypage_gray.png" />
        <div className="title">내 정보</div>
      </div>
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
    
    &::after {
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
