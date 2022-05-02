import React from 'react';
import styled from 'styled-components';

const Filter = () => {
  return (
    <StyledWrapper>
      <img src="/images/common/filter_gray.png" />
      <div>필터</div>
    </StyledWrapper>
  );
};

export default Filter;

const StyledWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid var(--color-gray-300);
  font-size: 12px;
  color: var(--color-gray-300);

  img {
    width: 16px;
    height: 16px;
  }
`;
