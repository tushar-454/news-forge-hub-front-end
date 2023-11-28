import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAdminStatistics = () => {
  const axios = useAxios();
  const { data: adminStatistics, isLoading } = useQuery({
    queryKey: ['adminStatistics'],
    queryFn: async () => {
      const res = await axios.get(
        `/statistics/publications?approvedType=Approved`
      );
      return res.data;
    },
  });
  return { adminStatistics, isLoading };
};

export default useAdminStatistics;
