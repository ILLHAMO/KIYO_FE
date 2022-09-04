export type TypeStoreInfo = {
  id?: number;
  images: Array<{
    path: string;
  }>;
  booked: boolean;
  kids: boolean;
  address?: string;
  name: string;
  reviewCount: number;
  bookmarkCount: number;
};

export type TypeStoreDetailInfo = {
  address: string;
  addressMap: string;
  booked: boolean;
  call: string;
  convenienceIds: number[];
  detailComment: string;
  images: { id: number; path: string }[];
  kids: boolean;
  menuResponses: {
    id: number;
    name: string;
    menuOptionResponses: { id: number; name: string }[];
  }[];
  name: string;
  reviewResponses: TypeReviewInfo[];
  simpleComment: string;
  tag: { name: string }[];
  time: string[];
};

export type TypeUserInfo = {
  nickname: string;
  userProfileImagePath: string;
};

export type TypeUserReviewInfo = {
  address: string;
  content: string;
  reviewId: number;
  reviewImages: { id: number; path: string }[];
  score: string;
  storeImage: {
    id: number;
    imagePath: string;
  };
  storeName: string;
  updateTime: string;
};

export type TypeReviewInfo = {
  content: string;
  currentUserReview: boolean;
  id: number;
  reviewImages: { id: number; path: string }[];
  reviewerId: string;
  reviewerImage: string;
  reviewerName: string;
  score: 'HIGH' | 'MIDDLE' | 'LOW';
  updatedDate: string;
};

export type TypeUserStoreInfo = {
  storeId: number;
  name: string;
  address: string;
  storeImage: {
    id: number;
    imagePath: string;
  };
  assigned: boolean;
};
