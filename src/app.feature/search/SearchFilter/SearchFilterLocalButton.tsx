import React from 'react';
import styled from 'styled-components';
import SVGexpand from '../../../../public/images/search/expand.svg';

const SearchFilterLocalButton = () => {
  return (
    <StyledWrapper>
			<div className="local-button">
				<div className="local-button__title">지역선택</div>
				<SVGexpand />
			</div>
    </StyledWrapper>
  );
};

export default SearchFilterLocalButton;

const StyledWrapper = styled.div`
	.local-button {
		cursor: pointer;
		display: flex;
		justify-content: start;
		align-items: center;
	}

	.local-button__title {
		color: var(--color-gray-300);
		font-size: 12px;
		margin-right: 4px;
	}

	svg {
		fill: var(--color-gray-300);
	}

	.true {
		svg {
			fill: var(--color-main);
		}
		.local-button__title {
			color: var(--color-main);
		}
	}

`;
