import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useQuerySearchStore from 'app.query/useQuerySearchStore';
import { FormProvider, useForm } from 'react-hook-form';
import { message } from 'antd';

const SearchHeader = ({ keyword, setKeyword, queryData }) => {
  const { data, isFetching, status, fetchNextPage, hasNextPage } = queryData;

  const methods = useForm();
  const { handleSubmit, register } = methods;

  const onValidSearchForm = (data) => {
    setKeyword(data.keyword);
    const searchHistory =
      JSON.parse(localStorage.getItem('KIYO_SEARCH_HISTORY')) ?? [];
    localStorage.setItem(
      'KIYO_SEARCH_HISTORY',
      JSON.stringify([...searchHistory, data.keyword])
    );
  };

  return (
    <StyledWrapper className="search-header">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onValidSearchForm)}>
          <input
            {...register('keyword')}
            className="search-header__input"
            placeholder="  검색어를 입력 해 보세요"
          />
          <Link href="/">
            <img
              className="search-header__back"
              src="/images/search/arrow.png"
              alt="뒤로가기 버튼"
            />
          </Link>
          <img
            className="search-header__search"
            src="/images/search/search.png"
            alt="검색하기 버튼"
            onClick={handleSubmit(onValidSearchForm)}
          />
        </form>
      </FormProvider>
    </StyledWrapper>
  );
};

export default SearchHeader;

const StyledWrapper = styled.div`
  position: relative;

  input::placeholder {
    color: var(--color-gray-300);
    font-size: 16px;
  }

  textarea {
    font-size: 20px;
  }

  .search-header__input {
    box-sizing: border-box;
    max-width: 664px;
    caret-color: var(--color-main);
    width: 100%;
    height: 40px;
    border-bottom: 0.5px solid var(--color-gray-300);
    padding: 0 40px;
    font-size: 16px;
  }

  .search-header__back {
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .search-header__search {
    cursor: pointer;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 11px;
    right: 11px;
  }
`;
