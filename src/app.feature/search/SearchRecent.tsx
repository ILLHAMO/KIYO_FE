import { Switch } from 'antd';
import { useStoreAutoSave } from 'app.store/autoSave/useStoreAutoSave';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchRecent = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [recentSearch, setRecentSearch] = useState([]);

  const { updateAutoSave } = useStoreAutoSave();

  const handleAutoSave = () => {
    const isAutoSave = !autoSave;
    localStorage.setItem('KIYO_AUTO_SAVE', String(isAutoSave));
    setAutoSave(isAutoSave);
    updateAutoSave(isAutoSave);
  };

  const handleRemoveHistory = () => {
    localStorage.removeItem('KIYO_SEARCH_HISTORY');
    const result =
      JSON.parse(localStorage.getItem('KIYO_SEARCH_HISTORY')) ?? [];
    setRecentSearch(result);
  };

  useEffect(() => {
    const result =
      JSON.parse(localStorage.getItem('KIYO_SEARCH_HISTORY')) ?? [];
    setRecentSearch(result);

    const isAutoSave = localStorage.getItem('KIYO_AUTO_SAVE')
      ? Boolean(localStorage.getItem('KIYO_AUTO_SAVE'))
      : true;
    setAutoSave(isAutoSave);
    updateAutoSave(isAutoSave);
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
        <div className={`search-recent__save-toggle`}>
          <Switch checked={autoSave} size="small" onChange={handleAutoSave} />
          <div className="toggle-text">자동 저장 {autoSave ? 'ON' : 'OFF'}</div>
        </div>
        <div
          className="search-recent__remove-button"
          onClick={handleRemoveHistory}
        >
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
    padding: 0 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-gray-300);
    font-size: 12px;
    height: 40px;
    border-top: 0.5px solid var(--color-gray-100);
    border-bottom: 0.5px solid var(--color-gray-300);

    .ant-switch {
      margin-right: 8px;
    }

    .ant-switch-checked {
      background: var(--color-main);
    }

    .search-recent__save-toggle {
      display: flex;
      align-items: center;
    }

    .search-recent__remove-button {
      cursor: pointer;
    }
  }
`;
