import React from 'react';
import styled from 'styled-components';

const RegisterComplete = () => {
  return (
    <StyledWrapper className='register-complete'>
			<img src="/images/register/logo.png" alt="" />
			<div className="register-complete__big-ment">감사합니다 :)</div>
			<div className="register-complete__small-ment">검토 후 장소 등록이 완료됩니다.</div>
			<img src="/images/register/background.png" alt="" />
			<img src="/images/register/tokkis.png" alt="" />
			<div className="register-complete__button">키즈존 찾으러 가기</div>
    </StyledWrapper>
  );
};

export default RegisterComplete;

const StyledWrapper = styled.div`
	padding: 56px 48px;

	img:nth-child(1) {
		width: 80px;
		height: 40px;
	}
	img:nth-child(4) {
		position: absolute;
		top: 58%;
  	left: 50%;
  	transform: translate(-50%, -50%);
	}
	img:nth-child(5) {
		position: absolute;
		width: 192px;
		height: 210.24px;
		top: 58%;
  	left: 50%;
  	transform: translate(-50%, -50%);
	}

	.register-complete__big-ment {
		margin: 32px 0 8px 0;
		font-size: 30px;
		color: #555555;
		font-weight: bold;
	}

	.register-complete__small-ment {
		color: #555555;
	}

	.register-complete__button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		position: absolute;
		width: 215px;
		height: 46px;
		top: 87%;
  	left: 50%;
  	transform: translate(-50%, -50%);
		background: #85C07B;
		border-radius: 25px;
	}
`;
