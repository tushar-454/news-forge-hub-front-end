import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const usePublications = () => {
  const axios = useAxios();

  const {
    data: publications,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['publications'],
    queryFn: async () => {
      const res = await axios.get(`/admin/getPublication`);
      return res.data;
    },
  });
  return { publications, isLoading, isError, refetch };
};

export default usePublications;
