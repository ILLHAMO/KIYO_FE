import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import FilterIcon from 'app.components/Filter/FilterIcon';
import useQueryFn from 'app.query/useQueryFn';
import { API_CATEGORY } from 'app.modules/api/keyFactory';

const HomeCategoryFilter = ({ onClick }) => {
  const { register } = useFormContext();
  const { data: categoryList, isLoading } = useQueryFn([API_CATEGORY]);

  if (isLoading) return null;
  if (!categoryList?.length) return null;
  return (
    <StyledWrapper className="home-store-filter">
      <div className="home-store-filter__top">
        <div className="home-store-filter__title">어디로 가시겠어요?</div>
        <div onClick={onClick}>
          <FilterIcon />
        </div>
      </div>
      <div className="home-store-filter__category">
        {categoryList.map((item, idx) => (
          <div className="category-item" key={`category-${idx}`}>
            <input
              {...register('category')}
              type="checkbox"
              value={String(idx)}
              id={`category-item-${idx}`}
            />
            <label htmlFor={`category-item-${idx}`}>
              <div className="category-item__img">
                <img src={`/images/common/category/category_${item.id}.png`} />
              </div>
            </label>
            {item.categoryName}
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default HomeCategoryFilter;

const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;

  .home-store-filter__top {
    padding: 0 8px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .home-store-filter__title {
      font-size: 16px;
    }
  }

  .home-store-filter__category {
    display: flex;
    padding: 0 20px;
    gap: 24px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    .category-item {
      margin-top: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      input {
        display: none;
      }

      input[type='checkbox']:checked + label {
        .category-item__img {
          outline: 6px double var(--color-main);
        }
      }

      .category-item__img {
        border-radius: 50%;
        background-color: #ffe9ef;
        width: 60px;
        height: 60px;
        margin-bottom: 8px;
        overflow: hidden;
        object-fit: cover;
        transition: 200ms;
      }
    }
  }
`;
