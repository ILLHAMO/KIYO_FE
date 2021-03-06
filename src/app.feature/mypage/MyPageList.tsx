import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MyPageList = () => {
  const router = useRouter();

  const onClickRouteList = (link: string) => {
    router.push(`/mypage/${link}`);
  };

  return (
    <StyledWrapper className="mypage-list">
      <div
        className="mypage-list__route"
        onClick={() => onClickRouteList('review')}
      >
        내가 쓴 리뷰
      </div>
      <div
        className="mypage-list__route"
        onClick={() => onClickRouteList('store')}
      >
        내가 등록한 식당
      </div>
      <div
        className="mypage-list__route"
        onClick={() => onClickRouteList('inquiry')}
      >
        1:1 문의
      </div>
      <div
        className="mypage-list__route"
        onClick={() => onClickRouteList('declare')}
      >
        공지사항
      </div>
      <div
        className="mypage-list__route"
        onClick={() => onClickRouteList('settings')}
      >
        설정
      </div>
      <div className="mypage-list__route">키즈존 가요 정보</div>
      <div className="mypage-list__route">키즈존 가요 후원하기</div>
    </StyledWrapper>
  );
};

export default MyPageList;

const StyledWrapper = styled.div`
  .mypage-list__route {
    cursor: pointer;
    padding: 0 20px;
    height: 48px;
    line-height: 48px;
    border-bottom: 0.5px solid var(--color-gray-100);

    &:last-child {
      border-bottom: none;
    }
  }
`;
