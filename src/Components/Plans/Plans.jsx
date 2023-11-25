import { IoCheckbox } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';

const pricingPlans = [
  {
    planType: 'Basic',
    desc: 'Ideal for individual publishers starting out',
    salePrice: 49.99,
    price: 79.99,
    features: [
      'Access to article templates',
      'Limited ad space on the platform',
      'Basic analytics and performance tracking',
      'Support for up to 5 published articles per day',
    ],
  },
  {
    planType: 'Pro',
    desc: 'Great for growing publishers and small teams',
    salePrice: 99.99,
    price: 149.99,
    features: [
      'Advanced article customization options',
      'Expanded ad space and revenue sharing options',
      'In-depth analytics and audience engagement metrics',
      'Support for up to 15 published articles per day',
      '24/7 customer support',
    ],
  },
  {
    planType: 'Enterprise',
    desc: 'For established publishers and large media companies',
    salePrice: 199.99,
    price: 299.99,
    features: [
      'Customizable branded templates and layouts',
      'Priority ad placements and revenue optimization tools',
      'Comprehensive analytics with audience segmentation',
      'Unlimited published articles per day',
      'Dedicated account manager and technical support',
    ],
  },
];

const Plans = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Plans</SectionTitle>
        {/* plans wrapper  */}
        <div className='grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.planType === 'Enterprise'
                  ? 'bg-[url("https://t4.ftcdn.net/jpg/03/78/38/01/360_F_378380115_CHfN9nXkCa2Hnmzu6HhPbIAr6mb3U12W.jpg")] bg-no-repeat bg-cover text-[#FFBE63]'
                  : plan.planType === 'Pro'
                  ? 'bg-gradient-to-r from-[#353C66] to-[#1F233C] text-white'
                  : 'bg-white'
              } bg-white border p-10 rounded-lg shadow-outerShadow`}
            >
              <h1 className='text-3xl text-center font-semibold'>
                {plan.planType}
              </h1>
              <p className='text-lg text-center font-medium w-64 mx-auto my-2'>
                {plan.desc}
              </p>
              <h1 className='text-4xl text-center text-red-600 font-black mt-8'>
                ${plan.salePrice}
              </h1>
              <p className='mb-8 text-center line-through'>
                reg. ${plan.price}
              </p>
              <Link
                to={'/subscriptions'}
                className={`block mb-8 text-center text-white font-semibold ${
                  plan.planType === 'Enterprise'
                    ? 'bg-[#FFBE63]'
                    : plan.planType === 'Pro'
                    ? 'bg-gradient-to-r from-[#FC5A6D] to-[#F02128]'
                    : 'bg-gradient-to-r from-[#353C66] to-[#1F233C]'
                } rounded-full py-3 hover:scale-105 transition`}
              >
                BUY NOW
              </Link>
              <hr />
              <ul className='mt-8'>
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex gap-2 ${
                      plan.planType === 'Enterprise'
                        ? 'text-[#FFBE63]'
                        : plan.planType === 'Pro'
                        ? 'text-white'
                        : 'text-[#A4ACBB]'
                    }`}
                  >
                    <IoCheckbox className='relative -bottom-1 w-8' /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Plans;
