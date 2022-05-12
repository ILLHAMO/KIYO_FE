import React from 'react';
import styled from 'styled-components';

const MyPageEdit = () => {
  return (
    <StyledWrapper>
      <div className="profile-img-wrap">
        <div className="profile-img"></div>
        <div className='profile-edit'>
          <img src="/images/mypage/edit_black.png" />
        </div>
      </div>
      <div className="info-wrap">
        <div className="title">닉네임</div>
        <input />
      </div>
      <div className='edit-button'>수정하기</div>
    </StyledWrapper>
  );
};

export default MyPageEdit;

const StyledWrapper = styled.div`
  padding-top: 30px;

  .profile-img-wrap {
    margin: 0 auto;
    position: relative;
    width: 100px;
    margin-bottom: 40px;
    .profile-img {
      width: 100px;
      height: 100px;
      background: #ffe9ef;
      border-radius: 50%;
    }
    
    .profile-edit {
      cursor: pointer;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 24px;
      height: 24px;
      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
  
  .info-wrap {
    padding: 0 20px;
    
    .title {
      padding: 0 8px;
      margin-bottom: 4px;
      line-height: 23px;
    }
    
    input {
      padding: 0 8px;
      height: 40px;
      width: 100%;
      border-bottom: 0.5px solid var(--color-gray-300);
    }
  }
  
  .edit-button {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-main);
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
  }
`;
