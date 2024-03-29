import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import API from 'app.modules/api';
import { TypeStoreInfo } from 'app.modules/type/type';
import { API_BOOKMARK, API_STORE_BOOKMARK } from 'app.modules/api/keyFactory';

type TProps = {
  storeInfo?: TypeStoreInfo;
};

const StoreCard: React.FC<TProps> = ({ storeInfo }) => {
  const router = useRouter();

  const {
    id,
    images,
    booked,
    kids,
    address,
    name,
    reviewCount,
    bookmarkCount,
  } = storeInfo;

  const [isBookmark, setIsBookmark] = useState(booked);
  const [bookmarkCnt, setBookmarkCnt] = useState(bookmarkCount);

  const queryClient = useQueryClient();

  const handleBookmark = async (isBookmark) => {
    try {
      if (isBookmark) {
        setIsBookmark(!isBookmark);
        setBookmarkCnt((prev) => prev - 1);
        await API.DELETE({ url: API_BOOKMARK(id), data: {} });
      } else {
        setIsBookmark(!isBookmark);
        setBookmarkCnt((prev) => prev + 1);
        await API.PUT({ url: API_BOOKMARK(id), data: {} });
      }

      if (router.pathname !== '/bookmark')
        queryClient.resetQueries(API_STORE_BOOKMARK);
    } catch (err) {
      setIsBookmark(!isBookmark);
      setBookmarkCnt(bookmarkCnt);
    }
  };

  if (!storeInfo.id) return null;
  return (
    <StyledWrapper className="store-card">
      <div className="store-card__image-container">
        <div
          className="store-card__image"
          onClick={() => router.push(`/store/${id}?pathname=${router.asPath}`)}
        >
          <img src={images[0].path} />
        </div>
        <div className="store-card__bookmark">
          <img
            src={`/images/common/bookmark_${isBookmark ? 'on' : 'off'}.png`}
            className={`store-card__bookmark-btn store-card__bookmark-btn--${
              isBookmark ? 'on' : 'off'
            }`}
            onClick={() => handleBookmark(isBookmark)}
          />
        </div>
        {kids && (
          <div
            className="store-card__kidszone"
            onClick={() =>
              router.push(`/store/${id}?pathname=${router.asPath}`)
            }
          >
            <img src="/images/common/kidszone_badge.png" />
          </div>
        )}
      </div>
      <div
        className="store-card__info-container"
        onClick={() => router.push(`/store/${id}?pathname=${router.asPath}`)}
      >
        <div className="store-card__info">
          <div className="store-card__location">{address}</div>
          <div className="store-card__name">{name}</div>
        </div>
        <div className="store-card__user-score">
          <div className="store-card__bookmark">
            <img src="/images/common/bookmark_on.png" />
            {bookmarkCnt}
          </div>
          <div className="store-card__review">
            <img src="/images/common/revisit.png" />
            {reviewCount}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default StoreCard;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;

  .store-card__image-container {
    position: relative;

    .store-card__image {
      width: 100%;
      padding: 50%;
      position: relative;
      overflow: hidden;

      img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        border-radius: 10px;
      }
    }

    .store-card__bookmark {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 10;

      img {
        width: 20px;
      }

      .store-card__bookmark-btn {
      }

      .store-card__bookmark-btn--on {
        animation: fadein 200ms;
      }
    }

    .store-card__kidszone {
      position: absolute;
      bottom: 4px;
      right: 4px;

      img {
        width: 52px;
      }
    }
  }

  .store-card__info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4px;

    .store-card__info {
      margin-right: 8px;

      .store-card__location {
        margin-bottom: 4px;
        font-size: 12px;
        color: var(--color-gray-300);
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
      }

      .store-card__name {
        font-size: 16px;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
      }
    }

    .store-card__user-score {
      font-size: 12px;

      .store-card__bookmark {
        margin-bottom: 4px;
      }

      .store-card__bookmark,
      .store-card__review {
        display: flex;
        align-items: center;

        img {
          width: 12px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
  }

  @keyframes fadein {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
