import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { message, Spin, Upload, UploadProps } from 'antd';
import API from 'app.modules/api';
import {
  scoreColor,
  scoreLongComment,
  scoreStatus,
} from 'app.modules/constant/score';
import {
  API_REVIEW,
  API_REVIEW_STORE,
  API_USER_REVIEW,
} from 'app.modules/api/keyFactory';
import { useQueryClient } from 'react-query';

type TProps = {
  reviewStore?: any;
  editInfo?: any;
};

const ReviewForm: React.FC<TProps> = ({ reviewStore, editInfo }) => {
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [fileList, setFileList] = useState([...defaultFileList]);
  const [score, setScore] = useState(editInfo?.score ?? null);
  const [isLoading, setIsLoading] = useState(false);

  const isEdit = !!editInfo;
  const router = useRouter();

  const queryClient = useQueryClient();

  const methods = useForm({
    defaultValues: {
      content: editInfo?.content ?? null,
      score: editInfo?.score ?? null,
      isConfirm: false,
    },
  });

  const { register, handleSubmit } = methods;

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleDefaultFileList = () => {
    const list = [];
    reviewStore?.reviewImages?.map((item) => {
      list.push({ uid: item.id, thumbUrl: item.path });
    });
    setDefaultFileList(list);
    setFileList(list);
  };

  useEffect(() => {
    handleDefaultFileList();
  }, []);

  console.log(editInfo);

  const handleAddReview = async (data) => {
    try {
      if (!data.isConfirm)
        throw { message: '내용을 확인하고 아래 체크박스에 체크해주세요!' };

      const deleteIds = [];
      const addFiles = [];

      fileList.map((item) => {
        const isFind = defaultFileList.find(
          (value) => item?.uid === value?.uid
        );
        if (!isFind) {
          if (typeof item.uid == 'number') deleteIds.push(isFind?.uid);
          else addFiles.push(item);
        }
      });

      setIsLoading(true);

      const formData = new FormData();

      for (let i = 0; i < addFiles.length; i++)
        formData.append('multipartFiles', addFiles[i].originFileObj);

      formData.append(
        'meta_data',
        new Blob(
          [
            JSON.stringify({
              score,
              content: data.content,
              deleteIds,
            }),
          ],
          { type: 'application/json' }
        )
      );

      const response = isEdit
        ? await API.PUT({
            url: API_REVIEW(reviewStore?.id),
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
          })
        : await API.POST({
            url: API_REVIEW_STORE(reviewStore?.id),
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
          });

      if (response?.data?.success) {
        message.success('리뷰 등록을 성공했습니다.');
        queryClient.resetQueries(API_USER_REVIEW);
        router.back();
      } else throw response;
    } catch (err) {
      if (err.message) message.warn(err.message);
      else
        message.error('리뷰 등록에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <StyledWrapper className="review-form">
        <Spin spinning={isLoading} className="review-spin">
          <form onSubmit={handleSubmit(handleAddReview)}>
            <div className="review-form__store-name">{reviewStore?.name}</div>
            <div className="review-form__store-address">
              {reviewStore?.address}
            </div>
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
                fileList={[...fileList]}
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
                  리뷰에 업로드해주신 사진은 키요의 식당 상세페이지에서 사용될
                  수 있습니다.
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
              리뷰 {isEdit ? '수정' : '등록'}하기
            </button>
          </form>
        </Spin>
      </StyledWrapper>
    </FormProvider>
  );
};

export default ReviewForm;

const StyledWrapper = styled.div`
  .review-spin {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100vh !important;
  }

  form {
    padding: 20px 20px 40px;
  }

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
      width: 100%;
      display: flex;
      overflow: auto;

      .ant-upload-list {
        width: 100%;
        display: flex;
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
