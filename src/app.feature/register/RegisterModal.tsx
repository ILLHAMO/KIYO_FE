import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RegisterModal = () => {
  const router = useRouter();

  const handleRouter = (link) => {
    // 로그인 되어있을 경우
    router.push(link);

    // 안되어있을 경우
    // router.push('/enter');
    //
  };
  return (
    <StyledWrapper className="register-modal">
      <Link href="/review">
        <div className="register-modal__register-button">
          <img src="/images/register/pencil_gray.png" alt="" />
          리뷰 작성하기
        </div>
      </Link>
      <Link href="/register">
        <div className="register-modal__register-button">
          <img src="/images/register/store_gray.png" alt="" />
          장소 등록하기
        </div>
      </Link>
      <Link href="/mypage/inquiry/create">
        <div className="register-modal__register-button">
          <img src="/images/register/send_gray.png" alt="" />
          1:1 문의하기
        </div>
      </Link>
    </StyledWrapper>
  );
};

export default RegisterModal;

const StyledWrapper = styled.div`
  .register-modal__register-button {
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: var(--color-gray-300);
    border-bottom: 1px solid var(--color-gray-100);

    &:last-child {
      border-bottom: none;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 24px;
    }
  }

  z-index: 1;
`;
