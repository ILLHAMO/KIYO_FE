import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

type TProps = {
  handleRegisterModalVisible: () => void;
};

const RegisterModal: React.FC<TProps> = ({ handleRegisterModalVisible }) => {
  const router = useRouter();
  const { isLoading, login } = useGetUser();

  if (isLoading) return null;

  const handleRouter = (link: string) => {
    handleRegisterModalVisible();
    if (login) router.push(link);
    else router.push('/enter');
  };

  return (
    <StyledWrapper className="register-modal">
      <div
        className="register-modal__register-button"
        onClick={() => handleRouter('/review')}
      >
        <img src="/images/register/pencil_gray.png" alt="" />
        리뷰 작성하기
      </div>
      <div
        className="register-modal__register-button"
        onClick={() => handleRouter('/register')}
      >
        <img src="/images/register/store_gray.png" alt="" />
        장소 등록하기
      </div>
      <div
        className="register-modal__register-button"
        onClick={() => handleRouter('/mypage/inquiry/create')}
      >
        <img src="/images/register/send_gray.png" alt="" />
        1:1 문의하기
      </div>
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
