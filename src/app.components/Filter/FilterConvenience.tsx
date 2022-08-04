import React from 'react';
import styled from 'styled-components';
import SVGwifi from '../../../public/images/convenience/convenience_1.svg';
import SVGgroup from '../../../public/images/convenience/convenience_2.svg';
import SVGpets from '../../../public/images/convenience/convenience_3.svg';
import SVGwc from '../../../public/images/convenience/convenience_4.svg';
import SVGparking from '../../../public/images/convenience/convenience_5.svg';
import SVGdrive from '../../../public/images/convenience/convenience_6.svg';
import SVGcrib from '../../../public/images/convenience/convenience_7.svg';
import SVGdeck from '../../../public/images/convenience/convenience_8.svg';
import SVGchild from '../../../public/images/convenience/convenience_9.svg';
import SVGchanging_station from '../../../public/images/convenience/convenience_10.svg';
import SVGelec from '../../../public/images/convenience/convenience_11.svg';
import SVGpacking from '../../../public/images/convenience/convenience_12.svg';
import { useFormContext } from 'react-hook-form';

const CONVENIENCE_CATEGORY = [
  { src: <SVGwifi width="32" height="32" />, title: '와이파이' },
  { src: <SVGgroup width="32" height="32" />, title: '단체석' },
  { src: <SVGpets width="32" height="32" />, title: '애견동반' },
  { src: <SVGwc width="32" height="32" />, title: '화장실' },
  { src: <SVGparking width="32" height="32" />, title: '주차가능' },
  { src: <SVGdrive width="32" height="32" />, title: '발렛가능' },
  { src: <SVGcrib width="32" height="32" />, title: '아기의자' },
  { src: <SVGdeck width="32" height="32" />, title: '야외좌석' },
  { src: <SVGchild width="32" height="32" />, title: '키즈메뉴' },
  { src: <SVGchanging_station width="32" height="32" />, title: '기저귀갈이' },
  { src: <SVGelec width="32" height="32" />, title: '콘센트' },
  { src: <SVGpacking width="32" height="32" />, title: '포장가능' },
];

const FilterConvenience = () => {
  const { register } = useFormContext();

  return (
    <StyledWrapper className="convenience-filter">
      <div className="convenience-filter__filter-wrap">
        {CONVENIENCE_CATEGORY.map((item, idx) => (
          <div
            className="convenience-filter__filter-item"
            key={`filter-${idx}`}
          >
            <input
              {...register('convenience')}
              id={`convenience-filter-${idx}`}
              type="checkbox"
              value={String(idx)}
            />
            <label htmlFor={`convenience-filter-${idx}`}>
              <div className="convenience-filter__item-container">
                <>{item.src}</>
              </div>
              <div className="convenience-filter__item-title">{item.title}</div>
            </label>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default FilterConvenience;

const StyledWrapper = styled.div`
  .convenience-filter__filter-wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 0 40px 0;
    width: 100%;
    
    .convenience-filter__filter-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 8px;
      color: var(--color-gray-100);
      width: 25%;
      
      @media only screen and (max-width: 374px) {
        width: 33.3%;
      }

      input {
        display: none;
      }

      input[type='checkbox']:checked + label {
        .convenience-filter__item-title {
          color: var(--color-main);
        }

        .convenience-filter__item-container {
          border: 6px double var(--color-main);

     

          svg {
            fill: var(--color-main);
          }
        }
      }

      .convenience-filter__item-container {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        font-size: 16px;
        width: 60px;
        height: 60px;
        border-radius: 50px;
        border: 2px solid var(--color-gray-100);
        background-color: white;

        svg {
          fill: var(--color-gray-100);
        }
      }

      .convenience-filter__item-title {
        word-break: keep-all;
        text-align: center;
      }
    }
  `;
