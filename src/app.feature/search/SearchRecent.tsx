import React from 'react';
import styled from 'styled-components';

const SearchRecent = () => {
  return (
    <StyledWrapper>
			<div className="recent-search-item">
				<div className="item-none true">
					최근 입력한 검색어가 없습니다.
				</div>
				<div className="item-container">
					<div className="item-title">돈까스</div>
					<div className="item-title">케이크</div>
				</div>

			</div>
			<div className="bottom">
				<div className="save-toggle-on true">
					<img src="/images/search/toggle_on.png" alt="" className="toggle-on" />
					<div className="toggle-text">자동 저장 ON</div>
				</div>
				<div className="save-toggle-off">
					<img src="/images/search/toggle_off.png" alt="" className="toggle-off" />
					<div className="toggle-text">자동 저장 OFF</div>
				</div>
				<div className="remove-botton true">전체 삭제</div>
			</div>
    </StyledWrapper>
  );
};

export default SearchRecent;

const StyledWrapper = styled.div`
	.item-none {
		display: none;
	}

	.item-none.true{
		display: block;
		height: 240px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-container {
		display: none;
	}

	.item-container.true {
		display: block;
		margin: 16px 20px 0 20px;
	}

	.item-title {
		margin-bottom: 16px;
	}

	.bottom {
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

		.save-toggle-on.true {
			display: flex;
			align-items: center;
		}
		.save-toggle-on {
			display: none;
		}

		.save-toggle-off.true {
			display: flex;
			align-items: center;
		}

		.save-toggle-off{
			display: none;
		}

		.remove-botton {
			display: none;
		}

		.remove-botton.true{
			display: block;
			cursor: pointer;
			position: absolute;
			top: 12px;
			right: 8px;
		}
	}
  
  `;
