import React from 'react';
import styled from 'styled-components';

const NavigationBar = () => {
  return (
    <StyledWrapper>
      <div className="menu-wrap true">
        <img src="images/common/home_gray.png" />
        <div className="title">메인홈</div>
      </div>
      <div className="menu-wrap">
        <img src="images/common/map_gray.png" />
        <div className="title">지도탐색</div>
      </div>
      <img src="images/common/add_green.png" className="add-button" />
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
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 16px;
  bottom: 0;
  max-width: 664px;
  width: 100%;
  height: 64px;
  border-top: 4px solid var(--color-gray-200);
  background-color: white;

  .add-button {
    width: 40px;
    cursor: pointer;
  }

  .menu-wrap {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 36px;
      height: 36px;
    }

    .title {
      font-size: 12px;
      color: var(--color-gray-200);
    }
  }
`;
