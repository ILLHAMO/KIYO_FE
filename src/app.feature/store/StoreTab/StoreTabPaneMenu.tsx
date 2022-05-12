import React from 'react';
import styled from 'styled-components';

const StoreTabPaneMenu = () => {
  return (
    <StyledWrapper>
      <div className="menu-title">Menu</div>
      <div className="menu-wrap">
        <div className="menu-category">
          <div>식사류</div>
          <img src={`/images/store/expand_${true ? 'more' : 'less'}.png`} />
        </div>
        <div className="menu-item-wrap true">
          <div className="menu-item">국밥1</div>
          <div className="menu-item">국밥2</div>
          <div className="menu-item">국밥3</div>
        </div>
      </div>
      <div className="menu-wrap">
        <div className="menu-category">
          <div>음료</div>
          <img src={`/images/store/expand_${false ? 'more' : 'less'}.png`} />
        </div>
        <div className="menu-item-wrap false">
          <div className="menu-item">콜라</div>
          <div className="menu-item">사이다</div>
          <div className="menu-item">소주</div>
          <div className="menu-item">맥주</div>
        </div>
      </div>
      <div className="menu-wrap">
        <div className="menu-category">
          <div>키즈메뉴</div>
          <img src={`/images/store/expand_${true ? 'more' : 'less'}.png`} />
        </div>
        <div className="menu-item-wrap true">
          <div className="menu-item">어린이 돈까스</div>
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

  .menu-title {
    letter-spacing: 0.29em;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .menu-wrap {
    .menu-category {
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

    .menu-item-wrap {
      padding: 8px;
      border-bottom: 0.5px solid var(--color-gray-100);
      
      &.false {
        display: none;
      }

      .menu-item {
        font-size: 12px;
      }
    }
  }
`;
