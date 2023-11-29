import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useApprovedArticles = () => {
  const axios = useAxios();
  const {
    data: approvedArticles,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['approvedArticles'],
    queryFn: async () => {
      const res = await axios.get(`/articles?isApprove=Approved`);
      return res.data;
    },
  });
  return { approvedArticles, isLoading, isError };
};

export default useApprovedArticles;
