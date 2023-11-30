import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useApprovedArticles = (
  title = '',
  publication = '',
  tags = '',
  limit = 4
) => {
  const axios = useAxios();
  const {
    data: approvedArticles,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['approvedArticles'],
    queryFn: async () => {
      const res = await axios.get(
        `/articles?isApprove=Approved&title=${title}&publication=${publication}&tags=${tags}&limit=${limit}`
      );
      return res.data;
    },
  });
  return { approvedArticles, isLoading, isError, refetch };
};

export default useApprovedArticles;
