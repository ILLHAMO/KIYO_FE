import { useInfiniteQuery } from 'react-query';
import API from 'app.modules/api';
import { API_STORES } from 'app.modules/api/keyFactory';

export const requestStoreList = async ({ pageParam = null, filter }) => {
  try {
    const dataset = await API.GET({
      url: API_STORES,
      data: {
        ...(filter?.convenience.length > 0 && {
          convenienceIds: filter?.convenience,
        }),
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

const useQueryStoreList = (filter) => {
  return useInfiniteQuery(
    [API_STORES, filter],
    async ({ pageParam = null }) => {
      return await requestStoreList({ pageParam, filter });
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
