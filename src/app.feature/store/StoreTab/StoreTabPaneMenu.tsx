import React from 'react';
import styled from 'styled-components';

const StoreTabPaneMenu = () => {
  return (
    <StyledWrapper className="store-tab-pane-menu">
      <div className="store-tab-pane-menu__title">Menu</div>
      <div className="store-tab-pane-menu__menu">
        <div className="store-tab-pane-menu__category">
          <div>식사류</div>
          <img src={`/images/store/expand_${false ? 'more' : 'less'}.png`} />
        </div>
        <div className="store-tab-pane-menu__menu-wrap store-tab-pane-menu__menu-wrap--on">
          <div className="store-tab-pane-menu__item">국밥1</div>
          <div className="store-tab-pane-menu__item">국밥2</div>
          <div className="store-tab-pane-menu__item">국밥3</div>
        </div>
      </div>
      <div className="store-tab-pane-menu__menu">
        <div className="store-tab-pane-menu__category">
          <div>음료</div>
          <img src={`/images/store/expand_${true ? 'more' : 'less'}.png`} />
        </div>
        <div className="store-tab-pane-menu__menu-wrap store-tab-pane-menu__menu-wrap--off">
          <div className="store-tab-pane-menu__item">콜라</div>
          <div className="store-tab-pane-menu__item">사이다</div>
          <div className="store-tab-pane-menu__item">소주</div>
          <div className="store-tab-pane-menu__item">맥주</div>
        </div>
      </div>
      <div className="store-tab-pane-menu__menu">
        <div className="store-tab-pane-menu__category">
          <div>키즈메뉴</div>
          <img src={`/images/store/expand_${true ? 'more' : 'less'}.png`} />
        </div>
        <div className="store-tab-pane-menu__menu-wrap store-tab-pane-menu__menu-wrap--off">
          <div className="store-tab-pane-menu__item">어린이 돈까스</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default StoreTabPaneMenu;

const StyledWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px 20px;
  border-bottom: 0.5px solid var(--color-gray-100);

  .store-tab-pane-menu__title {
    letter-spacing: 0.29em;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .store-tab-pane-menu__menu {
    .store-tab-pane-menu__category {
      padding: 8px 0;
      border-bottom: 0.5px solid var(--color-gray-100);
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
      }
    }

    .store-tab-pane-menu__menu-wrap {
      padding: 8px;
      border-bottom: 0.5px solid var(--color-gray-100);
      
      &.store-tab-pane-menu__menu-wrap--off {
        display: none;
      }

      .store-tab-pane-menu__item {
        font-size: 12px;
      }
    }
  }
`;
