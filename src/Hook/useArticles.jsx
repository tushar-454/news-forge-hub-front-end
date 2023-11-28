import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useArticles = () => {
  const axios = useAxios();
  const {
    data: allArticles,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['allArticles'],
    queryFn: async () => {
      const res = await axios.get(`/articles`);
      return res.data;
    },
  });
  return { allArticles, isLoading, isError, refetch };
};

export default useArticles;
