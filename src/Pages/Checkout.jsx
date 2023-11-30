import { Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../Components/CheckoutForm/CheckoutForm';
import Container from '../Shared/Container';
import SectionTitle from '../Shared/SectionTitle';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Checkout = () => {
  const { state } = useLocation();
  return (
    <div>
      <Helmet>
        <title>Checkout | NewsForge Hub</title>
      </Helmet>
      <Container>
        <SectionTitle>Payment Now</SectionTitle>
        <div className='w-full md:w-[768px] mx-auto'>
          <h1 className='text-3xl '>
            📌 Your Total Payment Amount - {state ?? 0}
          </h1>

          <div className='my-10'>
            <Elements stripe={stripePromise}>
              <CheckoutForm totalAmount={state} />
            </Elements>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
