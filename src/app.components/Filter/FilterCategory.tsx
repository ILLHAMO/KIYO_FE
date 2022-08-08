import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import useQueryFn from 'app.query/useQueryFn';
import { API_CATEGORY } from 'app.modules/api/keyFactory';

const StoreFilter = () => {
  const { data: categoryList, isLoading } = useQueryFn([API_CATEGORY]);
  const { register } = useFormContext();

  if (isLoading) return null;
  return (
    <StyledWrapper>
      <div className="filter-wrap">
        {categoryList.map((item, idx) => (
          <div className="filter-item" key={`category-${item.id}`}>
            <input
              {...register('categoryIds')}
              id={`store-filter-${item.id}`}
              type="checkbox"
              value={String(item.id)}
            />
            <label htmlFor={`store-filter-${item.id}`}>
              <div className="item-container">{item.categoryName}</div>
            </label>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default StoreFilter;

const StyledWrapper = styled.div`
  .filter-wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 0 40px 0px;
    width: 100%;

    .filter-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 8px;
      color: var(--color-gray-100);
      width: 25%;

      input {
        display: none;
      }

      @media only screen and (max-width: 374px) {
        width: 33.3%;
      }
    }

    .item-title {
      word-break: keep-all;
    }

    .item-container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      width: 60px;
      height: 60px;
      border-radius: 50px;
      border: 2px solid var(--color-gray-100);
      background-color: white;
    }

    input[type='checkbox']:checked + label {
      .item-container {
        color: var(--color-main);
        border: 6px double var(--color-main);
      }
    }
  }
`;
