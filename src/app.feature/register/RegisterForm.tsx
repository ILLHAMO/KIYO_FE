import React from 'react';
import styled from 'styled-components';
import ConvenienceFilter from 'app.components/Filter/ConvenienceFilter';
import StoreFilter from 'app.components/Filter/StoreFilter';

const RegisterForm = () => {
  return (
    <StyledWrapper>
			<div className="body">
				<div className="body__title">기본 정보</div>
				<div className="body__input">
					<div className="body__input__title">식당 이름 :</div>
					<input type="text" />
				</div>
				<div className="body__input">
					<div className="body__input__title">주소 :</div>
					<input type="text" />
				</div>
				<div className="body__input">
					<div className="body__input__title">운영 방식 :</div>
					<div className="body__input__radio">
						<input type="radio" name="키즈존 여부"/>
						<div className="body__input__radio__title">키즈존</div>
						<input type="radio" name="키즈존 여부"/>
						<div className="body__input__radio__title">일반식당</div>
					</div>
				</div>

				<div className="body__title">추가 정보</div>
				<div className="body__input">
					<div className="body__input__title">전화번호 :</div>
					<input type="text" />
				</div>
				<div className="review-photo-wrap">
					<div className="title">사진 추가하기</div>
					<div className="review-photo-slide">
						<div className="photo-item"></div>
						<div className="photo-item"></div>
						<div className="photo-item"></div>
						<div className="photo-item"></div>
						<div className="photo-item"></div>
						<div className="photo-item"></div>
						<div className="photo-item"></div>
						<div className="photo-item"></div>
					</div>
					<div className="review-warn">
						<li>
							가게 내/외부,음식,메뉴판 등 사진을 추가해주세요.
						</li>
						<li>사진은 10개까지 등록하실 수 있습니다.</li>
					</div>
				</div>
				<div className="body__filter">
					<div className="body__filter__title">
						장소 종류 선택
					</div>
					<StoreFilter />
				</div>
				<div className="body__filter">
					<div className="body__filter__title">
						편의 사항 선택
					</div>
			 		<ConvenienceFilter />
				</div>
				<div className="body__notice">· 검토 후 장소 등록이 완료됩니다.</div>
			</div>
      <div className='create-button'>장소 등록하기</div>
    </StyledWrapper>
  );
};

export default RegisterForm;

const StyledWrapper = styled.div`

	.body {
		margin-bottom: 72px;
	}

	.body__notice {
		padding-left: 20px;
		color: var(--color-gray-300);
		font-size: 12px;
	}

	.body__title {
		padding: 0 20px 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 50px;
		font-size: 24px;
		border-bottom: 0.5px solid var(--color-gray-100);
	}

	.body__input {
		width: 90%;
		height: 50px;
		margin-left: 5%;
		display: flex;
		align-items: center;
		border-bottom: 0.5px solid var(--color-gray-100);

		.body__input__title {
			flex-shrink: 0;
		}

		input {
			width: 100%;
			margin-left: 4px;
			caret-color: var(--color-main);
		}

		.body__input__radio {
			margin: 0 16px 0;
			display: grid;
			grid-template-columns: repeat(4, auto);
    	grid-gap: 10px;
			justify-content: center;
			align-items: center;

			@media only screen and (max-width: 325px) {
				grid-gap: 0px;
				word-break: keep-all;
      }

			input {
				width: 24px;
				margin: 0;
			}

			.body__input__radio__title {
				margin-right: 8px;
			}
		}
	}

  .review-photo-wrap {
		padding: 0 20px 0;
    margin-bottom: 26px;

    .title {
			margin-top: 16px;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 23px;
    }

    .review-photo-slide {
      display: flex;
      align-items: center;
      overflow: auto;
      margin: 0 -20px 8px;
      padding: 0 20px;

      .photo-item {
        min-width: 80px;
        border: 1px solid var(--color-black);
        border-right: none;
        width: 80px;
        height: 80px;
        background: #ffe9ef;

        &:last-child {
          border-right: 1px solid var(--color-black);
        }
      }
    }

    .review-warn {
      font-size: 12px;
      line-height: 17px;
      color: var(--color-gray-300);
    }
  }

	.body__filter {
		width: 90%;
		margin-left: 5%;
		margin-bottom: 24px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-top: 0.5px solid var(--color-gray-100);

		.body__filter__title {
			margin: 24px 0;
		}

		.filter-wrap {
			padding: 0 20px 0;
		}
	}

  .create-button {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-main);
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
  }

  
`;
