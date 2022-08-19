import { useInfiniteQuery } from 'react-query';
import API from 'app.modules/api';
import { API_STORE_BOOKMARK } from 'app.modules/api/keyFactory';

export const requestBookmarkList = async ({ pageParam = null }) => {
  try {
    const dataset = await API.GET({
      url: API_STORE_BOOKMARK,
      data: {
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

const useQueryBookmarkList = () => {
  return useInfiniteQuery(
    [API_STORE_BOOKMARK],
    async ({ pageParam = null }) => {
      return await requestBookmarkList({ pageParam });
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

export default useQueryBookmarkList;
