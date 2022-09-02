import React, { useState } from 'react';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import API from 'app.modules/api';
import { API_USER_PROFILE } from 'app.modules/api/keyFactory';
import { Avatar, message, Upload, UploadProps } from 'antd';
import { RcFile } from 'antd/lib/upload/interface';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { useRouter } from 'next/router';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const MyPageEdit = ({ userInfo }) => {
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState<string>();
  const { setUserInfo } = useStoreIntoAPP();
  const { userProfileImagePath, nickname } = userInfo;

  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      nickname: nickname,
    },
  });

  const { register, handleSubmit } = methods;

  const onValidRegisterForm = async (data) => {
    try {
      const formData = new FormData();

      for (let i = 0; i < fileList.length; i++)
        formData.append('profileImage', fileList[i].originFileObj);

      formData.append(
        'meta_data',
        new Blob([JSON.stringify(data)], { type: 'application/json' })
      );

      const response = await API.PUT({
        url: API_USER_PROFILE,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        setUserInfo({
          info: {
            nickname: response.data.nickname,
            userProfileImagePath: response.data.profileImageUrl,
          },
        });
        router.back();
        message.success('내 정보 수정을 성공했습니다!');
      } else {
        message.error('정보 수정에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    getBase64(newFileList[0].originFileObj as RcFile, (url) => {
      setImageUrl(url);
    });
  };

  const onSubmit = handleSubmit(onValidRegisterForm);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <StyledWrapper className="mypage-edit">
          <div className="mypage-edit__profile">
            <Upload
              listType="picture-card"
              onChange={handleChange}
              maxCount={1}
              showUploadList={false}
            >
              <Avatar
                className="mypage-edit__profile-img"
                src={imageUrl ?? userProfileImagePath}
              />
              <div className="mypage-edit__profile-edit">
                <img src="/images/mypage/edit_black.png" />
              </div>
            </Upload>
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

    .ant-upload {
      background: none;
      margin: 0;
      border: none;
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
