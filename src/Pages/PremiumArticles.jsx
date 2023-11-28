import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import color from '../Data/Colors';
import useArticles from '../Hook/useArticles';
import Container from '../Shared/Container';
import SectionTitle from '../Shared/SectionTitle';
import premium from '../assets/icon/premium.png';

const PremiumArticles = () => {
  const { allArticles, isLoading, isError } = useArticles();
  return (
    <section>
      <SectionTitle>Premium Articles</SectionTitle>
      <Container>
        {/* all premum article div grid  */}
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10'>
          {isError && toast.error('There was an error')}
          {!isLoading &&
            allArticles.length === 0 &&
            toast.error('No articles found')}
          {!isLoading &&
            allArticles?.map((article, index) => (
              <div
                key={index}
                className={`${
                  article.isPremium === 'Approved' ? 'block' : 'hidden'
                } p-5 border rounded-lg bg-[${
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
                <Link to={`articles/${article._id}`}>
                  <button
                    disabled={article.isPremium === 'Approved' ? false : true}
                    className={`inline-block mt-6 bg-pink-400 text-white
                    font-medium p-3 rounded-lg ${
                      article.isPremium === 'Approved'
                        ? 'cursor-pointer'
                        : 'cursor-not-allowed bg-pink-200'
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

export default PremiumArticles;
