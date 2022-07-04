import { useInfiniteQuery, useQuery } from 'react-query';
import API from 'app.modules/api';
import { API_STORE_LIST } from 'app.modules/api/keyFactory';

const data = [
  {
    id: 1,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    isBookmark: true,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 2,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 4,
    isKidsZone: false,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 3,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 4,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 5,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 6,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 7,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 8,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 9,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    thumbnail: '/images/sample/food_img.png',
  },
  {
    id: 10,
    address: '남양주시 다산동',
    name: '식당',
    reviewCount: 10,
    bookmarkCount: 5,
    isKidsZone: true,
    thumbnail: '/images/sample/food_img.png',
  },
];

const requestStoreList = async ({ pageParam = 0 }) => {
  try {
    return { edges: data, pageParam: pageParam };
  } catch (err) {
    console.error(err);
  }
};

const useQueryStoreList = () => {
  return useInfiniteQuery(
    API_STORE_LIST,
    async ({ pageParam = 0 }) => {
      return await requestStoreList({ pageParam });
    },
    {
      getNextPageParam: (lastPage, page) => lastPage.pageParam + 1,
    }
  );
};

export default useQueryStoreList;
