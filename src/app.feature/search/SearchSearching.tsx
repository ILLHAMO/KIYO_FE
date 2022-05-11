import React from 'react';
import styled from 'styled-components';

const SearchSearching = () => {
  return (
    <StyledWrapper>
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
			</div>
    </StyledWrapper>
  );
};

export default SearchSearching;

const StyledWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 41px;
	margin-top: 24px;
	background-color: white;

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
