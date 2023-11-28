import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useUserArticles = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const {
    data: userArticles,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['userArticles'],
    queryFn: async () => {
      const res = await axios.get(`/articles?email=${user.email}`);
      return res.data;
    },
  });
  return {
    userArticles,
    isLoading,
    isError,
  };
};

export default useUserArticles;
