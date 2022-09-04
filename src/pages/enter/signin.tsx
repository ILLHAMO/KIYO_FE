import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import API from 'app.modules/api';
import EnterSigninNickname from 'app.feature/enter/EnterSigninNickname';
import { API_USER_NICKNAME } from 'app.modules/api/keyFactory';

const PageEnterSignin = () => {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const requestPutNickname = async (data) => {
    try {
      const response = await API.PUT({
        url: API_USER_NICKNAME,
        data: {
          nickname: data.nickname,
        },
      });

      location.href = '/';
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = handleSubmit(requestPutNickname);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <StyledWrapper>
          <EnterSigninNickname />
          <div className="signin-button">
            <button type="submit">가입완료하기</button>
          </div>
        </StyledWrapper>
      </form>
    </FormProvider>
  );
};

export default PageEnterSignin;

const StyledWrapper = styled.div`
  padding: 40px 20px;
  height: 100vh;
  position: relative;
  min-height: 500px;

  .signin-button {
    position: absolute;
    bottom: 40px;
    left: 0;
    padding: 0 20px;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      cursor: pointer;
      background-color: var(--color-main);
      font-size: 18px;
      color: var(--color-white);
      border-radius: 25px;
      height: 100%;
      width: 248px;
    }
  }
`;
