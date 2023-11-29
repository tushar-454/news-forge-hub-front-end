import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAllUser = () => {
  const axios = useAxios();
  const {
    data: allUsers,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['allusers'],
    queryFn: async () => {
      const res = await axios.get(`/admin/users`);
      return res.data;
    },
  });

  return {
    allUsers,
    isLoading,
    isError,
    refetch,
  };
};

export default useAllUser;
