import { useInfiniteQuery } from 'react-query';
import API from 'app.modules/api';
import { API_STORE_SEARCH } from 'app.modules/api/keyFactory';

export const requestSearchStore = async ({
  pageParam = null,
  keyword,
  filter,
}) => {
  try {
    const dataset = await API.GET({
      url: API_STORE_SEARCH,
      data: {
        ...(keyword && {
          keyword,
        }),
        ...(filter?.convenienceIds.length > 0 && {
          convenienceIds: filter?.convenienceIds,
        }),
        ...(filter?.categoryIds.length > 0 && {
          categoryIds: filter?.categoryIds,
        }),
        ...(pageParam ? { lastStoreId: pageParam, size: 10 } : { size: 10 }),
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

const useQuerySearchStore = (keyword, filter) => {
  return useInfiniteQuery(
    [API_STORE_SEARCH, keyword, filter],
    async ({ pageParam = null }) => {
      return await requestSearchStore({ pageParam, keyword, filter });
    },
    {
      cacheTime: 0,
      getNextPageParam: (lastPage, page) => {
        if (lastPage?.last) return false;
        return lastPage?.edges[5].id;
      },
    }
  );
};

export default useQuerySearchStore;
