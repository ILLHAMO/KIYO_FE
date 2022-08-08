import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';
import { message, Upload, UploadProps } from 'antd';
import API from 'app.modules/api';
import FilterConvenience from 'app.components/Filter/FilterConvenience';
import FilterCategory from 'app.components/Filter/FilterCategory';
import { API_STORE } from 'app.modules/api/keyFactory';

const RegisterForm = () => {
  const [fileList, setFileList] = useState([]);

  const router = useRouter();

  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const onValidRegisterForm = async (data) => {
    try {
      data.name = data.name.trim();
      data.address = data.address.trim();

      if (!data.name || !data.address || !data.kids)
        message.error('기본 정보를 입력해주세요!');

      const formData = new FormData();

      for (let i = 0; i < fileList.length; i++)
        formData.append('multipartFiles', fileList[i].originFileObj);

      formData.append(
        'meta_data',
        new Blob([JSON.stringify(data)], { type: 'application/json' })
      );

      const response = await API.POST({
        url: API_STORE,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response?.data?.success) {
        message.success('식당 등록을 성공했습니다.');
        router.push('/');
      } else throw response;
    } catch (err) {
      message.error('식당 등록에 실패했습니다. 잠시 후 다시 시도해주세요!');
      console.log(err);
    }
  };

  const onInvalidRegisterForm = (errors) => {
    Object.keys(errors).map((item) => {
      message.error(errors[item].message);
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidRegisterForm, onInvalidRegisterForm)}>
        <StyledWrapper className="register-form">
          <div className="register-form__body">
            <div className="register-form__big-title">기본 정보</div>
            <div className="register-form__input">
              <div className="register-form__small-title">식당 이름 :</div>
              <input
                {...register('name', {
                  // required: '식당 이름은 필수입니다!',
                  maxLength: {
                    value: 20,
                    message: '식당 이름은 20자 이내로 작성해주세요!',
                  },
                })}
                type="text"
              />
            </div>
            <div className="register-form__input">
              <div className="register-form__small-title">주소 :</div>
              <input
                {...register('address', {
                  // required: '주소는 필수입니다!',
                })}
                type="text"
              />
            </div>
            <div className="register-form__input">
              <div className="register-form__small-title">운영 방식 :</div>
              <div className="register-form__radio">
                <input {...register('kids')} type="radio" value="true" />
                <div className="register-form__radio-title">키즈존</div>
                <input {...register('kids')} type="radio" value="false" />
                <div className="register-form__radio-title">일반식당</div>
              </div>
            </div>
            <div className="register-form__big-title">추가 정보</div>
            <div className="register-form__input">
              <div className="register-form__small-title">전화번호 :</div>
              <input type="text" {...register('call')} />
            </div>
            <div className="review-photo-wrap">
              <div className="title">사진 추가하기</div>
              {/* <ImgCrop rotate> */}
              <Upload
                // {...register('image')}
                listType="picture-card"
                fileList={fileList}
                // onPreview={handlePreview}
                onChange={handleChange}
                className="review-photo-slide"
              >
                <div>
                  +<br />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
              {/* </ImgCrop> */}
              <div className="review-warn">
                <li>가게 내/외부,음식,메뉴판 등 사진을 추가해주세요.</li>
                <li>사진은 10개까지 등록하실 수 있습니다.</li>
              </div>
            </div>
            <div className="register-form__filter">
              <div className="register-form__filter-title">장소 종류 선택</div>
              <FilterCategory />
            </div>
            <div className="register-form__filter">
              <div className="register-form__filter-title">편의 사항 선택</div>
              <FilterConvenience />
            </div>
            <div className="register-form__notice">
              · 검토 후 장소 등록이 완료됩니다.
            </div>
          </div>
          <button type="submit" className="register-form__button">
            장소 등록하기
          </button>
        </StyledWrapper>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;

const StyledWrapper = styled.div`
  .register-form__body {
    padding-bottom: 72px;

    .register-form__big-title {
      padding: 0 20px 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      font-size: 24px;
      border-bottom: 0.5px solid var(--color-gray-100);
    }

    .register-form__input {
      width: 90%;
      height: 50px;
      margin-left: 5%;
      display: flex;
      align-items: center;
      border-bottom: 0.5px solid var(--color-gray-100);

      .register-form__small-title {
        flex-shrink: 0;
      }

      input {
        width: 100%;
        margin-left: 4px;
        caret-color: var(--color-main);
      }

      .register-form__radio {
        margin: 0 16px 0;
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-gap: 10px;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 325px) {
          grid-gap: 0px;
          word-break: keep-all;
        }

        input {
          width: 24px;
          margin: 0;
        }

        .register-form__radio-title {
          margin-right: 8px;
        }
      }
    }

    .register-form__notice {
      padding-left: 20px;
      color: var(--color-gray-300);
      font-size: 12px;
    }

    .review-photo-wrap {
      padding: 0 20px 0;
      margin-bottom: 26px;

      .title {
        margin-top: 16px;
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 23px;
      }

      .review-photo-slide {
        .ant-upload-list {
          display: flex;
          overflow: auto;
          flex-flow: row-reverse;
          justify-content: flex-end;
        }

        .ant-upload-list-picture-card-container,
        .ant-upload {
          flex-shrink: 0;
        }
      }

      .review-warn {
        font-size: 12px;
        line-height: 17px;
        color: var(--color-gray-300);
      }
    }

    .register-form__filter {
      width: 90%;
      margin-left: 5%;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-top: 0.5px solid var(--color-gray-100);

      .register-form__filter-title {
        margin: 24px 0;
      }

      .filter-wrap {
        padding: 0 20px 0;
      }
    }
  }

  .register-form__button {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 0;
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
