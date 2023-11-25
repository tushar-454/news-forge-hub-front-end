import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import CategorySlider from '../Components/CategorySlider/CategorySlider';
import Statistics from '../Components/Statistics/Statistics';
import SubscribeModal from '../Components/SubscribeModal/SubscribeModal';
import TopArticalSlider from '../Components/TopArticalSlider/TopArticalSlider';

const Home = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowModal(true);
    }, 10000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | NewsForge Hub</title>
      </Helmet>
      <TopArticalSlider />
      <CategorySlider />
      <Statistics />
      {isShowModal && <SubscribeModal closeFunc={setIsShowModal} />}
    </>
  );
};

export default Home;
