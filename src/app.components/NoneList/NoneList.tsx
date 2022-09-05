import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  title?: string;
  button?: string;
  link?: string;
};

const NoneList: React.FC<TProps> = ({
  title = '데이터가 없습니다.',
  button = '홈 화면 가기',
  link = '/',
}) => {
  const router = useRouter();

  return (
    <StyledWrapper className="bookmark-none">
      <div className="bookmark-none__text">{title}</div>
      <div
        className="bookmark-none__add-button"
        onClick={() => router.push(link)}
      >
        {button}
      </div>
    </StyledWrapper>
  );
};

export default NoneList;

const StyledWrapper = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .bookmark-none__text {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 20px;
  }

  .bookmark-none__add-button {
    cursor: pointer;
    height: 48px;
    padding: 0 32px;
    line-height: 48px;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    background: var(--color-main);
    color: var(--color-white);
    border-radius: 25px;
  }
`;
