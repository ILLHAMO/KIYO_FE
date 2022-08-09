import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { message, Upload, UploadProps } from 'antd';
import API from 'app.modules/api';
import {
  scoreColor,
  scoreLongComment,
  scoreStatus,
} from 'app.modules/constant/score';
import { API_REVIEW_STORE } from 'app.modules/api/keyFactory';

type TProps = {
  storeId: number;
};

const ReviewForm: React.FC<TProps> = ({ storeId }) => {
  const [fileList, setFileList] = useState([]);
  const [score, setScore] = useState(null);

  const router = useRouter();

  const methods = useForm();
  const { register, handleSubmit } = methods;

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleAddReview = async (data) => {
    try {
      if (!data.isConfirm)
        throw { message: '내용을 확인하고 아래 체크박스에 체크해주세요!' };

      const formData = new FormData();

      for (let i = 0; i < fileList.length; i++)
        formData.append('multipartFiles', fileList[i].originFileObj);

      formData.append(
        'meta_data',
        new Blob(
          [
            JSON.stringify({
              score,
              content: data.content,
            }),
          ],
          { type: 'application/json' }
        )
      );

      const response = await API.POST({
        url: API_REVIEW_STORE(storeId),
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response?.data?.success) {
        message.success('리뷰 등록을 성공했습니다.');
        router.push('/');
      } else throw response;
    } catch (err) {
      if (err.message) message.warn(err.message);
      else
        message.error('리뷰 등록에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleAddReview)}>
        <StyledWrapper className="review-form">
          <div className="review-form__store-name">홍길동네 돼지국밥</div>
          <div className="review-form__store-address">용인시 기흥구</div>
          <div className="review-form__review-score">
            {['HIGH', 'MIDDLE', 'LOW'].map((item) => (
              <div
                onClick={(e) => setScore(item)}
                className={`review-form__score-item review-form__score-item--${
                  !score || score === item ? 'checked' : 'unchecked'
                }`}
              >
                <img src={`/images/common/${scoreStatus[item]}.png`} />
                <div
                  className={`review-form__score-title review-form__score-title--${scoreColor[item]}`}
                >
                  {scoreLongComment[item]}
                </div>
              </div>
            ))}
          </div>
          <textarea
            {...register('content')}
            placeholder="사실과 다르거나 비방목적의 글을 작성할 경우 처벌을 받을 수 있습니다."
          />
          <div className="review-form__photo">
            <div className="review-form__title">사진 추가하기</div>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleChange}
              className="review-photo-slide"
            >
              <div>
                +<br />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
            <div className="review-form__warn">
              <li>
                리뷰에 업로드해주신 사진은 키요의 식당 상세페이지에서 사용될 수
                있습니다.
              </li>
              <li>사진은 10개까지 등록하실 수 있습니다.</li>
            </div>
          </div>
          <div className="review-form__check">
            <Form.Check
              {...register('isConfirm')}
              type="checkbox"
              id="review-check"
              label="직접 방문한 경험과 사실을 기반으로 작성한 리뷰입니다."
            />
          </div>
          <button type="submit" className="review-form__create-button">
            리뷰 등록하기
          </button>
        </StyledWrapper>
      </form>
    </FormProvider>
  );
};

export default ReviewForm;

const StyledWrapper = styled.div`
  padding: 20px 20px 40px;

  .review-form__store-name {
    line-height: 26px;
  }

  .review-form__store-address {
    line-height: 17px;
    font-size: 12px;
    color: var(--color-gray-300);
    margin-bottom: 12px;
  }

  .review-form__review-score {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .review-form__score-item {
      width: calc(100% / 3);
      text-align: center;
      cursor: pointer;
      transition: opacity 200ms;

      img {
        width: 60px;
        height: 60px;
      }

      &.review-form__score-item--unchecked {
        opacity: 0.2;
      }

      .review-form__score-title {
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        line-height: 17px;

        &.review-form__score-title--yellow {
          color: var(--color-yellow);
        }

        &.review-form__score-title--blue {
          color: var(--color-blue);
        }

        &.review-form__score-title--red {
          color: var(--color-red);
        }
      }
    }
  }

  textarea {
    padding: 8px;
    width: 100%;
    height: 120px;
    background: var(--color-white);
    border: 1px solid var(--color-gray-300);
    margin-bottom: 20px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--color-gray-300);
    }
  }

  .review-form__photo {
    margin-bottom: 32px;

    .review-form__title {
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

    .review-form__warn {
      font-size: 12px;
      line-height: 17px;
      color: var(--color-gray-300);
    }
  }

  .review-form__check {
    margin-bottom: 32px;

    .form-check {
      display: flex;
      align-items: center;
      label {
        font-size: 12px;
        line-height: 26px;
      }
    }

    input {
      margin-right: 8px;
      border-color: var(--color-main);

      &::focus {
        border-color: var(--color-main);
        box-shadow: none;
        outline: none;
      }
      &:checked {
        background-color: var(--color-main);
      }
    }
  }

  .review-form__create-button {
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
    max-width: 664px;
    margin-left: -20px;
  }
`;
