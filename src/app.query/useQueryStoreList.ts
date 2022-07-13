import { useInfiniteQuery } from 'react-query';
import API from 'app.modules/api';
import { API_STORES } from 'app.modules/api/keyFactory';

const requestStoreList = async ({ pageParam = null }) => {
  try {
    const dataset = await API.GET({
      url: API_STORES,
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

const useQueryStoreList = () => {
  return useInfiniteQuery(
    API_STORES,
    async ({ pageParam = null }) => {
      return await requestStoreList({ pageParam });
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
