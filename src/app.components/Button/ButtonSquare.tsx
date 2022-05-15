import React from 'react';
import styled from 'styled-components';


const ButtonSquare = ({name}) => {
  return (
    <StyledWrapper>
      <div className="Button-container">
       <img src="/images/search/check.png" alt="" />
       {name}
      </div>
    </StyledWrapper>
  );
};

export default ButtonSquare;

const StyledWrapper = styled.div`

    img {
      display: none;
    }

    .Button-container {
      cursor: pointer;
      position: relative;
      width: 100%;
      height: 44px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid var(--color-gray-100);
      color: var(--color-gray-100);

      &.true {
        color: var(--color-main);
        border: 2px solid var(--color-main);
        
        img {
          display: block;
          position: absolute;
          top: -6px;
          right: -5px;
          width: 24px;
          height: 18.3px;
        }
      }
    }
`;
