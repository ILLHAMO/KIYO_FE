import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const MypageInfo = () => {
  return (
    <StyledWrapper>
      <div className="user-profile">
        <div className="profile-img"></div>
        <div className="name">
          <span>홍길동</span>님
        </div>
      </div>
      <Link href="/mypage/edit">
        <div className="edit-button">
          <img src="/images/mypage/edit_black.png" />
        </div>
      </Link>
    </StyledWrapper>
  );
};

export default MypageInfo;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  //margin-bottom: 40px;

  .user-profile {
    display: flex;
    align-items: center;
    justify-content: center;

    .profile-img {
      width: 100px;
      height: 100px;
      min-width: 100px;
      min-height: 100px;
      margin-right: 16px;
      background: #ffe9ef;
      border-radius: 50%;
    }

    .name {
      font-size: 12px;

      span {
        margin-right: 4px;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  .edit-button {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
