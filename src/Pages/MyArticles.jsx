import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import color from '../Data/Colors';
import useUserArticles from '../Hook/useUserArticles';
import PageTitle from '../Shared/PageTitle';
import premium from '../assets/icon/premium.png';

const MyArticles = () => {
  const { userArticles, isLoading, isError } = useUserArticles();
  return (
    <div>
      <Helmet>
        <title>My Articles | NewsForge Hub</title>
      </Helmet>
      <PageTitle>All Articles</PageTitle>
      {/* all article div grid  */}
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10'>
        {isError && toast.error('There was an error')}
        {!isLoading &&
          userArticles.length === 0 &&
          toast.error('No articles found')}
        {!isLoading &&
          userArticles?.map((article, index) => (
            <div
              key={index}
              className={`${
                article.isApprove === 'Pending' ? 'hidden' : 'block'
              } p-5 border rounded-lg bg-[${
                color[Math.floor(Math.random() * color.length)]
              }] relative`}
            >
              {article.isApprove === 'Approved' && (
                <span className='absolute -top-5 -right-5'>
                  <img src={premium} className='w-20' />
                </span>
              )}
              <div>
                <img
                  src={article.image}
                  className='w-full h-40 object-cover rounded-lg'
                />
              </div>
              <div className='my-3 flex flex-wrap gap-2'>
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='text-sm px-1 rounded-full bg-slate-50'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className='text-xl'>{article.title}</h1>
              <h2 className='my-4 font-bold'>
                Publication: {article.publication}
              </h2>
              <p>{article.description.slice(0, 111)}</p>
              <Link to={`/all-articles/articles/${article._id}`}>
                <button
                  className={`inline-block mt-6 bg-pink-400 text-white
                    font-medium p-3 rounded-lg ${
                      article.isPremium === 'Approved'
                        ? 'cursor-not-allowed bg-pink-200'
                        : 'cursor-pointer'
                    }`}
                >
                  View Details
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyArticles;
