import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { FaRegClock } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import useAxios from '../Hook/useAxios';
import Container from '../Shared/Container';

const ArticlesDetails = () => {
  const axios = useAxios();
  const params = useParams();
  const { data: articlesDetails, isLoading } = useQuery({
    queryKey: ['articlesDetails'],
    queryFn: async () => {
      const res = await axios.get(`/articles/${params.id}`);
      return res.data;
    },
  });
  // eslint-disable-next-line no-unused-vars
  const { data } = useQuery({
    queryKey: ['updateCount'],
    queryFn: async () => {
      const res = await axios.put(`articles/${params.id}`);
      return res.data;
    },
  });
  return (
    <section>
      <Helmet>
        <title>
          {!isLoading ? articlesDetails.title : 'Articles Details'} | NewsForge
          Hub
        </title>
      </Helmet>
      <Container>
        <div className='w-full lg:w-2/3 mx-auto my-10'>
          {!isLoading && (
            <div>
              <div className='flex gap-2'>
                Tags:
                {articlesDetails.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='text-sm px-1 rounded-full bg-slate-50'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className='text-4xl font-semibold my-5'>
                {articlesDetails.title}
              </h1>
              <p className='flex gap-5 justify-start items-center mb-5'>
                <span className='flex items-center gap-1'>
                  <FaRegClock />
                  {new Date(articlesDetails.date).toLocaleString()}
                </span>
                <span className='flex items-center gap-1'>
                  <IoEyeOutline className='text-xl' />
                  {articlesDetails.viewCount}
                </span>
              </p>
              <h2 className='text-xl'>
                Publisher: {articlesDetails.publication}
              </h2>
              <img
                src={articlesDetails.image}
                className='w-full h-[525px] object-cover my-5'
              />
              <p>{articlesDetails.description}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ArticlesDetails;
