import React, { useState } from 'react';
import styled from 'styled-components';
import { message } from 'antd';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import API from 'app.modules/api';
import { TypeStoreDetailInfo } from 'app.modules/type/type';
import { API_BOOKMARK, API_STORE_BOOKMARK } from 'app.modules/api/keyFactory';

type TProps = {
  storeDetailInfo: TypeStoreDetailInfo;
};

const StoreTopBannerPanel: React.FC<TProps> = ({ storeDetailInfo }) => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { storeId: id } = router.query;

  const { name, simpleComment, tag, call, address, booked, addressMap } =
    storeDetailInfo;

  const [isBookmark, setIsBookmark] = useState(booked);

  const handleClickMap = () => {
    router.push(`https://map.kakao.com/link/search/${addressMap}`);
  };

  const handleClickPhone = async () => {
    await navigator.clipboard.writeText(call);
    message.success('클립보드에 복사되었습니다!');
  };

  const handleClickBookmark = async (isBookmark) => {
    try {
      if (isBookmark) {
        setIsBookmark(!isBookmark);
        await API.DELETE({ url: API_BOOKMARK(id), data: {} });
      } else {
        setIsBookmark(!isBookmark);
        await API.PUT({ url: API_BOOKMARK(id), data: {} });
      }

      if (router.pathname !== '/bookmark')
        queryClient.resetQueries(API_STORE_BOOKMARK);
    } catch (err) {
      setIsBookmark(!isBookmark);
    }
  };

  const handleClickShare = () => {
    console.log('share');
    // TO DO 공유 API
  };

  return (
    <StyledWrapper className="store-top-banner-panel">
      <div className="store-top-banner-panel__name">{name}</div>
      <div className="store-top-banner-panel__sub-name">{simpleComment}</div>
      <div className="store-top-banner-panel__info">
        <div className="food">
          {tag.map((item, idx) => (
            <div key={`tag-${idx}`}>{item.name}</div>
          ))}
        </div>
        {/* 갯수제한 필요함,, 몇개까지 할 지 논의 */}
        <div className="location">{address}</div>
      </div>
      {/*TODO : 로직 집어넣었을 경우 코드 길어지면 파일 분리 필요함*/}
      <div className="store-top-banner-panel__func-wrap">
        <div className="store-top-banner-panel__func-item">
          <div onClick={handleClickMap}>
            <img src="/images/store/place_black.png" />
            <div className="store-top-banner-panel__text">길찾기</div>
            {/* 길찾기에 addressMap 넣어서 검색한 지도 페이지 연결*/}
          </div>
        </div>
        <div className="store-top-banner-panel__func-item">
          <div onClick={handleClickPhone}>
            <img src="/images/store/call_black.png" />
            <div className="store-top-banner-panel__text">전화</div>
          </div>
        </div>
        <div className="store-top-banner-panel__func-item">
          <div onClick={() => handleClickBookmark(isBookmark)}>
            {isBookmark ? (
              <HeartFilled className="store-top-banner-panel__icon" />
            ) : (
              <HeartOutlined className="store-top-banner-panel__icon" />
            )}
            <div className="store-top-banner-panel__text">찜</div>
          </div>
        </div>
        <div className="store-top-banner-panel__func-item">
          <div onClick={handleClickShare}>
            <img src="/images/store/share_black.png" />
            <div className="store-top-banner-panel__text">공유</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default StoreTopBannerPanel;

const StyledWrapper = styled.div`
  margin: 0 20px;
  width: calc(100% - 40px);
  text-align: center;
  padding: 20px 8px 16px;
  background-color: var(--color-white);
  position: absolute;
  top: 172px;
  border-radius: 15px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.03);

  .store-top-banner-panel__name {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .store-top-banner-panel__sub-name {
    font-size: 12px;
    margin-bottom: 8px;
  }

  .store-top-banner-panel__info {
    font-size: 12px;
    display: flex;
    margin-bottom: 16px;

    .food {
      display: flex;
      justify-content: center;
      text-align: center;
      width: 50%;
      color: var(--color-gray-300);
      border-right: 0.5px solid var(--color-gray-300);

      div {
        margin-left: 10px;
      }
    }

    .location {
      text-align: center;
      width: 50%;
      color: var(--color-gray-300);
      border-left: 0.5px solid var(--color-gray-300);
    }
  }

  .store-top-banner-panel__func-wrap {
    display: flex;

    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }

    .store-top-banner-panel__func-item {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .store-top-banner-panel__icon {
        margin-right: 4px;
      }

      .store-top-banner-panel__text {
        font-size: 12px;
      }
    }
  }
`;
