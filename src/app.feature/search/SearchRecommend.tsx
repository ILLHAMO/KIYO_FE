import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useQueryFn from 'app.query/useQueryFn';
import { API_SEARCH_KEYWORD_RANK } from 'app.modules/api/keyFactory';

const SearchRecommend = () => {
  const router = useRouter();

  const { data: recommendKeyword, isLoading } = useQueryFn(
    API_SEARCH_KEYWORD_RANK
  );

  if (isLoading) return null;
  return (
    <StyledWrapper className="search-recommend">
      <div className="search-recommend__title">추천 검색어</div>
      <div className="search-recommend__item-wrap">
        {!!recommendKeyword?.length &&
          recommendKeyword.map((item, idx) => (
            <div
              key={`search-recommend-${idx}`}
              className="search-recommend__item-container"
              onClick={() =>
                router.push(`/search/result?keyword=${item.rank_Keyword}`)
              }
            >
              <img src="/images/search/search.png" alt="" />
              <div>{item.rank_Keyword}</div>
            </div>
          ))}
      </div>
    </StyledWrapper>
  );
};

export default SearchRecommend;

const StyledWrapper = styled.div`
  padding: 16px 20px;

  .search-recommend__title {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 600;
    color: var(--color-main);
  }

  .search-recommend__item-wrap {
    display: flex;
    padding: 0 12px;
    flex-direction: column;

    .search-recommend__item-container {
      display: flex;
      align-items: center;
      padding: 8px 0;
      cursor: pointer;

      img {
        width: 16px;
        height: 16px;
        margin-right: 16px;
      }
    }
  }
`;
