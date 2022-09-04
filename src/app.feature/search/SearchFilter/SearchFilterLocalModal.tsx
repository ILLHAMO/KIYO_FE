import React from 'react';
import styled from 'styled-components';
import ButtonSquare from 'app.components/Button/ButtonSquare';

type TProps = {
  handleLocalFilterVisibleShow: () => void;
};

const SearchFilterLocalModal: React.FC<TProps> = ({
  handleLocalFilterVisibleShow,
}) => {
  return (
    <StyledWrapper className="search-filter-local-modal">
      <div className="search-filter-local-modal__header">
        <div className="local-name">내 근처</div>
        <div className="local-name">서울 - 강남</div>
        <div className="local-name">서울 - 강북</div>
        <div className="local-name">서울 - 강서</div>
        <div className="local-name">서울 - 강남</div>
        <div className="local-name">서울 - 강남</div>
        <div className="local-name">서울 - 강남</div>
        <div className="local-name">서울 - 강남</div>
        <div className="local-name">서울 - 강남</div>
      </div>
      <div className="search-filter-local-modal__body">
        <div className="body__button-container">
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
          <ButtonSquare name="왕십리" />
        </div>
      </div>
      <div className="search-filter-local-modal__footer">
        <div className="search-filter-local-modal__apply-button">적용</div>
        <div
          onClick={handleLocalFilterVisibleShow}
          className="search-filter-local-modal__reset"
        >
          취소하기
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SearchFilterLocalModal;

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 664px;
  width: 100%;
  border-top: 1px solid var(--color-gray-300);
  overflow: auto;

  .search-filter-local-modal__header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    gap: 24px;
    padding: 0 0 0 20px;
    margin-bottom: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
    color: var(--color-gray-300);

    .local-name {
      flex-shrink: 0;
      padding-bottom: 2px;
    }
  }

  .search-filter-local-modal__body {
    height: calc(100% - 56px - 88px);
    padding: 0 5% 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .body__button-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .search-filter-local-modal__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 664px;
    height: 88px;
    background-color: white;

    .search-filter-local-modal__apply-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 48px;
      border-radius: 25px;
      color: white;
      background-color: var(--color-main);
      font-size: 18px;
    }

    .search-filter-local-modal__reset {
      cursor: pointer;
      position: absolute;
      right: 5%;
      font-size: 12px;
      color: var(--color-gray-300);
    }
  }
`;
