import { useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import color from '../Data/Colors';
import useArticles from '../Hook/useArticles';
import usePublications from '../Hook/usePublications';
import Container from '../Shared/Container';
import SectionTitle from '../Shared/SectionTitle';
import premium from '../assets/icon/premium.png';

const Articles = () => {
  const [title, setTitle] = useState('');
  const { allArticles, isLoading, isError, refetch } = useArticles(title);
  const { publications, isLoading: publicationLoad } = usePublications();
  const handleTitleSearch = (e) => {
    e.preventDefault();
    setTitle(e.target.title.value);
    refetch();
  };
  return (
    <section>
      <Helmet>
        <title>Aticles | NewsForge Hub</title>
      </Helmet>
      <Container>
        <SectionTitle>All Articles</SectionTitle>
        {/* search divition  */}
        <div className='my-10 flex gap-5'>
          <div className='flex flex-col items-center'>
            <form onSubmit={handleTitleSearch}>
              <Input
                displayName={'Search By Title'}
                placeholder='enter search title'
                id={'title'}
                name={'title'}
              />
              <Button type='submit' displayName={'Search'} />
            </form>
          </div>
          <div className='flex flex-col items-center'>
            <Input
              displayName={'Search By Tag'}
              placeholder='enter search tags'
              id={'title'}
            />
            <Button displayName={'Search'} />
          </div>
          <div>
            <div>
              <label
                htmlFor='publication'
                className={`block text-xl font-semibold my-2`}
              >
                Publication
              </label>
              <select
                name='publication'
                id='publication'
                className='border p-4 rounded-lg outline-none w-full text-lg'
              >
                <option value=''>Choose your publication</option>
                {isError && (
                  <option value={''}>There was an error. Reload</option>
                )}
                {!publicationLoad &&
                  publications.map((publication, index) => (
                    <option key={index} value={publication.publicationName}>
                      {publication.publicationName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        {/* all article div grid  */}
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
                  article.isApprove === 'Pending' ? 'hidden' : 'block'
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
      </Container>
    </section>
  );
};

export default Articles;
