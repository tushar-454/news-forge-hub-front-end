import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useTopArticles = () => {
  const axios = useAxios();
  const { data: topArticles, isLoading: topArticlesLoad } = useQuery({
    queryKey: ['topArticles'],
    queryFn: async () => {
      const res = await axios.get(`articles?sortWay=desc&limit=6`);
      return res.data;
    },
  });
  return { topArticles, topArticlesLoad };
};

export default useTopArticles;
