import React from 'react';
import styled from 'styled-components';
import { Accordion, Button, FormCheck } from 'react-bootstrap';

const MyPageSettingsList = () => {
  return (
    <StyledWrapper>
      <div className="setting-list">
        <div className="title">알림</div>
        <FormCheck type="switch" />
      </div>
      <div className="setting-list">
        <div className="title">마케팅 알림</div>
        <FormCheck type="switch" />
      </div>
      <div className='setting-list'>
        <div className='title'>도움말</div>
      </div>
      <div className='setting-list'>
        <div className='title'>약관 및 정책</div>
      </div>
      <div className='setting-list'>
        <div className='title'>접근권한 설정</div>
      </div>
      <div className='setting-list'>
        <div className='title'>버전정보</div>
        <div className='version'>v 1.0.1</div>
      </div>
      <div className='setting-list'>
        <div className='title'>로그아웃</div>
      </div>
      <div className='setting-list'>
        <div className='title'>회원탈퇴</div>
      </div>
    </StyledWrapper>
  );
};

export default MyPageSettingsList;

const StyledWrapper = styled.div`
  .setting-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 0 20px;
    border-bottom: 0.5px solid var(--color-gray-100);

    &:last-child {
      border-bottom: 0;
    }

    .version {
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
