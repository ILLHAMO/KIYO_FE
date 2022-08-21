import { useInfiniteQuery } from 'react-query';
import API from 'app.modules/api';
import { API_NOTICE } from 'app.modules/api/keyFactory';

export const requestDeclareList = async ({ pageParam = null }) => {
  try {
    const dataset = await API.GET({
      url: API_NOTICE,
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

const useQueryDeclareList = () => {
  return useInfiniteQuery(
    [API_NOTICE],
    async ({ pageParam = null }) => {
      return await requestDeclareList({ pageParam });
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

export default useQueryDeclareList;
