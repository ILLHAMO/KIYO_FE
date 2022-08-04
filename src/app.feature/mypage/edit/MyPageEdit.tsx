import React from 'react';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import API from 'app.modules/api';
import { API_USER_PROFILE } from 'app.modules/api/keyFactory';

const MyPageEdit = ({ userInfo }) => {
  const methods = useForm();
  const { register, handleSubmit } = methods;

  const onValidRegisterForm = async (data) => {
    try {
      // const response = await API.PUT({
      //   url: API_USER_PROFILE,
      //   data: {
      //     meta_data: { nickname: data.nickname },
      //     profileImage: userInfo?.userProfileImagePath,
      //   },
      // });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = handleSubmit(onValidRegisterForm);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <StyledWrapper className="mypage-edit">
          <div className="mypage-edit__profile">
            <div className="mypage-edit__profile-img"></div>
            <div className="mypage-edit__profile-edit">
              <img src="/images/mypage/edit_black.png" />
            </div>
          </div>
          <div className="mypage-edit__info">
            <div className="mypage-edit__input-label">닉네임</div>
            <input {...register('nickname')} />
          </div>
          <button className="mypage-edit__edit-button" type="submit">
            수정하기
          </button>
        </StyledWrapper>
      </form>
    </FormProvider>
  );
};

export default MyPageEdit;

const StyledWrapper = styled.div`
  padding-top: 30px;

  .mypage-edit__profile {
    margin: 0 auto;
    position: relative;
    width: 100px;
    margin-bottom: 40px;

    .mypage-edit__profile-img {
      width: 100px;
      height: 100px;
      background: #ffe9ef;
      border-radius: 50%;
    }

    .mypage-edit__profile-edit {
      cursor: pointer;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 24px;
      height: 24px;
      background: #ffffff;
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

  .mypage-edit__info {
    padding: 0 20px;

    .mypage-edit__input-label {
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

  .mypage-edit__edit-button {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    max-width: 664px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-main);
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
  }
`;
