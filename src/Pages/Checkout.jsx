import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <Helmet>
        <title>Checkout | NewsForge Hub</title>
      </Helmet>
      <h1>this one is checkout page</h1>
    </div>
  );
};

export default Checkout;
