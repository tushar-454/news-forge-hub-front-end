import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import Container from '../Shared/Container';
import SectionTitle from '../Shared/SectionTitle';
import banner from '../assets/images/banner.jpg';

const Subscriptions = () => {
  const [money, setMoney] = useState(0);
  //handle money set based on duration
  const handlePrice = (e) => {
    const time = e.target.value;
    if (time === 'minutes') {
      setMoney(5 * 1);
    }

    if (time === 'week') {
      setMoney(5 * 7);
    }

    if (time === 'month') {
      setMoney(5 * 30);
    }
  };
  return (
    <section>
      <Helmet>
        <title>Subscriptions | NewsForge Hub</title>
      </Helmet>
      <img src={banner} className='w-full' />
      <Container>
        <SectionTitle>Subscriptions</SectionTitle>
        <div className='w-full md:w-[768px] mx-auto '>
          <div className='flex gap-5 justify-between'>
            <div className='w-full'>
              <label
                htmlFor='plan'
                className={`block text-xl font-semibold my-2`}
              >
                Select your plan
              </label>
              <select
                name='plan'
                id='plan'
                className='border p-4 rounded-lg outline-none w-full text-lg'
              >
                <option value='basic'>Basic</option>
                <option value='pro'>Pro</option>
                <option value='enterprise'>Enterprise</option>
              </select>
            </div>
            <div className='w-full'>
              <label
                htmlFor='duration'
                className={`block text-xl font-semibold my-2`}
              >
                Subscription Time
              </label>
              <select
                name='duration'
                id='duration'
                className='border p-4 rounded-lg outline-none w-full text-lg'
                onChange={handlePrice}
              >
                <option value=''>Choose Subscription duration</option>
                <option value='minutes'>1 Minutes</option>
                <option value='week'>1 Week</option>
                <option value='month'>1 Month</option>
              </select>
            </div>
          </div>
          <h1 className='text-3xl font-bold my-4'>Total Amount : ${money}</h1>
          <Link to={'/payment'} state={money}>
            <Button displayName={'Checkout'} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Subscriptions;
