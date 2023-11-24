import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Fragment } from 'react';
import Container from '../../Shared/Container';
const imageList = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
const CategorySlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free',
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <Container>
      <div className='w-full'>
        <div ref={sliderRef} className='keen-slider my-10'>
          {imageList?.map((item, index) => (
            <Fragment key={index}>
              <div className='keen-slider__slide' style={{ minWidth: '110px' }}>
                <img src='https://cutt.ly/owIUVt5o' className='w-32' />
              </div>
              <div className='keen-slider__slide' style={{ minWidth: '110px' }}>
                <img src='https://cutt.ly/wwIUVEd2' className='w-32' />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategorySlider;
