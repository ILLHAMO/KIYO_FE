import React from 'react';
import styled from 'styled-components';

const SearchRecommend = () => {
  return (
    <StyledWrapper>
			<div className="recommend-title">
				추천 검색어
			</div>
			<div className="recommand-item">
				<div className="recomend-item-container">
					<img src="/images/search/search.png" alt="" />
					<div className="recomend-item-title">망고 케이크</div>
				</div>
				<div className="recomend-item-container">
					<img src="/images/search/search.png" alt="" />
					<div className="recomend-item-title">곱창 전골</div>
				</div>
				<div className="recomend-item-container">
					<img src="/images/search/search.png" alt="" />
					<div className="recomend-item-title">이나경송탄부대찌개</div>
				</div>
				<div className="recomend-item-container">
					<img src="/images/search/search.png" alt="" />
					<div className="recomend-item-title">한양대학교</div>
				</div>
				<div className="recomend-item-container">
					<img src="/images/search/search.png" alt="" />
					<div className="recomend-item-title">스테이크</div>
				</div>
				<div className="recomend-item-container">
					<img src="/images/search/search.png" alt="" />
					<div className="recomend-item-title">도너츠</div>
				</div>
			</div>

    </StyledWrapper>
  );
};

export default SearchRecommend;

const StyledWrapper = styled.div`
  .recommend-title {
		margin: 16px 20px 32px 20px;
		font-size: 24px;
		font-weight: 600;
		color: var(--color-main);
	}
	.recommand-item {
		padding: 0 32px;
		display: flex;
		flex-direction: column;
	}
	.recomend-item-container {
		display: flex;
		margin-bottom: 24px;
	}
	img {
		width: 16px;
		height: 16px;
		margin-right: 16px;
	}


`;
