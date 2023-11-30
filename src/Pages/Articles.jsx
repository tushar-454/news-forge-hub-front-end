import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FaRegClock } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import color from '../Data/Colors';
import useApprovedArticles from '../Hook/useApprovedArticles';
import usePublications from '../Hook/usePublications';
import useUserInfo from '../Hook/useUserInfo';
import Container from '../Shared/Container';
import SectionTitle from '../Shared/SectionTitle';
import premium from '../assets/icon/premium.png';

const Articles = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [publication, setPublication] = useState('');
  const [limit, setLimit] = useState(4);
  const { approvedArticles, isLoading, isError, refetch } = useApprovedArticles(
    title,
    publication,
    tags,
    limit
  );
  const { publications, isLoading: publicationLoad } = usePublications();
  const { userInfo, isLoading: userLoad } = useUserInfo();
  // handle title search
  const handleTitleSearch = (e) => {
    e.preventDefault();
    setTags('');
    setPublication('');
    setTitle(e.target.title.value);
    setTimeout(() => {
      refetch();
    }, 0);
  };
  const handlePublicationSearch = (e) => {
    setTitle('');
    setTags('');
    setPublication(e.target.value);
    setTimeout(() => {
      refetch();
    }, 0);
  };
  const handleTagSearch = (e) => {
    e.preventDefault();
    setTitle('');
    setPublication('');
    setTags(e.target.tags.value);
    setTimeout(() => {
      refetch();
    }, 0);
  };
  const resetSearch = (e) => {
    if (e.target.value.length === 0) {
      setTitle('');
      setTags('');
    }
    setTimeout(() => {
      refetch();
    }, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150 && window.scrollY < 180) {
        setLimit(8);
        setTimeout(() => {
          refetch();
        }, 0);
      }
      if (window.scrollY > 750 && window.scrollY < 780) {
        setLimit(12);
        setTimeout(() => {
          refetch();
        }, 0);
      }
      if (window.scrollY > 1350 && window.scrollY < 1380) {
        setLimit(16);
        setTimeout(() => {
          refetch();
        }, 0);
      }
      if (window.scrollY > 1950 && window.scrollY < 1980) {
        setLimit(20);
        setTimeout(() => {
          refetch();
        }, 0);
      }
      if (window.scrollY > 2600 && window.scrollY < 2630) {
        setLimit(25);
        setTimeout(() => {
          refetch();
        }, 0);
      }
    });
  }, []);

  return (
    <section>
      <Helmet>
        <title>Aticles | NewsForge Hub</title>
      </Helmet>
      <Container>
        <SectionTitle>All Articles</SectionTitle>
        {/* search divition  */}
        <div className='my-10 flex flex-col sm:flex-row gap-5'>
          <div className='flex flex-col items-center'>
            <form onSubmit={handleTitleSearch}>
              <Input
                displayName={'Search By Title'}
                placeholder='enter search title'
                id={'title'}
                name={'title'}
                onChange={resetSearch}
              />
              <Button type='submit' displayName={'Search'} />
            </form>
          </div>
          <div className='flex flex-col items-center'>
            <form onSubmit={handleTagSearch}>
              <Input
                displayName={'Search By Tag'}
                placeholder='enter search tags'
                id={'tags'}
                name={'tags'}
                onChange={resetSearch}
              />
              <Button displayName={'Search'} type={'submit'} />
            </form>
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
                onChange={handlePublicationSearch}
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
        {isError && toast.error('There was an error')}
        {!isLoading &&
          approvedArticles.length === 0 &&
          toast.error('No articles found')}
        {!isLoading && approvedArticles.length > 0 && (
          <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10'>
            {!isLoading &&
              approvedArticles?.map((article, index) => (
                <div
                  key={index}
                  className={`${
                    article.isApprove !== 'Approved' ? 'hidden' : 'block'
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
                        : `articles/${article._id}`
                    }
                  >
                    <button
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
        )}
      </Container>
    </section>
  );
};

export default Articles;
