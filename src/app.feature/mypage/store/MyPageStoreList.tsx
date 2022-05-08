import React from 'react';
import styled from 'styled-components';

const MyPageStoreList = () => {
  return (
    <StyledWrapper>
      <div className="store-card">
        <div className="store-info">
          <div className="store-img" />
          <div className="store">
            <div className="name">홍길동네 돼지 국밥</div>
            <div className="address">용인시 기흥구</div>
          </div>
        </div>
        <div className="button-wrap">
          <div className="watch-button">보기</div>
          <div className="remove-button">삭제</div>
        </div>
      </div>
      <div className="store-card">
        <div className="store-info">
          <div className="store-img" />
          <div className="store">
            <div className="name">홍길동네 돼지 국밥</div>
            <div className="address">용인시 기흥구</div>
          </div>
        </div>
        <div className="button-wrap">
          <div className="watch-button">보기</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default MyPageStoreList;

const StyledWrapper = styled.div`
  padding: 20px;

  .store-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 0.5px solid var(--color-gray-100);

    &:last-child {
      border-bottom: 0;
    }

    .store-info {
      display: flex;
      align-items: center;
      justify-content: center;

      .store-img {
        width: 36px;
        height: 36px;
        margin-right: 16px;
        background-color: #ffe9ef;
        border-radius: 50%;
      }

      .store {
        .name {
          margin-bottom: 4px;
        }

        .address {
          font-size: 12px;
          color: var(--color-gray-300);
        }
      }
    }
  }

  .button-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    div {
      cursor: pointer;
      border-radius: 10px;
      font-size: 12px;
      line-height: 1;
      padding: 4px 8px;
    }

    .watch-button {
      border: 1px solid var(--color-gray-300);
      color: var(--color-gray-300);
    }

    .remove-button,
    .declare-button {
      border: 1px solid var(--color-error);
      color: var(--color-error);
    }
  }
`;