import React from 'react';
import styled from 'styled-components';
import { Accordion, Button, FormCheck } from 'react-bootstrap';

const MyPageSettingsList = () => {
  return (
    <StyledWrapper className='mypage-settings-list'>
      <div className="mypage-settings-list-item">
        <div className="mypage-settings-list-item__title">알림</div>
        <FormCheck type="switch" />
      </div>
      <div className="mypage-settings-list-item">
        <div className="mypage-settings-list-item__title">마케팅 알림</div>
        <FormCheck type="switch" />
      </div>
      <div className='mypage-settings-list-item'>
        <div className='mypage-settings-list-item__title'>도움말</div>
      </div>
      <div className='mypage-settings-list-item'>
        <div className='mypage-settings-list-item__title'>약관 및 정책</div>
      </div>
      <div className='mypage-settings-list-item'>
        <div className='mypage-settings-list-item__title'>접근권한 설정</div>
      </div>
      <div className='mypage-settings-list-item'>
        <div className='mypage-settings-list-item__title'>버전정보</div>
        <div className='mypage-settings-list-item__version'>v 1.0.1</div>
      </div>
      <div className='mypage-settings-list-item'>
        <div className='mypage-settings-list-item__title'>로그아웃</div>
      </div>
      <div className='mypage-settings-list-item'>
        <div className='mypage-settings-list-item__title'>회원탈퇴</div>
      </div>
    </StyledWrapper>
  );
};

export default MyPageSettingsList;

const StyledWrapper = styled.div`
  .mypage-settings-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 0 20px;
    border-bottom: 0.5px solid var(--color-gray-100);

    &:last-child {
      border-bottom: 0;
    }

    .mypage-settings-list-item__version {
      color: var(--color-gray-300);
    }
    
    input {
      width: 48px;
      height: 24px;

      &:checked {
        background-color: var(--color-main);
        border-color: var(--color-main);
      }
    }
  }
`;
