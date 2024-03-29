import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useQuerySearchStore from 'app.query/useQuerySearchStore';
import useIntersectionObserver from 'app.hooks/useIntersectionObserver';
import { Skeleton } from 'antd';
import { FormProvider } from 'rc-field-form';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const ReviewSearch = () => {
  const lastStoreRef = useRef();
  const router = useRouter();

  const [keyword, setKeyword] = useState(null);

  const { data, isFetching, status, fetchNextPage, hasNextPage } =
    useQuerySearchStore(keyword);

  const handleSelectStore = (storeInfo) =>
    router.push(
      `/review/create?storeName=${storeInfo.name}&storeAddress=${storeInfo.address}`
    );

  const isSuccess = status === 'success';

  useIntersectionObserver({
    root: null,
    target: lastStoreRef,
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  });

  let dataset = data?.pages
    ? data?.pages.reduce((acc: any, cur: any) => {
        if (cur?.edges) {
          acc.push(...cur?.edges);
        }
        return acc;
      }, [])
    : [];

  const SkeletonArray = Array.from(Array(20).keys());

  if (isFetching) dataset = [...dataset, ...SkeletonArray];

  if (isSuccess && isFetching) {
    dataset = [...dataset, ...SkeletonArray];
  }

  const methods = useForm();
  const { handleSubmit, register } = methods;

  const onValidSearchForm = (data) => {
    setKeyword(data.keyword);
  };

  return (
    <StyledWrapper className="review-search">
      <FormProvider>
        <form onSubmit={handleSubmit(onValidSearchForm)}>
          <div className="review-search__input">
            <input {...register('keyword')} placeholder="식당을 검색해주세요" />
            <img
              src="/images/review/search_gray.png"
              onClick={handleSubmit(onValidSearchForm)}
            />
          </div>
        </form>
      </FormProvider>
      <div className="review-search__result">
        {isSuccess && !!dataset.length && (
          <div>
            {dataset.map((item) => {
              if (!item?.id) return <Skeleton />;
              return (
                <div
                  className="review-search__result-item"
                  onClick={() => handleSelectStore(item)}
                >
                  <div className="review-search__store-image">
                    <img src={item?.storeImage?.imagePath} alt="store-image" />
                  </div>
                  <div className="review-search__store-info">
                    <div className="review-search__name">{item.name}</div>
                    <div className="review-search__address">{item.address}</div>
                  </div>
                </div>
              );
            })}
            <div className="last-item-flag" ref={lastStoreRef} />
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

export default ReviewSearch;

const StyledWrapper = styled.div`
  padding: 20px;

  .review-search__input {
    position: relative;
    height: 40px;
    width: 100%;
    margin-bottom: 12px;

    img {
      width: 18px;
      height: 18px;
      top: 11px;
      right: 8px;
      position: absolute;
    }

    input {
      height: 40px;
      width: 100%;
      border-bottom: 0.5px solid var(--color-gray-300);
      padding: 0 10px;

      &::placeholder {
        color: var(--color-gray-300);
        font-size: 16px;
      }
    }
  }

  .review-search__result {
    .review-search__result-item {
      display: flex;
      align-items: center;
      padding: 8px;
      border-bottom: 0.5px solid var(--color-gray-100);

      &:last-child {
        border-bottom: none;
      }

      .review-search__store-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #ffe9ef;
        margin-right: 8px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .review-search__store-info {
        .review-search__name {
          line-height: 23px;
        }

        .review-search__address {
          line-height: 17px;
          font-size: 12px;
          color: var(--color-gray-300);
        }
      }
    }
  }
`;
