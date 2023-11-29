import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const usePremiumArticles = () => {
  const axios = useAxios();
  const { data: premiumArticles, isLoading } = useQuery({
    queryKey: ['premiumQuery'],
    queryFn: async () => {
      const res = await axios.get(`/articles?isPremium=Approved`);
      return res.data;
    },
  });
  return { premiumArticles, isLoading };
};

export default usePremiumArticles;
