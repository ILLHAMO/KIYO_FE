import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { TypeUserInfo } from 'app.modules/type/type';
import Image from 'app.components/Image/Image';

type TProps = {
  userInfo: TypeUserInfo;
};

const MypageInfo: React.FC<TProps> = ({ userInfo }) => {
  return (
    <StyledWrapper className="mypage-info">
      <div className="mypage-info__profile">
        <div className="mypage-info__profile-img">
          <Image src={userInfo.userProfileImagePath} width={100} height={100} />
        </div>
        <div className="mypage-info__profile-name">
          <span>{userInfo.nickname}</span>님
        </div>
      </div>
      <Link href="/mypage/edit">
        <div className="mypage-info__edit-btn">
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

  .mypage-info__profile {
    display: flex;
    align-items: center;
    justify-content: center;

    .mypage-info__profile-img {
      position: relative;
      width: 100px;
      height: 100px;
      min-width: 100px;
      min-height: 100px;
      max-width: 100px;
      max-height: 100px;
      margin-right: 16px;
      background: #ffe9ef;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .mypage-info__profile-name {
      font-size: 12px;

      span {
        margin-right: 4px;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  .mypage-info__edit-btn {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    cursor: pointer;
  }
`;
