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
