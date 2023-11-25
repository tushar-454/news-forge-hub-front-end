import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import useAuth from '../Hook/useAuth';

const PrivateRoutes = ({ children }) => {
  const { user, loading: isLoading } = useAuth();
  const { pathname } = useLocation();
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
    return <Navigate to={'/login'} state={pathname} />;
  }
  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
