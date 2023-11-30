import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Link } from 'react-router-dom';
import useTopArticles from '../../Hook/useTopArticles';

const TopArticalSlider = () => {
  const { topArticles, topArticlesLoad } = useTopArticles();
  return (
    <Carousel autoPlay={true} emulateTouch={true} showThumbs={false}>
      {!topArticlesLoad &&
        topArticles?.map((article, index) => (
          <div key={index} className='relative'>
            <img src={article.image} className='object-cover' />
            <div className='absolute bottom-0 bg-[#00000080] text-white w-full py-2 px-2 md:py-10 md:px-2 hover:backdrop-blur-md transition'>
              <Link
                to={
                  article.isPremium === 'Approved'
                    ? '/premium-articles'
                    : `/all-articles/articles/${article._id}`
                }
                className='text-lg md:text-2xl lg:text-4xl  font-bold hover:underline hover:underline-offset-4 scale-110 transition'
              >
                {article.title}
              </Link>
              <p className='w-full md:w-[768px] mx-auto my-5'>
                {article.description.slice(0, 111)}
              </p>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default TopArticalSlider;
