import React from 'react';
import styled from 'styled-components';

const SearchRecommend = () => {
  return (
    <StyledWrapper className='search-recommend'>
			<div className="search-recommend__title">
				추천 검색어
			</div>
			<div className="search-recommend__item-wrap">
				<div className="search-recommend__item-container">
					<img src="/images/search/search.png" alt="" />
					<div>망고 케이크</div>
				</div>
				<div className="search-recommend__item-container">
					<img src="/images/search/search.png" alt="" />
					<div>곱창 전골</div>
				</div>
				<div className="search-recommend__item-container">
					<img src="/images/search/search.png" alt="" />
					<div>이나경송탄부대찌개</div>
				</div>
				<div className="search-recommend__item-container">
					<img src="/images/search/search.png" alt="" />
					<div>한양대학교</div>
				</div>
				<div className="search-recommend__item-container">
					<img src="/images/search/search.png" alt="" />
					<div>스테이크</div>
				</div>
				<div className="search-recommend__item-container">
					<img src="/images/search/search.png" alt="" />
					<div>도너츠</div>
				</div>
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
