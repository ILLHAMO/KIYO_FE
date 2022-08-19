import { useInfiniteQuery } from 'react-query';
import API from 'app.modules/api';
import { API_STORES } from 'app.modules/api/keyFactory';

export const requestStoreList = async ({
  pageParam = null,
  filter,
  geocoder,
}) => {
  try {
    const dataset = await API.GET({
      url: API_STORES,
      data: {
        ...(filter?.convenience.length > 0 && {
          convenienceIds: filter?.convenience,
        }),
        address: encodeURI(geocoder[0].region_2depth_name),
        ...(filter?.category.length > 0 && { categoryIds: filter?.category }),
        ...(pageParam ? { lastStoreId: pageParam, size: 6 } : { size: 6 }),
      },
    });

    return {
      last: dataset.data?.last,
      edges: dataset.data?.content,
      pageParam: pageParam,
    };
  } catch (err) {
    console.error(err);
  }
};

const useQueryStoreList = (filter, geocoder) => {
  return useInfiniteQuery(
    [API_STORES, filter, geocoder],
    async ({ pageParam = null }) => {
      return await requestStoreList({ pageParam, filter, geocoder });
    },
    {
      getNextPageParam: (lastPage, page) => {
        if (lastPage?.last) return false;
        return lastPage?.edges[5].id;
      },
    }
  );
};

export default useQueryStoreList;
