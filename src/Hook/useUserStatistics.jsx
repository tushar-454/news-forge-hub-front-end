import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useUserStatistics = () => {
  const axios = useAxios();
  const { data: userStatistics, isLoading: userStatisticsLoad } = useQuery({
    queryKey: ['statistics'],
    queryFn: async () => {
      const res = await axios.get('/statistics/users');
      return res.data;
    },
  });
  return { userStatistics, userStatisticsLoad };
};

export default useUserStatistics;
