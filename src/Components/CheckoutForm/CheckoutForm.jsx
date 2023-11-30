import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import useAuth from '../../Hook/useAuth';
import useAxios from '../../Hook/useAxios';

const CheckoutForm = ({ totalAmount }) => {
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const axios = useAxios();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (totalAmount > 0) {
      axios
        .post('/payment/create-payment-intent', { price: totalAmount })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axios, totalAmount]);

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (!stripe || !elements) return;
      const card = elements.getElement(CardElement);
      if (card == null) return;

      const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        toast.error(error.message);
      } else {
        //
      }

      // confirm payment
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
            },
          },
        });
      if (confirmError) {
        //
      } else {
        if (paymentIntent.status === 'succeeded') {
          setTransactionId(paymentIntent.id);

          let premiumRemainTime;

          if (totalAmount === 5) {
            const currentDate = new Date();
            premiumRemainTime = currentDate.setMinutes(
              currentDate.getMinutes() + 1
            );
          } else if (totalAmount === 35) {
            const currentDate = new Date();
            premiumRemainTime = currentDate.setDate(currentDate.getDate() + 7);
          } else if (totalAmount === 150) {
            const currentDate = new Date();
            premiumRemainTime = currentDate.setDate(currentDate.getDate() + 30);
          }
          // now update user premium status
          const res = await axios.patch(`/admin/users/${user?.email}`, {
            isPremium: true,
            premiumTill: premiumRemainTime,
          });
          if (res.data.message) {
            toast.success(
              `Your are now premium user till ${new Date(
                premiumRemainTime
              ).toLocaleString()}`,
              { duration: 5000 }
            );
            navigate('/premium-articles');
          } else {
            toast.error('There was an error');
          }
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type='submit'
        className='bg-[#E45099] hover:bg-[#D23078] text-white active:bg-[#B6205E] py-3 px-6 text-lg my-10 rounded-lg transition cursor-pointer disabled:cursor-not-allowed disabled:bg-red-200'
        disabled={!stripe || !clientSecret}
      >
        {isLoading ? (
          <UseAnimations
            animation={loading}
            wrapperStyle={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        ) : (
          'Pay'
        )}
      </button>
      {transactionId && <p className='text-green-500'>{transactionId}</p>}
    </form>
  );
};
CheckoutForm.propTypes = {
  totalAmount: PropTypes.number,
};
export default CheckoutForm;
