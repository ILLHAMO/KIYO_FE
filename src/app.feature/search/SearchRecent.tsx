import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchRecent = () => {
  const [recentSearch, setRecentSearch] = useState([]);

  useEffect(() => {
    const result =
      JSON.parse(localStorage.getItem('KIYO_SEARCH_HISTORY')) ?? [];
    setRecentSearch(result);
  }, []);

  return (
    <StyledWrapper className="search-recent">
      <div className="search-recent__upper">
        {!recentSearch?.length && (
          <div className="search-recent__no-item--true">
            최근 입력한 검색어가 없습니다.
          </div>
        )}
        {!!recentSearch?.length && (
          <div className="search-recent__item-container">
            {recentSearch.map((item, idx) => (
              <div key={`search-recent-${idx}`} className="search-recent__item">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="search-recent__bottom">
        <div className="search-recent__save-toggle search-recent__save-toggle--on">
          <img
            src="/images/search/toggle_on.png"
            alt=""
            className="toggle-on"
          />
          <div className="toggle-text">자동 저장 ON</div>
        </div>
        <div className="search-recent__save-toggle">
          <img
            src="/images/search/toggle_off.png"
            alt=""
            className="toggle-off"
          />
          <div className="toggle-text">자동 저장 OFF</div>
        </div>
        <div className="search-recent__remove-botton search-recent__remove-botton--on">
          전체 삭제
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SearchRecent;

const StyledWrapper = styled.div`
  .search-recent__no-item--false {
    display: none;
  }

  .search-recent__no-item--true {
    display: block;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-recent__item-container {
    margin: 16px 20px 0 20px;
  }

  .search-recent__item {
    margin-bottom: 16px;
  }

  .search-recent__bottom {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--color-gray-300);
    font-size: 12px;
    height: 40px;
    border-top: 0.5px solid var(--color-gray-100);
    border-bottom: 0.5px solid var(--color-gray-300);

    img {
      width: 24px;
      height: 24px;
      margin: 0 8px 0;
    }

    .search-recent__save-toggle.true {
      display: flex;
      align-items: center;
    }
    .search-recent__save-toggle {
      display: none;
    }

    .search-recent__save-toggle.search-recent__save-toggle--on {
      display: flex;
      align-items: center;
    }

    .search-recent__remove-botton {
      display: none;
    }

    .search-recent__remove-botton.search-recent__remove-botton--on {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 12px;
      right: 8px;
    }
  }
`;
