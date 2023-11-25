import { Helmet } from 'react-helmet';
import CategorySlider from '../Components/CategorySlider/CategorySlider';
import Statistics from '../Components/Statistics/Statistics';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | NewsForge Hub</title>
      </Helmet>
      <CategorySlider />
      <Statistics />
    </>
  );
};

export default Home;
