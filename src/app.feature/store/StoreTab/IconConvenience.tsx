import React from 'react';
import styled from 'styled-components';
import SVGConvenienceOne from '../../../../public/images/convenience/convenience_1.svg';
import SVGConvenienceTwo from '../../../../public/images/convenience/convenience_2.svg';
import SVGConvenienceThree from '../../../../public/images/convenience/convenience_3.svg';
import SVGConvenienceFour from '../../../../public/images/convenience/convenience_4.svg';
import SVGConvenienceFive from '../../../../public/images/convenience/convenience_5.svg';
import SVGConvenienceSix from '../../../../public/images/convenience/convenience_6.svg';
import SVGConvenienceSeven from '../../../../public/images/convenience/convenience_7.svg';
import SVGConvenienceEight from '../../../../public/images/convenience/convenience_8.svg';
import SVGConvenienceNine from '../../../../public/images/convenience/convenience_9.svg';
import SVGConvenienceTen from '../../../../public/images/convenience/convenience_10.svg';
import SVGConvenienceEleven from '../../../../public/images/convenience/convenience_11.svg';
import SVGConvenienceTwelve from '../../../../public/images/convenience/convenience_12.svg';

const IconConvenience = ({ iconId }) => {
  const ConvenienceObj = {
    1: <SVGConvenienceOne />,
    2: <SVGConvenienceTwo />,
    3: <SVGConvenienceThree />,
    4: <SVGConvenienceFour />,
    5: <SVGConvenienceFive />,
    6: <SVGConvenienceSix />,
    7: <SVGConvenienceSeven />,
    8: <SVGConvenienceEight />,
    9: <SVGConvenienceNine />,
    10: <SVGConvenienceTen />,
    11: <SVGConvenienceEleven />,
    12: <SVGConvenienceTwelve />,
  };

  return <StyledWrapper>{ConvenienceObj[iconId]}</StyledWrapper>;
};

export default IconConvenience;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  fill: var(--color-gray-300);
`;
