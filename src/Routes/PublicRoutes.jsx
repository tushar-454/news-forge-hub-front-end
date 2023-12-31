import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import useAuth from '../Hook/useAuth';

const PublicRoutes = ({ children }) => {
  const { user, loading: isLoading } = useAuth();
  if (isLoading) {
    return (
      <UseAnimations
        animation={loading}
        wrapperStyle={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    );
  }
  if (user) {
    return <Navigate to={'/'} />;
  }
  return children;
};

PublicRoutes.propTypes = {
  children: PropTypes.node,
};

export default PublicRoutes;
