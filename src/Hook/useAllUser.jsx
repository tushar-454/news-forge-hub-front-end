import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAllUser = (page = 0) => {
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

  const {
    data: paginationUser,
    isLoading: pagiUserLoad,
    refetch: pagiUserRefetch,
  } = useQuery({
    queryKey: ['paniUsers'],
    queryFn: async () => {
      const res = await axios.get(`/admin/users?limit=${2}&page=${page}`);
      return res.data;
    },
  });

  return {
    allUsers,
    isLoading,
    isError,
    refetch,
    paginationUser,
    pagiUserLoad,
    pagiUserRefetch,
  };
};

export default useAllUser;
