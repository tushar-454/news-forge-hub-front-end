import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import useAuth from '../Hook/useAuth';

const PrivateRoutes = ({ children }) => {
  const { user, loading: isLoading } = useAuth();
  if (isLoading) {
    return (
      <p>
        <UseAnimations
          animation={loading}
          wrapperStyle={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      </p>
    );
  }
  if (!user) {
    return <Navigate to={'/login'} />;
  }
  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
