import React from 'react';
import styled from 'styled-components';
import SVGexpand from '../../../public/images/search/expand.svg';

const FilterLocalButton = () => {
  return (
    <StyledWrapper className='filter-local-button'>
			<div className='filter-local-button__container'>
				<div className="filter-local-button__title">지역선택</div>
				<SVGexpand />
			</div>
    </StyledWrapper>
  );
};

export default FilterLocalButton;

const StyledWrapper = styled.div`
	.filter-local-button__container {
		cursor: pointer;
		display: flex;
		justify-content: start;
		align-items: center;

		.filter-local-button__title {
			color: var(--color-gray-300);
			font-size: 12px;
			margin-right: 4px;
		}

		svg {
			fill: var(--color-gray-300);
		}

		&.filter-local-button__container--on {
			svg {
				fill: var(--color-main);
			}

			.filter-local-button__title {
				color: var(--color-main);
			}
		}
	}
`;
