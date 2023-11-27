import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useUserInfo = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: userInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const res = await axios.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });
  return { userInfo, isError, isLoading };
};

export default useUserInfo;
