import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Link } from 'react-router-dom';

const sliderArr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const TopArticalSlider = () => {
  return (
    <Carousel autoPlay={true} emulateTouch={true} showThumbs={false}>
      {sliderArr.map((item, index) => (
        <div key={index} className='relative'>
          <img
            src='https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2023/11/19/tunnek.jpg'
            className='object-cover'
          />
          <div className='absolute bottom-0 bg-[#00000080] text-white w-full py-2 px-2 md:py-10 md:px-2 hover:backdrop-blur-md transition'>
            <Link
              to={'/'}
              className='text-lg md:text-2xl lg:text-4xl  font-bold hover:underline hover:underline-offset-4 scale-110 transition'
            >
              📌Indian tunnel: Rescuers consider manual drilling in final phase
              of operation
            </Link>
            <p className='w-full md:w-[768px] mx-auto my-5'>
              With the auger machine running into hurdles in the rubble, Indian
              rescuers are mulling switching over to manual drilling at the
              collapsed portion of a highway...
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TopArticalSlider;
