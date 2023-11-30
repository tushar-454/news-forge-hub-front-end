import { Helmet } from 'react-helmet';
import { FaRegClock } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import color from '../Data/Colors';
import useUserArticles from '../Hook/useUserArticles';
import useUserInfo from '../Hook/useUserInfo';
import Container from '../Shared/Container';
import SectionTitle from '../Shared/SectionTitle';
import premium from '../assets/icon/premium.png';

const MyArticleView = () => {
  const { userArticles, isLoading } = useUserArticles();
  const { userInfo, isLoading: userLoad } = useUserInfo();

  return (
    <section>
      <Helmet>
        <title>My Articles | NewsForge Hub</title>
      </Helmet>
      <SectionTitle>My Articles</SectionTitle>
      <Container>
        {!isLoading && userArticles.length === 0 && (
          <p className='text-center text-xl'>
            No aricle found. Please add your article
          </p>
        )}
        {/* all premum article div grid  */}
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10'>
          {!isLoading &&
            userArticles?.map((article, index) => (
              <div
                key={index}
                className={`p-5 border rounded-lg bg-[${
                  color[Math.floor(Math.random() * color.length)]
                }] relative`}
              >
                {article.isPremium === 'Approved' && (
                  <span className='absolute -top-5 -right-5'>
                    <img src={premium} className='w-20' />
                  </span>
                )}
                <div>
                  <img
                    src={article.image}
                    className='w-full h-48 object-cover rounded-lg'
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
                <div className='flex justify-between items-center'>
                  <h1 className='text-sm flex items-center gap-2 mt-4'>
                    <FaRegClock />
                    {new Date(article.date).toLocaleString()}
                  </h1>
                  <h1 className='text-sm flex items-center gap-2 mt-4'>
                    <IoEyeOutline className='text-xl' />
                    {article.viewCount}
                  </h1>
                </div>
                <h2 className='my-4 font-bold'>
                  Publication: {article.publication}
                </h2>
                <p>{article.description.slice(0, 111)}</p>
                <Link
                  to={
                    article.isPremium === 'Approved' &&
                    !userLoad &&
                    !userInfo.isPremium
                      ? ''
                      : `/all-articles/articles/${article._id}`
                  }
                >
                  <button
                    disabled={article.isPremium === 'Approved' ? false : true}
                    className={`inline-block mt-6 bg-pink-400 text-white
                    font-medium p-3 rounded-lg ${
                      article.isPremium === 'Approved' &&
                      !userLoad &&
                      !userInfo.isPremium
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
      </Container>
    </section>
  );
};

export default MyArticleView;
