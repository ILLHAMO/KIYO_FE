import { useInfiniteQuery } from 'react-query';
import API from 'app.modules/api';
import { API_QNA } from 'app.modules/api/keyFactory';

export const requestInquiryList = async ({ pageParam = null }) => {
  try {
    const dataset = await API.GET({
      url: API_QNA,
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

const useQueryInquiryList = () => {
  return useInfiniteQuery(
    [API_QNA],
    async ({ pageParam = null }) => {
      return await requestInquiryList({ pageParam });
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

export default useQueryInquiryList;
