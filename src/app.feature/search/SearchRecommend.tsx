import React from 'react';
import styled from 'styled-components';
import useQueryFn from 'app.query/useQueryFn';
import { API_SEARCH_KEYWORD_RANK } from 'app.modules/api/keyFactory';

const SearchRecommend = () => {
  const { data: recommendKeyword, isLoading } = useQueryFn(
    API_SEARCH_KEYWORD_RANK
  );

  return (
    <StyledWrapper className="search-recommend">
      <div className="search-recommend__title">추천 검색어</div>
      <div className="search-recommend__item-wrap">
        {!!recommendKeyword?.length &&
          recommendKeyword.map((item, idx) => (
            <div
              key={`search-recommend-${idx}`}
              className="search-recommend__item-container"
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
  .search-recommend__title {
    margin: 16px 20px 32px 20px;
    font-size: 24px;
    font-weight: 600;
    color: var(--color-main);
  }

  .search-recommend__item-wrap {
    padding: 0 32px;
    display: flex;
    flex-direction: column;

    .search-recommend__item-container {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      img {
        width: 16px;
        height: 16px;
        margin-right: 16px;
      }
    }
  }
`;
