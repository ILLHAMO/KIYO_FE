import API from 'app.modules/api';
import { useQuery } from 'react-query';
import { qs } from 'app.modules/util/qs';

export const request = async ({ queryKey, param, ...props }) => {
  try {
    let url = queryKey;
    if (param) url = url + qs.stringURL(param);
    const res = await API.GET({ url, data: {} });
    return res.data;
  } catch (error) {
    throw error;
  }
};

const useQueryFn = (querys, options = {}) => {
  const queryKey = Array.isArray(querys) ? querys[0] : querys;
  const param = Array.isArray(querys) ? querys[1] : null;
  const { data, error, isLoading, ...props }: any = useQuery(
    queryKey,
    () => request({ queryKey, param }),
    {
      ...options,
      enabled: !!querys,
    }
  );

  return {
    ...props,
    data,
    error,
    isLoading,
  };
};

export default useQueryFn;
